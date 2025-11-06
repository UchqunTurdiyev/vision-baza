// app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { LeadModel } from "@/models/Lead";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const status = req.nextUrl.searchParams.get("status") ?? undefined;
    const q = req.nextUrl.searchParams.get("q") ?? undefined;

    const filter: any = {};
    if (status) filter.status = status;
    if (q) filter.$or = [
      { fullName: { $regex: q, $options: "i" } },
      { phone: { $regex: q } },
    ];

    const rows = await LeadModel.find(filter).sort({ createdAt: -1 }).limit(200).lean();
    // Frontendda barqaror ID bo‘lsin
    const leads = rows.map((x: any) => ({ ...x, id: String(x._id) }));

    return NextResponse.json({ leads }, { status: 200 });
  } catch (e: any) {
    console.error("GET /api/leads error:", e);
    return NextResponse.json({ error: e?.message ?? "Internal error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json().catch(() => ({}));
    const { fullName, phone, source = "unknown", note = "" } = body ?? {};

    if (!fullName || !phone) {
      return NextResponse.json({ error: "fullName va phone majburiy" }, { status: 400 });
    }

    // ✅ doimo LID bilan kiradi (enum bilan mos)
    const created = await LeadModel.create({ fullName, phone, source, note, status: "LID" });
    const lead = { ...created.toObject(), id: String(created._id) };

    return NextResponse.json({ lead }, { status: 201 });
  } catch (e: any) {
    console.error("POST /api/leads error:", e);
    return NextResponse.json({ error: e?.message ?? "Internal error" }, { status: 500 });
  }
}
