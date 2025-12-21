"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Item({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      className={[
        "px-3 py-2 rounded-xl transition",
        active
          ? "bg-indigo-500/20 text-white border border-indigo-400/20"
          : "hover:bg-white/5 text-white/80 border border-transparent",
      ].join(" ")}
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 min-h-[calc(100vh-64px)] p-3 hidden md:block">
      <div className="text-xs uppercase mb-3 text-white/50">Menyu</div>
      <nav className="grid gap-1">
        <Item href="/">Umumiy ko‘rinish</Item>
        <Item href="/leads">Leads</Item>
        <Item href="/lid-magnit">Lid magnit</Item>
      </nav>
      <div className="mt-6 text-xs text-white/50">Sotuv tizimi • ISFT</div>
    </aside>
  );
}
