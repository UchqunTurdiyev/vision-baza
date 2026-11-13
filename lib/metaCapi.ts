// lib/metaCapi.ts — CRM bosqichlarini Meta Conversions API (CAPI) ga yuborish.
//
// "O'QIYMAN"     → QualifiedLead (sifatli lid)
// "TO'LOV QILDI" → Purchase (sotuv), qiymati: $360 (= 4 400 000 so'm)
//
// ENV: FB_PIXEL_ID, FB_ACCESS_TOKEN (majburiy), FB_PAGE_ID (ixtiyoriy).
import { createHash } from "crypto";

export const STATUS_QUALIFIED = "O'QIYMAN";
export const STATUS_PAID = "TO'LOV QILDI";

// Kurs narxi. Meta'ga dollarda yuboriladi — reklama kabineti hisobotida aynan $360 ko'rinishi uchun.
export const COURSE_PRICE_UZS = 4_400_000;
export const COURSE_PRICE_USD = 360;

export type CapiLead = {
  _id: unknown;
  phone?: string;
  email?: string;
  fullName?: string;
  source?: string;
  fbp?: string;
  fbc?: string;
  fbLoginId?: string;
  pageScopedUserId?: string;
  pageId?: string;
};

function sha256(v: string): string {
  return createHash("sha256").update(v.trim().toLowerCase()).digest("hex");
}

function buildUserData(lead: CapiLead): Record<string, unknown> {
  const ud: Record<string, unknown> = { external_id: [sha256(String(lead._id))] };

  const phone = String(lead.phone ?? "").replace(/\D/g, "");
  if (phone) ud.ph = [sha256(phone)];
  if (lead.email && lead.email.includes("@")) ud.em = [sha256(lead.email)];

  const firstName = String(lead.fullName ?? "").trim().split(/\s+/)[0];
  if (firstName) ud.fn = [sha256(firstName)];

  if (lead.fbp) ud.fbp = lead.fbp;
  if (lead.fbc) ud.fbc = lead.fbc;
  if (lead.fbLoginId) ud.fb_login_id = String(lead.fbLoginId);

  const pageId = lead.pageId || process.env.FB_PAGE_ID || "";
  if (lead.pageScopedUserId) {
    ud.page_scoped_user_id = String(lead.pageScopedUserId);
    if (pageId) ud.page_id = String(pageId);
  }
  ud.country = [sha256("uz")];
  return ud;
}

export type CapiResult = { sent: boolean; event?: string; error?: string; response?: unknown };

/** Status o'zgarganda kerakli eventni yuboradi. Boshqa statuslar uchun hech narsa qilmaydi. */
export async function sendStatusEvent(lead: CapiLead, status: string): Promise<CapiResult> {
  let event: Record<string, unknown>;
  const id = String(lead._id);

  if (status === STATUS_QUALIFIED) {
    event = {
      event_name: "QualifiedLead",
      event_id: `qualified_${id}`, // barqaror id — qayta yuborilsa Meta dublikat sanamaydi
      custom_data: { lead_status: STATUS_QUALIFIED, content_name: "Target kursi" },
    };
  } else if (status === STATUS_PAID) {
    event = {
      event_name: "Purchase",
      event_id: `purchase_${id}`,
      custom_data: {
        currency: "USD",
        value: COURSE_PRICE_USD,
        value_uzs: COURSE_PRICE_UZS, // ma'lumot uchun
        content_name: "Target kursi",
        content_type: "product",
      },
    };
  } else {
    return { sent: false };
  }

  const PIXEL_ID = process.env.FB_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error("❌ CAPI: FB_PIXEL_ID yoki FB_ACCESS_TOKEN sozlanmagan.");
    return { sent: false, event: String(event.event_name), error: "FB_PIXEL_ID/FB_ACCESS_TOKEN yo'q" };
  }

  const payload: Record<string, unknown> = {
    data: [
      {
        ...event,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "system_generated",
        user_data: buildUserData(lead),
      },
    ],
  };
  if (process.env.FB_TEST_EVENT_CODE) payload.test_event_code = process.env.FB_TEST_EVENT_CODE;

  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ACCESS_TOKEN}` },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      console.error(`❌ CAPI ${event.event_name} xato:`, JSON.stringify(data));
      return { sent: false, event: String(event.event_name), error: `HTTP ${res.status}`, response: data };
    }
    console.log(`✅ CAPI ${event.event_name} (lead ${id}):`, JSON.stringify(data));
    return { sent: true, event: String(event.event_name), response: data };
  } catch (e) {
    console.error(`❌ CAPI ${event.event_name} fetch xato:`, e);
    return { sent: false, event: String(event.event_name), error: String(e) };
  }
}
