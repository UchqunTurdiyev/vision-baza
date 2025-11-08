"use client";

import LeadNewPage from "@/components/lead/LeadNewPage";

// Agar form komponentingiz shu yerda bo‘lsa

export default function LeadsClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white" id="form">
      {/* Hero */}
      <section className="px-6 pt-16 pb-10">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block text-xs tracking-wider uppercase text-blue-700/80 bg-blue-100 px-3 py-1 rounded-full">
              Amaliy dastur • Mentorlik
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Sotuv Mutaxassisi Kursi
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg leading-relaxed">
              💼 Alo darajada tahsil olib, so'ngra <strong>ishga joylashish kafolati</strong>ga ega bo'ling.
              <strong> Bu imkoniyat aynan siz uchun!</strong>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="tel:+998930835024" className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
                📞 +998 93 083 50 24
              </a>
              <a href="#royxat" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white text-blue-700 font-semibold border border-blue-200 hover:border-blue-300 shadow-sm">
                🚀 Hozir ro'yxatdan o'ting
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "Yo'nalish", v: "Sotuv" },
                { k: "Usul", v: "SPIN + amaliyot" },
                { k: "Format", v: "Mentorlik" },
                { k: "Kafolat", v: "Ishga yo'naltirish" },
              ].map((i) => (
                <div key={i.k} className="rounded-2xl bg-white/80 backdrop-blur border border-blue-100 p-4">
                  <div className="text-xs uppercase tracking-wide text-blue-800/70">{i.k}</div>
                  <div className="text-lg font-semibold text-gray-900">{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] max-md:aspect-[4/6] rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-200/40 via-white to-blue-100/40 shadow-[0_10px_30px_rgba(30,64,175,0.15)] p-6">
              <div className="h-full w-full grid place-items-center text-center">
                <div>
                  <div className="text-sm uppercase tracking-wider text-blue-700/80">Sizga beradigan qiymat</div>
                  <div className="mt-2 text-2xl font-bold text-gray-900">Nazariya + Amaliyot + Real skriptlar</div>
                  <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                    Tanishuvdan sotishgacha: savollar texnikasi, do'stona muloqot, e'tirozlar bilan ishlash va ta'sirchan nutq.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O‘quv dasturi */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
          {[
            { t: "Sotuv psixologiyasi", d: "3-savol orqali mijoz turini aniqlash va unga mos yondashuv." },
            { t: "Do'stona muloqot", d: "Tanishuvni to'xtatmasdan ishonch va yaqinlik hosil qilish texnikalari." },
            { t: "Umrbod mijoz tamoyili", d: "Bir martalik savdodan ko'ra, umrbod mijozga aylantirish." },
            { t: "Xaqiqiy savdo rad javobidan keyin boshlanadi", d: "" },
            { t: "E'tirozlar bilan ishlash", d: "Eng ko'p uchraydigan e'tirozlarga tayyor javoblar va savol orqali yechim." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-gray-900">{c.t}</div>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + FORM */}

<section id="royxat" className="px-2 pb-16">
  <div className="text-center rounded-3xl border border-blue-200 bg-white py-8 px-3 shadow-sm">
    <h4 className="text-2xl font-bold text-gray-900">Boshlashga tayyormisiz?</h4>
    <p className="mt-2 text-gray-600">
      Birinchi qadam — muloqot. Qo‘ng‘iroq qiling, barcha savollaringizga javob beramiz.
    </p>

    <LeadNewPage
      className="mt-4"
      defaultSource=""   
      telegramUrl="https://t.me/sotuv_mutaxxasisi"     
      onSuccess={() => {
        // xohlasangiz: scroll, snackbar, analytics, va h.k.
      }}
    />

    <p className="mt-3 text-xs text-gray-500">Ish vaqti: Du–Yak, 09:00–20:00</p>
  </div>
</section>

    </main>
  );
}
