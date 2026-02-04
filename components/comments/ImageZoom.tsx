"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MetaImageZoom() {
  const [open, setOpen] = useState(false);

  // ESC bilan yopish
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* THUMBNAIL */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative h-32 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050B2B] text-left"
        aria-label="Rasmni kattalashtirish"
      >
        <Image
          src="/meta.png"
          alt="META"
          fill
          className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-2 right-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            Kattalashtirish
          </div>
        </div>
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#050B2B]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-xl bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
              aria-label="Yopish"
            >
              ✕
            </button>

            {/* Full image */}
            <div className="relative h-[75vh] w-full">
              <Image
                src="/meta.png"
                alt="META"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
