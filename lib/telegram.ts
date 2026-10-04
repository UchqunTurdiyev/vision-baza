// Yangi lid tushganda Telegram botga xabar yuborish.
// ENV: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (bir nechta bo'lsa vergul bilan: "123,-100456")
// Xato bo'lsa ham lid saqlanishiga hech qanday ta'sir qilmaydi.

type LeadForTg = {
  fullName?: string;
  phone?: string;
  source?: string;
  businessType?: string;
  socialPage?: string;
  budget?: string;
  note?: string;
  email?: string;
  igUsername?: string;
};

const SOURCE_LABELS: Record<string, string> = {
  "target-xizmati": "Target xizmati",
  "target-kursi": "Target kursi",
  "lid-magnit": "Lid magnit",
  "instagram-dm": "Instagram DM",
};

function esc(v: string): string {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function notifyTelegramLead(lead: LeadForTg): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN || "8854092297:AAHOYeZ3bi82YnhYNVWTScDmXjNOsy3HahE";
  const chatIds = (process.env.TELEGRAM_CHAT_ID || "-5576325390")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) return;

  const source = lead.source || "";
  const lines: string[] = [
    "🔔 <b>Yangi lid!</b>",
    "",
    `👤 <b>Ism:</b> ${esc(lead.fullName || "-")}`,
    `📞 <b>Telefon:</b> ${esc(lead.phone || "-")}`,
    `📍 <b>Manba:</b> ${esc(SOURCE_LABELS[source] || source || "-")}`,
  ];
  if (lead.businessType) lines.push(`🏢 <b>Biznes turi:</b> ${esc(lead.businessType)}`);
  if (lead.socialPage) lines.push(`🌐 <b>Sahifa:</b> ${esc(lead.socialPage)}`);
  if (lead.budget) lines.push(`💰 <b>Byudjet:</b> ${esc(lead.budget)}`);
  if (lead.email) lines.push(`✉️ <b>Email:</b> ${esc(lead.email)}`);
  if (lead.igUsername) lines.push(`📸 <b>Instagram:</b> ${esc(lead.igUsername)}`);
  if (lead.note) lines.push(`📝 <b>Izoh:</b> ${esc(lead.note)}`);
  lines.push(
    "",
    `🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Samarkand" })}`
  );

  const text = lines.join("\n");

  await Promise.all(
    chatIds.map(async (chatId) => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 5000);
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (!res.ok) {
          console.error("Telegram sendMessage xato:", res.status, await res.text());
        }
      } catch (e) {
        console.error("Telegram notify xato:", e);
      }
    })
  );
}
