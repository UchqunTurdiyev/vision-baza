// app/target/PixelTargetPageView.tsx
"use client";

import { useEffect } from "react";

const PIXEL_ID_SALES = "874895024822350"; // o'zingizning Target pixel ID ingizni yozing

export default function PixelSotuvPageView() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("trackSingle", PIXEL_ID_SALES, "PageView");
      // Agar shu sahifada Lead event ham yubormoqchi bo'lsangiz:
      // (window as any).fbq("trackSingle", PIXEL_ID_TARGET, "Lead");
    }
  }, []);

  return null;
}
