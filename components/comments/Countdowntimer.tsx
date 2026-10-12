"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  /** Maqsadli sana (ISO). Default: 15-iyun 2026, Toshkent vaqti (UTC+5). */
  target?: string;
  className?: string;
  /** Taymer ustidagi yozuv — muddat tugaganda taymer bilan birga yashiriladi. */
  label?: ReactNode;
};

type T = { d: number; h: number; m: number; s: number; done: boolean };

function diff(target: number): T {
  const ms = target - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function CountdownTimer({ target = "2026-06-15T00:00:00+05:00", className, label }: Props) {
  // Hydration mismatchni oldini olish uchun: birinchi tikgacha (null) hech narsa render qilmaymiz
  const [t, setT] = useState<T | null>(null);

  useEffect(() => {
    const targetMs = new Date(target).getTime();
    const tick = () => setT(diff(targetMs));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);

  if (!t) {
    // Server va birinchi render uchun bo'sh, barqaror placeholder
    return <div className={`vg-countdown ${className ?? ""}`} aria-hidden style={{ visibility: "hidden" }} />;
  }

  // Muddat o'tgan bo'lsa hech narsa ko'rsatmaymiz — sahifadagi «ariza qabul qilinmoqda» bilan ziddiyat bo'lmasin
  if (t.done) return null;

  const cells: { v: string; l: string }[] = [
    { v: pad(t.d), l: "KUN" },
    { v: pad(t.h), l: "SOAT" },
    { v: pad(t.m), l: "DAQIQA" },
    { v: pad(t.s), l: "SONIYA" },
  ];

  return (
    <>
    {label && <div className="vg-cd-eyebrow">{label}</div>}
    <div className={`vg-countdown ${className ?? ""}`}>
      {cells.map((c, i) => (
        <div className="vg-cd-cell" key={i}>
          <span className="vg-cd-num">{c.v}</span>
          <span className="vg-cd-lbl">{c.l}</span>
        </div>
      ))}
    </div>
    </>
  );
}