import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";
import { createHash } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ============ HELPERS ============

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return "Internal error";
  }
}

// SHA256 shifrlash (Facebook CAPI PII talabi)
function hashData(data: string): string {
  if (!data) return "";
  return createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

// Telefon raqamni normalize qilish (+998901234567 → 998901234567)
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

// Ism-familiyani ajratish
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";
  return { firstName, lastName };
}

// Budget stringdan numeric value olish
// "1,470,000 so'm" → 1470000 | "1.5M" → 1500000 | "" → fallback
function parseBudgetToValue(budget: string, fallback: number = 1470000): number {
  if (!budget) return fallback;

  const clean = budget.toLowerCase().replace(/\s/g, "");

  // "1.5m" yoki "2m" formatini qo'llab-quvvatlash
  const mMatch = clean.match(/^([\d.]+)m$/);
  if (mMatch) {
    const num = parseFloat(mMatch[1]);
    if (!isNaN(num) && num > 0) return Math.round(num * 1_000_000);
  }

  // "1,470,000" yoki "1 470 000" yoki "1470000" formatlar
  const digits = clean.replace(/[^\d]/g, "");
  const num = parseFloat(digits);
  if (isNaN(num) || num <= 0) return fallback;

  return num;
}

// Client IP olish (Vercel, Cloudflare va boshqalarni hisobga olgan)
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "";
}

// ============ FACEBOOK CAPI ============

interface CapiUserData {
  ph?: string[];
  em?: string[];
  fn?: string[];
  ln?: string[];
  fbp?: string;
  fbc?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  external_id?: string[];
}

interface CapiCustomData {
  currency: string;
  value: number;
  content_name?: string;
  content_category?: string;
}

interface CapiPayload {
  data: Array<{
    event_name: string;
    event_time: number;
    event_id: string;
    action_source: string;
    event_source_url?: string;
    user_data: CapiUserData;
    custom_data: CapiCustomData;
  }>;
}

async function sendLeadToCapi(args: {
  leadId: string;
  fullName: string;
  phone: string;
  email?: string;
  value: number;
  fbp?: string;
  fbc?: string;
  ip?: string;
  userAgent?: string;
  sourceUrl?: string;
  eventId: string;
  businessType?: string;
}): Promise<void> {
  const PIXEL_ID = process.env.FB_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("⚠️ FB_PIXEL_ID yoki FB_ACCESS_TOKEN topilmadi — CAPI o'tkazib yuborildi");
    return;
  }

  const { firstName, lastName } = splitName(args.fullName);
  const cleanPhone = normalizePhone(args.phone);

  const userData: CapiUserData = {
    ph: cleanPhone ? [hashData(cleanPhone)] : undefined,
    em: args.email ? [hashData(args.email)] : undefined,
    fn: firstName ? [hashData(firstName)] : undefined,
    ln: lastName ? [hashData(lastName)] : undefined,
    fbp: args.fbp || undefined,
    fbc: args.fbc || undefined,
    client_ip_address: args.ip || undefined,
    client_user_agent: args.userAgent || undefined,
    external_id: [hashData(args.leadId)],
  };

  // undefined fieldlarni tozalash (Meta toza payload talab qiladi)
  Object.keys(userData).forEach((k) => {
    const key = k as keyof CapiUserData;
    if (userData[key] === undefined) delete userData[key];
  });

  const payload: CapiPayload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: args.eventId,
        action_source: "website",
        event_source_url: args.sourceUrl || "https://vision-group.uz/target-kursi",
        user_data: userData,
        custom_data: {
          currency: "UZS",
          value: args.value,
          content_name: "Target Kursi 5.0",
          content_category: args.businessType || "course",
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const resData = await response.json();

    if (!response.ok) {
      console.error("❌ CAPI Lead xato:", JSON.stringify(resData));
      return;
    }

    console.log("✅ CAPI Lead yuborildi:", JSON.stringify(resData));
  } catch (err) {
    console.error("❌ CAPI Lead fetch error:", err);
  }
}

// ============ POST HANDLER ============

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;

    // Asosiy maydonlar
    const fullName = str(body.fullName);
    const phone = str(body.phone);
    const email = str(body.email);

    // Qo'shimcha maydonlar
    const businessType = str(body.businessType);
    const socialPage = str(body.socialPage) || str(body.page);
    const budget = str(body.budget);
    const note = str(body.note) || str(body.comment);

    // Facebook Pixel parametrlari (frontend cookielaridan)
    const fbp = str(body.fbp);
    const fbc = str(body.fbc);
    const eventId = str(body.eventId);

    // Request metadata
    const userAgent = req.headers.get("user-agent") || "";
    const sourceUrl = req.headers.get("referer") || "";
    const ip = getClientIp(req);

    const source = "target-kursi" as const;

    // Validatsiya
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "fullName va phone majburiy" },
        { status: 400 }
      );
    }

    // 1. DB ga saqlash
    const created = await TargetLeadModel.create({
      fullName,
      phone,
      email: email || undefined,
      source,
      status: "LID",
      note,
      businessType,
      socialPage,
      budget,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
    });

    const createdObj = created.toObject() as Record<string, unknown> & { _id: unknown };
    const leadId = String(createdObj._id);

    // 2. Facebook CAPI Lead event (xato bo'lsa ham javobni bloklamaydi)
    const value = parseBudgetToValue(budget);
    const finalEventId = eventId || leadId; // dedup uchun frontend Pixel bilan bir xil bo'lishi shart

    // Fire-and-await — CAPI javobi tez (200-500ms), kutish xavfsiz
    await sendLeadToCapi({
      leadId,
      fullName,
      phone,
      email,
      value,
      fbp,
      fbc,
      ip,
      userAgent,
      sourceUrl,
      eventId: finalEventId,
      businessType,
    });

    // 3. Javob
    return NextResponse.json(
      {
        lead: {
          ...createdObj,
          id: leadId,
        },
        eventId: finalEventId, // frontend Pixel uchun (agar hali yubormagan bo'lsa)
      },
      { status: 201 }
    );
  } catch (e: unknown) {
    console.error("POST /api/target-kurs-lead error:", e);
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}