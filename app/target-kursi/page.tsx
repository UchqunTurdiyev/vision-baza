// app/target-kursi/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { TargetKursLeadForm } from "@/components/comments/TargetKursLeadForm";
import Otzif from "@/components/Otziflar/otzif";
import { HeroPhoto } from "@/components/comments/HeroPhoto";

export const metadata: Metadata = {
  title: "Target kursi | Vision Group",
  description: "Minimalistik Target kursi landing. Lid forma va otziflar.",
};

function MetaMark({
  className,
}: {
  className: string;
}) {
  return (
    <Image
      src="/meta.png"
      alt=""
      width={520}
      height={520}
      className={className}
      priority={false}
    />
  );
}

export default function TargetKursPage() {
  return (
    <main className="relative min-h-screen bg-[#07122a] text-white overflow-hidden">
      {/* Background: 3x Meta watermark */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <MetaMark className="absolute -top-24 -left-20 w-[360px] opacity-[0.06] blur-[0.2px]" />
        <MetaMark className="absolute top-[22%] -right-24 w-[420px] opacity-[0.06] blur-[0.2px]" />
        <MetaMark className="absolute -bottom-28 left-[40%] w-[520px] -translate-x-1/2 opacity-[0.05] blur-[0.2px]" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(250,204,21,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* HERO (minimal) */}
        <section className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: faqat sarlavha */}
<div className="max-w-xl">
  {/* kichik label */}
  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/65">
    Vision Group • Target kursi • Performance Marketing
  </p>

  {/* sarlavha */}
  <h1 className="mt-3 text-[28px] leading-[1.08] font-extrabold sm:text-4xl lg:text-5xl">
    <span className="text-yellow-400">
      Meta mutaxassislari orqali o‘rgangan sevimli tizimimni o‘rganing
    </span>
  </h1>

  {/* izoh */}
  <p className="mt-3 text-[13px] leading-[1.6] sm:text-base text-white/75">
    Bu tizim mijozlarimiz uchun oyiga millionlab dollar byudjetlarda ham{" "}
    <span className="font-semibold text-white">barqaror natija</span> olib kelgan.
  </p>

</div>


          {/* Right: Photo + Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <HeroPhoto />

            </div>

            <div id="lead" className="mt-4 rounded-2xl border border-white/10 bg-[#061028]/60 ">
              <TargetKursLeadForm />
              {/* Eslatma: form button sariq bo‘lishi uchun TargetKursLeadForm ichida button class’ini sariq qiling */}
            </div>
          </div>
        </section>

        {/* OTZIFLAR */}
        <section id="otzif" className="mt-14">

          <Otzif />
        </section>
      </div>
    </main>
  );
}
