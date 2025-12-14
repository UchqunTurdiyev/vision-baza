import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Internal error";
  }
}

// POST /api/target-kurs-lead  — kurs lead DB'ga yoziladi (tashqi fetch YO‘Q)
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;

    const fullName = str(body.fullName);
    const phone = str(body.phone);

    const businessType = str(body.businessType);
    const socialPage = str(body.socialPage) || str(body.page);
    const budget = str(body.budget);

    // note yoki comment bo‘lsa olamiz
    const note = str(body.note) || str(body.comment);

    // ✅ bu route faqat kurs uchun: source doim target-kursi
    const source = "target-kursi";

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    const created = await TargetLeadModel.create({
      fullName,
      phone,
      source,
      status: "LID",
      note,
      businessType,
      socialPage,
      budget,
    });

    const createdObj = created.toObject() as Record<string, unknown> & { _id: unknown };

    return NextResponse.json(
      {
        lead: {
          ...createdObj,
          id: String(createdObj._id),
        },
      },
      { status: 201 }
    );
  } catch (e: unknown) {
     
    console.error("POST /api/target-kurs-lead error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
