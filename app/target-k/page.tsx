import type { Metadata } from "next";
import TargetKShortLanding from "@/components/target/TargetKShortLanding";

const SITE = "https://vision-group.uz";
const URL = `${SITE}/target-k`;

export const metadata: Metadata = {
  title: "Performance Marketing — Target kursi | Vision Group",
  description:
    "Targetni endi o'rganayotganlar va biznes egalari uchun 2 oylik Performance Marketing kursi. Meta mutaxassislari texnikalari, CRM integratsiyasi, kuchli taklif, sotuv sayti va copywriting.",
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
    title: "Performance Marketing — Target kursi | Vision Group",
    description:
      "Targetni endi o'rganayotganlar va biznes egalari uchun 2 oylik Performance Marketing kursi.",
    siteName: "Vision Group",
    locale: "uz_UZ",
  },
};

export default function TargetKPage() {
  return (
    <main className="relative bg-[#080F28] text-white overflow-hidden">
      <TargetKShortLanding />
    </main>
  );
}
