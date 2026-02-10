

import RapidLanch from "@/components/target/RapidLaunchLanding";
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
    "Samarqandda Target kursi: Ushbu kursda siz kuchli offer va sotuv postlari, performance marketing va target (Meta Ads), veb-sayt va voronka tizimi, kichik biznes uchun CRM, lid magnit hamda ish topish ko‘nikmalarini amaliy кейslar orqali chuqur o‘zlashtirasiz.",
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
  alternates: {
    canonical: URL,
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
    images: [
      {
        url: `${SITE}/og/002.avif`, // agar og rasm bo'lsa
        width: 1200,
        height: 630,
        alt: "Target kursi Samarqand — Meta Ads o‘rganish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Target kursi Samarqandda — Meta Ads o‘rganish | Vision Group",
    description:
      "Meta Ads o‘rganish + Facebook reklama qanday yoqiladi + xususiy maktab uchun target reklama strategiyasi.",
    images: [`${SITE}/og/002.avif`],
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
    <main className="relative  bg-[#07122a] text-white overflow-hidden">
       <Script
        id="ld-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <RapidLanch />
    </main>
  );
}
