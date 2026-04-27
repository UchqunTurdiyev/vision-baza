/**
 * Vision Group — Performance Marketing 3.0 Landing Page
 * ============================================================
 * Bitta self-contained Next.js (App Router) sahifasi.
 *
 * QANDAY QO'SHISH:
 *   1) Saytingizdagi `app/` papkada yangi route papkasi yarating, masalan:
 *      app/target-kursi-pro/page.tsx
 *   2) Shu faylni o'sha joyga ko'chiring.
 *   3) `public/uchqun.jpg` ga ustoz rasmini joylang (4:5 portret).
 *      Agar rasm bo'lmasa — quyida placeholder ko'rinadi.
 *   4) `npm run dev` — sahifa /target-kursi-pro manzilida ochiladi.
 *
 * EHTIYOT CHORALARI:
 *   - Hamma CSS `.vg-page` parent class ostiga scoped — siz mavjud
 *     saytingizning style'lariga ta'sir qilmaydi.
 *   - Shriftlar Google Fonts CDN orqali yuklanadi (next/font shart emas).
 *   - Bu Server Component — interaktivlik yo'q, SEO va tezlik a'lo.
 * ============================================================
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing 4.0 — Vision Group | Uchqun Turdiyev",
  description:
    "Meta mutaxassislari auditidan o'tgan tizim. $80,000+ reklama byudjetini boshqargan ustozdan 3 oylik Performance Marketing intensivi. 100% pulni qaytarish kafolati.",
};

// ============ DATA ============

const heroStats = [
  { num: "$100K+", lbl: "Boshqarilgan byudjet" },
  { num: "82×", lbl: "O'rtacha ROAS" },
  { num: "8+", lbl: "Muvafaqqiyatli bizneslar" },
  { num: "4 yil", lbl: "Marketing tajriba" },
];

const tickerItems = [
  "META AUDITDAN O'TGAN TIZIM",
  "100% PULNI QAYTARISH KAFOLATI",
  "JONLI ZOOM DARSLAR",
  "AI INTEGRATION",
  "REAL LOYIHADA PORTFOLIO",
  "ISH TOPISH KO'NIKMALARI",
  "SERTIFIKAT",
  "ABADIY MATERIAL DOSTUPI",
];

const audience = [
  {
    num: "— 01",
    title: "Tadbirkorlar",
    desc: "O'z biznesingizga arzon va sifatli lidlar oqimini mustaqil yo'lga qo'ying. Targetologga oyiga $300-500 to'lashni to'xtating.",
  },
  {
    num: "— 02",
    title: "Frilanserlar",
    desc: "SMM yoki Tilda dasturchisi sifatida xizmat haqingizni $500+ ga ko'taring va doimiy mijozlar bilan ishlang.",
  },
  {
    num: "— 03",
    title: "Boshlovchilar",
    desc: "Tajribasiz noldan boshlasangiz ham mayli — eng talabgir zamonaviy kasbni 3 oyda egallaysiz.",
  },
];

const months = [
  {
    num: "1-OY",
    title: "Texnik Targetolog",
    desc: "Texnik fundament: Meta Ads kabineti, piksel sozlash, konversiya hodisalari va sun'iy intelekt yordamida tezkor sayt yasash.",
    skills: [
      "Meta Ads Pro: algoritm va auditoriya tahlili",
      "AI Integration: ish samaradorligini oshirish",
      "Reklama kabineti: birinchi kompaniyangizni yoqish",
      "To'g'ri texnikalar bilan target yoqish",
      "Mijoz Auditi, Qizil chiziqni aniqlash",
    ],
  },
  {
    num: "2-OY",
    title: "Kontent Targetolog",
    desc: "Kreativ yondashuv: rad etib bo'lmas takliflar, sotadigan kontent va mijozni sotib olishga undovchi copywriting.",
    skills: [
      "Hook & Offer: rad etib bo'lmas takliflar yaratish",
      "Sotadigan kontent va kreativlar tuzish",
      "Copywriting: sotuv matnlarini yozish texnikasi",
      "AI orqali tezkor sayt yasash",
      "Piksel, CAPI, ulash to'liq sozlash",
      "Lidlarni telegram bot, CRM larga yo'naltirish",
      "Lead magnit — bepul qiymat orqali mijoz jalb qilish",
      "Sales funnel kontent zanjirini qurish",
    ],
  },
  {
    num: "3-OY",
    title: "Strategik Targetolog",
    desc: "Performance Marketing: 0 dan to'lovgacha to'liq voronka. Analitika orqali raqamlarni o'qib, qayerda pul yo'qotilayotganini ko'rasiz.",
    skills: [
      "0 dan to'lovgacha to'liq funnel qurish",
      "Deep Analytics: raqamlar tilida gaplashish",
      "Test → Optimizatsiya → Scaling sikli",
      "Byudjetni boshqarish va ROAS optimizatsiyasi",
      "Real biznes uchun strategik audit va portfolio",
    ],
  },
];

const credentials = [
  { yr: "2022", text: 'Mehriniso Nurullayevna — "Shogirdlar 4.0" va Marketing kursi bitiruvchisi' },
  { yr: "2023", text: "Xayot Sharapovdan target bo'yicha mentorship" },
  { yr: "2024", text: "Xalqaro Meta mutaxassislari bilan to'g'ridan-to'g'ri hamkorlik" },
  { yr: "2025", text: "$80,000+ ad spend, ROAS 82×, 3,500+ o'quvchi jalb qilindi" },
  { yr: "2026", text: "Vision Group Performance Marketing Akademiyasi — IV oqim" },
];

const cases = [
  {
    tag: "KAYS 01 / Ta'lim",
    num: "3,500",
    small: " o'quvchi",
    desc: "ISFT Institute Samarqand filiali uchun olib borilgan target kampaniyasi. Auditoriya segmentatsiyasi va voronka strategiyasi orqali rekord natija.",
    meta: "2025 / 6 oy / Samarqand",
  },
  {
    tag: "KAYS 02 / Maktab",
    num: "$4600",
    small: " → 250 o'quvchi",
    desc: "Bitta maktabga atigi $4600 byudjet bilan 250 o'quvchi olindi",
    meta: "2025 / 2 oy / Samarqand",
  },
  {
    tag: "KAYS 03 / ROAS",
    num: "82×",
    small: " qaytim",
    desc: "Har sarflangan $1 reklama uchun o'rtacha $82 tushum. Mijozning umrboy qiymati (LTV) hisobiga ko'tarilgan ROAS. 1:412 ROASga erishilgan.",
    meta: "2025 / Yillik o'rtacha",
  },
];

const testimonials = [
  {
    initials: "SM",
    name: "Sardor M.",
    role: "Biznes egasi · I oqim",
    quote: "Kursda bunaqa ma'lumotlar berilishini kutmagandim. Lidlar sifati sezilarli oshdi. Eng yoqqani — hammasi tizimli va mantiqiy.",
  },
  {
    initials: "BM",
    name: "Bek Marketing",
    role: "SMM mutaxassisi · I oqim",
    quote: "Ustoz darslar zo'r o'tyapti. Borgan sari to'g'ri joyda ekanligimni aniqroq his qilyapman. Bizga shunchaki target emas, butun marketing tizimini qura oladigan mutaxassis o'tyapti.",
  },
  {
    initials: "G'",
    name: "G'anisher",
    role: "Targetolog · I oqim",
    quote: "2 yil tajribam hech narsa emas ekan. Ustoz oldida muammoga aniq yechim oldim. Tajribasi katta — logikasidan bilinadi.",
  },
  {
    initials: "MA",
    name: "Maxmudov Akmal.",
    role: "Targetolog · Marketolog · III oqim",
    quote: "Dars bugun ham vaapahe bomba boldiyu. Men bir narsaga qoyil qoganim Uchqun aka erinmasdan ham ingliz tilidagi ham rus tilidagi xolatda korsatib berganiga rosti qoyil qoldim. Bunaqa xarakterli bolish hammani ham qolidan kelmasa kerak. Aka raxmat katta.",
  },
  {
    initials: "ShS",
    name: "Shahnoza Sobirovna.",
    role: "Targetolog · Marketolog · III oqim",
    quote: "Man Targetda 3 yildan beri ishliman, katta-katta byudjetlarni boshqarganman Lekin bugungi dars 💣💣💣 ey xydoyim xali xech narsani bilmas ekanman degan qarorga keldim 🫣 bugun endi 4-darsda prosta BOMBA xali yana qancha mavzular bor miyamiz portladi ishoning 😅🤯",
  },
  {
    initials: "Y",
    name: "Yulduzxon",
    role: "Targetolog · III oqim",
    quote: "Domla rahmat to’risini etsam sizni kursiyizgacha o’zimni zo’r targetologman dib o’ylardim sizni kursiyizni sotvolib manda hali ko’p kamchilik borligini ko’rdim bervotgan bilimlariyiz un rahmat sizi tanlab adashmabman.",
  },
    {
    initials: "S",
    name: "Sora",
    role: "Targetolog · III oqim",
    quote: "Dars zo’r bo’ldi, aynixsa audit qilib berganizda ancha xatolarimi bilib oldim raxmat👍 keyingi dars qarshi bo’masela mani ishimi ko’rib bering🙏",
  },
];

const includedItems = [
  { num: "i.", title: "36 jonli Zoom darsi", desc: "3 oy davomida haftada 3 marta interaktiv mashg'ulot. Yozuv emas — savol berasiz, javob olasiz." },
  { num: "ii.", title: "24/7 individual support", desc: "Telegram orqali ustozning shaxsiy yordami. Reklama qotib qolsa — yozasiz, javob olasiz." },
  { num: "iii.", title: "AI Integration darslari", desc: "Sun'iy intellektni marketingga joriy qilib, ish samaradorligingizni 3-5 baravar oshirasiz." },
  { num: "iv.", title: "Real loyihada portfolio", desc: "Haqiqiy biznes uchun reklama yoqasiz. Kurs oxirida 1 ta to'liq case study qo'lingizda." },
  { num: "v.", title: "Vision Group sertifikati", desc: "Kurs yakunida rasmiy sertifikat. Mijozlarga taklif yuborganda ishonch beruvchi hujjat." },
  { num: "vi.", title: "Yopiq Telegram community", desc: "Bitiruvchilar va joriy o'quvchilar networking. Birinchi mijozlaringizning bir qismi shu yerdan keladi." },
  { num: "vii.", title: "Materiallar — abadiy", desc: "Barcha video, shablon va ish jadvallari sizda umrbod qoladi. Yangilanishlar ham bepul keladi." },
  { num: "viii.", title: "30 kunlik 100% kafolat", desc: "Birinchi oy oxiriga qadar darslar sifatidan ko'ngilingiz to'lmasa — pulingizni qaytarib beramiz." },
];

const tiers = [
  {
    name: "Boshlovchi",
    tagline: "Guruhda o'rganib, mustaqil ishga kirishish",
    oldPrice: "1,970,000 so'm",
    price: "1,470,000",
    currency: "SO'M / TO'LIQ KURS",
    featured: false,
    features: [
      { text: "16 jonli Zoom darsi", included: true },
      { text: "Guruhda support (Telegram)", included: true },
      { text: "Barcha materiallar abadiy", included: true },
      { text: "Vision Group sertifikati", included: true },
      { text: "15 kunlik kafolat", included: true },
      { text: "Individual mentoring 3 marta", included: false },
    ],
  },
  {
    name: "Standart",
    tagline: "Eng yaxshi narx-sifat nisbati. Target o'zini o'rganishni istaganlar.",
    oldPrice: "2,470,000 so'm",
    price: "1,970,000",
    currency: "SO'M / TO'LIQ KURS",
    featured: true,
    features: [
      { text: "Boshlovchi tarifning hammasi", included: true },
      { text: "36 jonli Zoom darsi", included: true },
      { text: "Haftada 1 marta individual maslahat", included: true },
      { text: "Real loyihada portfolio", included: true },
      { text: "Yopiq community kirish", included: true },
      { text: "Mijoz topish modul kengaytirilgan", included: true },
      { text: "Birinchi mijoz bilan ishlash boyicha mentor", included: true },
      { text: "Lifetime mentor support", included: false },
    ],
  },
  {
    name: "VIP / Pro",
    tagline: "Tez natija. Individual mentoring.",
    oldPrice: "6,000,000 so'm",
    price: "4,470,000",
    currency: "SO'M / TO'LIQ KURS",
    featured: false,
    features: [
      { text: "Standart tarifning hammasi", included: true },
      { text: "24 jonli Zoom darsi, To'liq 36 mavzular ichida", included: true },
      { text: "Haftada 3 marta 1-on-1 sessiya", included: true },
      { text: "Reklama kabineti shaxsiy audit", included: true },
      { text: "Birinchi 3 mijozni topishga kafolatli yordam", included: true },
      { text: "Lifetime support — kurs tugagach ham 1 yillik", included: true },
      { text: "Vision Group hamkorlar tarmog'iga kirish", included: true },
      { text: "Yopiq VIP Telegram chat", included: true },
    ],
  },
];

const cohort = [
  { lbl: "Oqim", val: "IV oqim · 2026", urgent: false },
  { lbl: "Boshlanishi", val: "15-may, 2026", urgent: false },
  { lbl: "Format", val: "Online / Zoom", urgent: false },
  { lbl: "Qoldi", val: "7 / 15 joy", urgent: true },
];

// ============ STYLES (scoped under .vg-page) ============

const styles = `
.vg-page {
  --vg-bg: #F2EDE3;
  --vg-bg-2: #EAE3D5;
  --vg-ink: #161513;
  --vg-ink-2: #3A3733;
  --vg-muted: #6B6359;
  --vg-line: #C9BFA9;
  --vg-accent: #B8431C;
  --vg-paper: #FAF6EC;

  --vg-serif: 'Fraunces', Georgia, serif;
  --vg-sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --vg-mono: 'Geist Mono', ui-monospace, monospace;

  font-family: var(--vg-sans);
  background: var(--vg-bg);
  color: var(--vg-ink);
  line-height: 1.5;
  font-size: 16px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(circle at 1px 1px, rgba(22,21,19,0.06) 1px, transparent 0);
  background-size: 24px 24px;
  scroll-behavior: smooth;
}
.vg-page *, .vg-page *::before, .vg-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vg-page a { color: inherit; text-decoration: none; }

.vg-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }

/* TOP BAR */
.vg-page .vg-topbar {
  border-bottom: 1px solid var(--vg-line);
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(242,237,227,0.92);
}
.vg-topbar-inner { display: flex; align-items: center; justify-content: space-between; padding: 16px 32px; max-width: 1240px; margin: 0 auto; }
.vg-brand { font-family: var(--vg-serif); font-weight: 700; font-size: 22px; letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; }
.vg-brand-mark { width: 28px; height: 28px; background: var(--vg-ink); color: var(--vg-bg); display: grid; place-items: center; font-family: var(--vg-mono); font-weight: 600; font-size: 13px; border-radius: 2px; }
.vg-nav-links { display: flex; gap: 32px; font-size: 13px; letter-spacing: 0.02em; text-transform: uppercase; color: var(--vg-ink-2); }
.vg-nav-links a:hover { color: var(--vg-accent); }
.vg-nav-cta { background: var(--vg-ink); color: var(--vg-bg); padding: 10px 18px; border-radius: 2px; font-size: 13px; font-weight: 500; transition: background .2s; }
.vg-nav-cta:hover { background: var(--vg-accent); }
@media (max-width: 800px) { .vg-page .vg-nav-links { display: none; } }

/* HERO */
.vg-page .vg-hero { padding: 80px 0 100px; border-bottom: 1px solid var(--vg-line); position: relative; }
.vg-hero-eyebrow { display: flex; align-items: center; gap: 14px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 40px; flex-wrap: wrap; }
.vg-hero-eyebrow::before { content: ""; width: 36px; height: 1px; background: var(--vg-ink); }
.vg-hero-headline { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(44px, 7vw, 96px); line-height: 0.96; letter-spacing: -0.035em; margin-bottom: 32px; font-variation-settings: "opsz" 144; }
.vg-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vg-hero-headline .vg-strike { position: relative; display: inline-block; }
.vg-hero-headline .vg-strike::after { content: ""; position: absolute; left: -2%; right: -2%; top: 52%; height: 4px; background: var(--vg-accent); transform: rotate(-3deg); }
.vg-hero-sub { font-size: 19px; line-height: 1.55; color: var(--vg-ink-2); max-width: 680px; margin-bottom: 48px; }
.vg-hero-sub strong { font-weight: 600; color: var(--vg-ink); }
.vg-hero-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 56px; }

.vg-btn-primary { background: var(--vg-ink); color: var(--vg-bg); padding: 18px 32px; border-radius: 2px; font-size: 15px; font-weight: 500; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; transition: all .2s; font-family: var(--vg-sans); }
.vg-btn-primary:hover { background: var(--vg-accent); transform: translateY(-1px); }
.vg-btn-primary svg { transition: transform .2s; }
.vg-btn-primary:hover svg { transform: translateX(4px); }
.vg-btn-secondary { padding: 18px 32px; border: 1px solid var(--vg-ink); border-radius: 2px; font-size: 15px; font-weight: 500; background: transparent; color: var(--vg-ink); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; font-family: var(--vg-sans); }
.vg-btn-secondary:hover { background: var(--vg-ink); color: var(--vg-bg); }

.vg-hero-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); }
.vg-hero-stats > div { padding: 24px 24px 24px 0; border-right: 1px solid var(--vg-line); }
.vg-hero-stats > div:last-child { border-right: none; padding-right: 0; }
.vg-hero-stats .vg-num { font-family: var(--vg-serif); font-size: 42px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 8px; }
.vg-hero-stats .vg-lbl { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
@media (max-width: 800px) {
  .vg-page .vg-hero-stats { grid-template-columns: 1fr 1fr; }
  .vg-page .vg-hero-stats > div { padding: 20px 16px; border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-hero-stats > div:nth-child(odd) { border-right: 1px solid var(--vg-line); }
  .vg-page .vg-hero-stats > div:nth-last-child(-n+2) { border-bottom: none; }
}

/* TICKER */
.vg-page .vg-ticker { background: var(--vg-ink); color: var(--vg-bg); padding: 14px 0; overflow: hidden; border-top: 1px solid var(--vg-ink); border-bottom: 1px solid var(--vg-ink); }
.vg-ticker-track { display: flex; gap: 48px; animation: vg-scroll 40s linear infinite; white-space: nowrap; font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.vg-ticker-track span { display: flex; align-items: center; gap: 14px; }
.vg-ticker-track .vg-dot { color: var(--vg-accent); }
@keyframes vg-scroll { to { transform: translateX(-50%); } }

/* SECTIONS */
.vg-page .vg-section { padding: 100px 0; border-bottom: 1px solid var(--vg-line); }
.vg-section-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
.vg-section-eyebrow::before { content: "§"; font-family: var(--vg-serif); font-size: 16px; color: var(--vg-ink); }
.vg-section-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(36px, 5vw, 60px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 24px; max-width: 880px; }
.vg-section-title em { font-style: italic; color: var(--vg-accent); }
.vg-section-lead { font-size: 19px; color: var(--vg-ink-2); max-width: 700px; line-height: 1.55; margin-bottom: 64px; }

/* AUDIENCE */
.vg-audience-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.vg-audience-card { background: var(--vg-paper); border: 1px solid var(--vg-line); padding: 36px; transition: all .3s; }
.vg-audience-card:hover { background: var(--vg-ink); color: var(--vg-bg); transform: translateY(-4px); }
.vg-audience-card .vg-num { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-muted); margin-bottom: 24px; }
.vg-audience-card:hover .vg-num { color: var(--vg-accent); }
.vg-audience-card h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 26px; letter-spacing: -0.02em; margin-bottom: 14px; }
.vg-audience-card p { font-size: 15px; color: var(--vg-ink-2); line-height: 1.5; }
.vg-audience-card:hover p { color: rgba(250,246,236,0.75); }
@media (max-width: 800px) { .vg-page .vg-audience-grid { grid-template-columns: 1fr; } }

/* CURRICULUM */
.vg-curriculum-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-ink); background: var(--vg-paper); }
.vg-month { padding: 48px 36px; border-right: 1px solid var(--vg-line); position: relative; }
.vg-month:last-child { border-right: none; }
.vg-month-num { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
.vg-month-num::before { content: ""; width: 24px; height: 1px; background: var(--vg-accent); }
.vg-month-title { font-family: var(--vg-serif); font-size: 32px; font-weight: 500; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 24px; }
.vg-month-title em { font-style: italic; color: var(--vg-accent); }
.vg-month-desc { font-size: 15px; color: var(--vg-ink-2); line-height: 1.6; margin-bottom: 24px; }
.vg-month-skills { list-style: none; border-top: 1px solid var(--vg-line); padding-top: 20px; }
.vg-month-skills li { font-size: 14px; color: var(--vg-ink-2); padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; line-height: 1.5; }
.vg-month-skills li::before { content: "→"; color: var(--vg-accent); font-weight: 600; flex-shrink: 0; }
@media (max-width: 900px) {
  .vg-page .vg-curriculum-list { grid-template-columns: 1fr; }
  .vg-page .vg-month { border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-month:last-child { border-bottom: none; }
}

/* INSTRUCTOR */
.vg-instructor { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.vg-instructor-photo { position: relative; background: var(--vg-bg-2); aspect-ratio: 4/5; overflow: hidden; border: 1px solid var(--vg-line); }
.vg-instructor-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vg-instructor-photo .vg-ph { position: absolute; inset: 0; display: grid; place-items: center; background: linear-gradient(135deg, var(--vg-bg-2) 0%, var(--vg-paper) 100%); }
.vg-instructor-photo .vg-ph::after { content: "Uchqun Turdiyev"; font-family: var(--vg-serif); font-style: italic; font-size: 24px; color: var(--vg-muted); }
.vg-instructor-photo .vg-badge { position: absolute; bottom: 24px; left: 24px; background: var(--vg-ink); color: var(--vg-bg); padding: 14px 20px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; z-index: 2; }
.vg-instructor-photo .vg-badge strong { display: block; font-family: var(--vg-serif); font-size: 26px; font-weight: 500; letter-spacing: -0.02em; text-transform: none; margin-top: 4px; color: var(--vg-accent); }
.vg-instructor h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(32px, 4vw, 48px); line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 28px; }
.vg-instructor h2 em { font-style: italic; color: var(--vg-accent); }
.vg-instructor p { font-size: 16px; color: var(--vg-ink-2); line-height: 1.65; margin-bottom: 18px; }
.vg-cred-list { list-style: none; margin-top: 32px; border-top: 1px solid var(--vg-line); }
.vg-cred-list li { padding: 16px 0; border-bottom: 1px solid var(--vg-line); display: grid; grid-template-columns: 80px 1fr; gap: 24px; font-size: 15px; }
.vg-cred-list .vg-yr { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-muted); }
@media (max-width: 900px) { .vg-page .vg-instructor { grid-template-columns: 1fr; gap: 40px; } }

/* CASES */
.vg-cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.vg-case { background: var(--vg-paper); border: 1px solid var(--vg-line); padding: 36px; position: relative; overflow: hidden; }
.vg-case::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--vg-accent); }
.vg-case-tag { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 24px; }
.vg-case-num { font-family: var(--vg-serif); font-size: 56px; font-weight: 500; letter-spacing: -0.04em; line-height: 1; margin-bottom: 8px; color: var(--vg-ink); }
.vg-case-num small { font-size: 22px; color: var(--vg-accent); letter-spacing: -0.02em; }
.vg-case-desc { font-size: 15px; color: var(--vg-ink-2); line-height: 1.55; border-top: 1px solid var(--vg-line); padding-top: 20px; margin-top: 20px; }
.vg-case-meta { font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); margin-top: 16px; text-transform: uppercase; letter-spacing: 0.1em; }
@media (max-width: 800px) { .vg-page .vg-cases-grid { grid-template-columns: 1fr; } }

/* TESTIMONIALS */
.vg-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-line); }
.vg-testimonial { padding: 40px 32px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-paper); }
.vg-testimonial:nth-child(3n) { border-right: none; }
.vg-testimonial:nth-last-child(-n+3) { border-bottom: none; }
.vg-testimonial-quote { font-family: var(--vg-serif); font-size: 17px; line-height: 1.55; color: var(--vg-ink); margin-bottom: 24px; font-style: italic; position: relative; }
.vg-testimonial-quote::before { content: '"'; position: absolute; top: -20px; left: -8px; font-size: 56px; color: var(--vg-accent); font-family: var(--vg-serif); line-height: 1; }
.vg-testimonial-author { display: flex; align-items: center; gap: 14px; border-top: 1px solid var(--vg-line); padding-top: 20px; }
.vg-testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--vg-bg-2); display: grid; place-items: center; font-family: var(--vg-serif); font-weight: 600; font-size: 18px; color: var(--vg-ink); flex-shrink: 0; }
.vg-testimonial-meta strong { display: block; font-size: 14px; font-weight: 600; margin-bottom: 2px; }
.vg-testimonial-meta span { font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); letter-spacing: 0.05em; }
@media (max-width: 900px) {
  .vg-page .vg-testimonials { grid-template-columns: 1fr; }
  .vg-page .vg-testimonial { border-right: none !important; border-bottom: 1px solid var(--vg-line) !important; }
  .vg-page .vg-testimonial:last-child { border-bottom: none !important; }
}

/* INCLUDED */
.vg-included-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); }
.vg-inc { padding: 32px; display: flex; gap: 20px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-paper); }
.vg-inc:nth-child(2n) { border-right: none; }
.vg-inc:nth-last-child(-n+2) { border-bottom: none; }
.vg-inc-num { font-family: var(--vg-serif); font-style: italic; font-size: 28px; font-weight: 500; color: var(--vg-accent); flex-shrink: 0; width: 40px; }
.vg-inc h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 19px; margin-bottom: 8px; letter-spacing: -0.01em; }
.vg-inc p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.55; }
@media (max-width: 800px) {
  .vg-page .vg-included-grid { grid-template-columns: 1fr; }
  .vg-page .vg-inc { border-right: none !important; }
}

/* PRICING */
.vg-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-ink); background: var(--vg-paper); }
.vg-tier { padding: 48px 36px; border-right: 1px solid var(--vg-line); position: relative; display: flex; flex-direction: column; }
.vg-tier:last-child { border-right: none; }
.vg-tier.vg-featured { background: var(--vg-ink); color: var(--vg-bg); }
.vg-tier.vg-featured .vg-price-amount, .vg-tier.vg-featured h3 { color: var(--vg-bg); }
.vg-tier-badge { position: absolute; top: -1px; right: -1px; background: var(--vg-accent); color: var(--vg-paper); padding: 6px 14px; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.vg-tier h3 { font-family: var(--vg-serif); font-size: 26px; font-weight: 500; letter-spacing: -0.02em; margin-bottom: 8px; }
.vg-tier-tagline { font-size: 14px; color: var(--vg-muted); margin-bottom: 32px; min-height: 40px; }
.vg-tier.vg-featured .vg-tier-tagline { color: rgba(250,246,236,0.65); }
.vg-price-amount { font-family: var(--vg-serif); font-size: 52px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; }
.vg-price-currency { font-family: var(--vg-mono); font-size: 14px; color: var(--vg-muted); margin-bottom: 24px; letter-spacing: 0.05em; }
.vg-tier.vg-featured .vg-price-currency { color: rgba(250,246,236,0.6); }
.vg-price-old { text-decoration: line-through; font-family: var(--vg-mono); font-size: 13px; color: var(--vg-muted); margin-bottom: 8px; }
.vg-tier.vg-featured .vg-price-old { color: rgba(250,246,236,0.4); }
.vg-tier ul { list-style: none; margin: 24px 0 32px; flex-grow: 1; }
.vg-tier ul li { padding: 10px 0; font-size: 14px; border-bottom: 1px dashed var(--vg-line); display: flex; gap: 12px; }
.vg-tier.vg-featured ul li { border-bottom: 1px dashed rgba(250,246,236,0.15); }
.vg-tier ul li::before { content: "→"; color: var(--vg-accent); font-weight: 600; }
.vg-tier ul li.vg-no::before { content: "—"; color: var(--vg-muted); opacity: 0.5; }
.vg-tier ul li.vg-no { color: var(--vg-muted); opacity: 0.6; }
.vg-tier .vg-btn-primary { width: 100%; justify-content: center; }
.vg-tier.vg-featured .vg-btn-primary { background: var(--vg-accent); }
.vg-tier.vg-featured .vg-btn-primary:hover { background: var(--vg-paper); color: var(--vg-ink); }
@media (max-width: 900px) {
  .vg-page .vg-pricing { grid-template-columns: 1fr; }
  .vg-page .vg-tier { border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-tier:last-child { border-bottom: none; }
}

/* GUARANTEE */
.vg-page .vg-guarantee { background: var(--vg-ink); color: var(--vg-bg); padding: 80px 0; border: none; position: relative; overflow: hidden; }
.vg-guarantee::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0); background-size: 24px 24px; }
.vg-guarantee-inner { display: grid; grid-template-columns: 200px 1fr; gap: 60px; align-items: center; position: relative; }
.vg-guarantee-seal { width: 200px; height: 200px; border: 2px solid var(--vg-accent); border-radius: 50%; display: grid; place-items: center; text-align: center; font-family: var(--vg-serif); font-style: italic; position: relative; }
.vg-guarantee-seal::before { content: ""; position: absolute; inset: 8px; border: 1px solid var(--vg-accent); border-radius: 50%; opacity: 0.4; }
.vg-guarantee-seal strong { font-size: 56px; font-weight: 500; font-style: normal; color: var(--vg-accent); line-height: 1; display: block; margin-bottom: 4px; letter-spacing: -0.03em; }
.vg-guarantee-seal span { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-style: normal; font-family: var(--vg-mono); }
.vg-guarantee h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(28px, 3.5vw, 42px); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 20px; }
.vg-guarantee h2 em { font-style: italic; color: var(--vg-accent); }
.vg-guarantee p { font-size: 17px; line-height: 1.6; color: rgba(250,246,236,0.75); max-width: 620px; }
.vg-guarantee-sign { margin-top: 28px; font-family: var(--vg-serif); font-style: italic; font-size: 18px; }
@media (max-width: 800px) {
  .vg-page .vg-guarantee-inner { grid-template-columns: 1fr; gap: 32px; text-align: center; }
  .vg-page .vg-guarantee-seal { margin: 0 auto; }
}

/* CTA FINAL */
.vg-page .vg-cta-final { background: var(--vg-bg-2); text-align: center; border: none; padding: 100px 0; }
.vg-cta-final-inner { max-width: 760px; margin: 0 auto; }
.vg-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(36px, 5vw, 64px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 24px; }
.vg-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vg-cta-final p { font-size: 18px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
.vg-cohort-info { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-paper); margin-bottom: 40px; }
.vg-cohort-cell { padding: 20px 16px; border-right: 1px solid var(--vg-line); text-align: left; }
.vg-cohort-cell:last-child { border-right: none; }
.vg-cohort-cell .vg-lbl { font-family: var(--vg-mono); font-size: 10px; color: var(--vg-muted); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; display: block; }
.vg-cohort-cell .vg-val { font-family: var(--vg-serif); font-weight: 500; font-size: 17px; }
.vg-cohort-cell .vg-val.vg-urgent { color: var(--vg-accent); }
.vg-cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.vg-cta-buttons .vg-btn-primary { font-size: 16px; padding: 20px 36px; }
.vg-cta-fineprint { margin-top: 32px; font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); letter-spacing: 0.1em; text-transform: uppercase; }
@media (max-width: 800px) {
  .vg-page .vg-cohort-info { grid-template-columns: 1fr 1fr; }
  .vg-page .vg-cohort-cell:nth-child(2) { border-right: none; }
  .vg-page .vg-cohort-cell { border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-cohort-cell:nth-last-child(-n+2) { border-bottom: none; }
}

/* FOOTER */
.vg-page .vg-footer { padding: 60px 0 40px; background: var(--vg-bg); }
.vg-footer-inner { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px; margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid var(--vg-line); }
.vg-footer-brand p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.65; margin-top: 16px; max-width: 380px; }
.vg-footer-col h4 { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 18px; }
.vg-footer-col a { display: block; padding: 6px 0; font-size: 14px; color: var(--vg-ink-2); }
.vg-footer-col a:hover { color: var(--vg-accent); }
.vg-footer-bottom { display: flex; justify-content: space-between; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
@media (max-width: 800px) {
  .vg-page .vg-footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .vg-page .vg-footer-bottom { flex-direction: column; gap: 12px; }
}

/* ANIMATIONS */
@keyframes vg-fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.vg-page .vg-hero-headline, .vg-page .vg-hero-sub, .vg-page .vg-hero-cta-row, .vg-page .vg-hero-stats { animation: vg-fadeUp .8s ease-out backwards; }
.vg-page .vg-hero-sub { animation-delay: .1s; }
.vg-page .vg-hero-cta-row { animation-delay: .2s; }
.vg-page .vg-hero-stats { animation-delay: .3s; }
`;

// ============ COMPONENT ============

export default function TargetKursiPage() {
  return (
    <>
      {/* Google Fonts — Next.js avtomatik <head> ga ko'chiradi */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vg-page">
        {/* ============ HEADER ============ */}
       

        <main>
          {/* ============ HERO ============ */}
          <section className="vg-hero" style={{ borderTop: "none" }}>
            <div className="vg-container">
              <div className="vg-hero-eyebrow">
                <span>VISION GROUP</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>PERFORMANCE MARKETING 3.0</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>2026 — IV oqim</span>
              </div>

              <h1 className="vg-hero-headline">
                Reklama <span className="vg-strike">yoqishni</span> emas,{" "}
                <em>natija qilishni</em> o&apos;rganasiz.
              </h1>

              <p className="vg-hero-sub">
                <strong>$100,000+ reklama byudjetini boshqargan</strong> va Meta
                mutaxassislari auditidan o&apos;tgan tizim asosida qurilgan{" "}
                <strong>3 oylik intensiv Zoom-kursi</strong>. Sizni shunchaki
                &quot;tugmacha bosuvchi&quot; emas, balki yuqori daromadli{" "}
                <strong>strategik mutaxassisga</strong> aylanasiz.
              </p>

              <div className="vg-hero-cta-row">
                <a href="#yozilish" className="vg-btn-primary">
                  IV oqimga yozilish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <a href="#narx" className="vg-btn-secondary">
                  Narx va tariflarni ko&apos;rish
                </a>
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
          </section>

          {/* ============ TICKER ============ */}
          <div className="vg-ticker">
            <div className="vg-ticker-track">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i}>
                  <span className="vg-dot">●</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* ============ AUDIENCE ============ */}
          {/* <section className="vg-section">
            <div className="vg-container">
              <div className="vg-section-eyebrow">01 / Kim uchun</div>
              <h2 className="vg-section-title">
                Kurs uchta auditoriya uchun mo&apos;ljallangan
              </h2>

              <div className="vg-audience-grid">
                {audience.map((card) => (
                  <div key={card.title} className="vg-audience-card">
                    <div className="vg-num">{card.num}</div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* ============ CURRICULUM ============ */}
          <section className="vg-section" id="dastur">
            <div className="vg-container">
              <div className="vg-section-eyebrow">02 / Dastur</div>
              <h2 className="vg-section-title">
                3 oy. <em>Uch bosqich.</em>
                <br />
                Bitta tizim.
              </h2>
              <p className="vg-section-lead">
                Har oy oldingisi ustiga quriladi. Birinchi oyda texnik
                fundamentni o&apos;zlashtirasiz. Ikkinchi oyda sotadigan kontent
                yaratishni. Uchinchi oyda esa to&apos;liq sifatli mijozlar olib keladigan mashinani
                boshqarishni o&apos;rganasiz.
              </p>

              <div className="vg-curriculum-list">
                {months.map((month) => (
                  <div key={month.num} className="vg-month">
                    <div className="vg-month-num">{month.num}</div>
                    <h3 className="vg-month-title">
                      <em>{month.title}</em>
                    </h3>
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

          {/* ============ INSTRUCTOR ============ */}
          <section className="vg-section" id="ustoz">
            <div className="vg-container">
              <div className="vg-section-eyebrow">03 / Ustoz</div>
              <div className="vg-instructor">
                <div className="vg-instructor-photo">
                  {/*
                    Ustoz rasmini /public/uchqun.jpg ga joylang.
                    Agar fayl bo'lmasa — placeholder ko'rinadi.
                  */}
                  <div className="vg-ph"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                 {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/uchqun.jpg" alt="Uchqun Turdiyev" />
                  <div className="vg-badge">
                    $100,000+
                    <strong>Boshqarilgan reklama byudjeti</strong>
                  </div>
                </div>
                <div>
                  <h2>
                    Uchqun Turdiyev —{" "}
                    <em>Marketolog, Targetolog, Dasturchi.</em>
                  </h2>
                  <p>
                    Marketingdagi <strong>4 yillik tajribam</strong> va xalqaro{" "}
                    <strong>Meta mutaxassislaridan</strong> olgan bilimlarim
                    asosida sizni shunchaki &quot;tugmacha bosuvchi&quot; emas,
                    balki yuqori daromadli strategga aylantiraman.
                  </p>
                  <p>
                    Mehriniso Nurullayevnaning &quot;Shogirdlar 4.0&quot; va
                    Marketing kursini bitirganman. 2025-yilda umumiy{" "}
                    <strong>$80,000 reklama byudjetini</strong> boshqardim. Bir
                    maktab uchun atigi $4600 sarflab 250 o&apos;quvchi, institut
                    uchun esa 3,500 o&apos;quvchi jalb qildik.
                  </p>
                  <p>
                    Meta mutaxassislari oyiga 3 martagacha targetimga audit
                    o&apos;tkazib turadi — bu tizim tasodifiy emas, sinov va
                    auditdan o&apos;tgan.
                  </p>

                  <ul className="vg-cred-list">
                    {credentials.map((c) => (
                      <li key={c.yr}>
                        <span className="vg-yr">{c.yr}</span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ============ CASES ============ */}
          <section className="vg-section" id="natija">
            <div className="vg-container">
              <div className="vg-section-eyebrow">04 / Real keyslar</div>
              <h2 className="vg-section-title">
                Raqamlar — biz bilan ishlagan{" "}
                <em>haqiqiy bizneslar</em>
              </h2>
              <p className="vg-section-lead">
                Yuqorida ko&apos;rsatilgan ROAS, lid narxi va o&apos;quvchilar
                soni — bular kurs materiali uchun yasalgan misollar emas. Bular
                kurs ustozining real mijozlari uchun olib borgan kampaniyalari
                natijalari.
              </p>

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
            </div>
          </section>

          {/* ============ TESTIMONIALS ============ */}
          <section className="vg-section">
            <div className="vg-container">
              <div className="vg-section-eyebrow">05 / Talabalar</div>
              <h2 className="vg-section-title">
                Avvalgi oqim bitiruvchilari <em>nima deydi?</em>
              </h2>

              <div className="vg-testimonials">
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
          </section>

          {/* ============ INCLUDED ============ */}
          <section className="vg-section">
            <div className="vg-container">
              <div className="vg-section-eyebrow">06 / Tarkibida</div>
              <h2 className="vg-section-title">
                Kurs ichida <em>nima bor?</em>
              </h2>

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
              <div className="vg-section-eyebrow">07 / Narxlar</div>
              <h2 className="vg-section-title">
                Uch tarif. <em>Sizga moslashadi.</em>
              </h2>
              <p className="vg-section-lead">
                Hamma uchun bir xil narx — adolatsiz. Boshlovchi tadbirkor va
                karyera quruvchi targetolog ehtiyoji turlicha. Quyida 3 ta
                tarif. Bo&apos;lib to&apos;lash imkoniyati barcha tariflarda
                mavjud (3 oy, 0% ustama).
              </p>

              <div className="vg-pricing">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`vg-tier ${tier.featured ? "vg-featured" : ""}`}
                  >
                    {tier.featured && (
                      <div className="vg-tier-badge">Ko&apos;p tanlanadi</div>
                    )}
                    <h3>{tier.name}</h3>
                    <div className="vg-tier-tagline">{tier.tagline}</div>
                    <div className="vg-price-old">{tier.oldPrice}</div>
                    <div className="vg-price-amount">{tier.price}</div>
                    <div className="vg-price-currency">{tier.currency}</div>
                    <ul>
                      {tier.features.map((f) => (
                        <li
                          key={f.text}
                          className={f.included ? "" : "vg-no"}
                        >
                          {f.text}
                        </li>
                      ))}
                    </ul>
                    <a href="#yozilish" className="vg-btn-primary">
                      Tanlash
                    </a>
                  </div>
                ))}
              </div>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "32px",
                  fontFamily: "var(--vg-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--vg-muted)",
                }}
              >
                ↓ &nbsp; Bo&apos;lib to&apos;lash: 3 oyga, 0% ustama. Talabalar
                uchun qo&apos;shimcha 10% chegirma. &nbsp; ↓
              </p>
            </div>
          </section>

          {/* ============ GUARANTEE ============ */}
          <section className="vg-guarantee">
            <div className="vg-container">
              <div className="vg-guarantee-inner">
                <div className="vg-guarantee-seal">
                  <div>
                    <strong>30</strong>
                    <span>Kunlik kafolat</span>
                  </div>
                </div>
                <div>
                  <h2>
                    Agar darslar sifatiga shubha qilsangiz —{" "}
                    <em>pulingiz to&apos;liq qaytariladi.</em>
                  </h2>
                  <p>
                    Birinchi 14 kun ichida (taxminan 6 ta dars) men sizga shu
                    darajada qiymat berishim kerakki, kursda qolish
                    o&apos;zingizning xohishingiz bo&apos;lsin. Aks holda — To'lovingizni to'liq qaytarib olishingiz mumkin
                        - Bu kafolat shunchaki so'z emas, balki mening o'z ishonchimning ifodasidir. Agar kurs sizga mos kelmasa yoki kutganingizga javob bermasa, hech qanday savol berilmaydi - pulingizni qaytarib olasiz.
                  </p>
                  <div className="vg-guarantee-sign">
                    — Uchqun Turdiyev, ustoz va Vision Group asoschilaridan
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ CTA FINAL ============ */}
          <section className="vg-cta-final" id="yozilish">
            <div className="vg-container">
              <div className="vg-cta-final-inner">
                <div
                  className="vg-section-eyebrow"
                  style={{ justifyContent: "center" }}
                >
                  08 / Yozilish
                </div>
                <h2>
                  Joyingizni <em>band qiling.</em>
                </h2>
                <p>
                  IV oqim cheklangan — biz har oqimga 15 tadan ko&apos;p
                  o&apos;quvchini olmaymiz, chunki har bittasiga shaxsiy support
                  qila olishimiz kerak. Quyidagi tugmalar orqali batafsil
                  ma&apos;lumot oling yoki to&apos;g&apos;ridan-to&apos;g&apos;ri
                  ustoz bilan bog&apos;laning. Konsultatsiya mutlaqo tekin.
                </p>

                <div className="vg-cohort-info">
                  {cohort.map((c) => (
                    <div key={c.lbl} className="vg-cohort-cell">
                      <span className="vg-lbl">{c.lbl}</span>
                      <span
                        className={`vg-val ${c.urgent ? "vg-urgent" : ""}`}
                      >
                        {c.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="vg-cta-buttons">
                  <a
                    href="https://www.vision-group.uz/target-kursi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vg-btn-primary"
                  >
                    Batafsil ma&apos;lumot va yozilish
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/Uchqun_Turdiev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vg-btn-secondary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
                    </svg>
                    Telegramda yozish
                  </a>
                </div>

                <div className="vg-cta-fineprint">
                  ↑ &nbsp; Konsultatsiya mutlaqo tekin · Spam yo&apos;q &nbsp; ↑
                </div>
              </div>
            </div>
          </section>
        </main>

    
      </div>
    </>
  );
}