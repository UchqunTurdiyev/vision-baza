"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

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

const SERIF = "'Fraunces', Georgia, serif";
const MONO = "'Geist Mono', ui-monospace, monospace";
const SANS = "'Geist', -apple-system, BlinkMacSystemFont, sans-serif";

// Border FAQAT shorthand emas — alohida propertylar
const BASE_INPUT: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#C9BFA9",   // <-- alohida, shorthand emas
  borderRadius: "8px",
  background: "#ffffff",
  padding: "12px 16px",
  fontSize: "15px",
  fontFamily: SANS,
  color: "#161513",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  textAlign: "left",
  boxShadow: "none",
};

const FOCUS_INPUT: React.CSSProperties = {
  ...BASE_INPUT,
  borderColor: "#B8431C",   // faqat shu o'zgaradi
  boxShadow: "0 0 0 3px rgba(184,67,28,0.12)",
};

const LABEL: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontSize: "10px",
  fontFamily: MONO,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#6B6359",
  textAlign: "left",
};

export function TargetKLidForm({ className }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const s = (name: string) => (focused === name ? FOCUS_INPUT : BASE_INPUT);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSuccess(null);
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName  = String(formData.get("lastName")  ?? "").trim();
    const age       = String(formData.get("age")        ?? "").trim();
    const city      = String(formData.get("city")       ?? "").trim();
    const level     = String(formData.get("level")      ?? "").trim();
    const phoneRaw  = String(formData.get("phone")      ?? "").trim();

    if (!firstName || !lastName || !phoneRaw) {
      setError("Ism, familiya va telefon raqamni to'liq kiriting.");
      setLoading(false);
      return;
    }

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04FF\u0100-\u017Fʻʼ'`' -]{2,}$/u;
    if (!nameRegex.test(firstName)) {
      setError("Ism noto'g'ri. Faqat harflardan iborat bo'lsin (kamida 2 ta).");
      setLoading(false);
      return;
    }
    if (!nameRegex.test(lastName)) {
      setError("Familiya noto'g'ri. Faqat harflardan iborat bo'lsin (kamida 2 ta).");
      setLoading(false);
      return;
    }

    const digits = phoneRaw.replace(/\D/g, "");
    const normalized =
      digits.startsWith("998") && digits.length === 12
        ? `+${digits}`
        : digits.length === 9
        ? `+998${digits}`
        : phoneRaw;

    if (!/^\+998\d{9}$/.test(normalized)) {
      setError("Telefon raqam noto'g'ri. Namuna: +998901234567");
      setLoading(false);
      return;
    }

    const ageNum = Number(age);
    if (!Number.isFinite(ageNum) || !Number.isInteger(ageNum)) {
      setError("Yosh noto'g'ri. Faqat butun son kiriting.");
      setLoading(false);
      return;
    }
    if (ageNum < 18 || ageNum > 40) {
      setError("Kurs faqat 18–40 yosh oralig'i uchun.");
      setLoading(false);
      return;
    }

    const payload = {
      fullName: `${firstName} ${lastName}`.trim(),
      phone: normalized,
      source: "target-kursi-v2",
      note: `Yosh: ${age}; Shahar: ${city}; Daraja: ${level}`,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
    };

    try {
      const res = await fetch("/api/target-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const ct = res.headers.get("content-type") ?? "";
      const data: unknown = ct.includes("application/json")
        ? await res.json().catch(() => null)
        : await res.text().catch(() => "");

      if (!res.ok) {
        const msg = extractErrorMessage(data) ?? `Server xatosi: ${res.status}`;
        throw new Error(msg);
      }

      setSuccess("Arizangiz muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.");
      formEl.reset();
      router.push("/target-kursi/thanks");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Xatolik yuz berdi";
      setError(msg || "Yuborishda xatolik. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      style={{
        maxWidth: "540px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        textAlign: "left",
        background: "#FAF6EC",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#C9BFA9",
        borderRadius: "16px",
        padding: "32px",
        fontFamily: SANS,
        color: "#161513",
      }}
    >
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <span style={{ display: "block", height: "1px", width: "32px", background: "#161513" }} />
        <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8431C" }}>
          Ariza · Yozilish
        </span>
      </div>

      {/* Title */}
      <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "30px", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#161513" }}>
        Bepul{" "}
        <span style={{ fontStyle: "italic", fontWeight: 500, color: "#B8431C" }}>maslahat</span>
        {" "}olish
      </h3>

      <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: 1.6, color: "#6B6359" }}>
        Ma&apos;lumotlaringizni qoldiring — administrator{" "}
        <strong style={{ color: "#161513", fontWeight: 600 }}>24 soat ichida</strong>{" "}
        bog&apos;lanadi.
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "#C9BFA9", margin: "24px 0" }} />

      {/* Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

        {/* Ism + Familiya */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <label htmlFor="firstName" style={LABEL}>Ism</label>
            <input
              id="firstName" name="firstName" required autoComplete="given-name"
              placeholder="Ismingiz"
              style={s("firstName")}
              onFocus={() => setFocused("firstName")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label htmlFor="lastName" style={LABEL}>Familiya</label>
            <input
              id="lastName" name="lastName" required autoComplete="family-name"
              placeholder="Familiyangiz"
              style={s("lastName")}
              onFocus={() => setFocused("lastName")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        {/* Yosh + Shahar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <label htmlFor="age" style={LABEL}>Yoshi</label>
            <input
              id="age" name="age" type="number" required min={10} max={80}
              placeholder="24"
              style={s("age")}
              onFocus={() => setFocused("age")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label htmlFor="city" style={LABEL}>Yashash joyi</label>
            <input
              id="city" name="city" required autoComplete="address-level2"
              placeholder="Samarqand"
              style={s("city")}
              onFocus={() => setFocused("city")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        {/* Bilim darajasi */}
        <div>
          <label htmlFor="level" style={LABEL}>Targetdan bilim darajangiz</label>
          <select
            id="level" name="level" required defaultValue=""
            style={s("level")}
            onFocus={() => setFocused("level")}
            onBlur={() => setFocused(null)}
          >
            <option value="" disabled>Tanlang</option>
            <option value="boshlovchi">Boshlovchi (hech ishlamaganman)</option>
            <option value="ozgina tajriba">Ozroq tajribam bor</option>
            <option value="tajribali">Tajribali (reklama yoqib kelaman)</option>
          </select>
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" style={LABEL}>Telefon raqamingiz</label>
          <input
            id="phone" name="phone" type="tel" required autoComplete="tel"
            placeholder="+998 __ ___ __ __"
            style={s("phone")}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "24px",
          width: "100%",
          height: "52px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: "#161513",
          color: "#FAF6EC",
          borderWidth: "0",
          borderStyle: "solid",
          borderColor: "transparent",
          borderRadius: "8px",
          fontFamily: SANS,
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.02em",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#B8431C"; }}
        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#161513"; }}
      >
        {loading ? (
          <>
            <style>{`@keyframes vgspin{to{transform:rotate(360deg)}}`}</style>
            <span style={{ width: 16, height: 16, borderRadius: "50%", borderWidth: 2, borderStyle: "solid", borderColor: "rgba(250,246,236,0.3)", borderTopColor: "#FAF6EC", animation: "vgspin 0.8s linear infinite", display: "inline-block" }} />
            Yuborilmoqda...
          </>
        ) : (
          <>
            Arizani yuborish
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </>
        )}
      </button>

      {/* Fineprint */}
      <p style={{ margin: "14px 0 0", textAlign: "center", fontFamily: MONO, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6B6359" }}>
        Konsultatsiya tekin · Spam yo&apos;q
      </p>

      {/* Messages */}
      {success && (
        <div style={{ marginTop: "18px", padding: "12px 16px", background: "#ECFAEC", borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: "#059669", borderRadius: "6px", fontSize: "13px", lineHeight: 1.5, color: "#065F46" }}>
          {success}
        </div>
      )}
      {error && (
        <div style={{ marginTop: "18px", padding: "12px 16px", background: "#FAE8DF", borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: "#B8431C", borderRadius: "6px", fontSize: "13px", lineHeight: 1.5, color: "#8A2F12" }}>
          {error}
        </div>
      )}
    </form>
  );
}