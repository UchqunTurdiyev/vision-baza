"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Maqsadli sana (ISO). Default: 15-iyun 2026, Toshkent vaqti (UTC+5). */
  target?: string;
  className?: string;
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

export function CountdownTimer({ target = "2026-06-15T00:00:00+05:00", className }: Props) {
  // Hydration mismatchni oldini olish uchun: mount bo'lguncha hech narsa render qilmaymiz
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState<T>({ d: 0, h: 0, m: 0, s: 0, done: false });

  useEffect(() => {
    const targetMs = new Date(target).getTime();
    setMounted(true);
    setT(diff(targetMs));
    const id = setInterval(() => setT(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) {
    // Server va birinchi render uchun bo'sh, barqaror placeholder
    return <div className={`vg-countdown ${className ?? ""}`} aria-hidden style={{ visibility: "hidden" }} />;
  }

  if (t.done) {
    return (
      <div className={`vg-countdown ${className ?? ""}`}>
        <span className="vg-cd-live">Qabul yopildi — keyingi oqimni kuting</span>
      </div>
    );
  }

  const cells: { v: string; l: string }[] = [
    { v: pad(t.d), l: "KUN" },
    { v: pad(t.h), l: "SOAT" },
    { v: pad(t.m), l: "DAQIQA" },
    { v: pad(t.s), l: "SONIYA" },
  ];

  return (
    <div className={`vg-countdown ${className ?? ""}`}>
      {cells.map((c, i) => (
        <div className="vg-cd-cell" key={i}>
          <span className="vg-cd-num">{c.v}</span>
          <span className="vg-cd-lbl">{c.l}</span>
        </div>
      ))}
    </div>
  );
}