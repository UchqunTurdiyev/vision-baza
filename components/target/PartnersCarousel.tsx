// components/target/PartnersCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "ISFT Institute", logo: "/partners/isft.svg" },
  { name: "Japan International School", logo: "/partners/japan-school.svg" },
  { name: "Med Expert Clinic", logo: "/partners/med-expert.svg" },
  { name: "Vision Group", logo: "/partners/vision-group.svg" },
  { name: "M-EDU", logo: "/partners/m-edu.svg" },
  { name: "Industrial Construction Bank", logo: "/partners/icb.svg" },
];

// 3 tadan qilib slidelarga bo'lib olamiz
const slides: Partner[][] = [
  partners.slice(0, 3),
  partners.slice(3, 6),
];

export function PartnersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Avtomatik aylanish
  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 soniyada bitta slayd almashadi

    return () => clearInterval(id);
  }, []);

  if (partners.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg">
      <div className="flex items-center justify-between gap-4 pb-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
          HAMKORLARIMIZ
        </h3>
        <p className="text-[11px] text-slate-500">
          Biz bilan birga ishlayotgan ta’lim, tibbiyot va biznes tashkilotlari
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="grid min-w-full grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {slide.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3"
                >
                  {/* Logo */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-28 items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-10 max-w-full object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-center text-slate-300">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pastdagi nuqtalar (indicator) */}
      {slides.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 w-4 rounded-full transition ${
                idx === activeIndex
                  ? "bg-emerald-400"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Slide ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}


