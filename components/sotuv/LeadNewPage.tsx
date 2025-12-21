// components/leads/LeadNewPage.tsx
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
  defaultSource?: string;           // masalan @telegramuser yoki "Web"
  onSuccess?: () => void;
  telegramUrl?: string;             // Telegram kanal havolasi
};

export default function LeadNewPage({
  className,
  defaultSource = "",
  onSuccess,
  telegramUrl = "https://t.me/sotuv_mutaxassisi", // ⬅️ real kanalingiz linkini kiriting
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    source: defaultSource,  // bu yerda @telegramuser ham bo‘lishi mumkin
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  

  // ✅ Thank-you rejimi holatlari
  const [isThankYou, setIsThankYou] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!isThankYou) return;
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(id);
          window.location.href = telegramUrl; // avtomatik o‘tish
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isThankYou, telegramUrl]);

  function normalizePhone(raw: string) {
    return raw.replace(/[^\d+]/g, ""); // faqat + va raqamlar qolsin
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const fullName = form.fullName.trim();
    const phone = normalizePhone(form.phone);

    if (fullName.length < 2) {
      setMsg({ type: "err", text: "Ism kamida 2 ta belgidan iborat bo‘lsin." });
      return;
    }
    if (phone.length < 7) {
      setMsg({ type: "err", text: "Telefon raqamini to‘g‘ri kiriting." });
      return;
    }

    setLoading(true);
    try {
      const r = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          source: form.source || defaultSource,
          note: form.note || "",
        }),
      });

      if (!r.ok) {
        const t = await r.text();
        setMsg({ type: "err", text: t || "Jo‘natishda xatolik. Iltimos, qayta urinib ko‘ring." });
        return;
      }
      
      // ✅ Qo‘shimcha: Telegram botga yuborish (UI’ni bloklamaydi)
      fetch("/api/telegram-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // keepalive: true sahifadan ketayotganda ham jo‘natishni davom ettiradi (brauzer qo‘llab-quvvatlasa)
        keepalive: true,
        body: JSON.stringify({
          fullName,
          phone,
          source: form.source || defaultSource,
          note: form.note || "",
        }),
      }).catch(() => { /* jim */ });

      // ✅ Muvaffaqiyat: Thank-you rejimiga o‘tamiz
      setForm({ fullName: "", phone: "", source: form.source || defaultSource, note: "" });
      setMsg(null);
      onSuccess?.();
      setIsThankYou(true);
      setCountdown(5);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e: unknown) {
      const text = e instanceof Error ? e.message : "Kutilmagan xatolik yuz berdi.";
      setMsg({ type: "err", text });
    } finally {
      setLoading(false);
    }
  }

  

  // ✅ Thank-you ekran
  if (isThankYou) {
    return (
      <div className={className}>
        <div className="mx-auto md:max-w-xl w-full text-center rounded-2xl border border-emerald-200 bg-emerald-50 p-2">
          <h2 className="text-xl font-bold text-emerald-800">
            Bizga qiziqish bildirganingiz uchun tashakkur!
          </h2>
          <p className="mt-2 text-emerald-700">
            {countdown} soniyadan so‘ng Telegram kanalimizga yo‘naltirilasiz.
          </p>
          <a
            href={telegramUrl}
            className="inline-flex items-center justify-center mt-4 h-10 px-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Telegram kanalga qo‘lda o‘tish
          </a>
        </div>
      </div>
    );
  }

  // 🔹 Asl forma
  return (
    <div className={className}>
      <div className="mx-auto md:max-w-xl w-full rounded-2xl bg-linear-to-b from-slate-950 via-slate-800 to-slate-950 border border-indigo-200/40 shadow-2xl p-2 sm:p-4 text-white backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sotuv mutaxassisligi kursiga ro‘yxatdan o‘ting
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-3 text-left">
          <Input
            placeholder="To‘liq ism"
            value={form.fullName}
            onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
            disabled={loading}
            required
            className="bg-indigo-600/60 border-indigo-200/50 text-white placeholder:text-indigo-100/70 focus-visible:ring-indigo-200 focus-visible:border-indigo-100"
          />
          <Input
            placeholder="Telefon (+998...)"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            disabled={loading}
            required
            className="bg-indigo-600/60 border-indigo-200/50 text-white placeholder:text-indigo-100/70 focus-visible:ring-indigo-200 focus-visible:border-indigo-100"
          />
          <Input
            placeholder="@telegramuser bo‘lsa (ixtiyoriy)"
            value={form.source}
            onChange={(e) => setForm((p) => ({ ...p, source: e.target.value }))}
            disabled={loading}
            className="bg-indigo-600/60 border-indigo-200/50 text-white placeholder:text-indigo-100/70 focus-visible:ring-indigo-200 focus-visible:border-indigo-100"
          />
          {/* Agar izoh kerak bo‘lsa, pastdagini ochasiz:
          <Input
            placeholder="Izoh (ixtiyoriy)"
            value={form.note}
            onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
            disabled={loading}
            className="bg-indigo-600/60 border-indigo-200/50 text-white placeholder:text-indigo-100/70 focus-visible:ring-indigo-200 focus-visible:border-indigo-100"
          /> */}

          <Button
            type="submit"
            className="h-11 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-900/40"
            disabled={loading}
          >
            {loading ? "Yuborilmoqda..." : "Ro‘yxatdan o‘tish"}
          </Button>

          {msg ? (
            <p
              className={
                msg.type === "ok"
                  ? "text-sm text-emerald-200"
                  : "text-sm text-red-200"
              }
            >
              {msg.text}
            </p>
          ) : null}

          <p className="text-[11px] text-indigo-100/70 mt-1">
            Ma’lumotlaringiz faqat aloqa va qabul jarayonida ishlatiladi.
          </p>
        </form>
      </div>
    </div>
  );
}
