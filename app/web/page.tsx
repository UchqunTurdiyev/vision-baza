import WebLanding from "@/components/target/WebLanding";
import type { Metadata } from "next";

const SITE = "https://vision-group.uz";
const URL = `${SITE}/web`;

export const metadata: Metadata = {
  title: "To'g'ri target yoqish + CAPI orqali CRM integratsiyasi | Performance Marketing kursi",
  description:
    "Target yoqishni hamma biladi, to'g'ri yoqishni kam kishi. Meta Pixel + CAPI server-eventlari va CRM integratsiyasi orqali algoritmga aniq signal bering — CPM tushadi, lid arzonlashadi, ROAS oshadi. Performance Marketing kursi.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "To'g'ri target yoqish + CAPI orqali CRM integratsiyasi | Vision Group",
    description:
      "Pixel + CAPI + CRM integratsiyasi: «TO'LOV QILDI» avtomatik Meta'ga uzatiladi, algoritm real xaridorlarni qidiradi. Performance Marketing kursida amaliy o'rganasiz.",
    siteName: "Vision Group",
    locale: "uz_UZ",
  },
};

export default function WebPage() {
  return (
    <main className="relative bg-[#080F28] text-white overflow-hidden">
      <WebLanding />
    </main>
  );
}
