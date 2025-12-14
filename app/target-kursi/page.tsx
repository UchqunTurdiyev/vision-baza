// app/target-kursi/page.tsx
import { TargetKursLeadForm } from "@/components/comments/TargetKursLeadForm";
import { PartnersCarousel } from "@/components/target/PartnersCarousel";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Target reklama kursi | Vision Group",
  description:
    "Facebook & Instagram target reklamani 0 dan professional darajagacha o‘rgatuvchi amaliy kurs. Akkaunt sozlash, auditoriya, strategiya, web-sayt, metrikalar va mijoz topish.",
};

type Module = {
  order: string;
  title: string;
  description: string;
  topics: string[];
};

const modules: Module[] = [
  {
    order: "1-bob",
    title: "Akkaunt sozlash",
    description:
      "Facebook, Instagram va Business Manager’ni to‘g‘ri sozlash, cheklovlarni yechish va texnik asosni tayyorlash.",
    topics: [
      "Facebook va Instagram akkauntlarini ochish, nastroykalarni to‘g‘ri sozlash va ulash",
      "Profil va sahifa uchun professional abloshka (cover, avatar) tayyorlash tamoyillari",
      "Facebook business sahifa (page) ochish va barcha ma’lumotlarni to‘g‘ri to‘ldirish",
      "Business Manager (Business Manager / Business Suite) ochish va cheklovlarni kamaytirish bo‘yicha amaliy qadamlar",
      "Admin qo‘shish, mijoz akkauntini ulash, sahifalar va reklamani boshqarish huquqlarini to‘g‘ri taqsimlash",
      "Reklama akkaunti ochish va asosiy sozlamalarni (valyuta, vaqt zonasi va h.k.) to‘g‘ri kiritish",
      "Domain ulash va verifikatsiya qilish",
      "Facebook Pixel nima va u qanday ishlaydi",
      "Facebook Pixelni web-saytga o‘rnatish (kodni qo‘yish, tayyor integratsiyalar bilan ishlash)",
      "Eventlarni web-saytga ulash va asosiy konversiya eventlarini to‘g‘ri belgilash",
      "Business Suite’dan kontent rejalashtirish va sahifani tizimli yuritish",
    ],
  },
  {
    order: "2-bob",
    title: "Reklama turlari va kampaniya strukturası",
    description:
      "Maqsadga qarab kampaniya qurish: tanilish, trafik, lead va sotuv uchun to‘g‘ri objective tanlash.",
    topics: [
      "Facebook va Instagramdagi asosiy reklama turlari (Awareness, Traffic, Leads, Sales va boshqalar)",
      "‘Tanishish → Qiziqish → Taklif → Sotuv’ bo‘yicha reklama voronkasi (funnel) tuzish",
      "Mahalliy bizneslar uchun optimal formatlar: stories, reels, post, carusel, video",
      "Reklama matni, rasm va video orasidagi uyg‘unlikni ta’minlash",
      "Raqib kompaniyalaringiz yoqqan reklamalarini ko‘rish: qaysi kontent ishlayapti va qanday sotuv postlaridan foydalanishyapti",
      "Soliqlarsiz 0% da target yoqish bo‘yicha texnik va huquqiy jihatlarni tushunish",
      "Boshqa davlatlardagi o‘zbekistonliklar uchun reklama yoqish bo‘yicha alohida yondashuvlar",
    ],
  },
  {
    order: "3-bob",
    title: "Qo‘shimcha nastroykalar va metrikalar",
    description:
      "Reklamani raqamlar orqali boshqarish: metrikalar, maxsus metrikalar va hisobotlar.",
    topics: [
      "Asosiy metrikalar: CTR, CPM, CPC, CPL, ROAS, Frequency va ularni to‘g‘ri talqin qilish",
      "Maxsus metrika yaratish: o‘z biznes modelingiz uchun kerak bo‘lgan ko‘rsatkichlarni sozlash",
      "Kampaniya, Ad Set va Ad darajasida test va optimizatsiya qilish strategiyalari",
      "Reklama budjetini taqsimlash: test, muvaffaqiyatli kampaniyani kengaytirish va to‘xtatish qoidalari",
    ],
  },
  {
    order: "4-bob",
    title: "Auditoriya bilan ishlash",
    description:
      "Issiq, iliq va sovuq auditoriyalarni professional darajada qurish va boshqarish.",
    topics: [
      "Auditoriya turlari: sovuq, iliq va issiq mijozlar segmentlarini tushunish",
      "Issiq va iliq mijozlar auditoriyasini qurish va ularga alohida reklama strategiyasi yaratish",
      "Pixel orqali auditoriya yig‘ish: saytdagi harakatlarga qarab segmentlash",
      "Lookalike (o‘xshash) auditoriyalar yaratish va ularning samaradorligini oshirish",
      "Auditoriya cheklash va o‘xshashlik darajasini o‘lchash",
      "Boshqa davlatlardagi o‘zbekistonliklar uchun lokatsiya va til bo‘yicha to‘g‘ri targetlash",
    ],
  },
  {
    order: "5-bob",
    title: "Copywriting va kuchli takliflar",
    description:
      "Sotadigan matn, skript va takliflar: mijozni reklama orqali ishontirish texnikalari.",
    topics: [
      "Copywriting asoslari: sarlavha, asosiy matn va CTA (call-to-action) ni to‘g‘ri yozish",
      "Sotuv skripti texnikasi: post, video va stories uchun struktura",
      "Kuchli taklif berish: mijoz uchun real qiymat yaratish",
      "Alex Hormozi uslubidagi Grand Slam taklifi: qarshilikni kamaytiradigan paketlar tuzish",
      "Web-sayt uchun copywriting: landing sahifa bloklarini matn bilan to‘ldirish",
      "Lid magnit (Lead magnet) yaratish: mijoz kontaktini qoldirishga undaydigan bepul qiymat",
      "‘Nega aynan siz target yoqib berishingizni ko‘rsatish’ — shaxsiy brend va pozitsioning",
    ],
  },
  {
    order: "6-bob",
    title: "Web-sayt yasash va integratsiyalar",
    description:
      "Sun’iy intellekt va zamonaviy texnologiyalar yordamida tezkor web-sayt yasash va integratsiya qilish.",
    topics: [
      "Sun’iy intellekt yordamida tezkor web-sayt maketini (wireframe) yaratish",
      "Web-sayt strukturasini tuzish: hero, og‘riq, yechim, ijtimoiy isbot, CTA bloklari",
      "Kodlarni o‘qishni o‘rganish: front-end va back-end o‘rtasidagi bog‘liqlikni tushunish",
      "Dizayn ustida ishlash: rasm yuklash, vizuallarni tanlash va konversiyani oshiradigan elementlar",
      "Google’da yozilganda chiqish imkoniyatini qo‘shish (asosiy SEO va meta-teglar)",
      "Back-end uchun MongoDB’dan foydalanish asoslari (ma’lumotlar bazasi mantig‘i)",
      "GitHub ochish va proyektni GitHub’ga joylashtirish",
      "Vercel’ga deploy qilish: Next.js yoki boshqa framework orqali saytni chiqarish",
      "Domain olish va Vercel’ga domen ulash",
      "Meta Pixel’ni web-saytga ulash va eventlarni tekshirish",
      "Sayt tezligini oshirish va PageSpeed ko‘rsatkichlari bilan ishlash",
      "Web-sayt formalarini Telegram botga ulash (leadlarni real vaqt rejimida qabul qilish)",
    ],
  },
  {
    order: "7-bob",
    title: "Tilda orqali sayt yasash",
    description:
      "Tilda’da tezkor landinglar yasash va uning kuchli va zaif tomonlarini tahlil qilish.",
    topics: [
      "Tilda’da landing sahifa yasashning bosqichma-bosqich jarayoni",
      "Tilda shablonlari bilan ishlash va ularni moslashtirish",
      "Tilda orqali qilingan saytlarning asosiy kamchiliklari va cheklovlari",
      "Qachon Tilda, qachon esa kodlangan sayt ishlatish maqsadga muvofiq ekani",
    ],
  },
  {
    order: "8-bob",
    title: "Target strategiyasi",
    description:
      "Biznes egasi ko‘zi bilan qaraydigan, tizimli target strategiyasini qurish.",
    topics: [
      "Target strategiyasini noldan qurish: maqsad, byudjet, auditoriya va kontent reja",
      "Biznes egasi uchun alohida target strategiyasi tuzish (raqobat, mavsumiylik, hududga qarab)",
      "Mijozning biznes modeli bo‘yicha voronka chizish va reklama bosqichlarini rejalashtirish",
      "Qisqa muddatli aksiyalar va uzoq muddatli brend kampaniyalarini balansda olib borish",
      "‘Nega aynan siz target yoqib berishingizni ko‘rsatish’ orqali o‘zingizni mutaxassis sifatida joylashtirish",
    ],
  },
  {
    order: "9-bob",
    title: "Mijoz topish va ishga joylashish",
    description:
      "Real mijoz topish, resume tayyorlash va o‘zingizni professional targetolog sifatida sotish.",
    topics: [
      "Lid magnitlar orqali mijoz topish tizimini yo‘lga qo‘yish",
      "Targetolog uchun professional resume va portfolio tayyorlash",
      "Freelance, agentlik va doimiy ish o‘rtasidagi farqlar va yo‘l tanlash",
      "Intervyu savollari va ularga to‘g‘ri javob berish bo‘yicha tavsiyalar",
      "Mijozga natija va raqamlar orqali o‘zingizni isbotlash",
    ],
  },
];

export default function TargetKursPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Vision Group • Target reklama kursi
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Target reklama kursi:
              <br />
              <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Reklama yoqish emas — natija beradigan Target tizimini o‘rganing
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300">
            AI bilan 1 soatda real kodlar bilan web-sahifa yarating, raqamlarni o‘qishni o‘rganing, natijani boshqaring.
            </p>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300">
            Meta mutaxassislaridan olgan 3 insaydim — reklamangizni 180° o‘zgartiradigan formulalarni <i>PDF yuklab olish</i>  tugmasini bosib yuklab oling
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#apply"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Kursga yozilish
              </Link>
              <a
  href="/files/Guvoxnoma.pdf"
  download
  className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400"
>
  PDF yuklab olish
</a>

            </div>

            <p className="mt-3 text-xs text-slate-400">
              Amaliy darslar • Real proyekt ustida ishlash • Har bir bob bo‘yicha topshiriqlar
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h2 className="text-lg font-semibold">
              Kurs yakunida nimalarga ega bo‘lasiz?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Biznes uchun to‘liq target tizimini o‘zingiz sozlay olasiz</li>
              <li>• O&apos;zingiz va biznes uchun web-sayt 2 kunda </li>
              <li>• Pixel, event va auditoriyalarni professional darajada boshqarasiz</li>
              <li>• Web-sayt + reklama + metrika orqali butun voronkani ko‘ra olasiz</li>
              <li>• O‘zingiz uchun ham, mijozlar uchun ham strategiya tuza olasiz</li>
              <li>• Darslar yozib olinib sizga tashlab beriladi</li>
              <li>• Kopyrayting sotuv postlarini yozish</li>
              <li>• Lid magnit tuzish</li>
            </ul>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-center text-[11px] sm:text-xs">
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-3 py-3">
                <dt className="font-semibold text-emerald-300">Format</dt>
                <dd className="mt-1 text-slate-100">
                  Ofline 
                  <br />
                  Online
                </dd>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3">
                <dt className="font-semibold text-sky-300">Dastur</dt>
                <dd className="mt-1 text-slate-100">
                  9 ta bob
                  <br />
                  40+ mavzu
                </dd>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3">
                <dt className="font-semibold text-violet-300">Yo‘nalish</dt>
                <dd className="mt-1 text-slate-100">
                  Target
                  <br />
                  + Web-sayt
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Hamkorlar */}
                <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Hamkorlarimiz
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300">
            Vision Group’ning target reklama kursi real bozor bilan bog‘langan:
            talabalarimiz ishlaydigan yoki amaliyot o‘taydigan hamkor tashkilotlar
            bilan birga ishlaymiz. Quyida ularning bir qismi keltirilgan.
          </p>

          <div className="mt-6">
            <PartnersCarousel />
          </div>
        </section>

        {/* BIZ HAQIMIZDA / NEGA AYNAN BIZ */}
<section id="about" className="relative md:px-6  pt-4 pb-10">
  <div className="max-w-5xl mx-auto space-y-6 bg-slate-950/50 border border-slate-800/70 rounded-3xl p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-[11px] tracking-widest font-semibold uppercase text-emerald-300">
          Biz haqimizda
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white leading-tight">
          Nega aynan men Uchqun Turdiyev?
        </h2>
      </div>
      <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-100">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        3 yillik tajriba • Dasturchi-targetolog
      </span>
    </div>

    <div className="bg-slate-900/75 border border-emerald-500/40 rounded-2xl p-5 md:p-7">
      <h3 className="text-lg md:text-xl font-bold text-white">
        Natija beradigan tajriba va ustunliklar
      </h3>

      <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-100/90">
      <li>
  ✅ <strong>Meta kompaniyasi ekspertlari auditi</strong> – reklama kabinetim Meta xodimlari tomonidan muntazam ko‘rib chiqilib, professional tavsiyalar berib boriladi.
</li>
<li>
          ✅ <strong>$80k</strong> – pul boshqaruvi.
        </li>
        <li>
          ✅ <strong>3 yillik amaliy tajriba</strong> – faqat target va sotuv sohasida.
        </li>
        <li>
          ✅ <strong>Dasturchi + targetolog kombosi</strong> – reklama, sayt va sotuvni bitta tizimga bog‘laymiz.
        </li>
        <li>
          ✅ <strong>Raqamlar bilan isbotlangan natijalar</strong>.
        </li>
      </ul>

<div className="mt-4 rounded-xl bg-slate-950/80 border border-emerald-400/50 p-4 space-y-2">
        <p className="text-sm md:text-base text-slate-100 leading-relaxed">
          <strong>Bizning natijalar:</strong>
        </p>
        <ul className="space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
          <li>
            <strong>Har sarflagan $1 uchun, $82 tushum olib keldi. ROAS ≈ 82x</strong> →{" "}
            <strong>Bir mijozning LTV si 1$ uchun $328 qaytyapti</strong>.
          </li>
          <li>
            <strong>1$ reklama → $68 tushum. ROAS ≈ 68x </strong> → {" "}
            <strong>Bir mijozning LTV si 1$ uchun 410$ qaytyapti</strong>.
          </li>
        </ul>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-semibold text-emerald-200">
          Bizning eng katta yutug&apos;imiz:
        </h4>
        <ul className="space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
          <li>
            <strong>Kopyrayting sotuv postlari</strong> – yozishni to&apos;liq o&apos;rganasiz
          </li>
          <li>
            <strong>Sotuv saytlaridan 10X tez </strong> ishlaydigan sayt yasashni 3 kunda o&apos;rganasiz
          </li>
        </ul>

      
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#form"
          className="inline-flex items-center justify-center h-10 px-5 rounded-xl
           bg-linear-to-r from-slate-950 via-indigo-800 to-indigo-600
           text-white text-sm font-semibold shadow-lg shadow-indigo-900/60
           hover:from-slate-900 hover:via-indigo-700 hover:to-indigo-500
           transition"
        >
          Ro&apos;yxatdan o&apos;ting
        </a>
      </div>
    </div>
  </div>
</section>


        {/* Kimlar uchun */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Bu kurs kimlar uchun?
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
            Dastur nazariy emas, to‘liq amaliy. Shuning uchun ham kurs davomida real
            akkauntlar, real bizneslar va real reklama kampaniyalari ustida ishlanadi.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                Biznes egalari
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                O‘zingizning biznesingiz uchun reklama tizimini tushunib olishni
                va targetolog bilan bir tilda gaplashishni istasangiz.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-sky-300">
                Marketingchilar va targetologlar
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Allaqachon reklama yoqib ko‘rgansiz, lekin tizimli strategiya, metrikalar
                va web-sayt bilan bog‘lashni chuqurroq o‘rganmoqchisiz.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-violet-300">
                Talabalar va yangi boshlovchilar
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Targetolog kasbini o‘rganib, kelajakda yuqori maoshli ish yoki
                freelancedan daromad qilishni maqsad qilganlar uchun.
              </p>
            </div>
          </div>
        </section>

        {/* Kurs dasturi */}
          <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Kurs dasturi — 9 ta bob bo‘yicha
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300">
            Har bir bob ichida mavzular ketma-ketligi sizni 0 darajadan boshlab,
            professional darajada chiqishingizni ta&apos;minlaydi.
            Har bir bo‘limda nazariya + amaliy topshiriq + real misollar bo‘ladi.
          </p>

          {/* 👉 Eski grid o‘rniga shu accordionni qo‘ying */}
          <div className="mt-8 space-y-3">
            {modules.map((module, index) => (
              <details
                key={module.order}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/60 [&_summary::-webkit-details-marker]:hidden"
                {...(index === 0 ? { open: true } : {})} // 1-bob default ochiq
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      {module.order}
                    </p>
                    <h3 className="mt-1 text-base font-semibold sm:text-lg">
                      {module.title}
                    </h3>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-600 text-xs text-slate-300 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <div className="mt-3 text-xs sm:text-sm text-slate-300">
                  <p>{module.description}</p>
                  <ul className="mt-3 space-y-1.5 text-slate-200">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>


                {/* Otziflar */}
                <section className="mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            O‘quvchilar otziflari
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300">
            Kurs nazariyadan ko‘ra amaliyotga yaqin bo‘lgani uchun, qatnashchilar
            natijani darslar davomidayoq ko‘ra boshlashadi. Quyida ba’zi
            bitiruvchilarimizning kurs haqidagi fikrlarini keltiramiz.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm"
              >
                <p className="text-sm text-slate-100 italic">
                  “{item.text}”
                </p>

                {item.result && (
                  <p className="mt-3 text-xs font-medium text-emerald-300">
                    Natija: {item.result}
                  </p>
                )}

                <div className="mt-4 border-t border-slate-800 pt-3 text-xs">
                  <p className="font-semibold text-slate-50">{item.name}</p>
                  <p className="mt-0.5 text-slate-400">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* CTA */}
        <section id="apply" className="mt-16">
  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] rounded-2xl border border-emerald-400/40 bg-linear-to-r from-emerald-500/15 via-cyan-500/10 to-sky-500/15 p-6 sm:p-8">
    {/* Chap tomonda matn */}
    <div>
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Pro Target kursiga <br /> hoziroq ro‘yxatdan o‘ting
      </h2>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-100">
        O‘zingizni reklama balansiga qarab emas, natijangizga qarab baholaydigan
        darajaga olib chiqing. Joylar cheklangan, darslar esa amaliy formatda
        o‘tiladi.
      </p>

      {/* <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="tel:+998555187070"
          className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Telegram kanalimiz
        </a>
      </div> */}

      <p className="mt-3 text-xs text-slate-200">
        Agar loyihangiz yoki biznesingiz bo‘lsa — darslar davomida aynan o‘sha
        loyiha ustida ishlash imkoniyati beriladi.
      </p>
    </div>

    {/* O‘ng tomonda forma */}
    <TargetKursLeadForm />
  </div>
</section>

      </div>
    </main>
  );
}




type Testimonial = {
    name: string;
    role: string;
    text: string;
    result?: string;
  };
  
  const testimonials: Testimonial[] = [
    {
      name: "Azizbek Q.",
      role: "Mahalliy o‘quv markazi egasi",
      text: "Oldin reklama budjetini faqat ‘sezgi’ bilan belgilardim. Kursdan keyin metrikalar orqali qaror qila boshladim, natijada bir oyda leadlar soni 2 baravar oshdi.",
      result: "+120% lead, barqaror kampaniya",
    },
    {
      name: "Madina S.",
      role: "Yangi boshlovchi targetolog",
      text: "Kursda nazariya emas, real akkauntlar bilan ishladik. Pixel, event, auditoriya, strategiya – hammasi bitta sistemaga tushib qoldi.",
      result: "3 ta doimiy mijoz topdim",
    },
    {
      name: "Javohir R.",
      role: "Klinika marketing menejeri",
      text: "Tibbiyot sohasida reklama berish qiyinroq deb o‘ylardim. Lekin to‘g‘ri voronka va copywriting bilan klinikaga keluvchilar soni sezilarli oshdi.",
      result: "Sovuq auditoriyadan issiq mijozlargacha tizim",
    },
  ];
  