"use client";

import { useEffect, useState, useCallback } from "react";
import { TargetKLidForm } from "@/components/comments/TargetKLidForm";

/**
 * Global lid modal.
 * Sahifadagi istalgan element `data-lead-open` atributiga ega bo'lsa,
 * unga bosilganda forma modal ko'rinishida ochiladi.
 *   data-lead-open                 -> kursga yozilish (course)
 *   data-lead-open data-lead-mode="magnit" -> bepul lid magnit
 * Bu progressive enhancement: JS bo'lmasa CTA'lar #yozilish ga sakraydi.
 */
export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"course" | "magnit">("course");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-lead-open]");
      if (!el) return;
      e.preventDefault();
      const m = el.getAttribute("data-lead-mode") === "magnit" ? "magnit" : "course";
      setMode(m);
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

  return (
    <div
      role="dialog"
      aria-modal="true"
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
            border: "1px solid rgba(130,160,235,0.32)",
            background: "#0C1A4D",
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
        {!isMagnit && (
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
            5.0 oqim · Atigi 7 / 15 joy qoldi
          </div>
        )}

        <TargetKLidForm variant={mode} leadValue={isMagnit ? 0 : 3200000} />
      </div>
    </div>
  );
}
