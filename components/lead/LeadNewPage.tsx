// components/leads/LeadNewPage.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
  defaultSource?: string;           // masalan: "Telegram" | "Instagram" | "Web"
  onSuccess?: () => void;           // muvaffaqiyatdan keyin qo‘shimcha ishlar
};

export default function LeadNewPage({
  className,
  defaultSource = "Web",
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    source: defaultSource,
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(
    null
  );

  function normalizePhone(raw: string) {
    // + va raqamlarni qoldiramiz
    const digits = raw.replace(/[^\d+]/g, "");
    // +998 bilan boshlanmasa, o‘zi qo‘shmang — backendda ham tekshiruv bor
    return digits;
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
        setMsg({
          type: "err",
          text:
            t || "Jo‘natishda xatolik. Iltimos, qayta urinib ko‘ring.",
        });
        return;
      }

      // muvaffaqiyat
      setMsg({ type: "ok", text: "Muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz." });
      setForm({ fullName: "", phone: "", source: form.source || defaultSource, note: "" });
      onSuccess?.();
    } catch (e: any) {
      setMsg({
        type: "err",
        text: e?.message || "Kutilmagan xatolik yuz berdi.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl grid gap-3 text-left"
      >
        <Input
          placeholder="To‘liq ism"
          value={form.fullName}
          onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
          disabled={loading}
          required
        />
        <Input
          placeholder="Telefon (+998...)"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          disabled={loading}
          required
        />
        <Input
          placeholder="@telegramuser bo'lsa"
          value={form.source}
          onChange={(e) => setForm((p) => ({ ...p, source: e.target.value }))}
          disabled={loading}
        />
        {/* <Input
          placeholder="Izoh (ixtiyoriy)"
          value={form.note}
          onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
          disabled={loading}
        /> */}

        <Button
          type="submit"
          className="h-11 rounded-xl"
          disabled={loading}
        >
          {loading ? "Yuborilmoqda..." : "Ro‘yxatdan o‘tish"}
        </Button>

        {msg ? (
          <p
            className={
              msg.type === "ok"
                ? "text-sm text-emerald-700"
                : "text-sm text-red-600"
            }
          >
            {msg.text}
          </p>
        ) : null}

        <p className="text-[11px] text-gray-500 mt-1">
          Ma’lumotlaringiz faqat aloqa va qabul jarayonida ishlatiladi.
        </p>
      </form>
    </div>
  );
}
