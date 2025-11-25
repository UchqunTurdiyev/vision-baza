import TargetLeadNewPage from "@/components/target/TargetLeadNewPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Target reklama xizmatlari | Vision Group",
  description:
    "Instagram va Facebook orqali barqaror lead oqimini yo‘lga qo‘yuvchi professional target reklama xizmatlari. Tahlil, strategiya, test va optimallashtirish Vision Group jamoasi bilan.",
};

export default function TargetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        {/* /leads dagidek radial fon */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%)]" />

        {/* HERO */}
        <section className="relative px-6 pt-16 pb-12">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            {/* Chap tomondagi matn */}
            <div>
              <span className="inline-block text-[11px] tracking-wider uppercase text-indigo-100 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/40">
                Vision Group • Target reklama
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-sm">
                Target reklama xizmatlari
              </h1>

              <p className="mt-4 text-slate-200/90 md:text-lg leading-relaxed">
                Instagram Facebook O'yin va Ilovalar orqali{" "}
                <strong className="text-indigo-200">
                  barqaror lead oqimi
                </strong>{" "}
                ni yo‘lga qo‘yamiz. Biznesingizni tahlil qilamiz,{" "}
                <strong className="text-indigo-200">to‘g‘ri auditoriya</strong>
                ni topamiz va{" "}
                <strong className="text-indigo-200">
                  natijaga ishlaydigan kampaniyalar
                </strong>{" "}
                ni yuritamiz.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#form"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-900/40 hover:bg-indigo-400 transition"
                >
                  Ariza qoldirish
                </a>
                <a
                  href="#form"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-transparent text-indigo-100 font-semibold border border-indigo-400/60 hover:bg-indigo-500/10 shadow-sm transition"
                >
                  Konsultatsiya olish
                </a>
              </div>

              <p className="mt-4 text-[11px] text-slate-400">
                ISFT, Japan School, M EDU, Med Expert va boshqa loyihalar bilan
                ishlash tajribasi.
              </p>
            </div>

            {/* O‘ng tomondagi “raqamlar”/ish jarayoni bloki */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.45),_transparent_60%)]" />
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.9)] border border-indigo-500/40 p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Nima uchun Vision Group?
                </h3>
                <ul className="space-y-2 text-sm text-slate-200/90">
                  <li>• Batafsil biznes va auditoriya tahlili</li>
                  <li>• Test kampaniyalar va doimiy optimallashtirish</li>
                  <li>• Haftalik hisobot va tavsiyalar</li>
                  <li>• Sotuv voronkasi va CRM bilan integratsiya konsepsiyasi</li>
                </ul>
                <div className="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
                  <div className="rounded-2xl border border-indigo-500/40 bg-slate-950/60 p-3">
                    <div className="text-base font-bold text-indigo-200">
                      3–5x
                    </div>
                    <div className="text-slate-300">
                      Reklama samaradorligi potentsiali
                    </div>
                  </div>
                  <div className="rounded-2xl border border-indigo-500/40 bg-slate-950/60 p-3">
                    <div className="text-base font-bold text-indigo-200">
                      10+ loyihalar
                    </div>
                    <div className="text-slate-300">
                      Ta’lim va tibbiyot sohasida
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KIMLAR UCHUN */}
        <section className="relative px-6 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-100">
              Target kimlar uchun?
            </h2>
            <p className="mt-2 text-slate-200/90">
              Quyidagi biznes egalari uchun target reklama eng tezkor va
              o‘lchanadigan marketing kanalidir:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
                <h3 className="font-semibold mb-1 text-white">
                  Xususiy maktablar va kurslar
                </h3>
                <p className="text-sm text-slate-200/80">
                  Qabul davrida o‘quvchilar sonini oshirish, guruhlarni tezroq
                  to‘ldirish.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
                <h3 className="font-semibold mb-1 text-white">
                  Maxsulotlar
                </h3>
                <p className="text-sm text-slate-200/80">
                Maxsulotingizni online sotuvni yo'lga qoying
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
                <h3 className="font-semibold mb-1 text-white">
                  Online kurslar va treninglar
                </h3>
                <p className="text-sm text-slate-200/80">
                  Webinarlar, intensivlar va uzun kurslar uchun ro‘yxatdan
                  o‘tishni ko‘paytirish.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
                <h3 className="font-semibold mb-1 text-white">
                  Xizmat ko‘rsatish va savdo bizneslari
                </h3>
                <p className="text-sm text-slate-200/80">
                  Salon, fitnes, magazin va boshqa xizmatlarda mijozlarni target
                  qilingan e’lonlar orqali jalb qilish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JARAYON – QANDAY ISHLAYMIZ */}
        <section className="relative px-6 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-100">
              Biz qanday ishlaymiz?
            </h2>
            <p className="mt-2 text-slate-200/90">
              Har bir loyiha uchun jarayon aniq bosqichlar asosida tashkil
              qilinadi:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Tahlil",
                  text: "Biznesingiz, auditoriyangiz va raqobatchilarni o‘rganamiz.",
                },
                {
                  step: "2",
                  title: "Strategiya",
                  text: "Offer, vizual va matnlarni ishlab chiqib, kampaniya rejasi tuzamiz.",
                },
                {
                  step: "3",
                  title: "Test & optimallashtirish",
                  text: "Turli kreativ va segmentlarni sinab ko‘rib, eng samaralilarini tanlaymiz.",
                },
                {
                  step: "4",
                  title: "Hisobot & o‘sish",
                  text: "Natijalar bo‘yicha hisobot va keyingi bosqichlar bo‘yicha tavsiyalar.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-slate-900/80 shadow-lg shadow-black/40 border border-indigo-500/40 p-4 flex flex-col gap-2"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-sm text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKETLAR */}
        <section className="relative px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-100">
              Target xizmat paketlari
            </h2>
            <p className="mt-2 text-slate-200/90">
              Har bir biznes bosqichiga mos paketlarni taklif qilamiz. Narxlar va
              yakuniy takliflar konsultatsiya jarayonida aniqlanadi.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* START */}
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 flex flex-col shadow-lg shadow-black/40">
                <h3 className="text-lg font-semibold text-white">START</h3>
                <p className="mt-2 text-sm text-slate-200/80">
                  Boshlang‘ich bizneslar va birinchi kampaniya uchun.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
                  <li>• 1–2 ta asosiy kampaniya</li>
                  <li>• Oddiy auditoriya segmentlari</li>
                  <li>• Haftalik qisqa hisobot</li>
                </ul>
                <a
                  href="#form"
                  className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full border border-indigo-400/60 text-indigo-100 hover:bg-indigo-500/10 transition"
                >
                  Konsultatsiya so‘rash
                </a>
              </div>

              {/* GROWTH */}
              <div className="rounded-3xl border-2 border-indigo-500 bg-slate-900/90 shadow-xl shadow-black/60 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-white">GROWTH</h3>
                <p className="mt-2 text-sm text-slate-200/80">
                  Mavjud biznesini tez o‘stirmoqchi bo‘lganlar uchun.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
                  <li>• Bir nechta kampaniya va reklamalar to‘plami</li>
                  <li>• A/B test va kengroq auditoriya segmentlari</li>
                  <li>• Batafsil haftalik hisobot</li>
                </ul>
                <a
                  href="#form"
                  className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full bg-indigo-500 text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-900/50"
                >
                  GROWTH paketiga ariza qoldirish
                </a>
              </div>

              {/* PRO */}
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 flex flex-col shadow-lg shadow-black/40">
                <h3 className="text-lg font-semibold text-white">PRO</h3>
                <p className="mt-2 text-sm text-slate-200/80">
                  Katta budjet va murakkab voronkali loyihalar uchun.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
                  <li>• Keng qamrovli kampaniyalar</li>
                  <li>• Murakkab retargeting va lookalike segmentlar</li>
                  <li>• Custom hisobot va strategik sessiyalar</li>
                </ul>
                <a
                  href="#form"
                  className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full border border-indigo-400/60 text-indigo-100 hover:bg-indigo-500/10 transition"
                >
                  PRO bo‘yicha gaplashish
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BRENDLAR BILAN ISHLAGANIMIZ */}
        <section className="relative px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-indigo-100">
              Biz ishongan va bizga ishongan brendlar
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              Quyidagi loyihalarda marketing va target reklama bo‘yicha tajriba
              to‘plaganmiz:
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-200/90">
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 py-3 px-2 text-center shadow-sm shadow-black/40">
                ISFT Institute
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 py-3 px-2 text-center shadow-sm shadow-black/40">
                Japan School
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 py-3 px-2 text-center shadow-sm shadow-black/40">
                M EDU School
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 py-3 px-2 text-center shadow-sm shadow-black/40">
                Med Expert
              </div>
            </div>
          </div>
        </section>

        {/* LID FORMA */}
        <section id="form" className="relative px-6 pt-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-black/60 border border-indigo-500/50 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">
                Target xizmatlariga ariza qoldiring
              </h2>
              <p className="mt-2 text-sm text-slate-200/90">
                Kontaktlaringizni qoldiring, Vision Group target jamoasi qisqa
                vaqt ichida siz bilan bog‘lanadi va biznesingizga mos
                yechimlarni taklif qiladi.
              </p>

           
              <TargetLeadNewPage className="mt-6" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
