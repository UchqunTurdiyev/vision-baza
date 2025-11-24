// components/target/TargetLeadNewPage.tsx
"use client";

import { FormEvent, useState } from "react";

type Props = {
  className?: string;
};

const businessOptions = [
  { value: "", label: "Tanlang" },
  { value: "school", label: "Xususiy maktab / kurs" },
  { value: "clinic", label: "Klinika / med markaz" },
  { value: "service", label: "Xizmat ko‘rsatish" },
  { value: "shop", label: "Magazin / savdo punkti" },
  { value: "other", label: "Boshqa" },
];

const budgetOptions = [
  { value: "", label: "Tanlang" },
  { value: "3-5", label: "3–5 mln so‘mgacha" },
  { value: "5-10", label: "5–10 mln so‘m" },
  { value: "10+", label: "10 mln so‘mdan yuqori" },
];

export default function TargetLeadNewPage({ className }: Props) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    // 👉 Eventdan alohida DOM formani olib qo'yamiz
    const form = e.currentTarget;

    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      businessType: formData.get("businessType") as string,
      socialPage: formData.get("socialPage") as string,
      budget: formData.get("budget") as string,
      comment: formData.get("comment") as string,
      source: "target-new",
    };

    try {
      const res = await fetch("/api/target-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Xatolik yuz berdi");
      }

      setSuccessMsg("Ariza muvaffaqiyatli qabul qilindi ✅");

      // 👉 Mana endi event emas, aniq form o'zini reset qilamiz
      form.reset();
    } catch (err: any) {
      setErrorMsg(err?.message || "Ariza yuborishda xatolik");
    } finally {
      setLoading(false);
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-4 md:grid-cols-2 ${className ?? ""}`}
    >
      {/* Ism familiya */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-200">
          Ism familiyangiz
        </label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100 placeholder:text-slate-500"
          placeholder="Masalan: Aliyev Ilhom"
        />
      </div>

      {/* Telefon */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-200">
          Telefon raqam
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100 placeholder:text-slate-500"
          placeholder="+998 90 123 45 67"
        />
      </div>

      {/* Biznes turi */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-200">
          Biznes turi
        </label>
        <select
          name="businessType"
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100"
        >
          {businessOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Instagram / Facebook sahifa */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-200">
          Instagram / Facebook sahifangiz
        </label>
        <input
          type="text"
          name="socialPage"
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100 placeholder:text-slate-500"
          placeholder="@vision_group_uz yoki havola"
        />
      </div>

      {/* Oylik budjet */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-200">
          Taxminiy oylik reklama budjeti
        </label>
        <select
          name="budget"
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100"
        >
          {budgetOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Izoh */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-xs font-medium text-slate-200">
          Qo‘shimcha izoh (majburiy emas)
        </label>
        <textarea
          name="comment"
          rows={3}
          className="w-full rounded-xl border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 bg-slate-950/60 text-slate-100 placeholder:text-slate-500"
          placeholder="Biznesingiz haqida qisqacha yozib bering, maqsadingiz: lead, brend tanilishi va h.k."
        />
      </div>

      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center items-center px-6 py-3 text-sm font-semibold rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-900/50 hover:bg-indigo-400 transition disabled:opacity-60"
        >
          {loading ? "Yuborilmoqda..." : "Ariza yuborish"}
        </button>

        {successMsg && (
          <p className="text-[11px] text-emerald-400 max-w-md">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-[11px] text-red-400 max-w-md">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}
