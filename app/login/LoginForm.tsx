"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2, Lock, User, ShieldCheck } from "lucide-react";

function safeNext(raw: string | null): string {
  // faqat sayt ichidagi yo'lga qaytaramiz (open-redirect'dan himoya)
  if (raw && raw.startsWith("/") && !raw.startsWith("//")) return raw;
  return "/target/new";
}

export default function LoginForm() {
  const params = useSearchParams();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: fd.get("username"), password: fd.get("password") }),
      });
      if (res.ok) {
        window.location.href = safeNext(params.get("next"));
        return;
      }
      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Kirishda xatolik yuz berdi.");
    } catch {
      setError("Internet aloqasini tekshiring va qayta urinib ko'ring.");
    }
    setLoading(false);
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-[15px] text-white placeholder:text-slate-500 outline-none transition focus:border-green-400/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-green-500/15";

  return (
    <div className="relative w-full max-w-[420px]">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,.7)] backdrop-blur-xl sm:p-9">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 shadow-[0_10px_30px_-5px_rgba(34,197,94,.55)]">
            <ShieldCheck className="h-7 w-7 text-slate-950" strokeWidth={2.2} />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-white">
            Vision Group CRM
          </h1>
          <p className="mt-1.5 text-sm text-slate-400">Lidlarni boshqarish uchun tizimga kiring</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">Login</span>
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
              <input
                name="username"
                autoComplete="username"
                autoFocus
                required
                defaultValue="admin"
                className={input}
                placeholder="admin"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">Parol</span>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
              <input
                name="password"
                type={showPw ? "text" : "password"}
                autoComplete="current-password"
                required
                className={`${input} pr-12`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Parolni yashirish" : "Parolni ko'rsatish"}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {showPw ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </label>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 text-[15px] font-semibold text-slate-950 shadow-[0_10px_30px_-8px_rgba(34,197,94,.7)] transition hover:bg-green-400 active:scale-[.99] disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-[18px] w-[18px] animate-spin" /> Tekshirilmoqda…
              </>
            ) : (
              "Kirish"
            )}
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Faqat Vision Group xodimlari uchun · Sessiya 7 kun saqlanadi
      </p>
    </div>
  );
}
