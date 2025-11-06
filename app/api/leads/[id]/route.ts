// app/api/leads/[id]/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDB } from "@/lib/mongodb";
import { LeadModel } from "@/models/Lead";
import { PIPELINE } from "@/constants/statuses";

const StatusSchema = z.object({ status: z.string().min(1) });

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const body = await req.json().catch(() => ({}));
    const parsed = StatusSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

    const next = parsed.data.status;
    if (!PIPELINE.includes(next as any)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await connectToDB();
    const updated = await LeadModel.findByIdAndUpdate(id, { status: next }, { new: true });
    if (!updated) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

    return NextResponse.json({ lead: { ...updated.toObject(), id: String(updated._id) } }, { status: 200 });
  } catch (e: any) {
    console.error("PATCH /api/leads/:id error:", e);
    return NextResponse.json({ error: e?.message ?? "Internal error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await connectToDB();
    await LeadModel.findByIdAndDelete(id);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("DELETE /api/leads/:id error:", e);
    return NextResponse.json({ error: e?.message ?? "Internal error" }, { status: 500 });
  }
}
