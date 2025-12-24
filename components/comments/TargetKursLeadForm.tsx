"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ qo‘shildi

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
  const router = useRouter(); // ✅ qo‘shildi

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
    const phone = String(formData.get("phone") ?? "").trim();

    if (!firstName || !lastName || !age || !city || !level || !phone) {
      setError("Barcha maydonlarni to‘liq to‘ldiring.");
      setLoading(false);
      return;
    }

    const payload = {
      fullName: `${firstName} ${lastName}`.trim(),
      phone,
      source: "target-kursi",
      note: `Yosh: ${age}; Shahar: ${city}; Daraja: ${level}`,
    };

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

      // ✅ muvaffaqiyatli bo‘lsa: tozalab, thanks sahifaga o‘tkazamiz
      formEl.reset();
      router.push("/target-kursi/thanks"); // ✅ mana shu

      // xohlasangiz success yozuv kerak bo‘lmasa, setSuccess ni olib tashlang
      // setSuccess("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.");
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
      {/* ... qolgan qismi o‘sha-o‘sha ... */}

      {success && <p className="text-xs text-emerald-300">{success}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </form>
  );
}
