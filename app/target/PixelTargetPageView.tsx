// app/target/PixelTargetPageView.tsx
"use client";

import { useEffect } from "react";

const PIXEL_ID_TARGET = "2398531020592784"; // o'zingizning Target pixel ID ingizni yozing

export default function PixelTargetPageView() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("trackSingle", PIXEL_ID_TARGET, "PageView");
      // Agar shu sahifada Lead event ham yubormoqchi bo'lsangiz:
      // (window as any).fbq("trackSingle", PIXEL_ID_TARGET, "Lead");
    }
  }, []);

  return null;
}
