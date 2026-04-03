import { NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.INSTAGRAM_PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN;
// Telegram sozlamalari (Bularni Vercel-ga qo'shishni unutmang)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.object === 'instagram' && body.entry && body.entry[0].messaging) {
      const messaging = body.entry[0].messaging[0];
      const senderId = messaging.sender?.id;
      const messageText = messaging.message?.text || messaging.message?.quick_reply?.payload || "";

      if (senderId && messageText) {
        await sendVaronka(senderId, messageText);
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Webhook Asosiy Xato:', error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

async function sendVaronka(recipientId: string, text: string) {
  if (!ACCESS_TOKEN) {
    console.error("DIQQAT: ACCESS_TOKEN topilmadi!");
    return;
  }

  const url = `https://graph.facebook.com/v19.0/me/messages?access_token=${ACCESS_TOKEN}`;
  const input = text.toLowerCase().trim();
  let messageData: any = null;

  // 1. ASOSIY TRIGGERLAR
  if (input.includes('salom') || input.includes('assalomu alaykum') || input === 'target' || input === 'start') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Salom! Menga obuna bo'lganingiz uchun tashakkur! 😊\n\nSizga sovg'a sifatida 'Marketing strategiyalari' kitobimni yubormoqchiman. Qabul qilasizmi?",
        quick_replies: [
          { content_type: "text", title: "Ha, yuboring ✅", payload: "SEND_BOOK" },
          { content_type: "text", title: "Yo'q, rahmat", payload: "NO" }
        ]
      }
    };
  } 
  // 2. SOVG'A YUBORISH
  else if (input.includes('ha, yuboring') || input === 'send_book') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Marhamat! 📚 https://vision-group.uz/kitob.pdf\n\nSizga yana qanday yordam bera olaman?",
        quick_replies: [
          { content_type: "text", title: "Target kursi 🎓", payload: "COURSE" },
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" }
        ]
      }
    };
  } 
  // 3. KURS HAQIDA
  else if (input.includes('target kursi') || input === 'course') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Performance Marketing kursimiz haqida bu yerda: vision-group.uz/target-kursi\n\nSavollaringiz bormi?",
        quick_replies: [
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" },
          { content_type: "text", title: "Boshiga qaytish", payload: "START" }
        ]
      }
    };
  } 
  // 4. HAMKORLIK VA LID OLISH
  else if (input.includes('hamkorlik') || input === 'partner') {
    messageData = {
      recipient: { id: recipientId },
      message: { text: "Ajoyib! Loyihangiz haqida yozing yoki tel. raqamingizni qoldiring, o'zim bog'lanaman. 👇" }
    };
  } 
  // 5. AGAR MIJOZ RAQAM YOKI LOYIHA HAQIDA YOZSA (Telegramga yuborish)
  else {
    const logMessage = `📩 Yangi xabar (Lid bo'lishi mumkin):\n\nID: ${recipientId}\nXabar: ${text}`;
    await sendToTelegram(logMessage);
  }

  // META-GA XABAR YUBORISH
  if (messageData) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      });
      
      const resData = await response.json();
      console.log("META JAVOBI:", JSON.stringify(resData)); // Logs-da ko'rinadi
    } catch (e) {
      console.error("Meta-ga yuborishda xatolik:", e);
    }
  }
}

// TELEGRAMGA YUBORISH FUNKSIYASI
async function sendToTelegram(message: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
    });
  } catch (e) {
    console.error("Telegramga yuborishda xatolik:", e);
  }
}