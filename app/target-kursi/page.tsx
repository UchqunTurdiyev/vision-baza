// app/target-kursi/page.tsx
import type { Metadata } from "next";

import RapidLanch from "@/components/target/RapidLaunchLanding";
// import RapidLandingPage from "@/components/target/RapidLaunchLanding";


export const metadata: Metadata = {
  title: "Target Kursi — 10 daqiqada kampaniya ishga tushirish (Vision Group)",
  description:
    "2025/2026 uchun yangilangan Meta Ads tizimi: Rapid Launch & Scale framework. Kreativga urg'u, tez sozlash, aniq scale yo'li.",
  openGraph: {
    title: "Target Kursi — Rapid Launch & Scale",
    description:
      "Meta Ads kampaniyalarini 10 daqiqada ishga tushirish va masshtablash uchun amaliy tizim.",
    url: "https://vision-group.uz/target-kursi",
    siteName: "Vision Group",
    type: "website",
  },
  alternates: {
    canonical: "https://vision-group.uz/target-kursi",
  },
};


export default function TargetKursPage() {
  return (
    <main className="relative  bg-[#07122a] text-white overflow-hidden">
        <RapidLanch />
    </main>
  );
}
