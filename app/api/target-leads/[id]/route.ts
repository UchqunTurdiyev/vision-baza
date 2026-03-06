import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";
import { createHash } from "crypto";

export const dynamic = "force-dynamic";

// SHA256 shifrlash
function hashData(data: string): string {
  if (!data) return "";
  return createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

function getId(req: NextRequest): string {
  const parts = req.nextUrl.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

// GET METHOD
export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const lead = await TargetLeadModel.findById(id).lean();
    if (!lead) return NextResponse.json({ error: "Topilmadi" }, { status: 404 });
    return NextResponse.json({ lead: { ...lead, id: String((lead as any)._id) } });
  } catch (e) {
    return NextResponse.json({ error: "Xato" }, { status: 500 });
  }
}

// PATCH METHOD (IDEAL VARIANT)
export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const body = await req.json().catch(() => ({}));
    
    const update: any = {};
    if (typeof body.status === "string") update.status = body.status;
    if (typeof body.flagged === "boolean") update.flagged = body.flagged;
    if (typeof body.note === "string") update.note = body.note;
    if (typeof body.budget === "string") update.budget = body.budget;

    const updated = await TargetLeadModel.findByIdAndUpdate(id, update, { new: true }).lean() as any;
    if (!updated) return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });

    // --- FACEBOOK CAPI ---
    if (body.status === "TO'LOV QILDI") {
      try {
        const PIXEL_ID = process.env.FB_PIXEL_ID;
        const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

        if (PIXEL_ID && ACCESS_TOKEN) {
          const payload = {
            data: [{
              event_name: "Purchase",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "system_generated",
              user_data: {
                ph: [hashData(updated.phone || "")],
                em: [hashData(updated.email || "no-email@vision.uz")],
                fbp: updated.fbp || undefined,
                fbc: updated.fbc || undefined,
              },
              custom_data: {
                currency: "UZS",
                value: parseFloat(updated.budget) || 500000,
              },
            }],
          };

          await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          console.log("✅ CAPI SUCCESS");
        }
      } catch (err) {
        console.error("❌ CAPI ERROR", err);
      }
    }

    return NextResponse.json({ lead: { ...updated, id: String(updated._id) } });
  } catch (e) {
    return NextResponse.json({ error: "PATCH xatosi" }, { status: 500 });
  }
}

// DELETE METHOD
export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const body = await req.json().catch(() => ({}));
    if (body.password !== process.env.TARGET_DELETE_PASSWORD) {
      return NextResponse.json({ error: "Parol xato" }, { status: 401 });
    }
    await TargetLeadModel.findByIdAndDelete(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Xato" }, { status: 500 });
  }
}