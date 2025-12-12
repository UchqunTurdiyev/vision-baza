// components/target/TargetKursLeadForm.tsx
"use client";

import { FormEvent, useState } from "react";

type Props = {
  className?: string;
};

export function TargetKursLeadForm({ className }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const firstName = formData.get("firstName")?.toString().trim() || "";
    const lastName = formData.get("lastName")?.toString().trim() || "";
    const age = formData.get("age")?.toString().trim() || "";
    const city = formData.get("city")?.toString().trim() || "";
    const level = formData.get("level")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";

    // 🔴 JS tarafdan ham tekshiruv – hammasi to‘ldirilgan bo‘lsin
    if (!firstName || !lastName || !age || !city || !level || !phone) {
      setError("Barcha maydonlarni to‘liq to‘ldiring.");
      setLoading(false);
      return;
    }

    const payload = {
      firstName,
      lastName,
      age,
      city,
      level,
      phone,
      source: "kurs", // kurs leadi ekanini belgilab qo'yamiz
    };

    try {
      const res = await fetch("https://vision-baza.uz/target/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Serverdan xatolik qaytdi");
      }

      setSuccess("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.");
      formEl.reset();
    } catch (err) {
      setError("Yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg ${className ?? ""}`}
    >
      <h3 className="text-base font-semibold text-slate-50">
        Kursga yozilish uchun ariza
      </h3>
      <p className="text-xs text-slate-400">
        Kontaktlaringizni qoldiring, administratorimiz batafsil ma’lumot beradi.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="firstName">
            Ism
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="Ismingiz"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="lastName">
            Familiya
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
            placeholder="Familiyangiz"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="age">
            Yoshi
          </label>
          <input
            id="age"
            name="age"
            type="number"
            required
            min={10}
            max={80}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
            placeholder="Masalan, 24"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="city">
            Yashash joyi
          </label>
          <input
            id="city"
            name="city"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
            placeholder="Masalan, Samarqand"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300" htmlFor="level">
          Targetdan bilim darajangiz
        </label>
        <select
          id="level"
          name="level"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
        >
          <option value="">Tanlang</option>
          <option value="boshlovchi">Boshlovchi (hech ishlamaganman)</option>
          <option value="ozgina tajriba">Ozroq tajribam bor</option>
          <option value="tajribali">Tajribali (reklama yoqib kelaman)</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300" htmlFor="phone">
          Telefon raqamingiz
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="+998 __ ___ __ __"
        />
      </div>

      <input type="hidden" name="source" value="kurs" />

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Yuborilmoqda..." : "Arizani yuborish"}
      </button>

      {success && (
        <p className="text-xs text-emerald-300">
          {success}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
