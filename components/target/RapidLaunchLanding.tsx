/**
 * Vision Group — Shogirdlik kursi (Performance Marketing) sotuv sahifasi
 * Dark + Emerald Green | Schwartz copywriting framework
 * Istakni kanalizatsiya → muammo → noyob mexanizm → isbot → taklif → risk reversal
 * ============================================================
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
import { CountdownTimer } from "@/components/comments/Countdowntimer";
import LeadModal from "@/components/target/LeadModal";
import ResultsLightbox from "@/components/target/ResultsLightbox";
import { courseFormCopy } from "@/components/target/courseFormCopy";
import type { ReactNode } from "react";


// ============ OQIM SOZLAMALARI ============
// Har yangi oqimda faqat shu yerni yangilang. Real ma'lumot bo'lmasa null qoldiring —
// sahifada soxta raqam yoki eskirgan sana ko'rinmaydi.
const COHORT = {
  /** Kurs nomi. Qo'shimchalar to'g'ridan-to'g'ri qo'shiladi: «kursi» + «ga» → «kursiga». */
  name: "Shogirdlik kursi",
  year: 2026,
  /** Boshlanish sanasi, masalan "3-noyabr". null → "Administrator tasdiqlaydi". */
  startLabel: null as string | null,
  /** Qabul yopilish vaqti (ISO, +05:00). null bo'lsa taymer ko'rinmaydi, o'tib ketsa o'zi yashiriladi. */
  deadline: null as string | null,
  /** Faqat CRM'dagi real qolgan joy soni. null → joylar haqida raqam ko'rsatilmaydi. */
  seatsLeft: null as number | null,
};

// ============ DATA ============

const heroStats = [
  { num: "$120K+", lbl: "Boshqarilgan byudjet" },
  { num: "1:74", lbl: "ROAS · reklama qaytimi" },
  { num: "12+", lbl: "Bizneslar" },
  { num: "4 yil", lbl: "Amaliy tajriba" },
];

const tickerItems = [
  "VIDEO DARSLAR + JONLI ZOOM",
  "1 YILLIK KIRISH HUQUQI (STANDART TARIF)",
  "15 KUNLIK PULNI QAYTARISH KAFOLATI",
  "CRM + CAPI AMALIYOTI",
  "REAL PORTFOLIO",
  "SOVUQ MIJOZDAN KASSAGACHA TIZIM",
];

// Stavkalar: eski usulda qolishning narxi
// 01-blok: «sizda ham shundaymi?» savoliga javob beradigan alomatlar
const symptoms = [
  "Lid arzon bo'lsa xursandsiz, qimmatlashsa — o'chirib, qaytadan yoqasiz.",
  "Kelgan lidlar sifatsiz: «men qoldirmaganman», puli yo'q auditoriya.",
  "Mijoz sotuv ko'rmaydi va shartnomani uzaytirmaydi.",
];

const stakes = [
  "Har oy byudjet (o'zingizniki yoki mijozniki) kuyadi — natija esa yo'q.",
  "Portfolio bo'sh qoladi: ko'rsatadigan raqamli keysingiz bo'lmaydi.",
  "AI va CAPI bilan ishlaydigan raqobatchilar mijozingizni olib ketadi.",
  "Natijani isbotlay olmaganingiz uchun arzon narxda ishlashda davom etasiz.",
];

// Muvaffaqiyat: kursdan oldin va keyin
const beforeAfter = [
  {
    before: "Lid arzon bo'lsa xursand, qimmat bo'lsa o'chirib qayta yoqasiz",
    after: "«Nega ishlamadi?» savoliga raqamlar bilan javob berasiz",
  },
  {
    before: "Mijoz shartnomani uzaytirmaydi",
    after: "Mijoz sotuv ko'rgani uchun qoladi",
  },
  {
    before: "Faqat target yoqasiz",
    after: "Sayt, bot, CRM va CAPI'ni o'zingiz ulaysiz",
  },
  {
    before: "Arzon narxda ishlaysiz",
    after: "Natijadan ulush so'rash huquqiga egasiz",
  },
];

// Reja: 3 qadam
const planSteps = [
  {
    num: "01",
    title: "Ariza qoldiring",
    desc: "Ism va telefon kifoya. Administrator 24 soat ichida bog'lanib, tarif va boshlanish sanasini tasdiqlaydi.",
  },
  {
    num: "02",
    title: "2 oy davomida tizimni real biznesda qo'llaysiz",
    desc: "Har hafta video va jonli Zoom darslar, amaliy topshiriq va kabinetingiz tahlili.",
  },
  {
    num: "03",
    title: "Portfolio bilan birinchi mijozingizni olasiz",
    desc: "Real biznesdagi raqamli natijalaringiz — mijozga ko'rsatadigan eng kuchli isbotingiz.",
  },
];

// Schwartz: noyob mexanizm (bozor soflligi yuqori — oddiy va'da yetmaydi)
const mechanism = [
  {
    num: "01",
    title: "Har bir qadam nazoratda",
    desc: "Har bir qadamni boshqarasiz: qayerda nima qilishni aniq bilasiz. Sotuv tasodif emas.",
  },
  {
    num: "02",
    title: "Meta'ga har kuni to'g'ri signal",
    desc: "Algoritm xaridoringizni o'zi topadi — lid arzonlashadi, sifati oshadi.",
  },
  {
    num: "03",
    title: "Jarayonni raqamlarda o'qish",
    desc: "Kichik qadamlarni raqamlar asosida to'g'rilab, barqaror ishlaydigan strategiya qurasiz.",
  },
  {
    num: "04",
    title: "Sifatsiz lidlarni keskin kamaytirish",
    desc: "Mahsulot va Instagram holatiga mos to'g'ri texnika bilan target yoqasiz.",
  },
];

const audience = [
  {
    tag: "01",
    title: "Endi boshlayotganlar",
    desc: "Targetni noldan, to'g'ri tizim bilan o'rganib, 2 oyda birinchi mijozga chiqmoqchi bo'lganlar.",
  },
  {
    tag: "02",
    title: "Ishlayotgan targetologlar",
    desc: "Lid olib kelayotgan, lekin mijozga sotuv olib kelolmayotgan va natijadan ulush olmoqchi bo'lganlar.",
  },
  {
    tag: "03",
    title: "SMM mutaxassislari va biznes egalari",
    desc: "Reklamani o'zi boshqarib, uni sotuvgacha o'lchashni o'rganmoqchi bo'lganlar.",
  },
];

const format = [
  {
    num: "i.",
    title: "Haftada 2 video dars",
    desc: "Oldindan yozilgan (zapis) tarzda platformaga joylanadi. Istalgan vaqtda, o'z tempingizda ko'rasiz va qayta ko'rib mustahkamlaysiz.",
  },
  {
    num: "ii.",
    title: "Haftada 2 jonli dars",
    desc: "Savol-javob, real reklama kabinetlari tahlili va ochiq dars. Sizning kampaniyangizga aniq, jonli fikr.",
  },
  {
    num: "iii.",
    title: "1 yillik kirish huquqi",
    desc: "Standart tarifda barcha video darslar, shablonlar va yangilanishlarga 1 yil davomida kirish. Bir marta o'rganib, yil davomida qaytib ishlaysiz.",
  },
  {
    num: "iv.",
    title: "2 oylik intensiv struktura",
    desc: "Aniq, bosqichma-bosqich tuzilgan dastur. Har hafta amaliy topshiriq va o'lchanadigan natija.",
  },
];

const months = [
  {
    num: "1-OY",
    title: "Texnik Targetolog",
    desc: "Oy oxirida: reklama kabinetini noldan ochib, birinchi kampaniyani mustaqil yoqasiz va natijani raqamlarda o'qiysiz.",
    skills: [
      "Meta algoritmi qanday ishlaydi",
      "Facebook, biznes sahifa va reklama akkauntini ochish",
      "Birinchi reklama kampaniyasini boshidan oxirigacha yoqish",
      "Reklama voronkasi va metrikalarni sozlash",
      "O'xshash auditoriya (Lookalike) va xaridorlar ro'yxatidan foydalanish",
      "Meta'dan mijoz uchun hisobot tayyorlash",
      "Target yoqishdan oldin auditoriyani hisoblash",
      "Meta'ning 2026-yilgi tavsiyalari asosidagi texnikalar",
      "Reklama sifati bahosi (Quality ranking) va kreativ tahlili",
      "CPM'ni (1000 ko'rsatish narxi) to'g'ri texnikalar bilan arzonlashtirish",
      "Kichik o'zgarishlar katta o'sish beradigan nuqtalar",
      "Mijozning \"qizil chizig'i\" va LTV (mijozning umrbod qiymati)",
      "Sotadigan kontent va kreativlar",
    ],
  },
  {
    num: "2-OY",
    title: "Kontent + Strategik Targetolog",
    desc: "Oy oxirida: sayt, Telegram bot, CRM va Pixel + CAPI'ni ulab, mijozga sotuvgacha o'lchanadigan tizim qurasiz.",
    skills: [
      "E'tiborni ushlaydigan boshlanish (hook) va kuchli taklif (offer) yaratish",
      "Sotuv matni (copywriting) texnikasi",
      "Veb-sayt uchun sotuv matni",
      "AI yordamida veb-sayt yasash",
      "Veb-saytdan Telegram botga lidlarni yuborish",
      "Pixel + CAPI'ni to'liq sozlash",
      "Lid magnit qurish",
      "Veb-sayt → Telegram bot → CRM integratsiyasi",
      "Sotib olgan mijozlarni Meta'ga CAPI orqali qaytarish",
      "CRM'siz ham xaridorlarni Meta'ga yuborish",
      "To'liq Performance Marketing tizimi va voronka",
      "Sotuv darsi: e'tirozlar bilan ishlash",
      "Test → optimallashtirish → masshtablash",
    ],
  },
];

const credentials = [
  { yr: "2022", text: '"Shogirdlar 4.0" va Marketing kursi bitiruvchisi' },
  { yr: "2024", text: "Hayot Sharapovdan target mentorship" },
  { yr: "2025", text: "Ta'lim va tibbiyot sohasidagi 12+ biznes bilan ishlash" },
  { yr: "2026", text: "Vision Group — Shogirdlik kursi" },
];

const cases = [
  {
    tag: "KAYS 01 / Ta'lim",
    num: "3,500",
    small: " mijoz",
    desc: "ISFT instituti Samarqand filiali uchun target kampaniyasi: auditoriyani segmentlarga ajratib, 6 oyda 3,500 mijoz jalb qilindi.",
    meta: "2025 / 6 oy",
  },
  {
    tag: "KAYS 02 / Maktab",
    num: "$4,600",
    small: " → 250",
    desc: "Bitta maktabga atigi $4,600 byudjet bilan 250 o'quvchi jalb qilindi.",
    meta: "2025 / 2 oy",
  },
];

// Yangi sharh qo'shishda bitiruvchiga 3 ta savol bering:
// muammo nima edi → nima o'zgartirdingiz → hozir qanday natija (raqam bilan).
// Kabinet skrinshoti yoki video bo'lsa — ResultsLightbox'ga qo'shing.
const testimonials = [
  {
    initials: "Sh",
    name: "Shahnoza S.",
    role: "Marketolog · 3.0 oqim",
    quote: "3 yildan beri target ishlayman, lekin bugungi dars bomba. Hali ko'p narsani bilmas ekanman.",
  },
  {
    initials: "Y",
    name: "Yulduzxon",
    role: "Targetolog · 3.0 oqim",
    quote: "Kursingizgacha o'zimni zo'r targetolog deb o'ylardim. Sizni tanlab adashmabman.",
  },
];

const includedItems = [
  { num: "i.", title: "1 yillik kirish huquqi", desc: "Guruh, platforma va barcha video darslar 1 yil davomida qo'lingizda." },
  { num: "ii.", title: "Telegram orqali yordam", desc: "Darslar orasida savollaringizga tez va aniq javob." },
  { num: "iii.", title: "AI bilan ishlash darslari", desc: "Matn, kreativ va sayt tayyorlashni tezlashtiradigan AI ish jarayoni." },
  { num: "iv.", title: "Real portfolio", desc: "Haqiqiy biznes uchun reklama yoqib, portfolio yig'asiz." },
  { num: "v.", title: "Birinchi mijoz topishga yordam", desc: "Portfolio tayyorlash, taklif yozish va mijoz bilan natijadan ulush asosida kelishish." },
  { num: "vi.", title: "15 kunlik pul qaytarish kafolati", desc: "Birinchi 15 kun ichida mos kelmasa — to'lov savolsiz 100% qaytariladi." },
];

const priceFeatures = [
  "Haftada 2 video dars + 2 jonli Zoom dars",
  "1 yillik kirish huquqi (guruh + video darslar)",
  "Telegram orqali yordam",
  "AI bilan ishlash darslari",
  "Real portfolio (haqiqiy biznes)",
  "Birinchi mijoz topishga yordam",
  "15 kunlik pul qaytarish kafolati",
];

type PriceTier = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  old?: string;
  amount: string;
  per?: string;
  total: string;
  save?: string;
  value: number;
  featured?: boolean;
  features: string[];
  missing?: string[];
  cta: string;
};

const priceTiers: PriceTier[] = [
  {
    id: "zapis",
    badge: "Video kurs",
    name: "Zapis darslar",
    tagline: "Barcha darslar yozib olingan va yuklangan — o'z tezligingizda o'rganasiz.",
    amount: "3,970,000",
    total: "Bir martalik to'lov · 2 oylik kirish huquqi",
    value: 3970000,
    features: [
      "Barcha dars zapislari yuklangan",
      "To'lovdan so'ng darhol kirish beriladi",
      "2 oy davomida to'liq kirish",
      "O'zingizga qulay vaqtda o'rganish",
    ],
    missing: [
      "Jonli Zoom darslar",
      "Targeting va strategiya analizi",
    ],
    cta: "Joyimni band qilish",
  },
  {
    id: "standart",
    badge: "2 oylik kurs",
    name: "Shogirdlik kursi — to'liq format",
    tagline: "Jonli + zapis darslar, support va to'liq analiz bilan.",
    old: "9,600,000 so'm",
    amount: "6,400,000",
    per: "so'm · 2 oy",
    total: "yoki oyiga 3,200,000 so'mdan bo'lib to'lash",
    save: "−33%",
    value: 3200000,
    featured: true,
    features: [
      ...priceFeatures,
      "Targeting va marketing strategiyangizni to'liq analiz qildirish",
    ],
    cta: "Joyimni band qilish",
  },
  {
    id: "individual",
    badge: "Individual",
    name: "Individual (1:1) o'qish",
    tagline: "Shaxsiy yondashuv — dastur sizning maqsadingizga moslashtiriladi.",
    amount: "11,970,000",
    total: "1 oy · individual format",
    value: 11970000,
    features: [
      "1 oy davomida individual darslar",
      "Dastur sizning biznesingizga moslashtiriladi",
      "Targeting va marketing strategiyangiz to'liq analizi",
      "Barcha video darslarga kirish huquqi",
    ],
    cta: "Joyimni band qilish",
  },
];

const faqs = [
  {
    q: "Targetdan umuman bilmasam, qiyin bo'lmaydimi?",
    a: "Yo'q. Kurs 0 dan boshlanadi — birinchi oy aynan fundament va texnikaga bag'ishlangan. Kompyuter bilan ishlay olsangiz, yetarli.",
  },
  {
    q: "Darslar video bo'lsa, kim yordam beradi?",
    a: "Har hafta jonli Zoom darsida savol-javob va real kabinet tahlili bo'ladi. Darslar orasida esa Telegram orqali savol berib, yordam olasiz.",
  },
  {
    q: "Pul rostdan qaytadimi?",
    a: "Ha. Standart tarifda birinchi 15 kun ichida (taxminan 8 ta dars) kurs sizga mos kelmasa — to'lovni hech qanday savolsiz to'liq qaytarib olasiz. Xavf to'liq biznes tomonida.",
  },
  {
    q: "Qachon boshlanadi?",
    a: COHORT.startLabel
      ? `${COHORT.name} ${COHORT.startLabel} kuni boshlanadi. Ariza qoldirsangiz, administrator joyingizni tasdiqlaydi.`
      : "Aniq sanani administrator ariza qoldirganingizdan keyin 24 soat ichida tasdiqlaydi. Zapis tarifida esa to'lovdan so'ng darhol boshlaysiz.",
  },
  {
    q: "Telefondan o'qisa bo'ladimi?",
    a: "Video darslar va jonli Zoom darslarni telefondan ko'rish mumkin. Reklama kabinetini sozlash va amaliy topshiriqlar uchun esa kompyuter tavsiya qilinadi.",
  },
  {
    q: "Boshqa target kurslaridan farqi nima?",
    a: "Ko'p kurslar reklama kabinetida tugma bosishni o'rgatadi. Bu kursda reklamadan keyingi qism ham bor: sayt, Telegram bot, CRM, Pixel + CAPI va sotuv. Ya'ni lid uchun emas, sotuv uchun javob berishni o'rganasiz.",
  },
  {
    // Bitiruvchilarning real raqamli natijalari yig'ilgach, shu javobga 1–2 ta misol qo'shing.
    q: "Kursdan keyin qancha daromad qilish real?",
    a: "Aniq summa va'da qilmaymiz — daromad mijozlaringiz soni va ularga keltirgan natijangizga bog'liq. Kursda real biznes uchun portfolio yig'asiz va mijoz bilan natijadan ulush asosida ishlash modelini o'rganasiz.",
  },
  {
    q: "Narxni qoplay olamanmi?",
    a: "Bu mijozlaringiz to'laydigan summaga bog'liq. Kursda portfolio yig'asiz va natijadan ulush asosida ishlashni o'rganasiz — maqsad kurs narxini birinchi mijozlaringiz bilan qoplash.",
  },
  {
    q: "Kursdan keyin ish yoki mijoz topa olamanmi?",
    a: "Kursda real biznes uchun portfolio yig'asiz, taklif yozish va mijoz bilan natijadan ulush asosida kelishishni o'rganasiz. Birinchi mijozni topishda amaliy yordam beramiz.",
  },
  {
    q: "To'lovni bo'lib to'lasa bo'ladimi?",
    a: "Ha, oyma-oy bo'lib to'lash imkoniyati mavjud. Batafsil administratordan so'rang.",
  },
];

const cohort = [
  { lbl: "Kurs", val: COHORT.name, urgent: false },
  { lbl: "Boshlanishi", val: COHORT.startLabel ?? "Administrator tasdiqlaydi", urgent: false },
  { lbl: "Format", val: "Video + Zoom", urgent: false },
  COHORT.seatsLeft !== null
    ? { lbl: "Qoldi", val: `faqat ${COHORT.seatsLeft} joy`, urgent: true }
    : { lbl: "To'lov", val: "Oyma-oy mumkin", urgent: false },
];

// Taymer faqat kelajakdagi real muddat bo'lsa ko'rinadi (o'tib ketsa, komponent o'zi yashiradi)
const showDeadline = COHORT.deadline !== null;

// ============ STYLES (scoped under .vg-page) ============

const styles = `
.vg-page {
  --vg-bg: #080F28;
  --vg-bg-2: #0E1A3D;
  --vg-bg-3: #15244F;
  --vg-ink: #FFFFFF;
  --vg-ink-2: rgba(255,255,255,0.76);
  --vg-muted: rgba(255,255,255,0.5);
  --vg-line: rgba(120,150,225,0.16);
  --vg-accent: #818CF8;
  --vg-accent-2: #6366F1;
  --vg-accent-ink: #FFFFFF;

  --vg-serif: var(--font-heading), -apple-system, sans-serif;
  --vg-sans: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
  --vg-mono: var(--font-geist-mono), ui-monospace, monospace;

  font-family: var(--vg-sans);
  background: var(--vg-bg);
  color: var(--vg-ink);
  line-height: 1.5;
  font-size: 16px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  background-image:
    radial-gradient(900px 460px at 50% -16%, rgba(99,102,241,0.12), transparent 60%),
    radial-gradient(circle at 1px 1px, rgba(150,180,255,0.035) 1px, transparent 0);
  background-size: 100% 720px, 22px 22px;
  background-repeat: no-repeat, repeat;
  background-attachment: scroll, scroll;
  scroll-behavior: smooth;
}
/* Reset base qatlamida: ichiga qo'yilgan Tailwind bloklari (masalan, Otzif) o'z padding/margin'ini saqlaydi */
@layer base {
  .vg-page *, .vg-page *::before, .vg-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .vg-page a { color: inherit; text-decoration: none; }
}

.vg-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

/* URGENCY BAR */
.vg-page .vg-urgency { background: linear-gradient(90deg, var(--vg-accent-2), var(--vg-accent)); position: relative; z-index: 1; }
.vg-urgency-inner { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 9px 24px; flex-wrap: wrap; }
.vg-urgency-text { font-family: var(--vg-sans); font-size: 13px; font-weight: 500; color: #0A0F2C; letter-spacing: 0.01em; }
.vg-urgency-text strong { font-weight: 800; }
.vg-urgency-pulse { width: 9px; height: 9px; border-radius: 50%; background: #0A0F2C; box-shadow: 0 0 0 0 rgba(10,15,44,0.5); animation: vg-pulse2 1.6s ease-out infinite; flex-shrink: 0; }
@keyframes vg-pulse2 { 0% { box-shadow: 0 0 0 0 rgba(10,15,44,0.5); } 70% { box-shadow: 0 0 0 8px rgba(10,15,44,0); } 100% { box-shadow: 0 0 0 0 rgba(10,15,44,0); } }
.vg-urgency-cta { display: inline-flex; align-items: center; gap: 7px; font-family: var(--vg-sans); font-size: 13px; font-weight: 700; color: #fff; background: #0A0F2C; padding: 7px 16px; border-radius: 999px; transition: transform .15s, background .2s; }
.vg-urgency-cta:hover { background: #131A45; transform: translateY(-1px); }
@media (max-width: 640px) {
  .vg-page .vg-urgency { position: static; }
  .vg-urgency-inner { gap: 10px; padding: 8px 16px; }
  .vg-urgency-text { font-size: 12px; }
  .vg-urgency-cta { font-size: 12px; padding: 6px 13px; }
}

/* HERO */
.vg-page .vg-hero { padding: 60px 0 70px; border-bottom: 1px solid var(--vg-line); position: relative; overflow: hidden; }
.vg-hero-glow { position: absolute; top: -120px; right: -120px; width: 520px; height: 520px; background: radial-gradient(circle, rgba(129,140,248,0.14), rgba(129,140,248,0) 70%); pointer-events: none; animation: vg-glow 6s ease-in-out infinite; }
.vg-hero-inner { position: relative; z-index: 1; }
.vg-hero-pre { font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.08em; color: var(--vg-accent); margin-bottom: 14px; }
.vg-hero-eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 28px; flex-wrap: wrap; }
.vg-hero-eyebrow::before { content: ""; width: 32px; height: 1px; background: var(--vg-accent); }
.vg-hero-headline { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(40px, 6.6vw, 82px); line-height: 0.98; letter-spacing: -0.035em; margin-bottom: 24px; font-variation-settings: "opsz" 144; max-width: 980px; }
.vg-hero-headline-q { font-size: clamp(34px, 5vw, 64px); line-height: 1.05; }
.vg-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vg-hero-headline .vg-strike { position: relative; display: inline-block; }
.vg-hero-headline .vg-strike::after { content: ""; position: absolute; left: -2%; right: -2%; top: 52%; height: 4px; background: var(--vg-accent); transform: rotate(-3deg) scaleX(0); transform-origin: left center; animation: vg-strike .5s ease-out 1.1s forwards; }
.vg-hero-sub { font-size: 19px; line-height: 1.6; color: var(--vg-ink-2); max-width: 660px; margin-bottom: 36px; }
.vg-hero-sub strong { font-weight: 600; color: var(--vg-ink); }
.vg-hero-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 18px; }

.vg-btn-primary { background: var(--vg-accent); color: var(--vg-bg); padding: 16px 28px; border-radius: 6px; font-size: 15px; font-weight: 700; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all .2s; font-family: var(--vg-sans); box-shadow: 0 12px 30px -12px rgba(129,140,248,0.5); }
.vg-btn-primary:hover { background: var(--vg-accent-2); transform: translateY(-1px); box-shadow: 0 16px 34px -12px rgba(129,140,248,0.6); }
.vg-btn-primary svg { transition: transform .2s; animation: vg-arrow 1.7s ease-in-out infinite; }
.vg-btn-primary:hover svg { transform: translateX(4px); animation: none; }
.vg-btn-secondary { padding: 16px 28px; border: 1px solid var(--vg-line); border-radius: 6px; font-size: 15px; font-weight: 500; background: transparent; color: var(--vg-ink); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; font-family: var(--vg-sans); }
.vg-btn-secondary:hover { background: var(--vg-bg-2); border-color: var(--vg-accent); }

.vg-trustline { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--vg-muted); margin-bottom: 40px; }

/* HERO META CREDENTIAL LINE */
.vg-hero-meta { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 26px; padding: 10px 16px 10px 10px; border: 1px solid var(--vg-line); border-radius: 999px; background: rgba(129,140,248,0.05); font-size: 16px; color: var(--vg-ink-2); max-width: 620px; line-height: 1.4; }
.vg-hero-meta strong { color: var(--vg-accent); font-weight: 600; }
.vg-hero-meta-badge { flex-shrink: 0; font-family: var(--vg-mono); font-size: 10px; font-weight: 700; letter-spacing: 0.14em; color: var(--vg-bg); background: var(--vg-accent); padding: 5px 10px; border-radius: 999px; }

/* CTA REASSURANCE + SCARCITY NOTE */
.vg-cta-note { display: flex; align-items: center; gap: 9px; font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.04em; color: var(--vg-ink-2); margin-bottom: 34px; }
.vg-cta-note strong { color: var(--vg-accent); }
.vg-cta-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--vg-accent); box-shadow: 0 0 0 0 rgba(129,140,248,0.6); animation: vg-pulse 1.8s ease-out infinite; flex-shrink: 0; }
@keyframes vg-pulse { 0% { box-shadow: 0 0 0 0 rgba(129,140,248,0.55); } 70% { box-shadow: 0 0 0 8px rgba(129,140,248,0); } 100% { box-shadow: 0 0 0 0 rgba(129,140,248,0); } }

.vg-hero-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); }
.vg-hero-stats > div { padding: 22px 22px 22px 0; border-right: 1px solid var(--vg-line); }
.vg-hero-stats > div:last-child { border-right: none; padding-right: 0; }
.vg-hero-stats .vg-num { font-family: var(--vg-serif); font-size: 38px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px; color: var(--vg-accent); }
.vg-hero-stats .vg-lbl { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
@media (max-width: 800px) {
  .vg-page .vg-hero-stats { grid-template-columns: 1fr 1fr; }
  .vg-page .vg-hero-stats > div { padding: 18px 14px; border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-hero-stats > div:nth-child(odd) { border-right: 1px solid var(--vg-line); }
  .vg-page .vg-hero-stats > div:nth-last-child(-n+2) { border-bottom: none; }
}

/* TICKER */
.vg-page .vg-ticker { background: var(--vg-accent); color: var(--vg-bg); padding: 12px 0; overflow: hidden; }
.vg-ticker-track { display: flex; gap: 40px; animation: vg-scroll 30s linear infinite; white-space: nowrap; font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; width: max-content; }
.vg-ticker-track span { display: flex; align-items: center; gap: 12px; }
.vg-ticker-track .vg-dot { color: var(--vg-bg); }
@keyframes vg-scroll { to { transform: translateX(-33.33%); } }

/* SECTIONS */
.vg-page .vg-section { padding: 70px 0; border-bottom: 1px solid var(--vg-line); }
.vg-section-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
.vg-section-eyebrow::before { content: "§"; font-family: var(--vg-serif); font-size: 16px; color: var(--vg-ink); }
.vg-section-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(30px, 4.5vw, 52px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 20px; max-width: 860px; }
.vg-section-title em { font-style: italic; color: var(--vg-accent); }
.vg-section-lead { font-size: 19px; color: var(--vg-ink-2); max-width: 720px; line-height: 1.6; margin-bottom: 48px; }
.vg-section-lead + .vg-section-lead { margin-top: -32px; }
.vg-section-lead strong { color: var(--vg-ink); font-weight: 600; }

/* PROBLEM */
.vg-page .vg-problem { background: var(--vg-bg-2); }
.vg-problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.vg-prob { display: flex; gap: 16px; padding: 24px; background: var(--vg-bg); border: 1px solid var(--vg-line); border-radius: 8px; }
.vg-prob-x { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; border: 1px solid rgba(239,68,68,0.6); color: #F87171; display: grid; place-items: center; font-size: 13px; font-weight: 700; }
.vg-prob p { font-size: 15px; line-height: 1.55; color: var(--vg-ink-2); }
.vg-problem-bridge { margin-top: 36px; font-family: var(--vg-serif); font-size: clamp(20px, 2.6vw, 28px); line-height: 1.3; letter-spacing: -0.01em; max-width: 760px; }
.vg-problem-bridge em { font-style: italic; color: var(--vg-accent); }
@media (max-width: 800px) { .vg-page .vg-problem-grid { grid-template-columns: 1fr; } }

/* PLAIN LIST (no cards — clean & scannable) */
.vg-plain-list { max-width: 820px; border-top: 1px solid var(--vg-line); }
.vg-plain-row { display: flex; gap: 18px; align-items: flex-start; padding: 20px 0; border-bottom: 1px solid var(--vg-line); }
.vg-plain-mark { flex-shrink: 0; font-family: var(--vg-mono); font-size: 15px; font-weight: 700; line-height: 1.45; }
.vg-plain-x { color: #F87171; }
.vg-plain-num { color: var(--vg-accent); }
.vg-plain-row > p { font-size: 19px; line-height: 1.5; color: var(--vg-ink); }
.vg-plain-row > div h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 20px; letter-spacing: -0.01em; margin-bottom: 4px; color: var(--vg-ink); }
.vg-plain-row > div p { font-size: 17px; line-height: 1.55; color: var(--vg-ink-2); }
@media (max-width: 800px) {
  .vg-page .vg-plain-row > p { font-size: 16px; }
  .vg-page .vg-plain-row > div h3 { font-size: 18px; }
}

/* AGITATION */
.vg-page .vg-agitate { background: linear-gradient(180deg, var(--vg-bg) 0%, var(--vg-bg-2) 100%); }
.vg-agitate-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.vg-agitate-card { background: var(--vg-bg); border: 1px solid rgba(239,68,68,0.28); border-radius: 8px; padding: 28px 24px; position: relative; overflow: hidden; }
.vg-agitate-card::before { content: ""; position: absolute; top: 0; left: 0; bottom: 0; width: 3px; background: #EF4444; opacity: 0.7; }
.vg-agitate-num { font-family: var(--vg-serif); font-size: 30px; font-weight: 500; letter-spacing: -0.03em; color: #F87171; margin-bottom: 14px; line-height: 1; }
.vg-agitate-card p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) { .vg-page .vg-agitate-grid { grid-template-columns: 1fr; } }

/* MECHANISM */
.vg-mech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vg-mech { padding: 32px 30px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-mech:hover { background: var(--vg-bg-3); }
.vg-mech:nth-child(2n) { border-right: none; }
.vg-mech:nth-last-child(-n+2) { border-bottom: none; }
.vg-mech-num { font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.12em; color: var(--vg-accent); margin-bottom: 14px; }
.vg-mech h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 23px; letter-spacing: -0.02em; margin-bottom: 12px; }
.vg-mech p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) {
  .vg-page .vg-mech-grid { grid-template-columns: 1fr; }
  .vg-page .vg-mech { border-right: none !important; }
}

/* AUDIENCE */
.vg-aud-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.vg-aud { background: var(--vg-bg-2); border: 1px solid var(--vg-line); border-radius: 8px; padding: 30px 26px; transition: all .2s; }
.vg-aud:hover { border-color: var(--vg-accent); transform: translateY(-2px); }
.vg-aud-tag { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-accent); letter-spacing: 0.1em; margin-bottom: 16px; }
.vg-aud h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 22px; letter-spacing: -0.02em; margin-bottom: 12px; }
.vg-aud p { font-size: 16px; color: var(--vg-ink-2); line-height: 1.6; }
.vg-aud-note { margin-top: 26px; font-size: 14px; color: var(--vg-muted); font-style: italic; font-family: var(--vg-serif); }
@media (max-width: 800px) { .vg-page .vg-aud-grid { grid-template-columns: 1fr; } }

/* FORMAT */
.vg-format-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vg-fmt { padding: 30px 28px; display: flex; gap: 18px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-fmt:hover { background: var(--vg-bg-3); }
.vg-fmt:nth-child(2n) { border-right: none; }
.vg-fmt:nth-last-child(-n+2) { border-bottom: none; }
.vg-fmt-num { font-family: var(--vg-serif); font-style: italic; font-size: 28px; font-weight: 500; color: var(--vg-accent); flex-shrink: 0; width: 40px; }
.vg-fmt h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 19px; margin-bottom: 8px; letter-spacing: -0.01em; }
.vg-fmt p { font-size: 16px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) {
  .vg-page .vg-format-grid { grid-template-columns: 1fr; }
  .vg-page .vg-fmt { border-right: none !important; }
}

/* CURRICULUM */
.vg-curriculum-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-2); border-radius: 8px; overflow: hidden; }
.vg-month { padding: 36px 30px; border-right: 1px solid var(--vg-line); position: relative; transition: background .2s; }
.vg-month:hover { background: var(--vg-bg-3); }
.vg-month:last-child { border-right: none; }
.vg-month-num { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
.vg-month-num::before { content: ""; width: 20px; height: 1px; background: var(--vg-accent); }
.vg-month-title { font-family: var(--vg-serif); font-size: 28px; font-weight: 500; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 14px; }
.vg-month-desc { font-size: 16px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 20px; }
.vg-month-skills { list-style: none; border-top: 1px solid var(--vg-line); padding-top: 16px; }
.vg-month-skills li { font-size: 15px; color: var(--vg-ink-2); padding: 6px 0; display: flex; align-items: flex-start; gap: 10px; line-height: 1.5; }
.vg-month-skills li::before { content: "→"; color: var(--vg-accent); font-weight: 600; flex-shrink: 0; }
@media (max-width: 900px) {
  .vg-page .vg-curriculum-list { grid-template-columns: 1fr; }
  .vg-page .vg-month { border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-month:last-child { border-bottom: none; }
}

/* INSTRUCTOR */
.vg-instructor { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.vg-instructor-photo { position: relative; background: var(--vg-bg-2); aspect-ratio: 4/5; overflow: hidden; border: 1px solid var(--vg-line); border-radius: 8px; }
.vg-instructor-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vg-instructor-photo .vg-badge { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(8,15,40,0.92); backdrop-filter: blur(8px); color: var(--vg-ink); padding: 14px 18px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; z-index: 2; border: 1px solid var(--vg-line); border-radius: 4px; }
.vg-instructor-photo .vg-badge strong { display: block; font-family: var(--vg-serif); font-size: 22px; font-weight: 500; letter-spacing: -0.02em; text-transform: none; margin-top: 4px; color: var(--vg-accent); }
.vg-instructor h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(28px, 3.5vw, 42px); line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 22px; }
.vg-instructor h2 em { font-style: italic; color: var(--vg-accent); }
.vg-instructor p { font-size: 17px; color: var(--vg-ink-2); line-height: 1.6; margin-bottom: 14px; }
.vg-instructor p strong { color: var(--vg-ink); font-weight: 600; }
.vg-cred-list { list-style: none; margin-top: 24px; border-top: 1px solid var(--vg-line); }
.vg-cred-list li { padding: 14px 0; border-bottom: 1px solid var(--vg-line); display: grid; grid-template-columns: 70px 1fr; gap: 20px; font-size: 16px; color: var(--vg-ink-2); }
.vg-cred-list .vg-yr { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-accent); }
@media (max-width: 900px) { .vg-page .vg-instructor { grid-template-columns: 1fr; gap: 32px; } }

/* CASES */
.vg-cases-grid { display: grid; grid-template-columns: repeat(2, 1fr); max-width: 820px; gap: 18px; }
.vg-case { background: var(--vg-bg-2); border: 1px solid var(--vg-line); padding: 28px; position: relative; overflow: hidden; border-radius: 8px; transition: all .2s; }
.vg-case:hover { border-color: var(--vg-accent); transform: translateY(-2px); }
.vg-case::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--vg-accent); }
.vg-case-tag { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 18px; }
.vg-case-num { font-family: var(--vg-serif); font-size: 48px; font-weight: 500; letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px; color: var(--vg-accent); }
.vg-case-num small { font-size: 18px; color: var(--vg-ink); letter-spacing: -0.02em; }
.vg-case-desc { font-size: 16px; color: var(--vg-ink-2); line-height: 1.55; border-top: 1px solid var(--vg-line); padding-top: 16px; margin-top: 16px; }
.vg-case-meta { font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); margin-top: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
@media (max-width: 800px) { .vg-page .vg-cases-grid { grid-template-columns: 1fr; } }

/* VILLAIN / PHILOSOPHY */
.vg-philo { margin-top: 22px; font-size: 16px; line-height: 1.6; color: var(--vg-ink-2); max-width: 720px; }
.vg-philo strong { color: var(--vg-ink); font-weight: 600; }

/* BEFORE / AFTER */
.vg-ba { max-width: 900px; border: 1px solid var(--vg-line); border-radius: 10px; overflow: hidden; }
.vg-ba-row { display: grid; grid-template-columns: 1fr 1fr; }
.vg-ba-row + .vg-ba-row { border-top: 1px solid var(--vg-line); }
.vg-ba-cell { padding: 20px 22px; font-size: 18px; line-height: 1.5; display: flex; gap: 12px; align-items: flex-start; }
.vg-ba-cell::before { flex-shrink: 0; font-family: var(--vg-mono); font-weight: 700; }
.vg-ba-before { color: var(--vg-ink-2); background: var(--vg-bg-2); }
.vg-ba-before::before { content: "✕"; color: #F87171; }
.vg-ba-after { color: var(--vg-ink); background: rgba(129,140,248,0.07); border-left: 1px solid var(--vg-line); }
.vg-ba-after::before { content: "✓"; color: var(--vg-accent); }
.vg-ba-head .vg-ba-cell { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; padding: 14px 22px; }
.vg-ba-head .vg-ba-cell::before { content: none; }
.vg-ba-head .vg-ba-before { color: var(--vg-muted); }
.vg-ba-head .vg-ba-after { color: var(--vg-accent); }
.vg-ba-identity { margin-top: 36px; font-family: var(--vg-serif); font-size: clamp(22px, 2.8vw, 30px); line-height: 1.25; letter-spacing: -0.01em; max-width: 760px; }
.vg-ba-identity em { font-style: italic; color: var(--vg-accent); }
@media (max-width: 700px) {
  .vg-page .vg-ba-row { grid-template-columns: 1fr; }
  .vg-page .vg-ba-head { display: none; }
  .vg-page .vg-ba-after { border-left: none; border-top: 1px dashed var(--vg-line); }
  .vg-page .vg-ba-cell { font-size: 15px; padding: 16px 18px; }
}

/* PLAN NOTE + CTA NEXT STEP */
.vg-plan-cta { margin-top: 36px; }
.vg-next-step { margin-top: 14px; font-size: 13px; color: var(--vg-muted); }
.vg-cta-final .vg-identity { font-family: var(--vg-serif); font-style: italic; font-size: 19px; color: var(--vg-accent); margin-bottom: 14px; }

/* MID CTA */
.vg-midcta { text-align: center; padding: 48px 0 8px; }

/* TESTIMONIALS */
.vg-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); max-width: 900px; gap: 0; background: var(--vg-bg-2); border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vg-testimonial { padding: 32px 26px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-testimonial:hover { background: var(--vg-bg-3); }
.vg-testimonial:nth-child(2n) { border-right: none; }
.vg-testimonial:nth-child(2n+1):nth-last-child(-n+2), .vg-testimonial:nth-child(2n+1):nth-last-child(-n+2) ~ .vg-testimonial { border-bottom: none; }
.vg-testimonial-quote { font-family: var(--vg-serif); font-size: 18px; line-height: 1.55; color: var(--vg-ink); margin-bottom: 20px; font-style: italic; position: relative; }
.vg-testimonial-quote::before { content: '"'; position: absolute; top: -16px; left: -6px; font-size: 48px; color: var(--vg-accent); font-family: var(--vg-serif); line-height: 1; }
.vg-testimonial-author { display: flex; align-items: center; gap: 12px; border-top: 1px solid var(--vg-line); padding-top: 16px; }
.vg-testimonial-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--vg-accent); display: grid; place-items: center; font-family: var(--vg-serif); font-weight: 600; font-size: 16px; color: var(--vg-bg); flex-shrink: 0; }
.vg-testimonial-meta strong { display: block; font-size: 14px; font-weight: 600; margin-bottom: 2px; color: var(--vg-ink); }
.vg-testimonial-meta span { font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); letter-spacing: 0.05em; }
@media (max-width: 900px) {
  .vg-page .vg-testimonials { grid-template-columns: 1fr; }
  .vg-page .vg-testimonial { border-right: none !important; border-bottom: 1px solid var(--vg-line) !important; }
  .vg-page .vg-testimonial:last-child { border-bottom: none !important; }
}

/* INCLUDED */
.vg-included-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vg-inc { padding: 24px 26px; display: flex; gap: 18px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-inc:hover { background: var(--vg-bg-3); }
.vg-inc:nth-child(2n) { border-right: none; }
.vg-inc:nth-last-child(-n+2) { border-bottom: none; }
.vg-inc-num { font-family: var(--vg-serif); font-style: italic; font-size: 24px; font-weight: 500; color: var(--vg-accent); flex-shrink: 0; width: 40px; }
.vg-inc h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 17px; margin-bottom: 5px; letter-spacing: -0.01em; color: var(--vg-ink); }
.vg-inc p { font-size: 15px; color: var(--vg-ink-2); line-height: 1.55; }
@media (max-width: 800px) {
  .vg-page .vg-included-grid { grid-template-columns: 1fr; }
  .vg-page .vg-inc { border-right: none !important; }
}

/* PRICING */
.vg-pricing { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-2); border-radius: 8px; overflow: hidden; max-width: 860px; }
.vg-tier { padding: 40px 34px; border-right: 1px solid var(--vg-line); position: relative; display: flex; flex-direction: column; }
.vg-tier:last-child { border-right: none; }
.vg-tier.vg-featured { background: linear-gradient(180deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); }
.vg-tier-badge { position: absolute; top: 0; right: 0; background: var(--vg-accent); color: var(--vg-bg); padding: 6px 14px; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; }
.vg-tier h3 { font-family: var(--vg-serif); font-size: 26px; font-weight: 500; letter-spacing: -0.02em; margin-bottom: 6px; color: var(--vg-ink); }
.vg-tier-tagline { font-size: 13px; color: var(--vg-muted); margin-bottom: 24px; min-height: 36px; }
.vg-price-old { text-decoration: line-through; font-family: var(--vg-mono); font-size: 13px; color: var(--vg-muted); margin-bottom: 6px; }
.vg-price-amount { font-family: var(--vg-serif); font-size: 46px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; color: var(--vg-accent); }
.vg-price-currency { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-muted); margin-bottom: 22px; letter-spacing: 0.05em; }
.vg-tier ul { list-style: none; margin: 18px 0 28px; flex-grow: 1; }
.vg-tier ul li { padding: 9px 0; font-size: 13px; border-bottom: 1px dashed var(--vg-line); display: flex; gap: 10px; color: var(--vg-ink-2); }
.vg-tier ul li::before { content: "→"; color: var(--vg-accent); font-weight: 600; }
.vg-tier ul li.vg-no::before { content: "—"; color: var(--vg-muted); opacity: 0.5; }
.vg-tier ul li.vg-no { color: var(--vg-muted); opacity: 0.5; }
.vg-tier .vg-btn-primary { width: 100%; justify-content: center; }
.vg-pricing-note { margin-top: 22px; font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.05em; color: var(--vg-muted); }
.vg-pricing-note strong { color: var(--vg-accent); }
@media (max-width: 800px) {
  .vg-page .vg-pricing { grid-template-columns: 1fr; }
  .vg-page .vg-tier { border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-tier:last-child { border-bottom: none; }
}

/* PRICING — 3 TARIF */
.vg-tiers { display: grid; grid-template-columns: 1fr 1.12fr 1fr; gap: 18px; align-items: stretch; max-width: 1180px; margin-top: 8px; }
.vg-page .vg-tier3 { position: relative; display: flex; flex-direction: column; background: var(--vg-bg-2); border: 1px solid var(--vg-line); border-radius: 14px; padding: 32px 26px; overflow: hidden; transition: transform .25s, border-color .25s; }
.vg-page .vg-tier3:hover { transform: translateY(-4px); border-color: rgba(129,140,248,0.45); }
.vg-page .vg-tier3-featured { background: linear-gradient(180deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); border-color: var(--vg-accent); box-shadow: 0 30px 70px -40px rgba(129,140,248,0.6); padding-top: 44px; }
.vg-page .vg-tier3-featured::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--vg-accent), var(--vg-accent-2)); }
.vg-tier3-ribbon { position: absolute; top: 14px; right: 14px; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; color: var(--vg-accent); border: 1px solid var(--vg-accent); border-radius: 999px; padding: 4px 10px; background: rgba(129,140,248,0.08); }
.vg-tier3 .vg-price-badge { align-self: flex-start; margin-bottom: 18px; }
.vg-tier3:not(.vg-tier3-featured) .vg-price-badge { background: transparent; color: var(--vg-ink-2); border: 1px solid var(--vg-line); }
.vg-tier3-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.vg-tier3 .vg-price-name { margin-bottom: 8px; }
.vg-tier3-save { flex-shrink: 0; font-family: var(--vg-serif); font-size: 20px; font-weight: 600; color: var(--vg-accent); line-height: 1; text-align: right; }
.vg-tier3-save span { display: block; font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); margin-top: 4px; font-weight: 400; }
.vg-tier3-tagline { font-size: 15px; color: var(--vg-muted); line-height: 1.5; min-height: 40px; margin-bottom: 18px; }
.vg-tier3-price { border-top: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); padding: 18px 0; margin-bottom: 20px; }
.vg-tier3 .vg-price-old { font-size: 13px; }
.vg-price-old-empty { text-decoration: none !important; }
.vg-tier3-amount { font-family: var(--vg-serif); font-size: 38px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; color: var(--vg-ink); margin-bottom: 8px; white-space: nowrap; }
.vg-tier3-featured .vg-tier3-amount { color: var(--vg-accent); font-size: 44px; }
.vg-tier3-amount .vg-price-per { font-size: 12px; }
.vg-tier3-total { font-family: var(--vg-mono); font-size: 11.5px; color: var(--vg-ink-2); letter-spacing: 0.03em; }
.vg-tier3-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 26px; flex-grow: 1; }
.vg-tier3-list li { font-size: 15.5px; color: var(--vg-ink-2); display: flex; align-items: flex-start; gap: 9px; line-height: 1.45; }
.vg-tier3-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
.vg-tier3-list li.vg-no { color: var(--vg-muted); opacity: 0.55; text-decoration: line-through; }
.vg-tier3-list li.vg-no::before { content: "—"; color: var(--vg-muted); text-decoration: none; }
.vg-page .vg-tier3-cta { width: 100%; justify-content: center; font-size: 15px; padding: 15px 22px; }
.vg-tiers-foot { max-width: 1180px; }
@media (max-width: 1000px) {
  .vg-page .vg-tiers { grid-template-columns: 1fr; max-width: 560px; }
  .vg-page .vg-tier3-featured { order: -1; }
  .vg-page .vg-tier3-tagline { min-height: 0; }
}
@media (max-width: 480px) {
  .vg-page .vg-tier3 { padding: 26px 20px; }
  .vg-page .vg-tier3-featured { padding-top: 40px; }
  .vg-tier3-amount { font-size: 32px; }
  .vg-tier3-featured .vg-tier3-amount { font-size: 36px; }
}

/* GUARANTEE */
.vg-page .vg-guarantee { background: linear-gradient(180deg, var(--vg-bg-2) 0%, var(--vg-bg) 100%); padding: 70px 0; border: none; position: relative; overflow: hidden; border-top: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); }
.vg-guarantee-inner { display: grid; grid-template-columns: 180px 1fr; gap: 50px; align-items: center; position: relative; }
.vg-guarantee-seal { width: 180px; height: 180px; border: 2px solid var(--vg-accent); border-radius: 50%; display: grid; place-items: center; text-align: center; font-family: var(--vg-serif); font-style: italic; position: relative; }
.vg-guarantee-seal::before { content: ""; position: absolute; inset: 8px; border: 1px solid var(--vg-accent); border-radius: 50%; opacity: 0.4; }
.vg-guarantee-seal strong { font-size: 50px; font-weight: 500; font-style: normal; color: var(--vg-accent); line-height: 1; display: block; margin-bottom: 4px; letter-spacing: -0.03em; }
.vg-guarantee-seal span { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-style: normal; font-family: var(--vg-mono); color: var(--vg-ink); }
.vg-guarantee h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(26px, 3.2vw, 38px); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 16px; }
.vg-guarantee h2 em { font-style: italic; color: var(--vg-accent); }
.vg-guarantee p { font-size: 18px; line-height: 1.6; color: var(--vg-ink-2); max-width: 600px; }
.vg-guarantee-sign { margin-top: 22px; font-family: var(--vg-serif); font-style: italic; font-size: 16px; color: var(--vg-accent); }
@media (max-width: 800px) {
  .vg-page .vg-guarantee-inner { grid-template-columns: 1fr; gap: 28px; text-align: center; }
  .vg-page .vg-guarantee-seal { margin: 0 auto; }
}

/* FAQ */
.vg-faq-list { border-top: 1px solid var(--vg-line); }
.vg-faq-item { border-bottom: 1px solid var(--vg-line); padding: 24px 0; }
.vg-faq-q { font-family: var(--vg-serif); font-size: 19px; font-weight: 500; letter-spacing: -0.01em; margin-bottom: 10px; display: flex; gap: 14px; }
.vg-faq-q::before { content: "?"; font-family: var(--vg-serif); font-style: italic; color: var(--vg-accent); }
.vg-faq-a { font-size: 17px; color: var(--vg-ink-2); line-height: 1.6; padding-left: 28px; }

/* CTA FINAL */
.vg-page .vg-cta-final { background: var(--vg-bg); text-align: center; border: none; padding: 80px 0; }
.vg-cta-final-inner { max-width: 720px; margin: 0 auto; }
.vg-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(32px, 4.5vw, 56px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 20px; }
.vg-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vg-cta-final p { font-size: 19px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 28px; max-width: 580px; margin-left: auto; margin-right: auto; }
.vg-cohort-info { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-3); margin-bottom: 28px; border-radius: 8px; overflow: hidden; }
.vg-cohort-cell { padding: 18px 14px; border-right: 1px solid var(--vg-line); text-align: left; }
.vg-cohort-cell:last-child { border-right: none; }
.vg-cohort-cell .vg-lbl { font-family: var(--vg-mono); font-size: 10px; color: var(--vg-muted); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; display: block; }
.vg-cohort-cell .vg-val { font-family: var(--vg-serif); font-weight: 500; font-size: 16px; color: var(--vg-ink); }
.vg-cohort-cell .vg-val.vg-urgent { color: var(--vg-accent); }
@media (max-width: 800px) {
  .vg-page .vg-cohort-info { grid-template-columns: 1fr 1fr; }
  .vg-page .vg-cohort-cell:nth-child(2) { border-right: none; }
  .vg-page .vg-cohort-cell { border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-cohort-cell:nth-last-child(-n+2) { border-bottom: none; }
}

/* COUNTDOWN */
.vg-countdown { display: inline-flex; gap: 10px; margin-bottom: 32px; }
.vg-cd-cell { background: var(--vg-bg-3); border: 1px solid var(--vg-line); border-radius: 8px; padding: 12px 16px; min-width: 68px; text-align: center; }
.vg-cd-num { display: block; font-family: var(--vg-serif); font-size: 30px; font-weight: 500; color: var(--vg-accent); line-height: 1; letter-spacing: -0.02em; }
.vg-cd-lbl { display: block; font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.12em; color: var(--vg-muted); margin-top: 6px; }
.vg-cd-live { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-accent); letter-spacing: 0.08em; }
.vg-cd-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 14px; }
.vg-cd-eyebrow strong { color: var(--vg-accent); }
@media (max-width: 800px) { .vg-page .vg-cd-cell { min-width: 60px; padding: 10px 10px; } .vg-page .vg-cd-num { font-size: 24px; } }

/* MOBILE READABILITY — mijozlar asosan telefondan kiradi: kattaroq harf, kengroq qator */
@media (max-width: 640px) {
  .vg-page { font-size: 19px; }
  .vg-page .vg-container { padding: 0 20px; }
  .vg-page .vg-hero { padding: 40px 0 56px; }
  .vg-page .vg-hero-eyebrow { display: none; }
  .vg-page .vg-urgency-pulse { display: none; }
  .vg-page .vg-urgency-text { text-align: center; font-size: 13px; line-height: 1.55; }
  .vg-page .vg-hero-pre { font-size: 13.5px; line-height: 1.75; margin-bottom: 20px; }
  .vg-page .vg-hero-headline, .vg-page .vg-hero-headline-q { font-size: 29px; line-height: 1.3; letter-spacing: -0.01em; margin-bottom: 24px; }
  .vg-page .vg-hero-sub { font-size: 20.5px; line-height: 1.85; }
  .vg-page .vg-hero-meta { font-size: 17px; line-height: 1.65; border-radius: 16px; }
  .vg-page .vg-cta-note, .vg-page .vg-trustline { font-size: 13px; line-height: 1.75; }
  .vg-page .vg-hero-stats .vg-lbl { font-size: 12px; line-height: 1.5; }
  .vg-page .vg-section-eyebrow { font-size: 12px; }
  .vg-page .vg-section-title { font-size: 30px; line-height: 1.3; letter-spacing: -0.01em; }
  .vg-page .vg-section-lead { font-size: 20px; line-height: 1.85; }
  .vg-page .vg-plain-row > p { font-size: 20px; line-height: 1.75; }
  .vg-page .vg-plain-row > div h3 { font-size: 20px; line-height: 1.4; }
  .vg-page .vg-plain-row > div p { font-size: 19px; line-height: 1.75; }
  .vg-page .vg-problem-bridge { font-size: 21px; line-height: 1.55; }
  .vg-page .vg-ba-cell { font-size: 19px; line-height: 1.65; }
  .vg-page .vg-ba-identity { font-size: 22px; line-height: 1.5; }
  .vg-page .vg-case-desc { font-size: 18px; line-height: 1.7; }
  .vg-page .vg-testimonial-quote { font-size: 19.5px; line-height: 1.75; }
  .vg-page .vg-instructor p { font-size: 19px; line-height: 1.8; }
  .vg-page .vg-cred-list li { font-size: 17.5px; line-height: 1.6; }
  .vg-page .vg-aud h3 { font-size: 22px; line-height: 1.35; }
  .vg-page .vg-aud p, .vg-page .vg-fmt p, .vg-page .vg-inc p { font-size: 18.5px; line-height: 1.75; }
  .vg-page .vg-month-desc { font-size: 18.5px; line-height: 1.75; }
  .vg-page .vg-month-skills li { font-size: 18px; line-height: 1.65; padding: 8px 0; }
  .vg-page .vg-tier3-tagline { font-size: 18px; line-height: 1.7; }
  .vg-page .vg-tier3-list li { font-size: 18px; line-height: 1.65; }
  .vg-page .vg-guarantee p { font-size: 19px; line-height: 1.8; }
  .vg-page .vg-faq-q { font-size: 20px; line-height: 1.45; }
  .vg-page .vg-faq-a { font-size: 19px; line-height: 1.8; padding-left: 0; }
  .vg-page .vg-cta-final p { font-size: 19.5px; line-height: 1.8; }
  .vg-page .vg-res-caption { font-size: 19px; line-height: 1.75; }
  .vg-page .vg-res-note { font-size: 16.5px; line-height: 1.7; }
}

/* Harakatni kamaytirishni so'ragan foydalanuvchilar uchun */
@media (prefers-reduced-motion: reduce) {
  .vg-page *, .vg-page *::before, .vg-page *::after { animation: none !important; transition: none !important; }
  .vg-page .vg-ticker-track { transform: none; }
}

/* ANIMATIONS */
@keyframes vg-fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes vg-strike { to { transform: rotate(-3deg) scaleX(1); } }
@keyframes vg-glow { 0%,100% { opacity: .5; } 50% { opacity: 1; } }
@keyframes vg-arrow { 0%,100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
.vg-page .vg-hero-pre, .vg-page .vg-hero-eyebrow, .vg-page .vg-hero-headline, .vg-page .vg-hero-sub, .vg-page .vg-hero-cta-row, .vg-page .vg-trustline, .vg-page .vg-hero-stats { animation: vg-fadeUp .6s ease-out backwards; }
.vg-page .vg-hero-eyebrow { animation-delay: .05s; }
.vg-page .vg-hero-pre { animation-delay: .1s; }
.vg-page .vg-hero-headline { animation-delay: .16s; }
.vg-page .vg-hero-sub { animation-delay: .3s; }
.vg-page .vg-hero-cta-row { animation-delay: .44s; }
.vg-page .vg-trustline { animation-delay: .54s; }
.vg-page .vg-hero-stats { animation-delay: .64s; }

/* SEATS / SCARCITY */
.vg-seats { max-width: 640px; margin-bottom: 22px; }
.vg-seats-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.vg-seats-label { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--vg-muted); }
.vg-seats-count { font-size: 13px; color: var(--vg-ink-2); }
.vg-seats-count strong { color: var(--vg-accent); font-weight: 700; }
.vg-seats-track { height: 8px; border-radius: 999px; background: var(--vg-bg-3); overflow: hidden; border: 1px solid var(--vg-line); }
.vg-seats-fill { display: block; height: 100%; width: 53%; border-radius: 999px; background: linear-gradient(90deg, var(--vg-accent-2), var(--vg-accent)); box-shadow: 0 0 14px rgba(129,140,248,0.55); animation: vg-seatfill 1.4s cubic-bezier(.2,.7,.3,1) both; }
@keyframes vg-seatfill { from { width: 0; } to { width: 53%; } }
.vg-seats-foot { margin-top: 9px; font-size: 12.5px; color: var(--vg-ink-2); }
.vg-seats-foot strong { color: var(--vg-accent); }

/* PRICING — SOLO CARD */
.vg-page .vg-price-solo { position: relative; max-width: 640px; background: linear-gradient(180deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); border: 1px solid var(--vg-line); border-radius: 14px; padding: 38px 34px; overflow: hidden; box-shadow: 0 30px 70px -40px rgba(129,140,248,0.45); }
.vg-page .vg-price-solo::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--vg-accent), var(--vg-accent-2)); }
.vg-price-badge { display: inline-block; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--vg-bg); background: var(--vg-accent); padding: 6px 12px; border-radius: 4px; margin-bottom: 22px; }
.vg-price-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; border-bottom: 1px solid var(--vg-line); padding-bottom: 24px; margin-bottom: 24px; }
.vg-price-name { font-family: var(--vg-serif); font-size: 19px; font-weight: 500; letter-spacing: -0.01em; color: var(--vg-ink); margin-bottom: 14px; max-width: 320px; line-height: 1.2; }
.vg-price-solo .vg-price-old { text-decoration: line-through; font-family: var(--vg-mono); font-size: 14px; color: var(--vg-muted); margin-bottom: 6px; }
.vg-price-solo .vg-price-amount { font-family: var(--vg-serif); font-size: 52px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; color: var(--vg-accent); margin-bottom: 8px; }
.vg-price-per { font-family: var(--vg-mono); font-size: 14px; color: var(--vg-muted); letter-spacing: 0; }
.vg-price-solo .vg-price-currency { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-ink-2); letter-spacing: 0.04em; }
.vg-price-save { flex-shrink: 0; width: 84px; height: 84px; border: 1px solid var(--vg-accent); border-radius: 50%; display: grid; place-items: center; text-align: center; background: rgba(129,140,248,0.06); }
.vg-price-save-num { display: block; font-family: var(--vg-serif); font-size: 24px; font-weight: 600; color: var(--vg-accent); line-height: 1; }
.vg-price-save-lbl { display: block; font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); margin-top: 4px; }
.vg-price-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 22px; margin-bottom: 28px; }
.vg-price-list li { font-size: 13.5px; color: var(--vg-ink-2); display: flex; align-items: flex-start; gap: 9px; line-height: 1.45; }
.vg-price-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
.vg-page .vg-price-cta { width: 100%; justify-content: center; font-size: 16px; padding: 17px 28px; }
.vg-price-foot { text-align: center; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.04em; color: var(--vg-muted); margin-top: 16px; }
@media (max-width: 640px) {
  .vg-page .vg-price-solo { padding: 28px 22px; }
  .vg-page .vg-price-list { grid-template-columns: 1fr; }
  .vg-page .vg-price-head { flex-direction: column-reverse; align-items: flex-start; }
}

`;

// ============ COMPONENT ============

type Props = {
  /** Ijtimoiy dalil bo'limi oxiriga qo'shimcha blok (masalan, video sharhlar). */
  socialProof?: ReactNode;
};

export default function TargetKursiPage({ socialProof }: Props = {}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vg-page">
        {/* ============ URGENCY BAR ============ */}
        <div className="vg-urgency">
          <div className="vg-container vg-urgency-inner">
            <span className="vg-urgency-pulse" aria-hidden="true" />
            <span className="vg-urgency-text">
              <strong>Performance Marketing &amp; Target kursiga yoziling</strong>
              {COHORT.seatsLeft !== null && (
                <> — atigi <strong>{COHORT.seatsLeft} joy</strong> qoldi</>
              )}
            </span>
          </div>
        </div>

        <div>
          {/* ============ HERO ============ */}
          <section className="vg-hero">
            <div className="vg-hero-glow" aria-hidden="true" />
            <div className="vg-container">
              <div className="vg-hero-inner">
                <div className="vg-hero-eyebrow">
                  <span>VISION GROUP</span>
                  <span style={{ opacity: 0.4 }}>/</span>
                  <span>PERFORMANCE MARKETING</span>
                  <span style={{ opacity: 0.4 }}>/</span>
                  <span>{COHORT.name.toUpperCase()} · {COHORT.year}</span>
                </div>

                <div className="vg-hero-pre">Targetologlar va endi boshlayotganlar uchun · Performance Marketing &amp; Target — 2 oylik shogirdlik kursi</div>

                <h1 className="vg-hero-headline vg-hero-headline-q">
                  Qanday qilib Meta mijozlaringizga &laquo;shunchaki qiziquvchilarni&raquo; emas,{" "}
                  <em>hamyonida puli bor xaridorlarni</em> topib kelishi mumkin?
                </h1>

                <p className="vg-hero-sub">
                  2 oyda: <strong>to&apos;g&apos;ri target, Pixel + CAPI va CRM integratsiyasini</strong> real biznesda o&apos;rganasiz.
                  Reklama taxmin bilan emas — <strong>aniq signal</strong> bilan ishlaydi.
                </p>

                <div className="vg-hero-meta">
                  <span className="vg-hero-meta-badge">CAPI</span>
                  <span>
                    Real reklama kabinetlarida sinalgan{" "}
                    <strong>Pixel + CAPI + CRM</strong> tizimi — natijadan ulush olish uchun.
                  </span>
                </div>

                <div className="vg-hero-cta-row">
                  <a href="#yozilish" data-lead-open className="vg-btn-primary">
                    Joyimni band qilaman
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                </div>

                <div className="vg-cta-note">
                  <span className="vg-cta-dot" /> 30 soniya · Majburiyatsiz · Administrator 24 soatda bog&apos;lanadi
                  {COHORT.seatsLeft !== null && (
                    <> · Atigi <strong>{COHORT.seatsLeft} joy</strong> qoldi</>
                  )}
                </div>

                <div className="vg-trustline">
                  ISFT INSTITUTI SAMARQAND FILIALI · ZIYO YOG&apos;DUSI MAKTABI · KELAJAK UMIDI · PIFAGOR SCHOOL · HARVARD LITTLE SCHOOL · MED EXPERT VA BOSHQA BIZNESLAR BILAN TAJRIBA
                </div>

                <div className="vg-hero-stats">
                  {heroStats.map((s) => (
                    <div key={s.lbl}>
                      <div className="vg-num">{s.num}</div>
                      <div className="vg-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============ TICKER ============ */}
          <div className="vg-ticker">
            <div className="vg-ticker-track">
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i}>
                  <span className="vg-dot">●</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* ============ PROBLEM ============ */}
          <section className="vg-section vg-problem" id="muammo">
            <div className="vg-container">
              <div className="vg-section-eyebrow">01 / Tanish holat</div>
              <h2 className="vg-section-title">
                Sifatsiz lidlar, natijasiz target kampaniyalar — <em>sizda ham shundaymi?</em>
              </h2>
              <p className="vg-section-lead">
                Gap shundaki… target yoqishni deyarli hamma biladi. Lekin algoritmga{" "}
                <strong>&laquo;kim sotib oldi&raquo;</strong> degan aniq signal berilmasa, reklama ko&apos;r ishlaydi — byudjet behuda yonadi.
              </p>

              <div className="vg-plain-list">
                {symptoms.map((p, i) => (
                  <div key={i} className="vg-plain-row">
                    <span className="vg-plain-mark vg-plain-x">✕</span>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ STAKES ============ */}
          <section className="vg-section vg-agitate" id="agitatsiya">
            <div className="vg-container">
              <div className="vg-section-eyebrow">02 / Eski usulning narxi</div>
              <h2 className="vg-section-title">
                Har oy shu usulda ishlash — <em>qimmatga tushadi.</em>
              </h2>

              <div className="vg-plain-list">
                {stakes.map((s, i) => (
                  <div key={i} className="vg-plain-row">
                    <span className="vg-plain-mark vg-plain-x">✕</span>
                    <p>{s}</p>
                  </div>
                ))}
              </div>

              <p className="vg-problem-bridge">
                Bularning hammasi bitta sababga borib taqaladi —{" "}
                <em>tizim yo&apos;qligiga. Tizimni esa o&apos;rgansa bo&apos;ladi.</em>
              </p>
            </div>
          </section>

          {/* ============ MECHANISM ============ */}
          <section className="vg-section" id="mexanizm">
            <div className="vg-container">
              <div className="vg-section-eyebrow">03 / Yechim</div>
              <h2 className="vg-section-title">
                <em>Sovuq mijozdan kassagacha</em> tizim.
              </h2>
              <p className="vg-section-lead">
                Eng qizig&apos;i esa… <strong>Pixel + CAPI</strong> server-eventlari (saytdan Meta&apos;ga to&apos;g&apos;ridan-to&apos;g&apos;ri boradigan ma&apos;lumot) va{" "}
                <strong>CRM integratsiyasi</strong> algoritmga aniq aytadi: &laquo;mana bu odam pul to&apos;ladi&raquo;. Shundan keyin Meta xuddi shunday
                xaridorlarni o&apos;zi qidirib topadi — CPM (ko&apos;rsatish narxi) tushadi, ROAS (reklama qaytimi) oshadi.
              </p>
              <p className="vg-section-lead">
                Yaxshi xabar shuki… buni o&apos;zingiz yillab izlanib o&apos;rganishingiz shart emas. 2 oyda real biznesda o&apos;z qo&apos;lingiz bilan
                qurib o&apos;rganasiz.
              </p>

              <ResultsLightbox />

              <p className="vg-section-lead" style={{ marginTop: 48 }}>
                Reklama tugmasini emas, sovuq mijozdan kassagacha bo&apos;lgan har bir qadamni boshqarishni o&apos;rganasiz. Mana farqi:
              </p>

              <div className="vg-plain-list">
                {mechanism.map((m) => (
                  <div key={m.num} className="vg-plain-row">
                    <span className="vg-plain-mark vg-plain-num">{m.num}</span>
                    <div>
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vg-midcta">
                <a href="#yozilish" data-lead-open data-lead-mode="info" className="vg-btn-primary">
                  Qo&apos;shimcha ma&apos;lumot olish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* ============ SUCCESS: BEFORE / AFTER ============ */}
          <section className="vg-section" id="kursdan-keyin">
            <div className="vg-container">
              <div className="vg-section-eyebrow">04 / Kursdan keyin</div>
              <h2 className="vg-section-title">
                2 oydan keyin ishingiz <em>qanday o&apos;zgaradi?</em>
              </h2>

              <div className="vg-ba">
                <div className="vg-ba-row vg-ba-head">
                  <div className="vg-ba-cell vg-ba-before">Hozir</div>
                  <div className="vg-ba-cell vg-ba-after">2 oydan keyin</div>
                </div>
                {beforeAfter.map((r) => (
                  <div key={r.before} className="vg-ba-row">
                    <div className="vg-ba-cell vg-ba-before">{r.before}</div>
                    <div className="vg-ba-cell vg-ba-after">{r.after}</div>
                  </div>
                ))}
              </div>

              <p className="vg-ba-identity">
                Siz endi &laquo;target yoqib beradigan odam&raquo; emas — <em>biznes sotuvi uchun javob beradigan mutaxassissiz.</em>
              </p>
            </div>
          </section>

          {/* ============ RESULTS: CASES + TESTIMONIALS ============ */}
          <section className="vg-section" id="natijalar">
            <div className="vg-container">
              <div className="vg-section-eyebrow">05 / Natijalar</div>
              <h2 className="vg-section-title">
                Raqamlar va <em>bitiruvchilar fikri.</em>
              </h2>

              <div className="vg-cases-grid">
                {cases.map((c) => (
                  <div key={c.tag} className="vg-case">
                    <div className="vg-case-tag">{c.tag}</div>
                    <div className="vg-case-num">
                      {c.num}
                      <small>{c.small}</small>
                    </div>
                    <div className="vg-case-desc">{c.desc}</div>
                    <div className="vg-case-meta">{c.meta}</div>
                  </div>
                ))}
              </div>

              <div className="vg-testimonials" style={{ marginTop: 48 }}>
                {testimonials.map((t) => (
                  <div key={t.name} className="vg-testimonial">
                    <div className="vg-testimonial-quote">{t.quote}</div>
                    <div className="vg-testimonial-author">
                      <div className="vg-testimonial-avatar">{t.initials}</div>
                      <div className="vg-testimonial-meta">
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {socialProof}
          </section>

          {/* ============ INSTRUCTOR ============ */}
          <section className="vg-section" id="ustoz">
            <div className="vg-container">
              <div className="vg-section-eyebrow">06 / Ustoz</div>
              <div className="vg-instructor">
                <div className="vg-instructor-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/001.avif" alt="Uchqun Turdiyev" />
                </div>
                <div>
                  <h2>
                    Uchqun Turdiyev — <em>Marketolog, Targetolog, Dasturchi.</em>
                  </h2>
                  <p>
                    2022-yilda men ham xuddi shu yerdan boshlaganman: qiziqish tanlab target yoqardim, lid sifatsiz kelsa sababini topolmasdim, mijoz &laquo;sotuv yo&apos;q&raquo; desa — javob berolmasdim. Keyin reklamani faqat lid bilan emas, <strong>sotuvgacha</strong> — sayt, CRM va CAPI bilan birga o&apos;lchashni o&apos;rgandim. Bu kursda aynan shu yo&apos;lni sizga qisqartirib beraman.
                  </p>
                  <p>
                    Men o&apos;rgatadigan narsani har kuni <strong>o&apos;zim ishlataman</strong>. Shu paytgacha 12+ biznes uchun <strong>$120.000+ reklama byudjeti</strong> boshqardim — natijalari yuqoridagi keyslarda.
                  </p>
                  <p>
                    Kursda target, marketing va dasturlash bitta tizimga birlashgan.
                  </p>

                  <ul className="vg-cred-list">
                    {credentials.map((c, i) => (
                      <li key={i}>
                        <span className="vg-yr">{c.yr}</span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ============ AUDIENCE ============ */}
          <section className="vg-section" id="kimga">
            <div className="vg-container">
              <div className="vg-section-eyebrow">07 / Kimlar uchun</div>
              <h2 className="vg-section-title">
                Bu kurs sizga mos, <em>agar siz…</em>
              </h2>

              <div className="vg-aud-grid">
                {audience.map((a) => (
                  <div key={a.tag} className="vg-aud">
                    <div className="vg-aud-tag">{a.tag}</div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
              <p className="vg-aud-note">
                Kimga mos emas: bir kechada, mehnatsiz boyish formulasini qidirayotganlarga.
              </p>
            </div>
          </section>

          {/* ============ FORMAT ============ */}
          <section className="vg-section" id="format">
            <div className="vg-container">
              <div className="vg-section-eyebrow">08 / Format</div>
              <h2 className="vg-section-title">
                Qanday <em>o&apos;qiysiz?</em>
              </h2>
              <p className="vg-section-lead">
                Video darslar erkinlik beradi, jonli Zoom esa amaliyot va aniq fikr beradi — ikkalasi birga.
              </p>

              <div className="vg-format-grid">
                {format.map((f) => (
                  <div key={f.title} className="vg-fmt">
                    <div className="vg-fmt-num">{f.num}</div>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ CURRICULUM ============ */}
          <section className="vg-section" id="dastur">
            <div className="vg-container">
              <div className="vg-section-eyebrow">09 / Dastur</div>
              <h2 className="vg-section-title">
                2 oy. <em>Ikki bosqich.</em> Bitta tizim.
              </h2>
              <p className="vg-section-lead">
                Ikkinchi oy birinchisining ustiga quriladi: texnik fundament → strategik performance tizim.
              </p>

              <div className="vg-curriculum-list">
                {months.map((month) => (
                  <div key={month.num} className="vg-month">
                    <div className="vg-month-num">{month.num}</div>
                    <h3 className="vg-month-title">{month.title}</h3>
                    <p className="vg-month-desc">{month.desc}</p>
                    <ul className="vg-month-skills">
                      {month.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ INCLUDED ============ */}
          <section className="vg-section">
            <div className="vg-container">
              <div className="vg-section-eyebrow">10 / Kurs tarkibi</div>
              <h2 className="vg-section-title">
                Kurs ichida <em>nima bor?</em>
              </h2>
              <p className="vg-section-lead">
                Quyidagilarning barchasi Standart tarifga kiradi. Zapis va Individual tariflar tarkibi narx bo&apos;limida.
              </p>

              <div className="vg-included-grid">
                {includedItems.map((item) => (
                  <div key={item.title} className="vg-inc">
                    <div className="vg-inc-num">{item.num}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PRICING ============ */}
          <section className="vg-section" id="narx">
            <div className="vg-container">
              <div className="vg-section-eyebrow">11 / Narx</div>
              <h2 className="vg-section-title">
                O&apos;zingizga mos <em>tarifni tanlang.</em>
              </h2>
              <p className="vg-section-lead">
                3 xil format: zapis darslar, to&apos;liq kurs (jonli + zapis) yoki individual o&apos;qish. Standart tarifda oyma-oy to&apos;lash, 1 yillik kirish huquqi va 15 kunlik pulni qaytarish kafolati. Maqsad — mijozlaringiz bilan natijadan ulush asosida ishlay oladigan darajaga chiqish.
              </p>

              {COHORT.seatsLeft !== null && (
                <div className="vg-seats">
                  <div className="vg-seats-foot">
                    {COHORT.name}da atigi <strong>{COHORT.seatsLeft} joy</strong> qoldi
                  </div>
                </div>
              )}

              <div className="vg-tiers">
                {priceTiers.map((t) => (
                  <div key={t.id} className={`vg-tier3${t.featured ? " vg-tier3-featured" : ""}`}>
                    {t.featured && <div className="vg-tier3-ribbon">Eng ko&apos;p tanlanadi</div>}
                    <div className="vg-price-badge">{t.badge}</div>
                    <div className="vg-tier3-head">
                      <div className="vg-price-name">{t.name}</div>
                      {t.save && (
                        <div className="vg-tier3-save">
                          {t.save} <span>chegirma</span>
                        </div>
                      )}
                    </div>
                    <p className="vg-tier3-tagline">{t.tagline}</p>
                    <div className="vg-tier3-price">
                      {t.old ? <div className="vg-price-old">{t.old}</div> : <div className="vg-price-old vg-price-old-empty">&nbsp;</div>}
                      <div className="vg-tier3-amount">
                        {t.amount} <span className="vg-price-per">{t.per ?? "so'm"}</span>
                      </div>
                      <div className="vg-tier3-total">{t.total}</div>
                    </div>
                    <ul className="vg-tier3-list">
                      {t.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                      {t.missing?.map((f) => (
                        <li key={f} className="vg-no">{f}</li>
                      ))}
                    </ul>
                    <a
                      href="#yozilish"
                      data-lead-open
                      data-lead-tariff={t.name}
                      data-lead-value={t.value}
                      className={`${t.featured ? "vg-btn-primary" : "vg-btn-secondary"} vg-tier3-cta`}
                    >
                      {t.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
              <div className="vg-price-foot vg-tiers-foot">Oyma-oy to&apos;lash mumkin · 15 kunlik pulni qaytarish kafolati faqat Standart tarifga tegishli</div>
            </div>
          </section>

          {/* ============ GUARANTEE ============ */}
          <section className="vg-guarantee">
            <div className="vg-container">
              <div className="vg-guarantee-inner">
                <div className="vg-guarantee-seal">
                  <div>
                    <strong>15</strong>
                    <span>Kunlik kafolat</span>
                  </div>
                </div>
                <div>
                  <h2>
                    Kurs sizga mos kelmasa —{" "}
                    <em>pulingiz to&apos;liq qaytadi.</em>
                  </h2>
                  <p>
                    Standart tarifda birinchi 15 kun ichida (taxminan 8 ta dars) kurs sizga mos kelmasa — to&apos;lovni hech qanday savolsiz to&apos;liq qaytarib olasiz. Xavf to&apos;liq biznes tomonida.
                  </p>
                  <div className="vg-guarantee-sign">— Uchqun Turdiyev, Vision Group</div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ PLAN: 3 STEPS ============ */}
          <section className="vg-section" id="reja">
            <div className="vg-container">
              <div className="vg-section-eyebrow">12 / 3 qadam</div>
              <h2 className="vg-section-title">
                3 qadam — <em>natija qiluvchi</em> targetologgacha.
              </h2>

              <div className="vg-plain-list">
                {planSteps.map((s) => (
                  <div key={s.num} className="vg-plain-row">
                    <span className="vg-plain-mark vg-plain-num">{s.num}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vg-plan-cta">
                <a href="#yozilish" data-lead-open className="vg-btn-primary">
                  Kursga yozilish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* ============ CTA FINAL + FORM ============ */}
          <section className="vg-cta-final" id="yozilish">
            <div className="vg-container">
              <div className="vg-cta-final-inner">
                <div className="vg-section-eyebrow" style={{ justifyContent: "center" }}>
                  13 / Yozilish
                </div>
                <h2>
                  Tugma bosuvchi emas — <em>natija qiluvchi</em> bo&apos;ling.
                </h2>
                <p>
                  Ikki maydonni to&apos;ldiring. Administrator 24 soat ichida qo&apos;ng&apos;iroq qilib,
                  tarif va boshlanish sanasini tasdiqlaydi.
                </p>

                {showDeadline && COHORT.deadline && (
                  <CountdownTimer
                    target={COHORT.deadline}
                    label={<>Qabul yopilishiga <strong>qoldi:</strong></>}
                  />
                )}

                <div className="vg-cohort-info">
                  {cohort.map((c) => (
                    <div key={c.lbl} className="vg-cohort-cell">
                      <span className="vg-lbl">{c.lbl}</span>
                      <span className={`vg-val ${c.urgent ? "vg-urgent" : ""}`}>{c.val}</span>
                    </div>
                  ))}
                </div>

                <TargetKLidForm leadValue={3200000} {...courseFormCopy} />
              </div>
            </div>
          </section>
          {/* ============ FAQ ============ */}
          <section className="vg-section" id="faq">
            <div className="vg-container">
              <div className="vg-section-eyebrow">14 / Savol-javob</div>
              <h2 className="vg-section-title">
                Savollarga <em>javoblar</em>
              </h2>

              <div className="vg-faq-list">
                {faqs.map((f) => (
                  <div key={f.q} className="vg-faq-item">
                    <div className="vg-faq-q">{f.q}</div>
                    <div className="vg-faq-a">{f.a}</div>
                  </div>
                ))}
              </div>

              <div className="vg-plan-cta">
                <a href="#yozilish" data-lead-open className="vg-btn-primary">
                  Kursga yozilish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* ============ GLOBAL LEAD MODAL ============ */}
        <LeadModal scarcity={COHORT.seatsLeft !== null ? `${COHORT.name} · Atigi ${COHORT.seatsLeft} joy qoldi` : undefined} />
      </div>
    </>
  );
}