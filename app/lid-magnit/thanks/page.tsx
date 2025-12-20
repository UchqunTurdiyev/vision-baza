// app/lid-magnit/raxmat/page.tsx
"use client";

import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/Uchqun_Turdiev"; // <-- shu yerni o'zingizning kanal linkingizga almashtiring

export default function RaxmatPage() {
  const [sec, setSec] = useState(5);

  useEffect(() => {
    const t1 = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000);
    const t2 = setTimeout(() => {
      window.location.href = TELEGRAM_URL;
    }, 5000);

    return () => {
      clearInterval(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(16,185,129,0.10),transparent_55%)]" />

      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-4 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <h1 className="text-3xl font-bold">Raxmat! ✅</h1>
          <p className="mt-3 text-white/80">
            Ma’lumotlaringiz qabul qilindi. Sizni Telegram kanalga yo‘naltiramiz…
          </p>

          <p className="mt-4 text-sm text-white/70">
            {sec} sekunddan keyin o‘tasiz.
          </p>

          <a
            href={TELEGRAM_URL}
            className="mt-6 inline-flex w-full justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Telegram kanalga hoziroq o‘tish
          </a>
        </div>
      </div>
    </main>
  );
}
