import TargetLeadNewPage from "@/components/target/TargetLeadNewPage";
import type { Metadata } from "next";
import jp from "../../public/jp.png"
import PixelTargetPageView from "./PixelTargetPageView";

export const metadata: Metadata = {
  title: "Target reklama xizmatlari | Vision Group",
  description:
    "Instagram va Facebook orqali barqaror lead oqimini yo‘lga qo‘yuvchi professional target reklama xizmatlari. Tahlil, strategiya, test va optimallashtirish Vision Group jamoasi bilan.",
};


export default function TargetPage() {



  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <PixelTargetPageView />
      <div className="relative">
        {/* /leads dagidek radial fon */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%)]" />

 {/* HERO */}
<section className="relative md:px-6 px-2 md:pt-16 pt-12 pb-12">
  <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-1 items-start">
    {/* Chap tomondagi matn */}
    <div>
      <span className="inline-block text-[11px] tracking-wider uppercase text-emerald-100 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/40">
        Vision Group • Target
      </span>

      <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-white">
      Target orqali lead oqimini yo‘lga qo‘yib, sotuvingizni +30% o‘sishiga yordam beramiz.
      </h1>

      <p className="mt-4 text-slate-200/90 md:text-lg leading-relaxed">
      Instagram, Facebook va mobil ilovalar orqali
        <strong className="text-emerald-300">barqaror lead oqimi</strong> ni yo‘lga qo‘yamiz.
         Biznesingizni tahlil qilamiz,{" "}
        <strong className="text-emerald-300">to‘g‘ri auditoriya</strong> ni
        topamiz va{" "}
        <strong className="text-emerald-300">
          natijaga ishlaymiz.
        </strong>
        <br />
        <strong className="italic">
          0% soliqlarsiz target yoqing
        </strong>
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
      <a
    href="#form"
    className="inline-flex items-center justify-center h-11 px-6 rounded-xl
               bg-gradient-to-r from-slate-950 via-indigo-800 to-indigo-600
               text-white font-semibold shadow-lg shadow-indigo-900/60
               hover:from-slate-900 hover:via-indigo-700 hover:to-indigo-500
               transition"
  >
    Ariza qoldirish
  </a>

  {/* Secondary – fon bilan bir xil, indigo border */}
  <a
    href="#form"
    className="inline-flex items-center justify-center h-11 px-5 rounded-xl
               bg-slate-950/80 text-indigo-100 font-semibold
               border border-indigo-500/60
               hover:bg-slate-900 hover:border-indigo-400
               shadow-sm transition"
  >
    Konsultatsiya olish
  </a>
      </div>

      <p className="mt-4 text-[11px] text-slate-400">
        ISFT, Japan School, M EDU, Med Expert va boshqa loyihalar bilan ishlash
        tajribasi.
      </p>

      {/* Target PRO post bloki */}
      <section className="mt-10 space-y-8">
        <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5 md:p-7 shadow-xl shadow-black/40">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Og‘riq nuqtasi
          </p>
          <h2 className="mt-2 text-xl md:text-2xl font-bold text-white">
            “Reklamaga pul ketadi, mijoz esa yo‘q” tanish og‘riqmi?
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-200 leading-relaxed">
            Instagram/Facebook’da har oy reklama yoqasiz, lekin:
          </p>
          <ul className="mt-2 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
            <li>Like va ko‘rishlar bor…</li>
            <li>
              Lekin <strong>so‘rov va savdo kam</strong>.
            </li>
            <li>
              Targetologlar ko‘p, lekin <strong>natija</strong> yo‘q.
            </li>
          </ul>

          <p className="mt-4 text-sm md:text-base text-slate-200 leading-relaxed">
            Agar bu holat sizga tanish bo‘lsa – sizga chiroyli rasm emas,{" "}
            <strong className="text-emerald-300">
              sotuv beradigan Target tizimi
            </strong>{" "}
            kerak.
          </p>
        </div>

        <div className="bg-slate-900/70 border border-emerald-500/35 rounded-2xl p-5 md:p-7 shadow-xl shadow-black/40">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Taklif
          </p>
          <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
            Reklamadan keladigan mijozlarni +30% oshiramiz – kafolat bilan
          </h3>

          <div className="mt-4 bg-slate-950/70 border border-emerald-400/50 rounded-xl p-4">
            <p className="text-sm md:text-base text-slate-100 leading-relaxed">
              <span className="font-semibold text-emerald-300">Kafolatimiz:</span>{" "}
              <span className="block mt-1">
                👉 <strong>30 kun ichida</strong> reklama orqali keladigan{" "}
                <strong>lid va so‘rovlarni kamida +30% ga oshiramiz.</strong>
              </span>
              <span className="block mt-1">
                Agar natija bo‘lmasa –{" "}
                <strong>keyingi oy Target xizmatini tekin qilib beramiz.</strong>
              </span>
            </p>
            <p className="mt-3 text-xs md:text-sm text-slate-400 italic">
              Natija bo‘lmasa – biz yutqazamiz, siz emas.
            </p>
          </div>
        </div>


        {/* Bonus */}
        {/* <div className="bg-slate-900/70 border border-emerald-500/35 rounded-2xl p-5 md:p-7">
          <h3 className="text-lg md:text-xl font-bold text-white">
            Qo‘shimcha bonuslar (cheklangan vaqt uchun)
          </h3>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm md:text-base font-semibold text-emerald-300">
                🎁 Sotuvchilar uchun mini-trening (tekin)
              </p>
              <p className="mt-1 text-sm md:text-base text-slate-100 leading-relaxed">
                Target yaxshi ishlasa ham, sotuvchi noto‘g‘ri gapirsa – mijoz yo‘qoladi.
                Shu uchun sotuv xodimlaringizga qisqa, amaliy trening o‘tkazamiz:
              </p>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
                <li>Mijoz bilan muloqot</li>
                <li>E’tirozlar bilan ishlash</li>
                <li>Reklamadan kelgan leadni sotuvga aylantirish</li>
              </ul>
            </div>

            <div>
              <p className="text-sm md:text-base font-semibold text-emerald-300">
                🎁 Instagram va Telegram kanallarini sozlash
              </p>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
                <li>
                  Bio, highlights, tugmalar va linklarni{" "}
                  <strong>sotuvga ishlaydigan holatga</strong> keltiramiz.
                </li>
                <li>
                  Reklamadan kelgan mijoz adashib ketmaydi, to‘g‘ri joyga tushadi.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    </div>

    {/* O‘ng tomondagi “raqamlar”/ish jarayoni bloki */}
    {/* <div className="relative">
      <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.35),_transparent_60%)]" />
      <div className="relative bg-slate-900/95 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.9)] border border-indigo-500/40 p-6 space-y-4">
  <h3 className="text-lg font-semibold text-white">
    Nima uchun Vision Group?
  </h3>
  <ul className="space-y-2 text-sm text-slate-200/90">
    <li>
      • <strong>Tajribali jamoa</strong> – marketing, target, sotuv, SMM va dasturlash
      bo‘yicha o‘z kasbining professionallari.
    </li>
    <li>
      • <strong>Marketing strategiyasi</strong> – biznesingiz uchun yillik va oyma-oy
      o‘sish rejalari, aniq maqsad va KPI’lar bilan.
    </li>
    <li>
      • <strong>Target bo‘yicha real tajriba</strong> – amaliy keyslar, test kampaniyalar
      va doimiy optimallashtirish asosida ishlaymiz.
    </li>
    <li>
      • <strong>Sotuv tizimi</strong> – online va offline sotuv jarayonini tahlil qilib,
      skriptlar va jarayonlarni tizimlashtirib beramiz.
    </li>
    <li>
      • <strong>SMM va copywriting</strong> – brendingizga mos kontent, sotuvchi postlar
      va reklama matnlarini ishlab chiqamiz.
    </li>
    <li>
      • <strong>Dasturlash xizmatlari</strong> – sotuv veb-sayti, Telegram bot va
      texnik yechimlar bilan marketingni yagona tizimga bog‘laymiz.
    </li>
    <li>
      • <strong>Qadriyatlarga asoslangan yondashuv</strong> – qisqa muddatli foydadan
      ko‘ra, uzoq muddatli ishonchli hamkorlikni tanlaymiz.
    </li>
  </ul>
</div>

    </div> */}
  </div>
</section>

{/* BIZ HAQIMIZDA / NEGA AYNAN BIZ */}
<section id="about" className="relative md:px-6 px-2 pt-4 pb-10">
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
          ✅ <strong>3 yillik amaliy tajriba</strong> – faqat target va sotuv sohasida.
        </li>
        <li>
          ✅ <strong>Dasturchi + targetolog kombosi</strong> – reklama, sayt va sotuvni bitta tizimga bog‘laymiz.
        </li>
        <li>
          ✅ <strong>Raqamlar bilan isbotlangan natijalar</strong>.
        </li>
      </ul>

      {/* <div className="mt-4 rounded-xl bg-slate-950/80 border border-emerald-400/50 p-4 space-y-2">
        <p className="text-sm md:text-base text-slate-100 leading-relaxed">
          <strong>Bizning natijalar:</strong>
        </p>
        <ul className="space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
          <li>
            <strong>$9 000 reklama byudjeti</strong> →{" "}
            <strong>6 300 000 000 so‘m yillik daromad</strong>.
          </li>
          <li>
            <strong>45 000 000 000 so‘m yillik aylanmaga ega biznes</strong>{" "}
            → reklama xarajatlari atigi{" "}
            <strong>1,2% foyda</strong> darajasida, brend esa bozorda{" "}
            <strong>milliy ishonchli brend</strong> sifatida tanilgan.
          </li>
        </ul>
      </div> */}

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
          Bizning eng katta yutug'imiz:
        </h4>
        <ul className="space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
          <li>
            <strong>Web-saytni real kodda yozib beramiz</strong> – shablon emas, biznesingizga moslashtirilgan maxsus sayt.
          </li>
          <li>
            Web Saytingiz copywriting sotuv postlari bilan
            <strong>sotuv saytlaridan 10X tez </strong> ishlaydi. Natijada mijoz va pul yo'qotmaysiz, sayt xarajatlarini to'liq biz qilib beramiz
          </li>
        </ul>

      
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#form"
          className="inline-flex items-center justify-center h-10 px-5 rounded-xl
           bg-gradient-to-r from-slate-950 via-indigo-800 to-indigo-600
           text-white text-sm font-semibold shadow-lg shadow-indigo-900/60
           hover:from-slate-900 hover:via-indigo-700 hover:to-indigo-500
           transition"
        >
          Ro'yxatdan o'ting
        </a>
      </div>
    </div>
  </div>
</section>

{/* KIMLAR UCHUN */}
<section className="relative md:px-6 px-2 py-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-emerald-100">
      Target kimlar uchun?
    </h2>
    <p className="mt-2 text-slate-200/90">
      Target reklama – biznesingizni tezroq tanitish, brendingizni rivojlantirish
      va sotuvlaringizni o‘stirish uchun eng tezkor va o‘lchanadigan marketing kanalidir.
    </p>
    <p className="mt-1 text-sm text-slate-400/90">
      Quyidagi turdagi biznes egalari uchun ayniqsa samarali ishlaydi:
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
        <h3 className="font-semibold mb-1 text-white">
          Xususiy maktablar va kurslar
        </h3>
        <p className="text-sm text-slate-200/80">
          Qabul davrida o‘quvchilar sonini oshirish, guruhlarni tezkor to‘ldirish
          va ta’lim muassasangizni bozorda ko‘proq tanitish.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
        <h3 className="font-semibold mb-1 text-white">
          Mahsulotlar
        </h3>
        <p className="text-sm text-slate-200/80">
          Mahsulotingiz uchun barqaror online sotuv tizimini yo‘lga qo‘yish,
          doimiy mijozlar oqimini shakllantirish.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
        <h3 className="font-semibold mb-1 text-white">
          Online kurslar va treninglar
        </h3>
        <p className="text-sm text-slate-200/80">
          Webinarlar, kurslar va brendingizni ekspert sifatida tanitish.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/80 p-4 shadow-lg shadow-black/40">
        <h3 className="font-semibold mb-1 text-white">
          Xizmat ko‘rsatish va savdo bizneslari
        </h3>
        <p className="text-sm text-slate-200/80">
          Salon, fitnes va boshqa xizmatlarda mijozlarni aniq target qilingan
          e’lonlar orqali jalb qilish va sotuvingizni tizimli o‘stirish.
        </p>
      </div>
    </div>
    <p className="mt-7 text-md font-semibold text-emerald-300">
      Saytdan chiqib ketmasdan oxirigacha davom eting va bonuslarga ega bo'ling
 </p>
  </div>

</section>



{/* START BLOKLAR */}

<div className="max-w-6xl mx-auto">

<div className="grid gap-6 lg:grid-cols-2">
  {/* 1-2 bloklar */}
  <div className="space-y-6">
    {/* 1. Audit va strategiya + kampaniya sozlash */}
    <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5">
      <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
        1. Target strategiyasi
      </h4>
      <p className="mt-1 text-xs text-slate-400">
        “Pul qayerda yo‘qolyapti?”ni topamiz.
      </p>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
        <li>
          Reklama, sahifa va savdo jarayonini bosqichma-bosqich{" "}
          <strong>tahlil qilamiz</strong>.
        </li>
        <li>
          Ideal mijozingizni aniqlaymiz:{" "}
          <strong>kim sizdan sotib oladi, kim emas.</strong>
        </li>
        <li>
          Budjetni bekorga kuydirmaydigan{" "}
          <strong>aniq strategiya</strong> tuzamiz.
        </li>
        <li>
          Kampaniyalarni{" "}
          <strong>0 dan professional darajada</strong> sozlaymiz,{" "}
          <strong>0 soliqlarsiz target yoqasiz</strong>.
        </li>
      </ul>
      <p className="mt-3 text-xs font-semibold text-slate-300">
        Bozor narxi: <span className="text-emerald-300">$500</span>
      </p>
    </div>

    {/* 2. Copywriting va sotuv postlari */}
    <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5">
      <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
        2. Copywriting va sotuv postlari
      </h4>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
        <li>
          Biznesingiz uchun{" "}
          <strong>professional sotuv postlari</strong> yozib beramiz.
        </li>
 
        <li>
          Web-saytingizga mos{" "}
          <strong>sotuvga yo‘naltirilgan matnlar</strong> tayyorlaymiz.
        </li>
        <li>
          E’tiborni tortadigan va{" "}
          <strong>savdoga yo‘naltirilgan matnlar</strong> orqali
          mijozlarni jalb qilamiz.
        </li>
      </ul>
      <p className="mt-3 text-xs font-semibold text-slate-300">
        Bozor narxi: <span className="text-emerald-300">$500</span>
      </p>
    </div>
  </div>

  {/* 3-4 bloklar */}
  <div className="space-y-6">
    {/* 3. Sotuv veb-sayti */}
    <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5">
      <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
        3. Sotuv veb-sayti va telegram bot (brendingizga mos)
      </h4>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
        <li>
          Brendingizga mos individual dizayndagi{" "}
          <strong>sotuv veb-sayti</strong> yaratamiz.
        </li>
        <li>
          Sayt dizayni va tuzilmasini{" "}
          <strong>kodlar orqali 0 dan yozamiz</strong>, tayyor shablon emas. Googleda veb-saytingiz 1-larda turadigan qilamiz.
        </li>
        <li>
          Telegram bot orqali
          <strong>izlanishi qulay va oson ma'lumot</strong> olish imkoniyati.
        </li>
        <li>
          Tez va qulay sayt natijasida{" "}
          <strong>leadlar arzonroq va sifatliroq</strong> bo‘ladi.
        </li>
      </ul>
      <p className="mt-3 text-xs font-semibold text-slate-300">
        Bozor narxi: <span className="text-emerald-300">$1000</span>
      </p>
    </div>

    {/* 4. Sotuv xodimlari va skriptlar */}
    <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5">
      <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
        4. Sotuv jamoasi va skriptlar
      </h4>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
        <li>
          Sotuv xodimlaringiz ishini{" "}
          <strong>audit qilamiz</strong>.
        </li>
        <li>
          Kuchli va zaif tomonlarini aniqlab,{" "}
          <strong>amaliy tavsiyalar</strong> beramiz.
        </li>
        <li>
          Aynan biznesingiz uchun mos{" "}
          <strong>sotuv skriptlari</strong> yozib beramiz.
        </li>
        <li>
          Reklamadan kelgan leadni savdoga aylantirish uchun{" "}
          <strong>aniq muloqot ssenariysi</strong>ni ishlab chiqamiz.
        </li>
      </ul>
      <p className="mt-3 text-xs font-semibold text-slate-300">
        Bozor narxi: <span className="text-emerald-300">$1000</span>
      </p>
    </div>
  </div>
</div>

        <div className="bg-slate-900/70 border border-emerald-500/35 rounded-2xl mt-10 p-5 md:p-7">
          <h3 className="text-lg md:text-xl font-bold text-white">
            Umumiy bozor qiymati va bizning taklif
          </h3>
          <p className="mt-3 text-sm md:text-base text-slate-100 leading-relaxed">
            Umumiy bozor qiymati:{" "}
            <strong className="text-emerald-300">$3000</strong>
            bu PRO paketi uchun
          </p>
          <p className="mt-2 text-sm md:text-base text-slate-100 leading-relaxed">
            Lekin biz hozir{" "}
            <span className="font-semibold text-emerald-300">
              barchasini atigi 50% CHEGIRMADA 
            </span>{" "}
           paketlarimizni amalga oshirib beramiz.
          </p>
          <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
           Nega buncha arzon?
          </p>
          <ul className="mt-2 space-y-1 text-sm md:text-base text-slate-100/90 list-disc list-inside">
            <li>
              Natijalarimizni ko‘rsatib, siz bilan{" "}
              <strong>uzoq muddatli hamkorlik</strong> qilishni maqsad qilganmiz.
            </li>
            <li>
              “Bir oy ishladik, keyin yo‘qoldik” emasmiz,{" "}
              <strong>biznesingizga o'zimiznikidek</strong> ishlaymiz.
            </li>
          </ul>
        </div>
        </div>
        {/* END BLOCK */}

{/* PAKETLAR */}
<section className="relative md:px-6 px-2 py-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-emerald-100">
      Target xizmat paketlari
    </h2>
    <p className="mt-2 text-slate-200/90">
      Har bir biznes bosqichiga mos paketlarni taklif qilamiz. Yakuniy narxlar konsultatsiya jarayonida aniqlanadi.
    </p>

    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {/* START */}
      <div className="rounded-3xl border border-emerald-500/25 bg-slate-900/80 p-6 flex flex-col shadow-lg shadow-black/40">
        <h3 className="text-lg font-semibold text-white">START</h3>
        <p className="mt-2 text-sm text-slate-200/80">
          Boshlang‘ich bizneslar va birinchi target kampaniyalari uchun.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
          <li>• Target strategiyasini ishlab chiqamiz.</li>
          <li>• Instagram va Facebook sahifalaringizni professional upakovka qilib beramiz.</li>
          <li>• Biznesingiz uchun sotuvga yo‘naltirilgan copywriting post yozamiz.</li>
        </ul>
        <p className="mt-3 text-xs font-semibold text-slate-300">
        Chegirma narxi: <span className="text-emerald-300">$247</span>
        </p>

        <a
          href="#form"
          className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full border border-emerald-400/60 text-emerald-100 hover:bg-emerald-500/10 transition"
        >
          Konsultatsiya olish
        </a>
      </div>

      {/* GROWTH */}
      <div className="rounded-3xl border-2 border-indigo-500 bg-slate-900/90 shadow-xl shadow-black/60 p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-white">STANDART</h3>
        <p className="mt-2 text-sm text-slate-200/80">
          Natijani tezroq oshirmoqchi bo‘lgan va tizimli o‘sishni maqsad qilgan bizneslar uchun.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
          <li>• Target strategiyasini chuqurroq ishlab chiqamiz.</li>
          <li>• Instagram va Facebook sahifalaringizni professional upakovka qilib, sotuvga tayyorlaymiz.</li>
          <li>• Reklama va web-saytingiz uchun kuchli copywriting sotuv postlari yozamiz.</li>
          <li>• Brendingizga mos <strong>sotuv veb-sayti</strong> professional dizaynda yasab beramiz.</li>
          <li>• Sotuv xodimlaringiz ishini audit qilib, asosiy kamchiliklarini ko‘rsatib beramiz.</li>
        </ul>
        <p className="mt-3 text-xs font-semibold text-slate-300">
        Chegirma narxi: <span className="text-emerald-300">$970</span>
        </p>

        <a
          href="#form"
          className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full bg-indigo-500 text-white hover:bg-indigo-400 transition shadow-lg shadow-emerald-900/50"
        >
          Konsultatsiya olish
        </a>
      </div>

      {/* PRO */}
      <div className="rounded-3xl border border-emerald-500/25 bg-slate-900/80 p-6 flex flex-col shadow-lg shadow-black/40">
        <h3 className="text-lg font-semibold text-white">PRO</h3>
        <p className="mt-2 text-sm text-slate-200/80">
          Katta budjet, kompleks voronka va kuchli sotuv jamoasi bilan ishlaydigan loyihalar uchun.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200/80 flex-1">
          <li>• Target strategiyasi va kampaniyalar tizimini to‘liq ishlab chiqamiz.</li>
          <li>• Instagram va Facebook sahifalaringizni brendingizga mos professional upakovka qilamiz.</li>
          <li>• Reklama, sayt va postlar uchun chuqur copywriting va sotuv matnlarini yozamiz.</li>
          <li>• Brendingizga mos <strong>sotuv veb-sayti va Telegram bot</strong> professional dizaynda yasab beramiz.</li>
          <li>• Sotuv jamoangiz uchun <strong>skriptlar va muloqot ssenariylari</strong> tayyorlaymiz.</li>
          <li>• Kantentlarni ishlab chiqamiz  <strong>To'liq SMM xizmati</strong> ni qilib beramiz.</li>
        </ul>
        <p className="mt-3 text-xs font-semibold text-slate-300">
        Chegirma narxi: <span className="text-emerald-300">$1470</span>
        </p>

        <a
          href="#form"
          className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-semibold rounded-full border border-emerald-400/60 text-emerald-100 hover:bg-emerald-500/10 transition"
        >
          Konsultatsiya olish
        </a>
      </div>
    </div>
  </div>
</section>


{/* BRENDLAR BILAN ISHLAGANIMIZ */}
<section className="relative md:px-6 px-2 py-8">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-lg md:text-xl font-semibold text-emerald-100">
      Biz ishongan va bizga ishongan brendlar
    </h2>
    <p className="mt-1 text-xs text-slate-300">
      Quyidagi loyihalarda marketing va target reklama bo‘yicha tajriba to‘plaganmiz:
    </p>
    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-slate-200/90">
    <div className="rounded-xl border border-emerald-500/25 bg-slate-900/80 py-4 px-3 text-center shadow-sm shadow-black/40 flex flex-col items-center justify-center gap-2">
  <img
    src="/jp.png" // o'zingizning rasm manzilingizni qo'ying
    alt="Turon Med"
    className="h-10 w-auto object-contain"
  />
  <span className="text-xs md:text-sm font-medium text-slate-100">
    Japan school
  </span>
</div>
<div className="rounded-xl border border-emerald-500/25 bg-slate-900/80 py-4 px-3 text-center shadow-sm shadow-black/40 flex flex-col items-center justify-center gap-2">
  <img
    src="/me.png" // o'zingizning rasm manzilingizni qo'ying
    alt="Turon Med"
    className="h-10 w-auto object-contain"
  />
  <span className="text-xs md:text-sm font-medium text-slate-100">
   M Edu school
  </span>
</div>
<div className="rounded-xl border border-emerald-500/25 bg-slate-900/80 py-4 px-3 text-center shadow-sm shadow-black/40 flex flex-col items-center justify-center gap-2">
  <img
    src="/isft.png" // o'zingizning rasm manzilingizni qo'ying
    alt="Turon Med"
    className="h-10 w-auto object-contain"
  />
  <span className="text-xs md:text-sm font-medium text-slate-100">
    ISFT Instituti
  </span>
</div>
<div className="rounded-xl border border-emerald-500/25 bg-slate-900/80 py-4 px-3 text-center shadow-sm shadow-black/40 flex flex-col items-center justify-center gap-2">
  <img
    src="/md.png" // o'zingizning rasm manzilingizni qo'ying
    alt="Turon Med"
    className="h-10 w-auto object-contain"
  />
  <span className="text-xs md:text-sm font-medium text-slate-100">
    Med Expert
  </span>
</div>
<div className="rounded-xl border border-emerald-500/25 bg-slate-900/80 py-4 px-3 text-center shadow-sm shadow-black/40 flex flex-col items-center justify-center gap-2">
  <img
    src="/TR.png" // o'zingizning rasm manzilingizni qo'ying
    alt="Turon Med"
    className="h-10 w-auto object-contain"
  />
  <span className="text-xs md:text-sm font-medium text-slate-100">
    Turon Med
  </span>
</div>

    </div>
  </div>
</section>


        {/* LID FORMA */}
        <section id="form" className="relative md:px-6 px-2 pt-4 pb-16">
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
