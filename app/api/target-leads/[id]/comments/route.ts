import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";

type CommentItem = { text: string; createdAt?: Date | string };
type LeadCommentsLean = { comments?: CommentItem[] };

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Internal error";
  }
}

// /api/target-leads/:id/comments — ikkinchi oxirgi segment = id
function getId(req: NextRequest): string {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  // ... ["api","target-leads",":id","comments"]
  return parts.length >= 2 ? (parts[parts.length - 2] ?? "") : "";
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

    const lead = (await TargetLeadModel.findById(id)
      .select({ comments: 1 })
      .lean()) as LeadCommentsLean | null;

    if (!lead) {
       
      console.warn("GET comments => lead topilmadi, id:", id);
      return NextResponse.json({ comments: [] }, { status: 200 });
    }

    const comments = Array.isArray(lead.comments) ? lead.comments : [];
    return NextResponse.json({ comments }, { status: 200 });
  } catch (e: unknown) {
     
    console.error("GET /api/target-leads/[id]/comments error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}

// POST /api/target-leads/:id/comments
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const id = getId(req);
    if (!id) {
      return NextResponse.json({ error: "ID berilmagan" }, { status: 400 });
    }

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const text = typeof body.text === "string" ? body.text.trim() : "";

    if (!text) {
      return NextResponse.json(
        { error: "Komment matni bo‘sh bo‘lmasligi kerak" },
        { status: 400 }
      );
    }

    const lead = await TargetLeadModel.findById(id);
    if (!lead) {
      return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });
    }

    const existing = Array.isArray((lead as { comments?: unknown }).comments)
      ? ((lead as { comments: CommentItem[] }).comments ?? [])
      : [];

    const comment: CommentItem = { text, createdAt: new Date() };

    (lead as unknown as { comments: CommentItem[] }).comments = [
      ...existing,
      comment,
    ];

    await lead.save();

    return NextResponse.json({ comment }, { status: 201 });
  } catch (e: unknown) {
     
    console.error("POST /api/target-leads/[id]/comments error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
