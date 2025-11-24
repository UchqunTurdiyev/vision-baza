import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";

// URL dan id ni olish
function getId(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  // .../api/target-leads/:id
  return parts[parts.length - 1];
}

// GET /api/target-leads/:id  (ixtiyoriy, debug uchun foydali)
export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    if (!id) {
      return NextResponse.json(
        { error: "ID berilmagan" },
        { status: 400 }
      );
    }

    const lead = await TargetLeadModel.findById(id).lean();
    if (!lead) {
      return NextResponse.json(
        { error: "Lead topilmadi" },
        { status: 404 }
      );
    }

    const anyLead = lead as any;

    return NextResponse.json(
      {
        lead: {
          ...anyLead,
          id: String(anyLead._id),
        },
      },
      { status: 200 }
    );
  } catch (e: any) {
    console.error("GET /api/target-leads/[id] error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}

// PATCH /api/target-leads/:id  — flag va statusni yangilash
export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    if (!id) {
      return NextResponse.json(
        { error: "ID berilmagan" },
        { status: 400 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const update: Record<string, any> = {};

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

    const updated = await TargetLeadModel.findByIdAndUpdate(id, update, {
      new: true,
    }).lean();

    if (!updated) {
      return NextResponse.json(
        { error: "Lead topilmadi" },
        { status: 404 }
      );
    }

    const anyUpdated = updated as any;

    return NextResponse.json(
      {
        lead: {
          ...anyUpdated,
          id: String(anyUpdated._id),
        },
      },
      { status: 200 }
    );
  } catch (e: any) {
    console.error("PATCH /api/target-leads/[id] error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}



// ... GET va PATCH allaqachon bor bo‘lishi kerak

export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();

    // URL dan id ni olish: /api/target-leads/:id
    const { pathname } = req.nextUrl;
    const parts = pathname.split("/").filter(Boolean);
    const id = parts[parts.length - 1];

    if (!id) {
      return NextResponse.json(
        { error: "ID berilmagan" },
        { status: 400 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const password = body?.password;
    const serverPassword = process.env.TARGET_DELETE_PASSWORD;

    if (!serverPassword) {
      return NextResponse.json(
        { error: "Server paroli sozlanmagan" },
        { status: 500 }
      );
    }

    if (!password || password !== serverPassword) {
      return NextResponse.json(
        { error: "Parol noto‘g‘ri" },
        { status: 401 }
      );
    }

    const deleted = await TargetLeadModel.findByIdAndDelete(id).lean();

    if (!deleted) {
      return NextResponse.json(
        { error: "Lead topilmadi" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("DELETE /api/target-leads/[id] error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}
