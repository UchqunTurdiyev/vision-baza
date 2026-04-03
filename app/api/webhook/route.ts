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

    // Faqat Instagram'dan kelgan xabarlarni qayta ishlash
    if (body.object === 'instagram' && body.entry && body.entry[0].messaging) {
      const messaging = body.entry[0].messaging[0];
      const senderId = messaging.sender?.id;
      
      // Matn yoki Quick Reply orqali kelgan xabarni olish
      const messageText = messaging.message?.text || messaging.message?.quick_reply?.payload || "";

      if (senderId && messageText) {
        await sendVaronka(senderId, messageText);
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

async function sendVaronka(recipientId: string, text: string) {
  if (!ACCESS_TOKEN) {
    console.error("ACCESS_TOKEN topilmadi!");
    return;
  }

  const url = `https://graph.facebook.com/v19.0/me/messages?access_token=${ACCESS_TOKEN}`;
  const input = text.toLowerCase().trim();
  let messageData: any = null;

  // UKOLOVA VARONKASI MANTIQI
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
  } else if (input.includes('ha, yuboring') || input === 'send_book') {
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
  } else if (input.includes('target kursi') || input === 'course') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Performance Marketing kursimiz haqida bu yerda: vision-group.uz/target-kursi",
        quick_replies: [
          { content_type: "text", title: "Hamkorlik 🤝", payload: "PARTNER" },
          { content_type: "text", title: "Boshiga qaytish", payload: "START" }
        ]
      }
    };
  } else if (input.includes('hamkorlik') || input === 'partner') {
    messageData = {
      recipient: { id: recipientId },
      message: { text: "Ajoyib! Loyihangiz haqida yozing yoki tel. raqamingizni qoldiring, o'zim bog'lanaman. 👇" }
    };
  }

  if (messageData) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      });
    } catch (e) {
      console.error("Xabar yuborishda xatolik:", e);
    }
  }
}