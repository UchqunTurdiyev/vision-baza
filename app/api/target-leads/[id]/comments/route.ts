import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";

// /api/target-leads/:id/comments — ikkinchi oxirgi segment = id
function getId(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  // ... ["api","target-leads",":id","comments"]
  if (parts.length >= 2) return parts[parts.length - 2];
  return undefined;
}

// GET /api/target-leads/:id/comments
export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const id = getId(req);
    if (!id) {
      console.error("GET comments => id yo‘q");
      return NextResponse.json({ comments: [] }, { status: 200 });
    }

    const lead = await TargetLeadModel.findById(id)
      .select({ comments: 1 })
      .lean();

    if (!lead) {
      console.warn("GET comments => lead topilmadi, id:", id);
      return NextResponse.json({ comments: [] }, { status: 200 });
    }

    const anyLead = lead as any;
    const comments = Array.isArray(anyLead.comments)
      ? anyLead.comments
      : [];

    return NextResponse.json({ comments }, { status: 200 });
  } catch (e: any) {
    console.error("GET /api/target-leads/[id]/comments error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}

// POST /api/target-leads/:id/comments
export async function POST(req: NextRequest) {
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
    const text = (body?.text || "").trim();

    if (!text) {
      return NextResponse.json(
        { error: "Komment matni bo‘sh bo‘lmasligi kerak" },
        { status: 400 }
      );
    }

    const lead = await TargetLeadModel.findById(id);
    if (!lead) {
      return NextResponse.json(
        { error: "Lead topilmadi" },
        { status: 404 }
      );
    }

    const current = Array.isArray((lead as any).comments)
      ? (lead as any).comments
      : [];

    const comment = { text, createdAt: new Date() };

    (lead as any).comments = [...current, comment];

    await lead.save();

    return NextResponse.json({ comment }, { status: 201 });
  } catch (e: any) {
    console.error("POST /api/target-leads/[id]/comments error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}
