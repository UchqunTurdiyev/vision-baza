"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ faqat shu qo‘shildi

type Props = {
  className?: string;
};

function extractErrorMessage(data: unknown): string | null {
  if (typeof data === "string") return data || null;

  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;

    if (typeof obj.error === "string" && obj.error.trim()) return obj.error;
    if (typeof obj.message === "string" && obj.message.trim()) return obj.message;

    if (Array.isArray(obj.errors) && obj.errors.length > 0) {
      const first = obj.errors[0];
      if (typeof first === "string") return first;
      if (first && typeof first === "object") {
        const e0 = first as Record<string, unknown>;
        if (typeof e0.message === "string") return e0.message;
      }
    }
  }

  return null;
}

export function TargetKursLeadForm({ className }: Props) {
  const router = useRouter(); // ✅ faqat shu qo‘shildi

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
  
    setLoading(true);
    setSuccess(null);
    setError(null);
  
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
  
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const level = String(formData.get("level") ?? "").trim();
    const phoneRaw = String(formData.get("phone") ?? "").trim();
  
    // ✅ Faqat shularni majburiy tekshiramiz:
    if (!firstName || !lastName || !phoneRaw) {
      setError("Ism, familiya va telefon raqamni to‘liq kiriting.");
      setLoading(false);
      return;
    }
  
    // ✅ Ism/Familiya: faqat harf va bo‘shliq, kamida 2 ta harf
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04FF\u0100-\u017Fʻʼ’`' -]{2,}$/u;
    if (!nameRegex.test(firstName)) {
      setError("Ism noto‘g‘ri. Faqat harflardan iborat bo‘lsin (kamida 2 ta).");
      setLoading(false);
      return;
    }
    if (!nameRegex.test(lastName)) {
      setError("Familiya noto‘g‘ri. Faqat harflardan iborat bo‘lsin (kamida 2 ta).");
      setLoading(false);
      return;
    }
  
    // ✅ Telefon: +998XXXXXXXXX (9 ta raqam) yoki 998XXXXXXXXX yoki 9 ta raqam
    const digits = phoneRaw.replace(/\D/g, "");
    const normalized =
      digits.startsWith("998") && digits.length === 12
        ? `+${digits}`
        : digits.length === 9
        ? `+998${digits}`
        : phoneRaw;
  
    const uzPhoneRegex = /^\+998\d{9}$/;
    if (!uzPhoneRegex.test(normalized)) {
      setError("Telefon raqam noto‘g‘ri. Namuna: +998901234567");
      setLoading(false);
      return;
    }
  
    const payload = {
      fullName: `${firstName} ${lastName}`.trim(),
      phone: normalized, // ✅ normalizatsiya qilingan telefon
      source: "target-kursi",
      note: `Yosh: ${age}; Shahar: ${city}; Daraja: ${level}`,
    };
    // ✅ Yosh: 18–40 oralig‘ida bo‘lishi shart
const ageNum = Number(age);

if (!Number.isFinite(ageNum) || !Number.isInteger(ageNum)) {
  setError("Yosh noto‘g‘ri. Faqat butun son kiriting.");
  setLoading(false);
  return;
}

if (ageNum < 18 || ageNum > 40) {
  setError("Kurs faqat 18–40 yosh oralig‘i uchun.");
  setLoading(false);
  return;
}

  
    try {
      const res = await fetch("/api/target-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const contentType = res.headers.get("content-type") ?? "";
      const data: unknown = contentType.includes("application/json")
        ? await res.json().catch(() => null)
        : await res.text().catch(() => "");
  
      if (!res.ok) {
        const msg = extractErrorMessage(data) ?? `Server xatosi: ${res.status}`;
        throw new Error(msg);
      }
  
      setSuccess("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.");
      formEl.reset();
  
      router.push("/target-kursi/thanks");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Xatolik yuz berdi";
      setError(msg || "Yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      console.error("TargetKursLeadForm submit error:", err);
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-3 shadow-lg ${className ?? ""}`}
    >
      <h3 className="text-base font-semibold text-slate-50">
        Kurs haqida ma&apos;lumotlarni olish uchun
      </h3>
      <p className="text-xs text-slate-400">
        Kontaktlaringizni qoldiring, administratorimiz batafsil ma’lumot beradi.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="firstName">Ism</label>
          <input
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-400"
            placeholder="Ismingiz"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="lastName">Familiya</label>
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
          <label className="text-xs text-slate-300" htmlFor="age">Yoshi</label>
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
          <label className="text-xs text-slate-300" htmlFor="city">Yashash joyi</label>
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
        <label className="text-xs text-slate-300" htmlFor="level">Targetdan bilim darajangiz</label>
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
        <label className="text-xs text-slate-300" htmlFor="phone">Telefon raqamingiz</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="+998 __ ___ __ __"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full h-10 items-center justify-center rounded-xl cursor-pointer bg-yellow-300 px-5 text-sm font-bold text-[#07122a] transition hover:bg-yellow-200"
      >
        {loading ? "Yuborilmoqda..." : "Yuborish"}
      </button>

      {success && <p className="text-xs text-emerald-300">{success}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </form>
  );
}
