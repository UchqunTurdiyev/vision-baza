/* eslint-disable @next/next/no-img-element */
import TargetLeadNewPage from "@/components/target/TargetLeadNewPage";
import type { Metadata } from "next";
import PixelTargetPageView from "./PixelTargetPageView";

export const metadata: Metadata = {
  title: "Target reklama xizmatlari | Vision Group",
  description:
    "Instagram va Facebook orqali barqaror lead oqimini yo'lga qo'yuvchi professional target reklama xizmatlari.",
};

const packages = [
  {
    name: "Start",
    desc: "Birinchi reklama kampaniyasi uchun",
    features: ["Target strategiya",  "Sotuv post", "Professional target"],
    old: "$600",
    price: "$470",
    featured: false,
  },
  {
    name: "Standart",
    desc: "Tizimli o'sish uchun",
    features: [
      "Copywriting",
      "Sayt + Telegram bot",
      "Capi orqali target",
      "Sotuv audit"
    ],
    old: "$2 000",
    price: "$970",
    featured: true,
  },
  {
    name: "Pro",
    desc: "Katta loyihalar uchun",
    features: [
       "Copywriting",
      "Sayt + Telegram bot",
      "Capi orqali target",
      "Sotuv audit",
      "CRM integratsiyasi - Meta bilan"
    ],
    old: "$1 400",
    price: "$1 200",
    featured: false,
  },
];

const brands = [
  { src: "/jap.png", name: "Japan School" },
  { src: "/ZY", name: "Ziyo Yog'dusi school" },
  { src: "/isft2.png", name: "ISFT" },
  { src: "/md.png", name: "Med Expert" },
  { src: "/TR.jpg", name: "Turon Med" },
];

const metrics = [
  { value: "ROAS 82x", label: "$1 → $82 tushum" },
  { value: "ROAS 68x", label: "$1 → $68 tushum" },
  { value: "+30%", label: "Lead o'sishi kafolati" },
];

const whyUs = [
  "Meta ekspertlari auditidan o'tgan reklama kabineti",
  "3 yillik amaliy tajriba — target va sotuv sohasida",
  "Dasturchi + targetolog — bitta tizimda ishlaymiz",
  "Natija bo'lmasa — keyingi oy xizmat tekin",
];

export default function TargetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071035] via-[#0A1640] to-[#060D2A] text-white">
      <PixelTargetPageView />

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-16">

        {/* ── HERO ── */}
        <section className="space-y-5">
          <span className="inline-block text-[11px] tracking-widest uppercase text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
            Vision Group · Target
          </span>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Meta mutaxassislaridan o&apos;rgangan texnikalarimdan foydalanib maxsulot yoki xizmatingiz uchun{" "}
            <span className="text-indigo-400">professional Target yoqib beraman</span>
          </h1>
          <p className="text-slate-300 md:text-lg leading-relaxed max-w-2xl">
            Sotuv bo'lmasa -  keyingi oy xizmatim 
            <strong className="text-white">tekin</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center h-11 px-6 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
            >
              Ariza qoldirish
            </a>
            <a
              href="#form"
              className="inline-flex items-center h-11 px-6 rounded-xl border border-slate-600 text-slate-200 hover:border-indigo-500 hover:text-white transition"
            >
              Bepul konsultatsiya
            </a>
          </div>
          <p className="text-[11px] text-slate-500">
            ISFT, Japan School, Ziyo Yog'dusi, Turon Med, Med Expert va boshqalar bilan tajriba.
          </p>
        </section>

        {/* ── METRICS ── */}
        <section className="grid grid-cols-3 gap-3">
          {metrics.map((m) => (
            <div
              key={m.value}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 text-center"
            >
              <div className="text-xl md:text-2xl font-bold text-indigo-400">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{m.label}</div>
            </div>
          ))}
        </section>

        {/* ── WHY US ── */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">Nega aynan biz?</h2>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                <span className="text-sm md:text-base text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="space-y-5">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Paketlar</h2>
            <p className="mt-1 text-sm text-slate-400">
              Konsultatsiyadan keyin aniq narx belgilanadi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-5 flex flex-col gap-4 ${
                  pkg.featured
                    ? "border-2 border-indigo-500 bg-slate-900/90 shadow-xl shadow-indigo-900/30"
                    : "border border-slate-800 bg-slate-900/60"
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block self-start text-[11px] px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    Mashhur
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{pkg.desc}</p>
                </div>
                <ul className="space-y-1.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-indigo-400 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="text-xs text-slate-500 line-through">
                    {pkg.old}
                  </div>
                  <div className="text-2xl font-bold text-indigo-400">
                    {pkg.price}
                  </div>
                </div>
                <a
                  href="#form"
                  className={`inline-flex justify-center items-center h-10 rounded-xl text-sm font-semibold transition ${
                    pkg.featured
                      ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                      : "border border-slate-600 hover:border-indigo-500 text-slate-200 hover:text-white"
                  }`}
                >
                  Konsultatsiya olish
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Ishlaganmiz</h2>
          <div className="grid grid-cols-5 gap-3">
            {brands.map((b) => (
              <div
                key={b.name}
                className="flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-xl py-4 px-2"
              >
                <img
                  src={b.src}
                  alt={b.name}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[10px] md:text-xs text-slate-300 text-center leading-tight">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── GUARANTEE ── */}
        <section className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6 space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-indigo-300">
            Kafolat
          </h2>
          <p className="text-slate-200 leading-relaxed">
            30 kun ichida reklama orqali keladigan leadlar{" "}
            <strong>kamida +30% o'sadi</strong>. Natija bo'lmasa —{" "}
            <strong>keyingi oy xizmat tekin</strong>. Biznes siz uchun, risk biz
            uchun.
          </p>
        </section>

        {/* ── FORM ── */}
        <section id="form" className="space-y-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Ariza qoldiring</h2>
            <p className="mt-1 text-sm text-slate-400">
              Qisqa vaqt ichida bog'lanamiz va biznesingizga mos yechim taklif
              qilamiz.
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8">
            <TargetLeadNewPage />
          </div>
        </section>

      </div>
    </main>
  );
}