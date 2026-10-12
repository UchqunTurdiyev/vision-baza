// app/target/PixelTargetPageView.tsx
"use client";

import { useEffect } from "react";

import { PIXEL_ID_TARGET } from "@/lib/pixels";

type FbqWindow = Window & { fbq?: (...args: unknown[]) => void };

export default function PixelTargetPageView() {
  useEffect(() => {
    const fbq = typeof window !== "undefined" ? (window as FbqWindow).fbq : undefined;
    if (fbq) {
      fbq("trackSingle", PIXEL_ID_TARGET, "PageView");
      // Agar shu sahifada Lead event ham yubormoqchi bo'lsangiz:
      // fbq("trackSingle", PIXEL_ID_TARGET, "Lead");
    }
  }, []);

  return null;
}
