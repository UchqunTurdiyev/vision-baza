"use client";

import LeadNewPage from "@/components/sotuv/LeadNewPage";



// Agar form komponentingiz shu yerda bo‘lsa

export default function LeadsClient() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
      id="form"
    >
      {/* Yulduzcha fon + umumiy container */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%)]" />

        {/* Hero */}
        <section className="relative px-4 sm:px-6 pt-16 pb-10">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div>
              <span className="inline-block text-[11px] tracking-wider uppercase text-indigo-100 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/40">
                Amaliy dastur • Mentorlik
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-sm">
                Sotuv Mutaxassisi Kursi
              </h1>
              <p className="mt-4 text-slate-200/90 md:text-lg leading-relaxed">
              Ishga joylashish kafolati bo&apos;lgan{" "} 
                <strong className="text-indigo-200">yagona kurs </strong> aynan siz uchun!
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+998930835024"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-900/40 hover:bg-indigo-400 transition"
                >
                  📞 +998 93 083 50 24
                </a>
                <a
                  href="#royxat"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-transparent text-indigo-100 font-semibold border border-indigo-400/60 hover:bg-indigo-500/10 shadow-sm transition"
                >
                  🚀 Hozir ro&apos;yxatdan o&apos;ting
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { k: "Yo'nalish", v: "Sotuv" },
                  { k: "Usul", v: "Amaliy + Nazariy" },
                  { k: "Format", v: "Mentorlik" },
                  { k: "Kafolat", v: "Ishga yo'naltirish" },
                ].map((i) => (
                  <div
                    key={i.k}
                    className="rounded-2xl bg-slate-900/70 backdrop-blur border border-indigo-500/40 p-4 shadow-md shadow-slate-950/60"
                  >
                    <div className="text-[11px] uppercase tracking-wide text-indigo-200/80">
                      {i.k}
                    </div>
                    <div className="text-lg font-semibold text-white mt-1">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.45),_transparent_60%)]" />
              <div className="aspect-[4/3] max-md:aspect-[4/6] rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-600/40 via-slate-900 to-indigo-900/60 shadow-[0_18px_45px_rgba(15,23,42,0.9)] p-6">
                <div className="h-full w-full grid place-items-center text-center">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-indigo-200/80">
                      Bizning jamoamiz ushbu bizneslar bilan ishlab kelmoqda
                    </div>
                    <div className="mt-3 text-2xl font-bold text-white">
                      Vision Group 
                    </div>
                    <div className="flex items-center justify-evenly">
                    <div className="">
                    <p className="mt-3 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      ISFT instituti
                    </p>
                    <p className="mt-1 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      Japan school
                    </p>
                    <p className="mt-1 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      M Edu school
                    </p>
                    </div>
                  
                    <div className="">
                    <p className="mt-1 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      Med Expert
                    </p>
                    <p className="mt-1 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      Turon Med
                    </p>
                    <p className="mt-1 text-slate-200/90 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      Kansmarket
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O‘quv dasturi */}
        <section className="relative px-4 sm:px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold text-indigo-100 mb-4">
              Kursda nimalarni o&apos;rganasiz?
            </h3>
            <div className="grid lg:grid-cols-3 gap-5">
              {[
                {
                  t: "Sotuv psixologiyasi",
                  d: "3-savol orqali mijoz turini aniqlash va unga mos yondashuv.",
                },
                {
                  t: "Do'stona muloqot",
                  d: "Tanishuvni to'xtatmasdan ishonch va yaqinlik hosil qilish texnikalari.",
                },
                {
                  t: "Umrbod mijoz tamoyili",
                  d: "Bir martalik savdodan ko'ra, umrbod mijozga aylantirish strategiyasi.",
                },
                {
                  t: "Haqiqiy savdo rad javobidan keyin boshlanadi",
                  d: "E'tirozni qabul qilib, undan keyingi bosqichga o‘tkazish texnikalari.",
                },
                {
                  t: "E'tirozlar bilan ishlash",
                  d: "Eng ko'p uchraydigan e'tirozlarga tayyor javoblar va savol orqali yechim.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-lg shadow-black/40"
                >
                  <div className="text-lg font-semibold text-white">{c.t}</div>
                  <p className="mt-2 text-slate-200/80 text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="royxat" className="relative px-4 sm:px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center rounded-3xl border border-indigo-500/50 bg-slate-900/90 py-8 px-3 sm:px-8 shadow-xl shadow-black/50">
              <h4 className="text-2xl font-bold text-white">
                Boshlashga tayyormisiz?
              </h4>
              <p className="mt-2 text-slate-200/90 max-w-xl mx-auto text-sm md:text-base">
                Birinchi qadam — muloqot. Qo‘ng‘iroq qiling yoki forma orqali
                ma’lumot qoldiring, barcha savollaringizga javob beramiz.
              </p>

              <LeadNewPage
                className="mt-6"
                defaultSource=""
                telegramUrl="https://t.me/sotuv_mutaxassisi"
                onSuccess={() => {
                  // xohlasangiz: scroll, snackbar, analytics, va h.k.
                }}
              />

              <p className="mt-4 text-xs text-slate-400">
                Ish vaqti: Du–Yak, 09:00–20:00
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
