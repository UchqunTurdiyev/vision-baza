import { NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.INSTAGRAM_PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN;

// 1. Meta Webhook'ni tasdiqlash (GET)
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

// 2. Xabar kelganda javob qaytarish (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.object === 'instagram') {
      const entry = body.entry[0];
      const messaging = entry.messaging[0];

      if (messaging && (messaging.message || messaging.postback)) {
        const senderId = messaging.sender.id;
        // Xabar matni yoki tugma bosilgandagi qiymatni olamiz
        const messageText = messaging.message?.text || messaging.postback?.title || "";

        if (messageText) {
          await sendInstagramMessage(senderId, messageText);
        }
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

// 3. Instagram'ga javob yozish funksiyasi (Ukolova Varonkasi)
async function sendInstagramMessage(recipientId: string, text: string) {
  const url = `https://graph.facebook.com/v19.0/me/messages?access_token=${ACCESS_TOKEN}`;
  let messageData: any = {};
  const input = text.toLowerCase();

  // BOSQICH 1: Salomlashish va Obuna uchun rahmat
  if (input.includes('salom') || input.includes('assalomu alaykum') || input === 'start') {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Salom! Menga obuna bo'lganingiz uchun tashakkur. 😊\n\nSizga sovg'a sifatida o'zimning 'Marketing strategiyalari' kitobimni yubormoqchiman. Qabul qilasizmi?",
        quick_replies: [
          { content_type: "text", title: "Ha, yuboring ✅", payload: "SEND_PDF" },
          { content_type: "text", title: "Yo'q, rahmat", payload: "NO_THANKS" }
        ]
      }
    };
  } 
  
  // BOSQICH 2: PDF yuborish va Asosiy takliflar
  else if (input.includes('ha, yuboring') || input.includes('✅')) {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Marhamat, kitobingizni yuklab oling: 📚 https://vision-group.uz/kitob.pdf\n\nSizga yana qanday yordam bera olaman?",
        quick_replies: [
          { content_type: "text", title: "Target kursi 🎓", payload: "COURSE_INFO" },
          { content_type: "text", title: "Hamkorlik 🤝", payload: "COOPERATION" }
        ]
      }
    };
  }

  // BOSQICH 3: Kurs haqida ma'lumot
  else if (input.includes('target kursi') || input.includes('🎓')) {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Performance Marketing kursimizda 2025-yildagi tajribalarimni o'rgataman. To'liq ma'lumot bu yerda: vision-group.uz/target-kursi\n\nSavollaringiz bormi?",
        quick_replies: [
          { content_type: "text", title: "Hamkorlik 🤝", payload: "COOPERATION" },
          { content_type: "text", title: "Boshiga qaytish", payload: "START" }
        ]
      }
    };
  }

  // BOSQICH 4: Hamkorlik (Lid yig'ish)
  else if (input.includes('hamkorlik') || input.includes('🤝')) {
    messageData = {
      recipient: { id: recipientId },
      message: {
        text: "Siz bilan hamkorlik qilishdan xursandman! 🤝\n\nLoyihangiz haqida qisqacha yozing yoki telefon raqamingizni qoldiring, o'zim siz bilan bog'lanaman.",
      }
    };
  }

  // Standart javob (agar mantiqqa tushmasa)
  else {
    // Agar raqam yuborsa, uni konsolda ko'ramiz
    if (/\d+/.test(input)) {
        console.log(`LID QABUL QILINDI (Tel: ${input}) Kimdan: ${recipientId}`);
    }
    
    messageData = {
      recipient: { id: recipientId },
      message: { text: "Xabaringizni qabul qildim! Tez orada javob beraman. Ungacha 'start' deb yozib sovg'ani olishingiz mumkin." }
    };
  }

  // So'rovni Meta'ga yuboramiz
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData),
  });

  return res.json();
}