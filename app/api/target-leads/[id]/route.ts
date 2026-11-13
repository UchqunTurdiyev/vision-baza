import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";
import { deletePasswordOk } from "@/lib/adminSession";
import { STATUS_PAID, STATUS_QUALIFIED, sendStatusEvent, type CapiResult } from "@/lib/metaCapi";

export const dynamic = "force-dynamic";

// Bazadan kelgan lead hujjati (lean) — CAPI uchun kerakli maydonlar
type LeadDoc = {
  _id: unknown;
  status?: string;
  source?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  fbp?: string;
  fbc?: string;
  fbLoginId?: string;
  pageScopedUserId?: string;
  pageId?: string;
  igUsername?: string;
  [key: string]: unknown;
};

// URL dan ID ni olish
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
    return NextResponse.json({ lead: { ...lead, id: String((lead as unknown as LeadDoc)._id) } });
  } catch {
    return NextResponse.json({ error: "Xato" }, { status: 500 });
  }
}

// PATCH — lead'ni yangilash. Status "O'QIYMAN" yoki "TO'LOV QILDI" ga O'TGANDA Meta'ga event yuboriladi.
export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const body = await req.json().catch(() => ({}));

    // 1. Yangilash obyektini yaratish
    const update: Record<string, unknown> = {};
    if (typeof body.status === "string") update.status = body.status;
    if (typeof body.flagged === "boolean") update.flagged = body.flagged;
    if (typeof body.note === "string") update.note = body.note;
    if (typeof body.budget === "string") update.budget = body.budget;
    if (typeof body.email === "string") update.email = body.email.trim();
    if (typeof body.phone === "string" && body.phone.trim()) update.phone = body.phone.trim();
    // Meta/Instagram match maydonlarini operator qo'lda to'g'rilashi/qo'shishi uchun
    if (typeof body.pageScopedUserId === "string") update.pageScopedUserId = body.pageScopedUserId.trim();
    if (typeof body.igUsername === "string") update.igUsername = body.igUsername.trim();
    if (typeof body.fbLoginId === "string") update.fbLoginId = body.fbLoginId.trim();
    if (typeof body.pageId === "string") update.pageId = body.pageId.trim();

    // 2. Yangilash: eski holatni ham olamiz — event faqat status HAQIQATAN o'zgarganda ketadi
    const before = (await TargetLeadModel.findByIdAndUpdate(id, update, { new: false }).lean()) as LeadDoc | null;
    if (!before) return NextResponse.json({ error: "Lead topilmadi" }, { status: 404 });
    const updated = { ...before, ...update } as LeadDoc;

    const newStatus = typeof body.status === "string" ? body.status : "";
    const statusChanged = newStatus && newStatus !== before.status;
    const needsCapi = statusChanged && (newStatus === STATUS_QUALIFIED || newStatus === STATUS_PAID);

    let capi: CapiResult | undefined;
    if (needsCapi) {
      // 3. Instagram ID avtomatik moslashtirish — shu lead'da pageScopedUserId bo'lmasa,
      // bir xil telefon raqamli boshqa lead'dan (masalan, Instagram DM) Meta maydonlarini olamiz.
      let metaMatch = updated;
      if (!updated.pageScopedUserId && updated.phone) {
        try {
          const igMatch = (await TargetLeadModel.findOne({
            phone: updated.phone,
            pageScopedUserId: { $exists: true, $ne: "" },
            _id: { $ne: updated._id },
          }).lean()) as LeadDoc | null;
          if (igMatch) {
            metaMatch = {
              ...updated,
              pageScopedUserId: igMatch.pageScopedUserId,
              pageId: updated.pageId || igMatch.pageId,
              fbLoginId: updated.fbLoginId || igMatch.fbLoginId,
              fbp: updated.fbp || igMatch.fbp,
              fbc: updated.fbc || igMatch.fbc,
            };
          }
        } catch (matchErr) {
          console.error("❌ Instagram avtomatik moslashtirish xato:", matchErr);
        }
      }

      // 4. Meta CAPI: O'QIYMAN → QualifiedLead, TO'LOV QILDI → Purchase ($360 = 4 400 000 so'm)
      capi = await sendStatusEvent(metaMatch, newStatus);
    }

    return NextResponse.json({ lead: { ...updated, id: String(updated._id) }, capi });
  } catch (e) {
    console.error("❌ GENERAL PATCH ERROR:", e);
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}

// DELETE METHOD
export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();
    const id = getId(req);
    const body = await req.json().catch(() => ({}));
    if (!deletePasswordOk(body.password)) {
      return NextResponse.json({ error: "Parol xato" }, { status: 401 });
    }
    await TargetLeadModel.findByIdAndDelete(id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Xato" }, { status: 500 });
  }
}
