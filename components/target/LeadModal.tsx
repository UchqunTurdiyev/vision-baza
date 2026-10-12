"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
import { courseFormCopy, infoFormCopy } from "@/components/target/courseFormCopy";

/**
 * Global lid modal.
 * Sahifadagi istalgan element `data-lead-open` atributiga ega bo'lsa,
 * unga bosilganda forma modal ko'rinishida ochiladi.
 *   data-lead-open                 -> kursga yozilish (course)
 *   data-lead-open data-lead-mode="magnit" -> bepul lid magnit
 * Bu progressive enhancement: JS bo'lmasa CTA'lar #yozilish ga sakraydi.
 */
type Props = {
  /** Kurs formasi ustidagi lenta. Faqat real joy soni bo'lsa bering; bo'lmasa ko'rinmaydi. */
  scarcity?: string;
};

export default function LeadModal({ scarcity }: Props = {}) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"course" | "info" | "magnit">("course");
  const [tariff, setTariff] = useState<string | undefined>(undefined);
  const [leadValue, setLeadValue] = useState<number>(3200000);

  const close = useCallback(() => setOpen(false), []);
  const cardRef = useRef<HTMLDivElement>(null);

  // Ochilganda fokus forma ichidagi birinchi maydonga o'tadi (klaviatura va ekran o'quvchilar uchun)
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => cardRef.current?.querySelector<HTMLInputElement>("input:not([tabindex='-1'])")?.focus(), 50);
    return () => window.clearTimeout(id);
  }, [open, mode]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-lead-open]");
      if (!el) return;
      e.preventDefault();
      const attr = el.getAttribute("data-lead-mode");
      const m = attr === "magnit" ? "magnit" : attr === "info" ? "info" : "course";
      setMode(m);
      // Tarif kartalaridan kelgan ma'lumot (data-lead-tariff / data-lead-value)
      const t = el.getAttribute("data-lead-tariff") || undefined;
      const v = Number(el.getAttribute("data-lead-value"));
      setTariff(t);
      setLeadValue(Number.isFinite(v) && v > 0 ? v : 3200000);
      setOpen(true);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const isMagnit = mode === "magnit";
  const isInfo = mode === "info";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mode === "info" ? "Qo'shimcha ma'lumot olish" : mode === "magnit" ? "Bepul material olish" : "Kursga yozilish"}
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(4,9,28,0.84)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "24px 16px",
        overflowY: "auto",
        animation: "vgModalIn .22s ease-out",
      }}
    >
      <style>{`
        @keyframes vgModalIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes vgCardIn { from { opacity: 0; transform: translateY(16px) scale(.98) } to { opacity: 1; transform: none } }
      `}</style>

      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 480,
          margin: "auto",
          animation: "vgCardIn .26s cubic-bezier(.2,.7,.3,1)",
        }}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Yopish"
          onClick={close}
          style={{
            position: "absolute",
            top: -14,
            right: -6,
            zIndex: 2,
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid rgba(120,150,225,0.3)",
            background: "#0E1A3D",
            color: "#fff",
            fontSize: 18,
            lineHeight: 1,
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
          }}
        >
          ✕
        </button>

        {/* Scarcity strip */}
        {mode === "course" && scarcity && (
          <div
            style={{
              background: "#818CF8",
              color: "#0A0F2C",
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textAlign: "center",
              padding: "8px 12px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            {scarcity}
          </div>
        )}

        {mode === "course" && tariff && (
          <div
            style={{
              background: "#0E1A3D",
              color: "#C7CCF5",
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              textAlign: "center",
              padding: "8px 12px",
              borderLeft: "1px solid rgba(120,150,225,0.3)",
              borderRight: "1px solid rgba(120,150,225,0.3)",
            }}
          >
            Tanlangan tarif: <strong style={{ color: "#818CF8" }}>{tariff}</strong>
          </div>
        )}

        <TargetKLidForm
          variant={mode}
          leadValue={isMagnit ? 0 : leadValue}
          tariff={mode === "course" ? tariff : undefined}
          {...(isMagnit ? {} : isInfo ? infoFormCopy : courseFormCopy)}
        />
      </div>
    </div>
  );
}
