// proxy.ts — CRM va lidlar API'sini himoyalash.
// Kirish: /login sahifasi → imzolangan cookie (lib/adminSession.ts).
// Zaxira: HTTP Basic Auth (skriptlar/curl uchun) ham qabul qilinadi.
// ENV: ADMIN_USER (ixtiyoriy, default "admin"), ADMIN_PASSWORD (majburiy).
// ADMIN_PASSWORD o'rnatilmagan bo'lsa — himoyalangan yo'llar umuman ochilmaydi (fail-closed).
//
// Ochiq qoladi: POST /api/target-leads (saytdagi formalar), /api/webhook (Meta), qolgan sahifalar.
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, adminCreds, safeEqual, verifySessionToken } from "@/lib/adminSession";

function isProtected(req: NextRequest): boolean {
  const { pathname } = req.nextUrl;
  if (pathname === "/target/new" || pathname.startsWith("/target/new/")) return true;
  if (pathname === "/api/target-leads") return req.method !== "POST";
  return pathname.startsWith("/api/target-leads/");
}

function basicAuthOk(req: NextRequest): boolean {
  const { user, password } = adminCreds();
  const header = req.headers.get("authorization") ?? "";
  if (!header.startsWith("Basic ")) return false;
  try {
    const [u, ...rest] = atob(header.slice(6)).split(":");
    return safeEqual(u, user) && safeEqual(rest.join(":"), password);
  } catch {
    return false;
  }
}

export async function proxy(req: NextRequest) {
  if (!isProtected(req)) return NextResponse.next();

  if (!adminCreds().password) {
    return new NextResponse("ADMIN_PASSWORD sozlanmagan — CRM yopiq.", { status: 503 });
  }

  if (await verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.next();
  if (basicAuthOk(req)) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Avtorizatsiya kerak" }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = `?next=${encodeURIComponent(req.nextUrl.pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/target/new/:path*", "/api/target-leads/:path*"],
};
