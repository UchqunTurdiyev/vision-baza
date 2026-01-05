import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as unknown));
    const ids: string[] = Array.isArray(body?.ids) ? body.ids : [];
    const password: string = typeof body?.password === "string" ? body.password : "";

    const serverPassword = process.env.TARGET_DELETE_PASSWORD ?? "";
    if (!serverPassword) {
      return NextResponse.json({ error: "Server paroli sozlanmagan" }, { status: 500 });
    }

    if (!password || password !== serverPassword) {
      return NextResponse.json({ error: "Parol noto‘g‘ri" }, { status: 401 });
    }

    if (ids.length === 0) {
      return NextResponse.json({ error: "IDs bo‘sh" }, { status: 400 });
    }

    const validObjectIds = ids
      .filter((id) => mongoose.Types.ObjectId.isValid(id))
      .map((id) => new mongoose.Types.ObjectId(id));

    if (validObjectIds.length === 0) {
      return NextResponse.json({ error: "Valid ID topilmadi" }, { status: 400 });
    }

    await connectToDB();

    const result = await TargetLeadModel.deleteMany({
      _id: { $in: validObjectIds },
    });

    return NextResponse.json({
      ok: true,
      deletedCount: result.deletedCount ?? 0,
    });
  } catch (e) {
    console.error("POST /api/target-leads/bulk-delete error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
