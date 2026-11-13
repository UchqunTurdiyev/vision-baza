// lib/adminSession.ts — CRM sessiyasi: imzolangan cookie (HMAC-SHA256, Web Crypto).
// Kalit ADMIN_PASSWORD dan olinadi: parol o'zgarsa, barcha eski sessiyalar avtomatik bekor bo'ladi.

export const SESSION_COOKIE = "vg_admin";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 kun (soniyada)

const enc = new TextEncoder();

async function hmac(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(`vg-crm-session:${secret}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function adminCreds() {
  return {
    user: process.env.ADMIN_USER || "admin",
    password: process.env.ADMIN_PASSWORD ?? "",
  };
}

// CRM'da lid o'chirish paroli (bitta va ko'plab o'chirish uchun) — ENV: TARGET_DELETE_PASSWORD.
// CRM'ning o'zi login bilan himoyalangan; bu — tasodifiy o'chirishdan ikkinchi to'siq.
export function deletePasswordOk(input: unknown): boolean {
  const expected = process.env.TARGET_DELETE_PASSWORD ?? "";
  return !!expected && typeof input === "string" && safeEqual(input, expected);
}

export async function createSessionToken(): Promise<string> {
  const { user, password } = adminCreds();
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload = `${user}.${exp}`;
  return `${payload}.${await hmac(payload, password)}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  const { user, password } = adminCreds();
  if (!token || !password) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot < 0) return false;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const [u, expStr] = payload.split(".");
  const exp = Number(expStr);
  if (u !== user || !Number.isFinite(exp) || exp < Date.now() / 1000) return false;
  return safeEqual(sig, await hmac(payload, password));
}
