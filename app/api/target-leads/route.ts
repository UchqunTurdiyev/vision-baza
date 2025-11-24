import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";

// GET /api/target-leads  — ro‘yxat
export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    // xohlasangiz q, status, limit qo‘shib kengaytirasiz
    const rows = await TargetLeadModel.find({})
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
      .lean();

    const leads = (rows as any[]).map((x) => {
      const anyX = x as any;
      return {
        ...anyX,
        id: String(anyX._id),
        flagged:
          typeof anyX.flagged === "boolean" ? anyX.flagged : false,
        lastCommentText:
          Array.isArray(anyX.comments) && anyX.comments.length > 0
            ? anyX.comments[0].text
            : "",
      };
    });

    return NextResponse.json({ leads }, { status: 200 });
  } catch (e: any) {
    console.error("GET /api/target-leads error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}

// POST /api/target-leads  — forma yuborish (TargetLeadNewPage shu yerga uriladi)
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json().catch(() => ({}));

    const fullName = (body?.fullName || "").trim();
    const phone = (body?.phone || "").trim();
    const businessType = body?.businessType || "";
    const socialPage = body?.socialPage || body?.page || "";
    const budget = body?.budget || "";
    const comment = body?.comment || "";

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    const created = await TargetLeadModel.create({
      fullName,
      phone,
      source: "target-landing",
      status: "LID",
      note: comment,
      businessType,
      socialPage,
      budget,
    });

    const anyCreated = created.toObject() as any;

    return NextResponse.json(
      {
        lead: {
          ...anyCreated,
          id: String(anyCreated._id),
        },
      },
      { status: 201 }
    );
  } catch (e: any) {
    console.error("POST /api/target-leads error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}
