import type { Metadata } from "next";
import TargetCapiLanding from "@/components/target/TargetCapiLanding";

const SITE = "https://vision-group.uz";
const URL = `${SITE}/target-capi`;

export const metadata: Metadata = {
  title: "CAPI nima va nega kerak? — Meta CRM integratsiyasi | Vision Group",
  description:
    "Meta Pixel cheklovlari sababli qimmat va sifatsiz lidlar olayapsizmi? CAPI (Conversions API) va CRM integratsiyasi orqali sotib olgan mijozlarni Meta'ga qanday ko'rsatish va lidlarni arzonlashtirish mumkinligini bilib oling.",
  alternates: {
    canonical: URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: URL,
    title: "CAPI nima va nega kerak? — Meta CRM integratsiyasi | Vision Group",
    description:
      "Meta Pixel cheklovlari, CAPI yechimi va CRM integratsiyasi orqali lidlarni arzonlashtirish.",
    siteName: "Vision Group",
    locale: "uz_UZ",
  },
};

export default function TargetCapiPage() {
  return (
    <main className="relative bg-[#080F28] text-white overflow-hidden">
      <TargetCapiLanding />
    </main>
  );
}
