"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/sotuv", label: "Sotuv Kursi" },
  { href: "/target-kursi", label: "Target kursi" },
  { href: "/target", label: "Target xizmati" },
  { href: "/lid-magnit", label: "Lid magnit" },
];

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Route o‘zgarsa menu yopilsin
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `inline-flex items-center text-lg justify-center font-semibold transition ${
      pathname === href ? "text-indigo-400" : "text-indigo-100 hover:text-indigo-400"
    }`;

  return (
    <header className="sticky top-0 z-10">
      {/* Top row */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-linear-to-b from-white/5 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-6 font-extrabold tracking-tight text-white">
          <Link className="text-2xl" href={"/"}>
            VISION <span className="text-indigo-400 text-2xl">Group</span>
          </Link>

          {/* Desktop nav */}
          <nav className="flex gap-4 pl-10 max-md:hidden">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link className="flex items-center gap-3 text-sm" href={"/"}>
          <Image
            src="/logo.png"
            alt="ISFT logo"
            width={60}
            height={60}
            priority
            className="rounded-lg"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Menu"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Link>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-sm transition-[max-height,opacity] duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3 flex flex-col gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-base font-semibold transition ${
                pathname === item.href
                  ? "bg-white/10 text-indigo-400"
                  : "text-indigo-100 hover:bg-white/5 hover:text-indigo-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
