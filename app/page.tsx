// app/page.tsx — Bosh sahifa: Performance Marketing / Target landing (WebLanding)
import type { Metadata } from "next";
import WebLanding from "@/components/target/WebLanding";
import Otzif from "@/components/Otziflar/otzif";

const SITE = "https://vision-group.uz";

export const metadata: Metadata = {
  title:
    "Target & Performance Marketing kursi — Meta Pixel + CAPI | Vision Group",
  description:
    "Uchqun Turdiyev jamoasi — Vision Group. To'g'ri target yoqish, Performance Marketing, Meta (Instagram/Facebook) Ads, Pixel + CAPI va CRM integratsiyasi orqali algoritmga aniq signal bering: CPM tushadi, lid arzonlashadi, ROAS oshadi.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Vision Group",
    locale: "uz_UZ",
    title:
      "Target & Performance Marketing kursi — Meta Pixel + CAPI | Vision Group",
    description:
      "Uchqun Turdiyev jamoasi. To'g'ri target, Performance Marketing, Meta Ads, Pixel + CAPI va CRM integratsiyasi bilan barqaror sotuv oqimi.",
  },
};

// ✅ Course (kurs) JSON-LD — "performance marketing", "target", "Meta" so'rovlari uchun
const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Performance Marketing — Target kursi",
  description:
    "2 oyda to'g'ri target yoqish, Meta Pixel + CAPI sozlash va CRM integratsiyasini real biznesda o'rganish.",
  provider: {
    "@type": "Organization",
    name: "Vision Group",
    sameAs: SITE,
  },
  inLanguage: "uz",
  about: ["Performance Marketing", "Target reklama", "Meta Ads", "Pixel va CAPI"],
  offers: {
    "@type": "Offer",
    price: "6400000",
    priceCurrency: "UZS",
    availability: "https://schema.org/InStock",
    url: `${SITE}/`,
  },
};

export default function Home() {
  return (
    <div className="relative bg-[#080F28] text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <WebLanding />
      <Otzif ctaHref="#ariza" />
    </div>
  );
}
