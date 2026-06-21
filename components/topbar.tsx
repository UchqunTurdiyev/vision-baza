"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// "Target kursi" — bir nechta sahifani o'z ichiga olgan dropdown.
// Default ko'rinish: "Target kursi" (/target-kursi).
const TARGET_DROPDOWN = [
  { href: "/", label: "Performance Marketing" },
  { href: "/target-kursi", label: "Target kursi" },
  { href: "/web", label: "Target kursi (web)" },
];
const NAV = [
  // { href: "/sotuv", label: "Sotuv Kursi" },
  { href: "/target", label: "Target xizmati" },
  { href: "/lid-magnit", label: "Lid magnit" },
];

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isInTargetDropdown = TARGET_DROPDOWN.some((i) => i.href === pathname);
  const targetDropdownLabel =
    TARGET_DROPDOWN.find((i) => i.href === pathname)?.label ?? "Target kursi";

  // Route o‘zgarsa menu yopilsin
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDropdownOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Tashqariga bosilganda desktop dropdown yopilsin
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

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
          <nav className="flex items-center gap-4 pl-10 max-md:hidden">
            {/* Target kursi — dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                className={`inline-flex items-center gap-1 text-lg font-semibold transition ${
                  isInTargetDropdown ? "text-indigo-400" : "text-indigo-100 hover:text-indigo-400"
                }`}
              >
                {targetDropdownLabel}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 min-w-[180px] rounded-xl border border-white/10 bg-[#0E1A3D] py-2 shadow-xl shadow-black/40"
                >
                  {TARGET_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-base font-medium transition ${
                        pathname === item.href
                          ? "text-indigo-400"
                          : "text-indigo-100 hover:bg-white/5 hover:text-indigo-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
  </Link>
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
      
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-sm transition-[max-height,opacity] duration-300 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3 flex flex-col gap-2">
          {/* Target kursi — mobil akkordeon */}
          <div>
            <button
              type="button"
              onClick={() => setMobileDropdownOpen((v) => !v)}
              aria-expanded={mobileDropdownOpen}
              className={`w-full flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold transition ${
                isInTargetDropdown
                  ? "bg-white/10 text-indigo-400"
                  : "text-indigo-100 hover:bg-white/5 hover:text-indigo-400"
              }`}
            >
              {targetDropdownLabel}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-1 flex flex-col gap-1 pl-4">
                {TARGET_DROPDOWN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      pathname === item.href
                        ? "bg-white/10 text-indigo-400"
                        : "text-indigo-100/90 hover:bg-white/5 hover:text-indigo-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
