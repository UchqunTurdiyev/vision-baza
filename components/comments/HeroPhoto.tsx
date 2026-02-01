"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* Skeleton (rasm ochilguncha) */}
      <div
        aria-hidden
        className={[
          "absolute inset-0 transition-opacity duration-300",
          loaded ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <div className="h-full w-full bg-white/5" />
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Image
        src="/im.jpeg"
        alt="Uchqun Turdiyev"
        width={900}
        height={900}
        priority
        className={[
          "h-[260px] w-full object-cover sm:h-[300px]",
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
