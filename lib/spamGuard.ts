// Formalar uchun oddiy spam himoyasi.
// 1) Honeypot: odam ko'rmaydigan "website" maydoni — bot to'ldirsa, so'rov jim rad etiladi.
// 2) Rate limit: bitta IP'dan 10 daqiqada 5 tadan ko'p ariza qabul qilinmaydi.
//    Eslatma: serverless'da xotira har bir instansiyada alohida — bu to'liq emas, lekin
//    oddiy botlarning ommaviy yuborishini to'xtatadi.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function clientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return headers.get("x-real-ip") || "unknown";
}

export function isRateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

export function isHoneypotFilled(body: Record<string, unknown>): boolean {
  return typeof body.website === "string" && body.website.trim() !== "";
}
