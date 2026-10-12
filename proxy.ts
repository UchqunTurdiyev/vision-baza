// proxy.ts — CRM va lidlar API'sini parol bilan himoyalash (HTTP Basic Auth).
// ENV: ADMIN_USER (ixtiyoriy, default "admin"), ADMIN_PASSWORD (majburiy).
// ADMIN_PASSWORD o'rnatilmagan bo'lsa — himoyalangan yo'llar umuman ochilmaydi (fail-closed).
//
// Ochiq qoladi: POST /api/target-leads (saytdagi formalar), /api/webhook (Meta), qolgan sahifalar.
import { NextResponse, type NextRequest } from "next/server";

function isProtected(req: NextRequest): boolean {
  const { pathname } = req.nextUrl;
  if (pathname === "/target/new" || pathname.startsWith("/target/new/")) return true;
  if (pathname === "/api/target-leads") return req.method !== "POST";
  return pathname.startsWith("/api/target-leads/");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function proxy(req: NextRequest) {
  if (!isProtected(req)) return NextResponse.next();

  const password = process.env.ADMIN_PASSWORD ?? "";
  const user = process.env.ADMIN_USER || "admin";
  if (!password) {
    return new NextResponse("ADMIN_PASSWORD sozlanmagan — CRM yopiq.", { status: 503 });
  }

  const header = req.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const [u, ...rest] = atob(header.slice(6)).split(":");
      if (safeEqual(u, user) && safeEqual(rest.join(":"), password)) return NextResponse.next();
    } catch {
      // noto'g'ri base64 — pastda 401
    }
  }

  return new NextResponse("Kirish uchun login va parol kerak.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Vision Group CRM", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/target/new/:path*", "/api/target-leads/:path*"],
};
