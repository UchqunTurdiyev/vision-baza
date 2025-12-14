import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type CommentLean = { text?: string };

type LeadLean = {
  _id: unknown;
  fullName?: string;
  phone?: string;
  source?: string;
  status?: string;
  note?: string;
  createdAt?: string | Date;
  flagged?: boolean;
  businessType?: string;
  socialPage?: string;
  budget?: string;
  comments?: CommentLean[];
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

// GET /api/target-leads  — ro‘yxat
export async function GET() {
  try {
    await connectToDB();

    const rows = (await TargetLeadModel.find({})
      .sort({ createdAt: -1 })
      .select({
        fullName: 1,
        phone: 1,
        source: 1,
        status: 1,
        note: 1,
        createdAt: 1,
        flagged: 1,
        businessType: 1,
        socialPage: 1,
        budget: 1,
        comments: { $slice: -1 },
      })
      .lean()) as LeadLean[];

    const leads = rows.map((row) => ({
      ...row,
      id: String(row._id),
      flagged: typeof row.flagged === "boolean" ? row.flagged : false,
      lastCommentText:
        Array.isArray(row.comments) && row.comments.length > 0
          ? String(row.comments[0]?.text ?? "")
          : "",
    }));

    return NextResponse.json({ leads }, { status: 200 });
  } catch (e: unknown) {
     
    console.error("GET /api/target-leads error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}

// POST /api/target-leads  — forma yuborish
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;

    const fullName =
      typeof body.fullName === "string" ? body.fullName.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    const businessType =
      typeof body.businessType === "string" ? body.businessType.trim() : "";

    const socialPage =
      typeof body.socialPage === "string"
        ? body.socialPage.trim()
        : typeof body.page === "string"
          ? body.page.trim()
          : "";

    const budget = typeof body.budget === "string" ? body.budget.trim() : "";

    // ✅ Source: faqat 2 xil qiymat
    const rawSource = typeof body.source === "string" ? body.source.trim() : "";
    const source =
      rawSource === "target-xizmati" || rawSource === "target-kursi"
        ? rawSource
        : "target-xizmati"; // default

    // ✅ Note: yangi (body.note) yoki eski (body.comment)
    const note =
      typeof body.note === "string" && body.note.trim()
        ? body.note.trim()
        : typeof body.comment === "string"
          ? body.comment.trim()
          : "";

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    const created = await TargetLeadModel.create({
      fullName,
      phone,
      source, // ✅ target-xizmati / target-kursi
      status: "LID",
      note,
      businessType,
      socialPage,
      budget,
    });

    const createdObj = created.toObject() as Record<string, unknown> & {
      _id: unknown;
    };

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
     
    console.error("POST /api/target-leads error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
