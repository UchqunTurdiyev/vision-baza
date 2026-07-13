"use client";

import { useEffect, useRef, useState } from "react";

type Item = { name: string; initials: string; action: string; city: string };

// Ismlar / harakatlar / shaharlar — tasodifiy tanlanadi (real ko'rinish uchun)
const POOL: Item[] = [
  { name: "Akmal", initials: "A", action: "kursga yozildi", city: "Samarqand" },
  { name: "Shahlo", initials: "Sh", action: "qiziqish bildirdi", city: "Toshkent" },
  { name: "Diyora", initials: "D", action: "kursga yozildi", city: "Buxoro" },
  { name: "Bobur", initials: "B", action: "qiziqish bildirdi", city: "Andijon" },
  { name: "Madina", initials: "M", action: "kursga yozildi", city: "Namangan" },
  { name: "Jasur", initials: "J", action: "qiziqish bildirdi", city: "Farg'ona" },
  { name: "Nilufar", initials: "N", action: "kursga yozildi", city: "Toshkent" },
  { name: "Sardor", initials: "S", action: "qiziqish bildirdi", city: "Navoiy" },
  { name: "Gulnoza", initials: "G", action: "kursga yozildi", city: "Toshkent" },
  { name: "Aziz", initials: "A", action: "qiziqish bildirdi", city: "Samarqand" },
];

type Props = {
  /** Bitta tashrif uchun nechta bildirgi chiqsin. Default: 2. */
  count?: number;
  /** Birinchi bildirgi necha ms dan keyin chiqsin. */
  firstDelayMs?: number;
  /** Bildirgilar orasidagi tanaffus (ms). */
  gapMs?: number;
  /** Bildirgi ekranda turadigan vaqt (ms). */
  visibleMs?: number;
};

const COLORS = {
  bg: "rgba(10,23,17,0.97)",
  ink: "#FFFFFF",
  muted: "rgba(255,255,255,0.5)",
  line: "rgba(255,255,255,0.14)",
  accent: "#25E085",
};

const SERIF = "var(--font-heading), -apple-system, sans-serif";
const MONO = "var(--font-geist-mono), ui-monospace, monospace";
const SANS = "var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif";

export function SocialProofToast({
  count = 2,
  firstDelayMs = 4500,
  gapMs = 9000,
  visibleMs = 5000,
}: Props) {
  const [item, setItem] = useState<Item | null>(null);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Tasodifiy, takrorlanmaydigan ketma-ketlik tanlaymiz
    const seq = [...POOL].sort(() => Math.random() - 0.5).slice(0, Math.max(1, count));
    let i = 0;

    const push = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const run = () => {
      if (i >= seq.length) return;
      setItem(seq[i]);
      setShow(true);
      push(() => {
        setShow(false);
        i += 1;
        if (i < seq.length) {
          push(run, Math.max(1500, gapMs - visibleMs));
        }
      }, visibleMs);
    };

    push(run, firstDelayMs);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [count, firstDelayMs, gapMs, visibleMs]);

  if (dismissed || !item) return null;

  return (
    <>
      <style>{`
        @keyframes vgspPulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        .vgsp {
          position: fixed; left: 20px; bottom: 20px; z-index: 50;
          display: flex; align-items: center; gap: 12px;
          background: ${COLORS.bg};
          border: 1px solid ${COLORS.line};
          border-left: 3px solid ${COLORS.accent};
          border-radius: 12px;
          padding: 12px 38px 12px 14px;
          min-width: 240px; max-width: 320px;
          font-family: ${SANS};
          box-shadow: 0 18px 44px -18px rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          opacity: 0; transform: translateY(16px) scale(0.98);
          transition: opacity .45s ease, transform .45s ease;
          pointer-events: auto;
        }
        .vgsp.vgsp-show { opacity: 1; transform: translateY(0) scale(1); }
        @media (max-width: 800px) {
          .vgsp { left: 12px; right: 12px; bottom: 84px; max-width: none; }
        }
      `}</style>

      <div className={`vgsp ${show ? "vgsp-show" : ""}`} role="status" aria-live="polite">
        <div
          style={{
            width: 40, height: 40, borderRadius: "50%", background: COLORS.accent,
            color: "#06100B", display: "grid", placeItems: "center",
            fontFamily: SERIF, fontWeight: 600, fontSize: 16, flexShrink: 0,
          }}
        >
          {item.initials}
        </div>

        <div style={{ lineHeight: 1.3 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.ink }}>
            {item.name}{" "}
            <span style={{ color: COLORS.accent, fontWeight: 600 }}>{item.action}</span>
          </div>
          <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 6, fontFamily: MONO, fontSize: 10, letterSpacing: "0.04em", color: COLORS.muted }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.accent, animation: "vgspPulse 1.4s ease-in-out infinite" }} />
            hozirgina · {item.city}
          </div>
        </div>

        <button
          aria-label="Yopish"
          onClick={() => setDismissed(true)}
          style={{
            position: "absolute", top: 8, right: 10, background: "transparent",
            border: "none", color: COLORS.muted, cursor: "pointer", fontSize: 16, lineHeight: 1, padding: 2,
          }}
        >
          ×
        </button>
      </div>
    </>
  );
}