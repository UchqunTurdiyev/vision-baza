import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";
import { createHash } from "crypto";

export const dynamic = "force-dynamic";



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

// --- YORDAMCHI FUNKSIYALAR ---

// SHA256 shifrlash (Facebook CAPI talabi)
function hashData(data: string): string {
  if (!data) return "";
  return createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

// URL dan ID ni olish
function getId(req: NextRequest): string {
  const parts = req.nextUrl.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

// --- ASOSIY PATCH FUNKSIYASI ---
export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const body = await req.json().catch(() => ({}));
    
    // 1. Yangilash obyektini yaratish
    const update: any = {};
    if (typeof body.status === "string") update.status = body.status;
    if (typeof body.flagged === "boolean") update.flagged = body.flagged;
    if (typeof body.note === "string") update.note = body.note;
    if (typeof body.budget === "string") update.budget = body.budget;

    // 2. Bazada yangilash va yangi ma'lumotni olish
    const updated = await TargetLeadModel.findByIdAndUpdate(id, update, { new: true }).lean() as any;
    if (!updated) return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });

    // 3. Facebook CAPI (Faqat "TO'LOV QILDI" bo'lganda)
    if (body.status === "TO'LOV QILDI") {
      const PIXEL_ID = process.env.FB_PIXEL_ID;
      const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

      if (PIXEL_ID && ACCESS_TOKEN) {
        // ✅ user_data ni dinamik quramiz — faqat mavjud (bo'sh bo'lmagan) maydonlar yuboriladi
        const user_data: Record<string, unknown> = {
          // external_id — har doim mavjud (bazadagi lead id, hashlangan)
          external_id: [hashData(String(updated._id))],
        };

        // Telefon (hashlangan)
        const phoneDigits = updated.phone ? String(updated.phone).replace(/\D/g, "") : "";
        if (phoneDigits) user_data.ph = [hashData(phoneDigits)];

        // Email (hashlangan) — faqat haqiqiy email bo'lsa
        if (updated.email && String(updated.email).includes("@")) {
          user_data.em = [hashData(String(updated.email))];
        }

        // Browser cookie identifikatorlari (hashlanmaydi)
        if (updated.fbp) user_data.fbp = updated.fbp;
        if (updated.fbc) user_data.fbc = updated.fbc;

        // ✅ Instagram / Facebook id lari (hashlanmaydi)
        if (updated.fbLoginId) user_data.fb_login_id = String(updated.fbLoginId);
        const pageScopedUserId = updated.pageScopedUserId || "";
        const pageId = updated.pageId || process.env.FB_PAGE_ID || "";
        if (pageScopedUserId) {
          user_data.page_scoped_user_id = String(pageScopedUserId);
          if (pageId) user_data.page_id = String(pageId);
        }

        const payload = {
          data: [{
            event_name: "Purchase",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "system_generated",
            event_id: `purchase_${String(updated._id)}`, // dedup uchun barqaror id
            user_data,
            custom_data: {
              currency: "UZS",
              value: parseFloat(updated.budget) || 1470000,
            },
          }],
        };

        try {
        // route.ts ichidagi fetch qismi
const response = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

          const resData = await response.json();
          console.log("✅ CAPI RESPONSE:", JSON.stringify(resData));
        } catch (fetchErr) {
          console.error("❌ FETCH ERROR:", fetchErr);
        }
      } else {
        console.error("❌ PIXEL_ID yoki ACCESS_TOKEN topilmadi!");
      }
    }

    return NextResponse.json({ lead: { ...updated, id: String(updated._id) } });
  } catch (e) {
    console.error("❌ GENERAL PATCH ERROR:", e);
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}

// GET va DELETE funksiyalaringizni pastdan davom ettirishingiz mumkin...

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