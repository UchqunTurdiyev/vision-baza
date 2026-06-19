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
    if (typeof body.email === "string") update.email = body.email.trim();
    if (typeof body.phone === "string" && body.phone.trim()) update.phone = body.phone.trim();
    // ✅ Meta/Instagram match maydonlarini operator qo'lda to'g'rilashi/qo'shishi uchun
    if (typeof body.pageScopedUserId === "string") update.pageScopedUserId = body.pageScopedUserId.trim();
    if (typeof body.igUsername === "string") update.igUsername = body.igUsername.trim();
    if (typeof body.fbLoginId === "string") update.fbLoginId = body.fbLoginId.trim();
    if (typeof body.pageId === "string") update.pageId = body.pageId.trim();

    // 2. Bazada yangilash va yangi ma'lumotni olish
    const updated = await TargetLeadModel.findByIdAndUpdate(id, update, { new: true }).lean() as any;
    if (!updated) return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });

    // 2.5. Instagram ID avtomatik moslashtirish — agar shu lead'da pageScopedUserId
    // bo'lmasa, bazadan BIR XIL telefon raqamli boshqa lead'ni (masalan, Instagram DM
    // orqali kelgan, source: "instagram-dm") qidirib, undagi Meta match maydonlarini
    // shu lead'ga ko'chiramiz. Operatordan hech narsa so'ralmaydi — bu butunlay avtomatik.
    let metaMatch = updated;
    if (body.status === "TO'LOV QILDI" && !updated.pageScopedUserId && updated.phone) {
      try {
        const igMatch = await TargetLeadModel.findOne({
          phone: updated.phone,
          pageScopedUserId: { $exists: true, $ne: "" },
          _id: { $ne: updated._id },
        }).lean() as any;

        if (igMatch) {
          metaMatch = {
            ...updated,
            pageScopedUserId: igMatch.pageScopedUserId,
            pageId: updated.pageId || igMatch.pageId,
            fbLoginId: updated.fbLoginId || igMatch.fbLoginId,
            igUsername: updated.igUsername || igMatch.igUsername,
          };
          console.log(
            `✅ CAPI: lead ${String(updated._id)} uchun Instagram ID avtomatik topildi ` +
              `(bir xil telefon: ${updated.phone}, manba lead: ${String(igMatch._id)}).`
          );
        }
      } catch (matchErr) {
        console.error("❌ Instagram avtomatik moslashtirish xato:", matchErr);
      }
    }

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

        // ✅ Instagram / Facebook id lari (hashlanmaydi) — metaMatch orqali, ya'ni
        // shu lead'da bo'lmasa, bir xil telefon raqamli Instagram lead'dan avtomatik olingan
        if (metaMatch.fbLoginId) user_data.fb_login_id = String(metaMatch.fbLoginId);
        const pageScopedUserId = metaMatch.pageScopedUserId || "";
        const pageId = metaMatch.pageId || process.env.FB_PAGE_ID || "";
        if (pageScopedUserId) {
          user_data.page_scoped_user_id = String(pageScopedUserId);
          if (pageId) user_data.page_id = String(pageId);
        }

        // ✅ Narx (value).
        // MUHIM: "budget" maydoni — Lead bosqichida (forma to'ldirilganda) saqlangan
        // QISMAN to'lov summasi (3 200 000 — bo'lib to'lashning bir qismi), bu Meta'ga
        // "Lead" eventi uchun yuboriladi. Lekin "TO'LOV QILDI" bo'lganda — bu mijoz kursni
        // TO'LIQ sotib oldi, demak Purchase qiymati har doim TO'LIQ kurs narxi bo'lishi kerak:
        // 6 400 000 so'm (target-kursi, target-k, web, target-capi — barchasi shu kursning
        // 4 xil sahifasi). Oldin bu yerda 1 470 000 noto'g'ri standart qiymat ishlatilgan edi.
        const FULL_COURSE_PRICE = 6400000;
        const SOURCE_DEFAULT_VALUE: Record<string, number> = {
          "target-kursi": FULL_COURSE_PRICE,
          "target-xizmati": 3200000,
          "lid-magnit": 0,
        };
        // target-kursi (ya'ni /target-kursi, /web, /target-k, /target-capi — barchasi shu
        // bitta kurs uchun forma) — har doim to'liq narx, budgetdagi qisman summani e'tiborga olmaymiz.
        const FORCE_FULL_PRICE_SOURCES = new Set(["target-kursi"]);
        const sourceKey = String(updated.source ?? "");

        const parsedBudget = parseFloat(updated.budget);
        const hasValidBudget = !Number.isNaN(parsedBudget) && parsedBudget > 0;
        const fallbackValue = SOURCE_DEFAULT_VALUE[sourceKey] ?? FULL_COURSE_PRICE;

        const purchaseValue = FORCE_FULL_PRICE_SOURCES.has(sourceKey)
          ? FULL_COURSE_PRICE
          : hasValidBudget
            ? parsedBudget
            : fallbackValue;

        if (!hasValidBudget && !FORCE_FULL_PRICE_SOURCES.has(sourceKey)) {
          console.warn(
            `⚠️ CAPI: lead ${String(updated._id)} da budget yo'q/noto'g'ri ("${updated.budget}"). ` +
              `Fallback qiymat ishlatildi: ${fallbackValue} UZS (source: "${sourceKey}"). ` +
              `Iltimos, CRM da budjetni to'ldirib qo'ying.`
          );
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
              value: purchaseValue,
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