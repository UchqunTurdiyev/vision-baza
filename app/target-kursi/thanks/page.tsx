"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Send } from "lucide-react";

export default function ThanksPage() {
  const TOTAL = 10; // ⬅️ necha soniyada Telegramga o‘tsin
  const TELEGRAM_URL = "https://t.me/Uchqun_Turdiev";

  const [seconds, setSeconds] = useState(TOTAL);

  // countdown
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  // ✅ 0 bo‘lganda Telegramga yo‘naltirish
  useEffect(() => {
    if (seconds === 0) {
      window.location.href = TELEGRAM_URL;
    }
  }, [seconds]);

  const progress = useMemo(() => {
    const done = TOTAL - seconds;
    return Math.min(100, Math.max(0, (done / TOTAL) * 100));
  }, [seconds]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl backdrop-blur"
        >
          {/* ✅ Linear progress bar */}
          <div className="mb-5">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
              <span>Yuborildi</span>
              <span className="text-slate-200">{seconds}s</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
              <motion.div
                className="relative h-full bg-emerald-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.25 }} // ✅ linear
              >
                {/* “shine” linear yurishi */}
                <motion.div
                  className="absolute inset-y-0 w-24 bg-linear-to-r from-transparent via-white/35 to-transparent"
                  animate={{ x: ["-30%", "160%"] }}
                  transition={{ ease: "linear", duration: 1.1, repeat: Infinity }}
                />
              </motion.div>
            </div>

            <div className="mt-2 text-xs text-slate-400">
              {seconds > 0 ? (
                <>
                  <span className="text-slate-200">{seconds}s</span> dan so‘ng Telegramga yo‘naltirilasiz…
                </>
              ) : (
                <>Telegramga yo‘naltirilmoqda…</>
              )}
            </div>
          </div>

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200"
          >
            ✅ So‘rov qabul qilindi
          </motion.div>

          <div className="mt-5 flex items-start gap-4">
            {/* icon */}
            <motion.div
              initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/15 blur-xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
                <CheckCircle2 className="h-7 w-7 text-emerald-300" />
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12, duration: 0.35 }}
                className="text-xl font-semibold"
              >
                Rahmat!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
                className="mt-2 text-sm text-slate-300"
              >
                So‘rovingiz muvaffaqiyatli qabul qilindi. Administratorimiz tez orada siz bilan bog‘lanadi.
              </motion.p>

              {/* info box */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26, duration: 0.35 }}
                className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
              >
                <div className="text-slate-200 font-medium">
                  Siz kelajagingiz uchun eng to&apos;g&apos;ri yo&apos;lni tanladingiz✅
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Talimga tikilgan invistitsiya eng to&apos;g&apos;ri invistitsiyadir
                </div>
              </motion.div>

              {/* actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.35 }}
                className="mt-5 grid gap-2 sm:grid-cols-2"
              >
                <Link
                  href="/target-kursi"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-50 transition hover:bg-slate-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Kurs sahifasiga qaytish
                </Link>

                <a
                  href={TELEGRAM_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Send className="h-4 w-4" />
                  Telegramga o‘tish
                </a>
              </motion.div>
            </div>
          </div>

          {/* bottom line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6, ease: "easeOut" }}
            className="mt-6 h-px w-full origin-left bg-linear-to-r from-transparent via-emerald-400/40 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
