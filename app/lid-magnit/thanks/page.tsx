// app/lid-magnit/raxmat/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

const TELEGRAM_URL = "https://t.me/Uchqun_Turdiev";
const TOTAL_MS = 5000;
const TICK_MS = 50; // progress bar silliq bo'lishi uchun

export default function RaxmatPage() {
  const [sec, setSec] = useState<number>(5);
  const [msLeft, setMsLeft] = useState<number>(TOTAL_MS);

  useEffect(() => {
    // sekund sanash (1s)
    const secTimer = window.setInterval(() => {
      setSec((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    // progress (50ms)
    const msTimer = window.setInterval(() => {
      setMsLeft((m) => (m > 0 ? Math.max(0, m - TICK_MS) : 0));
    }, TICK_MS);

    // redirect
    const redirectTimer = window.setTimeout(() => {
      window.location.href = TELEGRAM_URL;
    }, TOTAL_MS);

    return () => {
      window.clearInterval(secTimer);
      window.clearInterval(msTimer);
      window.clearTimeout(redirectTimer);
    };
  }, []);

  const progress = useMemo(() => {
    // 0..100 (100 -> 0 ga kamayadi)
    const p = (msLeft / TOTAL_MS) * 100;
    return Math.max(0, Math.min(100, p));
  }, [msLeft]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Orqa fon (Vision-group vibe) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.18),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(16,185,129,0.12),transparent_55%)]" />

      {/* Grain/Noise effekt */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><filter id=%22n%22 x=%220%22 y=%220%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')]" />

      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-4 text-center">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur">
          {/* Glow border */}
          <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.25),rgba(16,185,129,0.18),rgba(99,102,241,0.35))] blur-2xl opacity-60" />

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
            <span className="text-2xl">✅</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight">
            Raxmat!
          </h1>

          <p className="mt-3 text-base leading-relaxed text-white/80">
            Ma’lumotlaringiz qabul qilindi. Sizni Telegram kanalga yo‘naltiramiz u yerda bepul qo&apos;llanmaga ega bo&apos;lasiz…
          </p>

          {/* Countdown pill */}
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400/80" />
            <span>
              <b className="text-white">{sec}</b> sekunddan keyin o‘tasiz
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
              <div
                className="h-full rounded-full bg-linear-to-r from-indigo-500/70 via-fuchsia-500/60 to-emerald-500/60 transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-white/50">
              <span>Yo‘naltirish</span>
              <span>{Math.ceil(msLeft / 1000)}s</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={TELEGRAM_URL}
              className="inline-flex w-full justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Telegram kanalga o‘tish
            </a>

            <a
              href="/lid-magnit"
              className="inline-flex w-full justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              Ortga qaytish
            </a>
          </div>

          <p className="mt-5 text-xs text-white/45">
            Agar avtomatik yo‘naltirish ishlamasa, “Telegram kanalga o‘tish” tugmasini bosing.
          </p>
        </div>
      </div>
    </main>
  );
}
