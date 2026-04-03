import { NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.INSTAGRAM_PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN;

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

    if (body.object === 'instagram') {
      const messaging = body.entry[0].messaging[0];
      const senderId = messaging.sender.id;
      
      // Xabar matni yoki tugma bosilishi (Quick Reply)
      const messageText = messaging.message?.text || messaging.message?.quick_reply?.payload || "";

      if (messageText) {
        await sendVaronka(senderId, messageText);
      }
    }
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}

async function sendVaronka(recipientId: string, text: string) {
  const url = `https://graph.facebook.com/v19.0/me/messages?access_token=${ACCESS_TOKEN}`;
  const input = text.toLowerCase().trim();
  let messageData: any = null;

  // 1. ASOSIY TRIGGER (Mijoz 'target' yoki 'salom' deb yozsa)
  if (input === 'target' || input === 'salom' || input === 'start') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Salom! Menga obuna bo'lganingiz uchun tashakkur! 😊\n\nSizga va'da qilingan 'Targeting sirlari' kitobini yubormoqchiman. Qabul qilasizmi?",
        quick_replies: [
          { content_type: "text", title: "Ha, yuboring ✅", payload: "SEND_BOOK" },
          { content_type: "text", title: "Yo'q, rahmat", payload: "NO" }
        ]
      }
    };
  }

  // 2. SOVG'ANI YUBORISH
  else if (input.includes('ha, yuboring') || input === 'send_book') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Marhamat! 📚 https://vision-group.uz/kitob.pdf\n\nSizga yana qanday yordam bera olaman?",
        quick_replies: [
          { content_type: "text", title: "Kurs haqida 🎓", payload: "COURSE" },
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" }
        ]
      }
    };
  }

  // 3. KURS HAQIDA
  else if (input.includes('kurs haqida') || input === 'course') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Performance Marketing kursimizda 2025-yildagi $80,000 budjet tajribamni o'rgataman. To'liq ma'lumot: vision-group.uz/target-kursi",
        quick_replies: [
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" },
          { content_type: "text", title: "Menyu", payload: "START" }
        ]
      }
    };
  }

  // 4. HAMKORLIK (Lid olish)
  else if (input.includes('hamkorlik') || input === 'partner') {
    messageData = {
      recipient: { id: recipientId },
      message: { text: "Ajoyib! Loyihangiz haqida yozing yoki tel. raqamingizni qoldiring, o'zim bog'lanaman. 👇" }
    };
  }

  if (messageData) {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    });
  }
}