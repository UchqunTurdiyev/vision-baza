"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  /** Lead qiymati (CAPI value). Default: Standart tarif narxi. */
  leadValue?: number;
  /** "course" — kursga yozilish; "magnit" — bepul lid magnit. */
  variant?: "course" | "magnit";
  /** Sarlavha / tugma matnini majburlab almashtirish (ixtiyoriy). */
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaText?: string;
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
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

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

// ============ STYLES (Yashil tema) ============

const SERIF = "'Fraunces', Georgia, serif";
const MONO = "'Geist Mono', ui-monospace, monospace";
const SANS = "'Geist', -apple-system, BlinkMacSystemFont, sans-serif";

const COLORS = {
  bg: "#071035",
  bgCard: "#0C1A4D",
  bgCard2: "#122563",
  ink: "#FFFFFF",
  ink2: "rgba(255,255,255,0.78)",
  muted: "rgba(255,255,255,0.55)",
  line: "rgba(130,160,235,0.24)",
  accent: "#818CF8",
  accent2: "#6366F1",
};

// Tashqi wrapper uchun base — border/shadow qayta ishlatiladi
const BASE_FIELD_WRAP = (focused: boolean): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: focused ? COLORS.accent : COLORS.line,
  borderRadius: "8px",
  background: focused ? COLORS.bg : COLORS.bgCard2,
  boxShadow: focused ? `0 0 0 3px rgba(129,140,248,0.18)` : "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
  overflow: "hidden",
});

const INNER_INPUT: React.CSSProperties = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "14px 16px",
  fontSize: "16px",
  fontFamily: SANS,
  color: COLORS.ink,
  minWidth: 0,
};

// Ism va manzil uchun oddiy input wrapper
const BASE_PLAIN_WRAP = (focused: boolean): React.CSSProperties => ({
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: focused ? COLORS.accent : COLORS.line,
  borderRadius: "8px",
  background: focused ? COLORS.bg : COLORS.bgCard2,
  boxShadow: focused ? `0 0 0 3px rgba(129,140,248,0.18)` : "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
  overflow: "hidden",
});

const PLAIN_INPUT: React.CSSProperties = {
  display: "block",
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "14px 16px",
  fontSize: "16px",
  fontFamily: SANS,
  color: COLORS.ink,
  boxSizing: "border-box",
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

export function TargetKLidForm({
  className,
  leadValue = 3200000,
  variant = "course",
  title,
  subtitle,
  ctaText,
}: Props) {
  const router = useRouter();
  const isMagnit = variant === "magnit";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  // Telefon: faqat +998 dan keyingi 9 ta raqam controlled state
  const [phoneDigits, setPhoneDigits] = useState("");

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Faqat raqamlarni qoldirish, max 9 ta
    const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
    setPhoneDigits(digits);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSuccess(null);
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const name = String(formData.get("name") ?? "").trim();

    // ===== VALIDATSIYA =====
    if (!name) {
      setError("Ismingizni kiriting.");
      setLoading(false);
      return;
    }

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04FF\u0100-\u017Fʻʼ'`' -]{2,}$/u;
    if (!nameRegex.test(name)) {
      setError("Ism noto'g'ri. Faqat harflardan iborat bo'lsin (kamida 2 ta).");
      setLoading(false);
      return;
    }

    if (phoneDigits.length !== 9) {
      setError("Telefon raqamni to'liq kiriting (9 ta raqam, +998 dan keyin).");
      setLoading(false);
      return;
    }

    const normalized = `+998${phoneDigits}`;

    // ===== META PIXEL + CAPI DEDUP (Lead) =====
    const eventId = generateEventId();
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    // Browser tomonida Pixel orqali Lead event
    const fbq = getFbq();
    if (fbq) {
      try {
        fbq(
          "track",
          "Lead",
          {
            value: leadValue,
            currency: "UZS",
            content_name: isMagnit ? "Lid Magnit — Target audit" : "Performance Marketing 5.0",
            content_category: isMagnit ? "lead-magnet" : "course",
          },
          { eventID: eventId }
        );
      } catch (pixelErr) {
        console.warn("Pixel Lead event yuborishda xatolik:", pixelErr);
      }
    }

    // ===== PAYLOAD =====
    // stage: "lid" → CRM /target/new sahifasida "Lid" ustuniga tushadi
    const payload = {
      fullName: name,
      phone: normalized,
      source: isMagnit ? "lid-magnit" : "target-kursi",
      stage: "lid",           // ← CRM Kanban: birinchi ustun
      fbp: fbp || undefined,
      fbc: fbc || undefined,
      eventId,
      budget: String(leadValue),
      businessType: isMagnit ? "lead-magnet" : "course",
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

      setSuccess(
        isMagnit
          ? "Qabul qilindi! Materialni yuboryapmiz..."
          : "Arizangiz qabul qilindi! Administrator tez orada bog'lanadi."
      );
      formEl.reset();
      setPhoneDigits(""); // controlled input ham tozalanadi
      router.push(isMagnit ? "/lid-magnit/thanks" : "/target-kursi/thanks");
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
        maxWidth: "480px",
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
        boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)",
      }}
    >
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <span style={{ display: "block", height: "1px", width: "32px", background: COLORS.accent }} />
        <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.accent }}>
          {isMagnit ? "Bepul · Hoziroq" : "Ariza · Yozilish"}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "30px", lineHeight: 1.1, letterSpacing: "-0.02em", color: COLORS.ink }}>
        {title ?? (
          isMagnit ? (
            <>
              Bepul strategiyani{" "}
              <span style={{ fontStyle: "italic", fontWeight: 500, color: COLORS.accent }}>oling</span>
            </>
          ) : (
            <>
              Joyingizni{" "}
              <span style={{ fontStyle: "italic", fontWeight: 500, color: COLORS.accent }}>band qiling</span>
            </>
          )
        )}
      </h3>

      <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: 1.6, color: COLORS.ink2 }}>
        {subtitle ?? (
          isMagnit ? (
            <>
              Telefon raqamingizni qoldiring — &laquo;$1000 byudjetni boshqarish strategiyasi&raquo; PDF&apos;ini{" "}
              <strong style={{ color: COLORS.ink, fontWeight: 600 }}>darhol</strong> yuboramiz. Hech narsaga majbur emassiz.
            </>
          ) : (
            <>
              Ism va telefon — boshqa hech narsa kerak emas. Administrator{" "}
              <strong style={{ color: COLORS.ink, fontWeight: 600 }}>24 soat ichida</strong>{" "}
              bog&apos;lanadi.
            </>
          )
        )}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: COLORS.line, margin: "24px 0" }} />

      {/* Fields — 3 ta */}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

        {/* 1. Ism */}
        <div>
          <label htmlFor="name" style={LABEL}>Ismingiz</label>
          <div style={BASE_PLAIN_WRAP(focused === "name")}>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Ismingiz"
              style={PLAIN_INPUT}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        {/* 2. Telefon — +998 qotib qoladi */}
        <div>
          <label htmlFor="phone" style={LABEL}>Telefon raqamingiz</label>
          <div style={BASE_FIELD_WRAP(focused === "phone")}>
            {/* Qotib qolgan prefix */}
            <span
              style={{
                padding: "14px 0 14px 16px",
                fontSize: "16px",
                fontFamily: SANS,
                color: COLORS.ink,
                fontWeight: 500,
                userSelect: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              +998
            </span>
            {/* Separator */}
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "20px",
                background: COLORS.line,
                margin: "0 10px",
                flexShrink: 0,
                alignSelf: "center",
              }}
            />
            {/* Faqat 9 ta raqam */}
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              required
              autoComplete="tel-national"
              placeholder="90 123 45 67"
              value={phoneDigits}
              onChange={handlePhoneChange}
              style={{
                ...INNER_INPUT,
                padding: "14px 16px 14px 0",
                letterSpacing: "0.04em",
              }}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "24px",
          width: "100%",
          height: "54px",
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
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "0.02em",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 12px 30px -10px rgba(129,140,248,0.45)",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = COLORS.accent2;
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 16px 34px -10px rgba(129,140,248,0.55)";
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 12px 30px -10px rgba(129,140,248,0.45)";
          }
        }}
      >
        {loading ? (
          <>
            <style>{`@keyframes vgspin{to{transform:rotate(360deg)}}`}</style>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "rgba(6,16,11,0.3)",
                borderTopColor: COLORS.bg,
                animation: "vgspin 0.8s linear infinite",
                display: "inline-block",
              }}
            />
            Yuborilmoqda...
          </>
        ) : (
          <>
            {ctaText ?? (isMagnit ? "Bepul PDF'ni olish" : "Joyimni band qilaman")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </>
        )}
      </button>

      {/* Fineprint */}
      <p style={{ margin: "14px 0 0", textAlign: "center", fontFamily: MONO, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: COLORS.muted }}>
        {isMagnit ? "30 soniya · Spam yo'q" : "Majburiyatsiz · Spam yo'q · 30 soniya"}
      </p>

      {/* Messages */}
      {success && (
        <div
          style={{
            marginTop: "18px",
            padding: "12px 16px",
            background: "rgba(129,140,248,0.14)",
            borderLeftWidth: "2px",
            borderLeftStyle: "solid",
            borderLeftColor: COLORS.accent,
            borderRadius: "6px",
            fontSize: "13px",
            lineHeight: 1.5,
            color: "#C7CDFF",
          }}
        >
          {success}
        </div>
      )}
      {error && (
        <div
          style={{
            marginTop: "18px",
            padding: "12px 16px",
            background: "rgba(239,68,68,0.15)",
            borderLeftWidth: "2px",
            borderLeftStyle: "solid",
            borderLeftColor: "#EF4444",
            borderRadius: "6px",
            fontSize: "13px",
            lineHeight: 1.5,
            color: "#FCA5A5",
          }}
        >
          {error}
        </div>
      )}
    </form>
  );
}