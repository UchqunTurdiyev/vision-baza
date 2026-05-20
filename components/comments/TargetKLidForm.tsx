"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

// ============ HELPERS ============

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
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

// Unique event ID — Pixel va CAPI deduplikatsiyasi uchun
function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback eski brauzerlar uchun
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

// Facebook Pixel mavjud yoki yo'qligini tekshirish
type FbqFn = (
  command: string,
  event: string,
  params?: Record<string, unknown>,
  options?: { eventID?: string }
) => void;

function getFbq(): FbqFn | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

// Bilim darajasidan budget value chiqarish (CAPI uchun)
function levelToValue(level: string): number {
  switch (level) {
    case "tajribali":
      return 4470000; // VIP/Pro tarifi narxi
    case "ozgina tajriba":
      return 1470000; // Standart tarif
    case "boshlovchi":
    default:
      return 1470000;
  }
}

// ============ STYLES ============

const SERIF = "'Fraunces', Georgia, serif";
const MONO = "'Geist Mono', ui-monospace, monospace";
const SANS = "'Geist', -apple-system, BlinkMacSystemFont, sans-serif";

const COLORS = {
  bg: "#050B2B",
  bgCard: "#07113a",
  bgCard2: "#0A1547",
  ink: "#FFFFFF",
  ink2: "rgba(255,255,255,0.75)",
  muted: "rgba(255,255,255,0.5)",
  line: "rgba(255,255,255,0.15)",
  accent: "#FCD34D",
  accent2: "#FBBF24",
};

const BASE_INPUT: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: COLORS.line,
  borderRadius: "8px",
  background: COLORS.bgCard2,
  padding: "12px 16px",
  fontSize: "15px",
  fontFamily: SANS,
  color: COLORS.ink,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
  textAlign: "left",
  boxShadow: "none",
};

const FOCUS_INPUT: React.CSSProperties = {
  ...BASE_INPUT,
  borderColor: COLORS.accent,
  background: COLORS.bg,
  boxShadow: `0 0 0 3px rgba(252,211,77,0.15)`,
};

const LABEL: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontSize: "10px",
  fontFamily: MONO,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: COLORS.muted,
  textAlign: "left",
};

// ============ COMPONENT ============

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
    const lastName = String(formData.get("lastName") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const level = String(formData.get("level") ?? "").trim();
    const phoneRaw = String(formData.get("phone") ?? "").trim();

    // ===== VALIDATSIYA =====
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

    // ===== META PIXEL + CAPI DEDUP =====
    const eventId = generateEventId();
    const value = levelToValue(level);
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    // 1. Browser tomonida Pixel orqali Lead event
    const fbq = getFbq();
    if (fbq) {
      try {
        fbq(
          "track",
          "Lead",
          {
            value: value,
            currency: "UZS",
            content_name: "Target Kursi 5.0",
            content_category: "course",
          },
          { eventID: eventId } // ✅ CAPI bilan dedup uchun bir xil ID
        );
      } catch (pixelErr) {
        console.warn("Pixel Lead event yuborishda xatolik:", pixelErr);
      }
    }

    // ===== PAYLOAD =====
    const payload = {
      fullName: `${firstName} ${lastName}`.trim(),
      phone: normalized,
      source: "target-kursi-v2",
      note: `Yosh: ${age}; Shahar: ${city}; Daraja: ${level}`,
      // ✅ CAPI uchun
      fbp: fbp || undefined,
      fbc: fbc || undefined,
      eventId: eventId,
      // ✅ Budget va businessType — CAPI value/category uchun
      budget: String(value),
      businessType: level || "course",
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
        background: COLORS.bgCard,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: COLORS.line,
        borderRadius: "16px",
        padding: "32px",
        fontFamily: SANS,
        color: COLORS.ink,
        boxShadow: "0 20px 50px -20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <span style={{ display: "block", height: "1px", width: "32px", background: COLORS.accent }} />
        <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.accent }}>
          Ariza · Yozilish
        </span>
      </div>

      {/* Title */}
      <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "30px", lineHeight: 1.1, letterSpacing: "-0.02em", color: COLORS.ink }}>
        Bepul{" "}
        <span style={{ fontStyle: "italic", fontWeight: 500, color: COLORS.accent }}>maslahat</span>
        {" "}olish
      </h3>

      <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: 1.6, color: COLORS.ink2 }}>
        Ma&apos;lumotlaringizni qoldiring — administrator{" "}
        <strong style={{ color: COLORS.ink, fontWeight: 600 }}>24 soat ichida</strong>{" "}
        bog&apos;lanadi.
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: COLORS.line, margin: "24px 0" }} />

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
            <option value="" disabled style={{ background: COLORS.bgCard, color: COLORS.muted }}>Tanlang</option>
            <option value="boshlovchi" style={{ background: COLORS.bgCard, color: COLORS.ink }}>Boshlovchi (hech ishlamaganman)</option>
            <option value="ozgina tajriba" style={{ background: COLORS.bgCard, color: COLORS.ink }}>Ozroq tajribam bor</option>
            <option value="tajribali" style={{ background: COLORS.bgCard, color: COLORS.ink }}>Tajribali (reklama yoqib kelaman)</option>
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
          background: COLORS.accent,
          color: COLORS.bg,
          borderWidth: "0",
          borderStyle: "solid",
          borderColor: "transparent",
          borderRadius: "8px",
          fontFamily: SANS,
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.02em",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 10px 25px -10px rgba(252,211,77,0.4)",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = COLORS.accent2;
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 15px 30px -10px rgba(252,211,77,0.5)";
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 25px -10px rgba(252,211,77,0.4)";
          }
        }}
      >
        {loading ? (
          <>
            <style>{`@keyframes vgspin{to{transform:rotate(360deg)}}`}</style>
            <span style={{ width: 16, height: 16, borderRadius: "50%", borderWidth: 2, borderStyle: "solid", borderColor: "rgba(5,11,43,0.3)", borderTopColor: COLORS.bg, animation: "vgspin 0.8s linear infinite", display: "inline-block" }} />
            Yuborilmoqda...
          </>
        ) : (
          <>
            Arizani yuborish
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </>
        )}
      </button>

      {/* Fineprint */}
      <p style={{ margin: "14px 0 0", textAlign: "center", fontFamily: MONO, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: COLORS.muted }}>
        Konsultatsiya tekin · Spam yo&apos;q
      </p>

      {/* Messages */}
      {success && (
        <div style={{
          marginTop: "18px",
          padding: "12px 16px",
          background: "rgba(16,185,129,0.15)",
          borderLeftWidth: "2px",
          borderLeftStyle: "solid",
          borderLeftColor: "#10B981",
          borderRadius: "6px",
          fontSize: "13px",
          lineHeight: 1.5,
          color: "#6EE7B7"
        }}>
          {success}
        </div>
      )}
      {error && (
        <div style={{
          marginTop: "18px",
          padding: "12px 16px",
          background: "rgba(239,68,68,0.15)",
          borderLeftWidth: "2px",
          borderLeftStyle: "solid",
          borderLeftColor: "#EF4444",
          borderRadius: "6px",
          fontSize: "13px",
          lineHeight: 1.5,
          color: "#FCA5A5"
        }}>
          {error}
        </div>
      )}
    </form>
  );
}