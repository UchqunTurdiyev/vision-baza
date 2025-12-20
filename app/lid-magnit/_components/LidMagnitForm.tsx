// app/lid-magnit/_components/LidMagnitForm.tsx
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

function s(v: string): string {
  return (v ?? "").trim();
}

function normalizePhone(input: string): string {
  const cleaned = input.replace(/[^\d+]/g, "");
  const hasPlus = cleaned.startsWith("+");
  const digitsOnly = cleaned.replace(/\+/g, "");
  return hasPlus ? `+${digitsOnly}` : digitsOnly;
}

function countDigits(v: string): number {
  return v.replace(/\D/g, "").length;
}

type Payload = {
  fullName: string;
  phone: string;
  source: "lid-magnit";
  note: string;
};

function getApiBase(): string {
  const envBase = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");
  // Agar env yo'q bo'lsa, ayni domeningizdan foydalanadi
  return envBase || window.location.origin;
}

export default function LidMagnitForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  const fullName = useMemo(() => {
    const fn = s(firstName);
    const ln = s(lastName);
    return [fn, ln].filter(Boolean).join(" ");
  }, [firstName, lastName]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);

    const fn = s(firstName);
    const ph = s(phone);

    if (!fn) {
      setErr("Iltimos, ismingizni kiriting.");
      return;
    }

    if (!ph || countDigits(ph) < 9) {
      setErr("Iltimos, telefon raqamingizni to‘g‘ri kiriting.");
      return;
    }

    setLoading(true);
    try {
      const apiBase = getApiBase();
      const endpoint = `${apiBase}/target/new`;

      const payload: Payload = {
        fullName,
        phone: ph,
        source: "lid-magnit",
        note: s(email) ? `Email: ${s(email)}` : "",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "Server xatoligi. Qayta urinib ko‘ring.");
      }

      // Sizda sahifa nomi /thanks bo'lsa shu qoladi.
      router.push("/lid-magnit/thanks");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi. Qayta urinib ko‘ring.";
      setErr(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-white/80">Ism *</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400/60"
            placeholder="Ismingiz"
            autoComplete="given-name"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-white/80">Familya</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400/60"
            placeholder="Familyangiz"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-white/80">Telefon raqam *</label>
        <input
          value={phone}
          onChange={(e) => setPhone(normalizePhone(e.target.value))}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400/60"
          placeholder="+998 90 123 45 67"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-white/80">Email (ixtiyoriy)</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400/60"
          placeholder="example@gmail.com"
          autoComplete="email"
          type="email"
        />
      </div>

      {err ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {err}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </form>
  );
}
