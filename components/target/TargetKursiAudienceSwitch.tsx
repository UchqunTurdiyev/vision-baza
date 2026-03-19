"use client";

import { useState } from "react";
import { CheckCircle, PlayCircle, ShieldCheck, Zap } from "lucide-react"; // lucide-react o'rniga oddiy SVG ishlatsangiz ham bo'ladi

export default function TargetKursiAudienceSwitch() {
  const [active, setActive] = useState<"new" | "biz" | "pro">("new");

  const tabs = [
    { id: "new", label: "Noldan boshlovchi" },
    { id: "biz", label: "Tadbirkor" },
    { id: "pro", label: "Targetolog (Pro)" },
  ] as const;

  return (
    <div className="mt-10 max-w-[920px] mx-auto">
      {/* 1. Segment Tanlash - Modern Tab style */}
      <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              active === tab.id
                ? "bg-yellow-300 text-black shadow-lg shadow-yellow-300/20 scale-[1.02]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 2. Content Area with Animation Look */}
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/10 to-transparent p-6 md:p-10">
        
        {/* BG Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-300/10 blur-[100px] rounded-full"></div>

        {active === "new" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-black leading-tight italic">
              Targetni o‘rganib <span className="text-yellow-300">Daromadli Kasb</span> egasi bo‘ling
            </h2>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-white/80 leading-relaxed">
                  Ko&apos;pchilik kursni tugatib <span className="text-white font-bold underline decoration-yellow-300">&quot;Mijozni qayerdan topaman?&quot;</span> deb qo&apos;rqadi. 
                </p>
                <div className="space-y-3">
                  <BenefitItem text="200 minglik 'knopka bosishni' emas, strategiyani o'rganasiz" />
                  <BenefitItem text="Mijozga natija (pul) olib kelish tizimi" />
                  <BenefitItem text="Real loyihalarda portfolio yig'ish" />
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="flex items-center gap-2 text-yellow-300 font-bold mb-4">
                  <ShieldCheck className="w-5 h-5" /> 100% Pulni Qaytarish Kafolati
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Agar 1-oy davomida darslar sifatiga shubha qilsangiz, hech qanday savollarsiz to‘lovingizni <b>to‘liq qaytarib beraman</b>. Men natijaga javob beraman.
                </p>
              </div>
            </div>
          </div>
        )}

        {active === "biz" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-black leading-tight italic">
              Reklamaga pul <span className="text-yellow-300">Sarflamang</span>, Uni <span className="text-yellow-300">Tikib Foyda Oling</span>
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-white/80">
                  Target — bu jarayonning oxiri. Ungacha bo&apos;lgan <span className="font-bold text-white italic">&quot;Marketing Voronkasi&quot;</span> xato bo&apos;lsa, reklama yordam bermaydi.
                </p>
                <div className="space-y-3">
                  <BenefitItem text="Kuchli 'Offer' va sotuvchi kreativlar siri" />
                  <BenefitItem text="Targetni reklama xarajati emas, investitsiyaga aylantirish" />
                  <BenefitItem text="Agentliklarni nazorat qilishni o'rganish" />
                </div>
              </div>
              
              <div className="bg-[#0a154d] rounded-2xl p-6 border border-yellow-300/30 relative overflow-hidden">
                 <Zap className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-300/10" />
                 <h3 className="font-bold text-white mb-2 italic">Natija:</h3>
                 <p className="text-sm text-white/80">Tizimli savdo o&apos;sishi va har bir sarflangan $1 uchun maksimal daromad (ROAS) olishni boshlaysiz.</p>
              </div>
            </div>
          </div>
        )}

        {active === "pro" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-black leading-tight italic text-yellow-300">
              $200 dan $1000+ gacha O&apos;sish Vaqti Keldi
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-xl text-white/90 font-medium">
                Oddiy targetolog bo&apos;lishni bas qiling. <span className="underline decoration-yellow-300">Performance Marketologga</span> aylaning.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                 <ProCard title="Katta Loyihalar" desc="Yirik bizneslar bilan ishlash va KPI qo'yish" />
                 <ProCard title="Natijadan Ulush" desc="Faqat oylikka emas, foydaga sherik bo'lish" />
                 <ProCard title="Meta Audit" desc="Meta mutaxassislari darajasida analiz" />
              </div>
            </div>
          </div>
        )}

        {/* 3. Common Footer: How it works */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
           <div className="flex items-start gap-4">
              <div className="bg-yellow-300 text-black p-2 rounded-lg"><PlayCircle className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold">Jonli Zoom Darslar</h4>
                <p className="text-xs text-white/50">Yozuv emas, interaktiv muloqot va shaxsiy tahlil</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <div className="bg-yellow-300 text-black p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold">24/7 Support</h4>
                <p className="text-xs text-white/50">Qila olmagan joyingizda individual yordam</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// Yordamchi komponentlar
function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="h-1.5 w-1.5 rounded-full bg-yellow-300 shrink-0" />
      <span className="text-md font-medium">{text}</span>
    </div>
  );
}

function ProCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-yellow-300/50 transition-colors">
      <h4 className="text-yellow-300 font-bold mb-2">{title}</h4>
      <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}