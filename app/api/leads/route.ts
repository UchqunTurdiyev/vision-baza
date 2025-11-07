// app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { LeadModel, type ILead } from "@/models/Lead";

export const dynamic = "force-dynamic";

// Kichik util: qidiruv matnini regex uchun sanitizatsiya
function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}




export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const status = req.nextUrl.searchParams.get("status") ?? undefined;
    const qRaw = req.nextUrl.searchParams.get("q") ?? "";
    const q = qRaw.trim();
    const limitRaw = req.nextUrl.searchParams.get("limit");
    const limit = Math.min(Math.max(Number(limitRaw ?? 200) || 200, 1), 500); // 1..500

    const filter: Record<string, any> = {};
    if (status) filter.status = status;
    if (q) {
      const safe = escapeRegex(q);
      filter.$or = [
        { fullName: { $regex: safe, $options: "i" } },
        { phone: { $regex: safe } },
      ];
    }

    // Har bir lead uchun oxirgi kommentdan 1 ta bo‘lagini olamiz
    const rows = await LeadModel.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .select({
        fullName: 1,
        phone: 1,
        source: 1,
        status: 1,
        note: 1,
        comments: { $slice: -1 }, // faqat oxirgi komment
      })
      .lean<ILead>();

    // Frontend uchun barqaror id + preview matn
    const leads = rows.map((x) => ({
      ...x,
      id: String(x._id),
      lastCommentText:
        Array.isArray(x.comments) && x.comments.length > 0 ? x.comments[0].text : "",
    }));

    return NextResponse.json({ leads }, { status: 200 });
  } catch (e: any) {
    console.error("GET /api/leads error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json().catch(() => ({}));
    const { fullName, phone, source = "unknown", note = "" } = body ?? {};

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    // doimo "LID" status bilan yaratiladi (enum bilan mos)
    const created = await LeadModel.create({
      fullName,
      phone,
      source,
      note,
      status: "LID",
    });

    const lead = { ...created.toObject(), id: String(created._id) };
    return NextResponse.json({ lead }, { status: 201 });
  } catch (e: any) {
    console.error("POST /api/leads error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}

