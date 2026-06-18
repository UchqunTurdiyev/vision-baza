import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { TargetLeadModel } from "@/models/TargetLead";

const ACCESS_TOKEN = process.env.INSTAGRAM_PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN;
const PAGE_ID = process.env.FB_PAGE_ID || "";

// ===== Meta/Instagram webhook tasdiqlash (GET) =====
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// ===== Instagram DM xabarlarini qabul qilish (POST) =====
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.object === "instagram" && Array.isArray(body.entry)) {
      for (const entry of body.entry) {
        const pageId = String(entry.id || PAGE_ID || "");
        const messagingEvents = Array.isArray(entry.messaging) ? entry.messaging : [];

        for (const messaging of messagingEvents) {
          const senderId = messaging.sender?.id ? String(messaging.sender.id) : "";
          const messageText: string =
            messaging.message?.text || messaging.message?.quick_reply?.payload || "";

          if (!senderId) continue;

          // ✅ Har bir kelgan DM uchun — shu pageScopedUserId (Instagram ID) ni
          // CRM'ga bog'laymiz, agar xabarda telefon raqam bo'lsa lead yarating/yangilang.
          await captureInstagramContact(senderId, pageId, messageText);

          if (messageText) {
            await sendVaronka(senderId, messageText);
          }
        }
      }
    }

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Webhook Asosiy Xato:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

// ===== Telefon raqamni matndan ajratib olish =====
function extractPhone(text: string): string {
  if (!text) return "";
  const digits = text.replace(/\D/g, "");
  if (!digits) return "";

  // 998901234567 (12 raqam) yoki 901234567 (9 raqam, +998 qo'shiladi)
  if (digits.length === 12 && digits.startsWith("998")) return `+${digits}`;
  if (digits.length === 9) return `+998${digits}`;
  if (digits.length === 13 && digits.startsWith("998")) return `+${digits.slice(0, 12)}`;
  return "";
}

// ===== Instagram DM yuboruvchini CRM'ga bog'lash =====
async function captureInstagramContact(senderId: string, pageId: string, text: string) {
  try {
    await connectToDB();

    // Avval shu Instagram foydalanuvchisi bo'yicha mavjud lead bormi — tekshiramiz
    const existing = await TargetLeadModel.findOne({ pageScopedUserId: senderId });

    const phone = extractPhone(text);

    if (existing) {
      // Agar oldin yo'q bo'lgan telefon endi yozilgan bo'lsa — to'ldiramiz
      if (phone && !existing.phone) {
        existing.phone = phone;
        await existing.save();
      }
      return;
    }

    // Agar xabarda telefon raqam bo'lsa — yangi lead yaratamiz (Instagram ID bilan)
    if (phone) {
      await TargetLeadModel.create({
        fullName: "Instagram lead",
        phone,
        source: "instagram-dm",
        status: "LID",
        pageScopedUserId: senderId,
        pageId,
      });
    }
    // Agar telefon hali yo'q bo'lsa — hech narsa yaratmaymiz (operator keyinroq
    // CRM'da pageScopedUserId'ni qo'lda biriktirishi mumkin).
  } catch (e) {
    console.error("❌ captureInstagramContact xato:", e);
  }
}

async function sendVaronka(recipientId: string, text: string) {
  if (!ACCESS_TOKEN) {
    console.error("DIQQAT: ACCESS_TOKEN topilmadi!");
    return;
  }

  const url = `https://graph.facebook.com/v21.0/me/messages?access_token=${ACCESS_TOKEN}`;
  const input = text.toLowerCase().trim();
  let messageData: Record<string, unknown> | null = null;

  if (
    input.includes("salom") ||
    input.includes("assalomu alaykum") ||
    input === "target" ||
    input === "start"
  ) {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text:
          "Salom! Menga obuna bo'lganingiz uchun tashakkur! 😊\n\nSizga sovg'a sifatida 'Marketing strategiyalari' kitobimni yubormoqchiman. Qabul qilasizmi?",
        quick_replies: [
          { content_type: "text", title: "Ha, yuboring ✅", payload: "SEND_BOOK" },
          { content_type: "text", title: "Yo'q, rahmat", payload: "NO" },
        ],
      },
    };
  } else if (input.includes("ha, yuboring") || input === "send_book") {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Marhamat! 📚 https://vision-group.uz/kitob.pdf\n\nSizga yana qanday yordam bera olaman?",
        quick_replies: [
          { content_type: "text", title: "Target kursi 🎓", payload: "COURSE" },
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" },
        ],
      },
    };
  } else if (input.includes("target kursi") || input === "course") {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Performance Marketing kursimiz haqida bu yerda: vision-group.uz/target-kursi\n\nSavollaringiz bormi?",
        quick_replies: [
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" },
          { content_type: "text", title: "Boshiga qaytish", payload: "START" },
        ],
      },
    };
  } else {
    // Telefon yoki boshqa erkin matn — savol-javobsiz, faqat lead saqlanadi (yuqorida)
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) console.error("❌ Instagram send xato:", JSON.stringify(data));
  } catch (e) {
    console.error("❌ Instagram fetch xato:", e);
  }
}
