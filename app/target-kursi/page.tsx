

import RapidLanch from "@/components/target/RapidLaunchLanding";
import Otzif from "@/components/Otziflar/otzif";
// import RapidLandingPage from "@/components/target/RapidLaunchLanding";

// app/target-kursi/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const SITE = "https://vision-group.uz";
const URL = `${SITE}/target-kursi`;

export const metadata: Metadata = {

  // Asosiy so'rov: "target kursi samarqand"
  title: "Performance Marketing va Target kursi. Mijozlaringizga real sotuv olib kelib, natijadan ulush oladigan darajada professional o‘rganing.",
  description:
    "2 oylik Performance Marketing & Target kursi: to'g'ri target, Pixel + CAPI va CRM integratsiyasi. Lid emas — sotuv olib keladigan targetolog bo'ling.",
  keywords: [
    "target kursi samarqand",
    "Uchqun Turdiyev",
    "meta ads o‘rganish",
    "facebook reklama qanday yoqiladi",
    "xususiy maktab uchun target reklama",
    "meta ads kurs",
    "facebook ads kurs",
    "targetolog kursi samarqand",
  ],
  // Shu landing endi bosh sahifada ham turadi — dublikat kontent bo'lmasligi uchun kanonik manzil "/"
  alternates: {
    canonical: SITE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Rich snippet uchun foydali
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: URL,
    title: "Target kursi Samarqandda — Meta Ads o‘rganish | Vision Group",
    description:
      "Meta Ads o‘rganish, Facebook reklama qanday yoqiladi va xususiy maktab uchun target reklama bo‘yicha amaliy kurs. Samarqand.",
    siteName: "Vision Group",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Target kursi Samarqandda — Meta Ads o‘rganish | Vision Group",
    description:
      "Meta Ads o‘rganish + Facebook reklama qanday yoqiladi + xususiy maktab uchun target reklama strategiyasi.",
  },
};


export default function TargetKursPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Target kursi Samarqandda — Meta Ads o‘rganish",
    description:
      "Meta Ads o‘rganish, Facebook reklama qanday yoqiladi va xususiy maktab uchun target reklama bo‘yicha amaliy kurs. Samarqand.",
    provider: {
      "@type": "Organization",
      name: "Vision Group",
      url: SITE,
    },
    url: URL,
    inLanguage: "uz",
    audience: {
      "@type": "Audience",
      audienceType: "Tadbirkorlar, marketologlar, targetologlar, xususiy maktab egalari",
    },
  };

  return (
    <div className="relative bg-[#080F28] text-white overflow-hidden">
       <Script
        id="ld-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <RapidLanch socialProof={<Otzif ctaHref="#yozilish" ctaText="Qo'shimcha ma'lumot olish" ctaTitle="Kurs haqida ko'proq bilmoqchimisiz?" leadMode="info" />} />
    </div>
  );
}
