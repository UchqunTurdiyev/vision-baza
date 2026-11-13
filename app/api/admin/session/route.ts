// POST → kirish (login/parol tekshiruvi, cookie o'rnatish). DELETE → chiqish.
import { NextResponse, type NextRequest } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  adminCreds,
  createSessionToken,
  safeEqual,
} from "@/lib/adminSession";

// Oddiy himoya: bitta IP'dan 10 daqiqada 8 tadan ortiq noto'g'ri urinish bloklanadi.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_FAILS = 8;
const fails = new Map<string, { count: number; first: number }>();

function clientIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "local";
}

export async function POST(req: NextRequest) {
  const { user, password } = adminCreds();
  if (!password) {
    return NextResponse.json({ error: "Server sozlanmagan: ADMIN_PASSWORD yo'q." }, { status: 503 });
  }

  const ip = clientIp(req);
  const now = Date.now();
  const rec = fails.get(ip);
  if (rec && now - rec.first < WINDOW_MS && rec.count >= MAX_FAILS) {
    return NextResponse.json(
      { error: "Juda ko'p urinish. 10 daqiqadan keyin qayta urinib ko'ring." },
      { status: 429 },
    );
  }

  let body: { username?: unknown; password?: unknown } = {};
  try {
    body = await req.json();
  } catch {}
  const u = typeof body.username === "string" ? body.username.trim() : "";
  const p = typeof body.password === "string" ? body.password : "";

  if (!safeEqual(u, user) || !safeEqual(p, password)) {
    const cur = rec && now - rec.first < WINDOW_MS ? rec : { count: 0, first: now };
    cur.count += 1;
    fails.set(ip, cur);
    await new Promise((r) => setTimeout(r, 400)); // brute-force'ni sekinlatish
    return NextResponse.json({ error: "Login yoki parol noto'g'ri." }, { status: 401 });
  }

  fails.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
