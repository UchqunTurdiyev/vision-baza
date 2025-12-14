import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";

type LeadLean = {
  _id: unknown;
  [key: string]: unknown;
};

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Internal error";
  }
}

// URL dan id ni olish
function getId(req: NextRequest): string {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  // .../api/target-leads/:id
  return parts[parts.length - 1] ?? "";
}

// GET /api/target-leads/:id  (ixtiyoriy, debug uchun foydali)
export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const id = getId(req);
    if (!id) {
      return NextResponse.json({ error: "ID berilmagan" }, { status: 400 });
    }

    const lead = (await TargetLeadModel.findById(id).lean()) as LeadLean | null;
    if (!lead) {
      return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });
    }

    return NextResponse.json(
      {
        lead: {
          ...lead,
          id: String(lead._id),
        },
      },
      { status: 200 }
    );
  } catch (e: unknown) {
     
    console.error("GET /api/target-leads/[id] error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}

// PATCH /api/target-leads/:id  — flag va statusni yangilash
export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();

    const id = getId(req);
    if (!id) {
      return NextResponse.json({ error: "ID berilmagan" }, { status: 400 });
    }

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const update: Record<string, unknown> = {};

    if (typeof body.status === "string") update.status = body.status;
    if (typeof body.flagged === "boolean") update.flagged = body.flagged;
    if (typeof body.note === "string") update.note = body.note;
    if (typeof body.source === "string") update.source = body.source;
    if (typeof body.businessType === "string")
      update.businessType = body.businessType;
    if (typeof body.socialPage === "string")
      update.socialPage = body.socialPage;
    if (typeof body.budget === "string") update.budget = body.budget;

    if (Object.keys(update).length === 0) {
      return NextResponse.json(
        { error: "Yangilash uchun maydon yo‘q" },
        { status: 400 }
      );
    }

    const updated = (await TargetLeadModel.findByIdAndUpdate(id, update, {
      new: true,
    }).lean()) as LeadLean | null;

    if (!updated) {
      return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });
    }

    return NextResponse.json(
      {
        lead: {
          ...updated,
          id: String(updated._id),
        },
      },
      { status: 200 }
    );
  } catch (e: unknown) {
     
    console.error("PATCH /api/target-leads/[id] error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}

// DELETE /api/target-leads/:id  — parol bilan o‘chirish
export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();

    const id = getId(req);
    if (!id) {
      return NextResponse.json({ error: "ID berilmagan" }, { status: 400 });
    }

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const password = typeof body.password === "string" ? body.password : "";

    const serverPassword = process.env.TARGET_DELETE_PASSWORD ?? "";
    if (!serverPassword) {
      return NextResponse.json(
        { error: "Server paroli sozlanmagan" },
        { status: 500 }
      );
    }

    if (!password || password !== serverPassword) {
      return NextResponse.json({ error: "Parol noto‘g‘ri" }, { status: 401 });
    }

    const deleted = (await TargetLeadModel.findByIdAndDelete(id).lean()) as
      | LeadLean
      | null;

    if (!deleted) {
      return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: unknown) {
     
    console.error("DELETE /api/target-leads/[id] error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
