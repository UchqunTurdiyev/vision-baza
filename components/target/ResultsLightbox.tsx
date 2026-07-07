"use client";

/**
 * ResultsLightbox — CAPI/Pixel natijalarini (kichik screenshot) ko'rsatadi.
 * Bosilganda katta ekranda ochiladi, yana bosilsa o'z holiga qaytadi (yopiladi).
 */

import { useEffect, useState } from "react";

const RESULTS = [
  {
    src: "/natija/natija-1.png",
    alt: "CAPI natija — kunlik lid va xarid statistikasi, Purchase CVR 50%",
  },
  {
    src: "/natija/natija-2.png",
    alt: "CAPI natija — umumiy lid va xarid statistikasi, Purchase CVR 21.79%",
  },
];

const styles = `
.vg-res-wrap { margin: 34px auto 0; max-width: 640px; text-align: center; }
.vg-res-grid { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.vg-res-thumb { border: 1px solid rgba(120,150,225,0.18); border-radius: 12px; overflow: hidden; cursor: zoom-in; background: #0E1A3D; padding: 0; width: 260px; max-width: 46%; transition: transform .2s ease, box-shadow .2s ease; }
.vg-res-thumb:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -20px rgba(99,102,241,0.55); }
.vg-res-thumb:focus-visible { outline: 2px solid #818CF8; outline-offset: 2px; }
.vg-res-thumb img { display: block; width: 100%; height: auto; }
.vg-res-caption { font-size: 15px; color: rgba(255,255,255,0.82); margin-top: 18px; line-height: 1.6; }
.vg-res-caption strong { color: #818CF8; }
.vg-res-note { font-size: 12.5px; color: rgba(255,255,255,0.5); margin-top: 8px; line-height: 1.6; }
.vg-lightbox { position: fixed; inset: 0; background: rgba(4,7,20,0.92); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 999; padding: 24px; cursor: zoom-out; animation: vgFadeIn .18s ease; }
.vg-lightbox img { max-width: min(94vw, 900px); max-height: 88vh; width: auto; height: auto; border-radius: 14px; box-shadow: 0 40px 100px -20px rgba(0,0,0,0.7); cursor: zoom-out; }
.vg-lightbox-close { position: absolute; top: 22px; right: 26px; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 18px; line-height: 1; display: flex; align-items: center; justify-content: center; cursor: pointer; }
@keyframes vgFadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

export default function ResultsLightbox() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vg-res-wrap">
        <div className="vg-res-grid">
          {RESULTS.map((r, i) => (
            <button
              key={r.src}
              type="button"
              className="vg-res-thumb"
              onClick={() => setActive(i)}
              aria-label="Natijani kattalashtirish"
            >
              <img src={r.src} alt={r.alt} loading="lazy" />
            </button>
          ))}
        </div>

        <p className="vg-res-caption">
          <strong>CAPI</strong> orqali biz sotuv konversiyasini eng kamida{" "}
          <strong>21%</strong> dan <strong>50%</strong> gacha ko&apos;rishimiz mumkin.
        </p>
        <p className="vg-res-note">
          Purchase CVR — bu sotuv konversiyasi, ya&apos;ni tushgan liddan nechtasi
          sotib olgani haqidagi ko&apos;rsatkich.
        </p>
      </div>

      {active !== null && (
        <div
          className="vg-lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="vg-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Yopish"
          >
            ✕
          </button>
          <img src={RESULTS[active].src} alt={RESULTS[active].alt} />
        </div>
      )}
    </>
  );
}
