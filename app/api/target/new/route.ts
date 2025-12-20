// app/api/target/new/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { LeadModel } from "@/models/Lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type UnknownRecord = Record<string, unknown>;

function toRecord(v: unknown): UnknownRecord {
  return v && typeof v === "object" ? (v as UnknownRecord) : {};
}

function getString(obj: unknown, key: string): string {
  const rec = toRecord(obj);
  const val = rec[key];
  return typeof val === "string" ? val.trim() : "";
}

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  const rec = toRecord(e);
  const msg = rec["message"];
  return typeof msg === "string" ? msg : "Internal error";
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body: unknown = await req.json().catch(() => ({}));

    const fullName = getString(body, "fullName");
    const phone = getString(body, "phone");

    // ✅ incomingSource ni faqat tekshirish/debug uchun olib qo'yamiz (xohlasangiz o'chirib yuborishingiz mumkin)
    const incomingSource = getString(body, "source");

    // ✅ MUHIM: bu endpoint uchun source doim "lid-magnit"
    const source = "lid-magnit" as const;

    const note = getString(body, "note") || "";

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    const created = await LeadModel.create({
      fullName,
      phone,
      source, // ✅ doim lid-magnit
      note: incomingSource ? `${note}${note ? " | " : ""}incomingSource:${incomingSource}` : note,
      status: "LID",
      service: "course",
    });

    const lead = { ...created.toObject(), id: String(created._id) };
    return NextResponse.json({ lead }, { status: 201 });
  } catch (e: unknown) {
    console.error("POST /api/target/new error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
