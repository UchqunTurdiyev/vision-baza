// app/api/telegram-lead/route.ts
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName = "", phone = "", source = "", note = "" } = await req.json().catch(() => ({}));

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const threadId = process.env.TELEGRAM_THREAD_ID; // ixtiyoriy

    if (!token || !chatId) {
      return new Response("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID topilmadi.", { status: 500 });
    }

    const text =
      `<b>🆕 Yangi lead</b>\n` +
      `👤 <b>Ism:</b> ${escapeHtml(fullName)}\n` +
      `📞 <b>Telefon:</b> ${escapeHtml(phone)}\n` +
      (source ? `🔗 <b>Source:</b> ${escapeHtml(source)}\n` : "") +
      (note ? `🗒️ <b>Izoh:</b> ${escapeHtml(note)}\n` : "") +
      `⏱️ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ")}`;

    const payload: Record<string, any> = {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    };
    if (threadId) payload.message_thread_id = Number(threadId);

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!tg.ok) {
      const err = await tg.text().catch(() => "");
      return new Response(`Telegram xatosi: ${err}`, { status: 502 });
    }

    return new Response("ok", { status: 200 });
  } catch (e: any) {
    return new Response(e?.message || "Telegram route xatosi", { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
