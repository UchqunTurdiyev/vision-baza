/**
 * Vision Group — Performance Marketing 5.0 Sotuv sahifasi
 * Dark + Emerald Green | Schwartz copywriting framework
 * Istakni kanalizatsiya → muammo → noyob mexanizm → isbot → taklif → risk reversal
 * ============================================================
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
import { CountdownTimer } from "@/components/comments/Countdowntimer";
import { SocialProofToast } from "@/components/comments/Socialprooftoast";
import LeadModal from "@/components/target/LeadModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing 5.0 — Vision Group | Uchqun Turdiyev",
  description:
    "Reklama tugmasini bosishni emas, biznesga real natija qilishni o'rganasiz. $80.000+ byudjetni boshqargan amaliyotchidan 2 oylik Performance Marketing kursi. Video + jonli Zoom, 1 yillik dostup, 15 kunlik kafolat.",
};

// ============ DATA ============

const heroStats = [
  { num: "$80K+", lbl: "Boshqarilgan byudjet" },
  { num: "82×", lbl: "O'rtacha ROAS" },
  { num: "12+", lbl: "Bizneslar" },
  { num: "4 yil", lbl: "Amaliy tajriba" },
];

const tickerItems = [
  "VIDEO DARSLAR + JONLI ZOOM",
  "1 YILLIK DOSTUP",
  "15 KUNLIK PULNI QAYTARISH KAFOLATI",
  "CRM + CAPI AMALIYOTI",
  "REAL PORTFOLIO",
  "META AUDITDAN O'TGAN TIZIM",
];

// Schwartz: prospektning muvaffaqiyatsiz tajribasini aytib, og'riqni jonlantirish
const problems = [
  "Lid kundan-kunga qimmatlashyapti — byudjet o'sadi, natija o'smaydi.",
  "Kelgan lidlar sifatsiz: \"men qoldirmaganman\", puli yo'q auditoriya.",
  "Mijoz sizni tajribali sanamay, shartnomani uzaytirmaydi.",
  "Natija bermagan sayin o'zingizga ishonchingiz so'nadi.",
];

// Schwartz: noyob mexanizm (bozor soflligi yuqori — oddiy va'da yetmaydi)
const mechanism = [
  {
    num: "01",
    title: "Sovuq mijozdan kassagacha",
    desc: "Har bir qadamni boshqarasiz: qayerda nima qilishni aniq bilasiz. Sotuv tasodif emas.",
  },
  {
    num: "02",
    title: "Metaga har kuni to'g'ri signal",
    desc: "Algoritm xaridoringizni o'zi topadi — lid arzonlaydi, sifati oshadi.",
  },
  {
    num: "03",
    title: "Jarayonni raqamlarda o'qish",
    desc: "Kichik qadamlarni to'g'irlab, mag'lub bo'lmas strategiya qurasiz.",
  },
  {
    num: "04",
    title: "Sifatsiz liddan butkul qutilish",
    desc: "Mahsulot va Instagram holatiga mos to'g'ri texnika bilan target yoqasiz.",
  },
];

const audience = [
  {
    tag: "01",
    title: "O'z ustida ishlaydiganlar",
    desc: "2 oy davomida izchil, o'z ustida ishlay oladiganlar.",
  },
  {
    tag: "02",
    title: "Sabr bilan o'rganadiganlar",
    desc: "Sabr-toqat bilan o'qib, amaliyotga tushadiganlar.",
  },
  {
    tag: "03",
    title: "Daromadini oshiruvchilar",
    desc: "Olgan bilimi bilan daromadini oshirmoqchi bo'lganlar.",
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
    title: "1 yillik to'liq dostup",
    desc: "Barcha video darslar, shablonlar va yangilanishlarga 1 yil davomida kirish. Bir marta o'rganib, yil davomida qaytib ishlaysiz.",
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
    desc: "Meta Ads, AI va kontent asoslari. Haftada 2 ta video dars (zapis) + 2 ta jonli Zoom dars.",
    skills: [
      "Meta Ads Pro: algoritm va auditoriya",
      "AI Integration: samaradorlik 3x",
      "Birinchi reklama kampaniyasi",
      "Mijoz auditi va qizil chiziq",
      "Meta mutaxassislari tavsiyasidagi texnikalar",
      "2026-yil Meta mutaxassislari tavsiyasi",
      "Hook & Offer yaratish",
      "CPM ni to'g'ri texnikalar bilan bir necha barobar arzonlashtirish",
      "Sotadigan kontent va kreativlar",
    ],
  },
  {
    num: "2-OY",
    title: "Kontent + Strategik Targetolog",
    desc: "CAPI, funnel va to'liq Performance Marketing tizimi. Haftada 2 ta video dars (zapis) + 2 ta jonli Zoom dars.",
    skills: [
      "Copywriting texnikasi",
      "AI orqali sayt yasash",
      "Piksel + CAPI to'liq sozlash",
      "Web sayt → Telegram bot → CRM integratsiya",
      "Sotib olgan mijozlarni Meta'ga CAPI orqali yuborish",
      "Performance Marketing tizimi + to'liq funnel",
      "Deep Analytics + Attribution",
      "Test → Optim → Scaling",
      "Lead magnit strategiyasi",
    ],
  },
];

const credentials = [
  { yr: "2022", text: '"Shogirdlar 4.0" va Marketing kursi bitiruvchisi' },
  { yr: "2024", text: "Xayot Sharapovdan target mentorship" },
  { yr: "2025", text: "Meta mutaxassislari bilan hamkorlik va oylik audit" },
  { yr: "2025", text: "$80.000+ ad spend, ROAS 82×, 3,500+ mijoz" },
  { yr: "2026", text: "Vision Group — Performance Marketing 5.0 oqim" },
];

const cases = [
  {
    tag: "KAYS 01 / Ta'lim",
    num: "3,500",
    small: " mijoz",
    desc: "ISFT Institute Samarqand uchun target kampaniyasi. Auditoriya segmentatsiyasi orqali rekord natija.",
    meta: "2025 / 6 oy",
  },
  {
    tag: "KAYS 02 / Maktab",
    num: "$4,600",
    small: " → 250",
    desc: "Bitta maktabga atigi $4,600 byudjet bilan 250 o'quvchi jalb qilindi.",
    meta: "2025 / 2 oy",
  },
  {
    tag: "KAYS 03 / ROAS",
    num: "82×",
    small: " qaytim",
    desc: "Har $1 reklama uchun o'rtacha $82 tushum. LTV hisobiga yuqori qaytim.",
    meta: "2025 / Yillik",
  },
];

const testimonials = [
  {
    initials: "MA",
    name: "Maxmudov Akmal",
    role: "Targetolog · III oqim",
    quote: "Bugungi darsdan keyin hali hech narsa bilmasligimni angladim.",
  },
  {
    initials: "Sh",
    name: "Shahnoza S.",
    role: "Marketolog · III oqim",
    quote: "3 yildan beri target ishlayman, lekin bugungi dars bomba. Hali ko'p narsani bilmas ekanman.",
  },
  {
    initials: "Y",
    name: "Yulduzxon",
    role: "Targetolog · III oqim",
    quote: "Kursingizgacha o'zimni zo'r targetolog deb o'ylardim. Sizni tanlab adashmabman.",
  },
  {
    initials: "S",
    name: "Sora",
    role: "Targetolog · III oqim",
    quote: "Audit qilib berganlaridan so'ng natijalar keskin oshdi.",
  },
  {
    initials: "SM",
    name: "Sardor M.",
    role: "Biznes egasi",
    quote: "Lidlar sifati sezilarli oshdi. Hammasi tizimli va mantiqiy.",
  },
  {
    initials: "BM",
    name: "Bek Marketing",
    role: "SMM mutaxassisi",
    quote: "Bizga shunchaki target emas, butun marketing tizimini qura oladigan mutaxassis o'tyapti.",
  },
];

const includedItems = [
  { num: "i.", title: "Haftada 2 video dars + 2 jonli Zoom", desc: "Har hafta 2 ta video dars (zapis) va 2 ta jonli Zoom dars." },
  { num: "ii.", title: "1 yillik guruh dostup", desc: "Guruh va platformaga 1 yil davomida to'liq kirish." },
  { num: "iii.", title: "24/7 Telegram support", desc: "Savollaringizga kun-tun tez va aniq javob." },
  { num: "iv.", title: "AI Integration darslari", desc: "Samaradorlikni 3 baravar oshiruvchi AI ish jarayoni." },
  { num: "v.", title: "Real portfolio", desc: "Haqiqiy biznes uchun reklama yoqib, portfolio yig'asiz." },
  { num: "vi.", title: "Birinchi mijoz topishga yordam", desc: "Birinchi mijozingizni topishda amaliy ko'mak." },
  { num: "vii.", title: "1 yillik video materiallar", desc: "Barcha video darslar 1 yil davomida qo'lingizda." },
  { num: "viii.", title: "15 kunlik pul qaytarish kafolati", desc: "Mos kelmasa — to'lov 100% qaytariladi." },
];

const priceFeatures = [
  "Haftada 2 video dars + 2 jonli Zoom dars",
  "1 yillik guruh dostup",
  "24/7 Telegram support",
  "AI Integration darslari",
  "Real portfolio (haqiqiy biznes)",
  "Birinchi mijoz topishga yordam",
  "1 yillik video materiallar",
  "15 kunlik pul qaytarish kafolati",
];

const faqs = [
  {
    q: "Targetdan umuman bilmasam, qiyin bo'lmaydimi?",
    a: "Yo'q. Kurs 0 dan boshlanadi — birinchi oy aynan fundament va texnikaga bag'ishlangan. Kompyuter bilan ishlay olsangiz, yetarli.",
  },
  {
    q: "Darslar video bo'lsa, kim yordam beradi?",
    a: "Har hafta jonli Zoom darsida savol-javob va real kabinet tahlili bo'ladi. Bundan tashqari 24/7 Telegram support orqali doim yordam olasiz.",
  },
  {
    q: "Pul rostdan qaytadimi?",
    a: "Ha. Birinchi 15 kun ichida kurs sizga mos kelmasa — to'lovni hech qanday savolsiz to'liq qaytarib olasiz. Xavf to'liq biznes tomonida.",
  },
  {
    q: "Narxni qoplay olamanmi?",
    a: "Bitta o'rta mijoz topsangiz, kurs narxi o'zini qoplaydi. Maqsad — sizni shu darajaga olib chiqish.",
  },
  {
    q: "Kursdan keyin ish yoki mijoz topa olamanmi?",
    a: "Kursda real portfolio yig'asiz va ish/mijoz topish texnikalarini o'rganasiz.",
  },
  {
    q: "To'lovni bo'lib to'lasa bo'ladimi?",
    a: "Ha, oyma-oy bo'lib to'lash imkoniyati mavjud. Batafsil administratordan so'rang.",
  },
];

const cohort = [
  { lbl: "Oqim", val: "5.0 · 2026", urgent: false },
  { lbl: "Boshlanishi", val: "12-iyun", urgent: false },
  { lbl: "Format", val: "Video + Zoom", urgent: false },
  { lbl: "Qoldi", val: "faqat 7 joy", urgent: true },
];

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

  --vg-serif: var(--font-fraunces), Georgia, serif;
  --vg-sans: var(--font-geist), -apple-system, BlinkMacSystemFont, sans-serif;
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
.vg-page *, .vg-page *::before, .vg-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vg-page a { color: inherit; text-decoration: none; }

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
.vg-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vg-hero-headline .vg-strike { position: relative; display: inline-block; }
.vg-hero-headline .vg-strike::after { content: ""; position: absolute; left: -2%; right: -2%; top: 52%; height: 4px; background: var(--vg-accent); transform: rotate(-3deg) scaleX(0); transform-origin: left center; animation: vg-strike .5s ease-out 1.1s forwards; }
.vg-hero-sub { font-size: 17px; line-height: 1.6; color: var(--vg-ink-2); max-width: 660px; margin-bottom: 36px; }
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
.vg-hero-meta { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 26px; padding: 10px 16px 10px 10px; border: 1px solid var(--vg-line); border-radius: 999px; background: rgba(129,140,248,0.05); font-size: 14px; color: var(--vg-ink-2); max-width: 620px; line-height: 1.4; }
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
.vg-section-lead { font-size: 17px; color: var(--vg-ink-2); max-width: 720px; line-height: 1.6; margin-bottom: 48px; }

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
.vg-plain-row > p { font-size: 17px; line-height: 1.5; color: var(--vg-ink); }
.vg-plain-row > div h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 20px; letter-spacing: -0.01em; margin-bottom: 4px; color: var(--vg-ink); }
.vg-plain-row > div p { font-size: 15px; line-height: 1.55; color: var(--vg-ink-2); }
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
.vg-aud p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.6; }
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
.vg-fmt p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.6; }
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
.vg-month-desc { font-size: 14px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 20px; }
.vg-month-skills { list-style: none; border-top: 1px solid var(--vg-line); padding-top: 16px; }
.vg-month-skills li { font-size: 13px; color: var(--vg-ink-2); padding: 6px 0; display: flex; align-items: flex-start; gap: 10px; line-height: 1.5; }
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
.vg-instructor p { font-size: 15px; color: var(--vg-ink-2); line-height: 1.6; margin-bottom: 14px; }
.vg-instructor p strong { color: var(--vg-ink); font-weight: 600; }
.vg-cred-list { list-style: none; margin-top: 24px; border-top: 1px solid var(--vg-line); }
.vg-cred-list li { padding: 14px 0; border-bottom: 1px solid var(--vg-line); display: grid; grid-template-columns: 70px 1fr; gap: 20px; font-size: 14px; color: var(--vg-ink-2); }
.vg-cred-list .vg-yr { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-accent); }
@media (max-width: 900px) { .vg-page .vg-instructor { grid-template-columns: 1fr; gap: 32px; } }

/* CASES */
.vg-cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.vg-case { background: var(--vg-bg-2); border: 1px solid var(--vg-line); padding: 28px; position: relative; overflow: hidden; border-radius: 8px; transition: all .2s; }
.vg-case:hover { border-color: var(--vg-accent); transform: translateY(-2px); }
.vg-case::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--vg-accent); }
.vg-case-tag { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 18px; }
.vg-case-num { font-family: var(--vg-serif); font-size: 48px; font-weight: 500; letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px; color: var(--vg-accent); }
.vg-case-num small { font-size: 18px; color: var(--vg-ink); letter-spacing: -0.02em; }
.vg-case-desc { font-size: 14px; color: var(--vg-ink-2); line-height: 1.55; border-top: 1px solid var(--vg-line); padding-top: 16px; margin-top: 16px; }
.vg-case-meta { font-family: var(--vg-mono); font-size: 11px; color: var(--vg-muted); margin-top: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
@media (max-width: 800px) { .vg-page .vg-cases-grid { grid-template-columns: 1fr; } }

/* MID CTA */
.vg-midcta { text-align: center; padding: 48px 0 8px; }

/* TESTIMONIALS */
.vg-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vg-testimonial { padding: 32px 26px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-testimonial:hover { background: var(--vg-bg-3); }
.vg-testimonial:nth-child(3n) { border-right: none; }
.vg-testimonial:nth-last-child(-n+3) { border-bottom: none; }
.vg-testimonial-quote { font-family: var(--vg-serif); font-size: 16px; line-height: 1.55; color: var(--vg-ink); margin-bottom: 20px; font-style: italic; position: relative; }
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
.vg-inc p { font-size: 13px; color: var(--vg-ink-2); line-height: 1.55; }
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

/* LEAD MAGNET */
.vg-page .vg-magnet { background: var(--vg-bg-2); }
.vg-magnet-card { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; background: linear-gradient(135deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); border: 1px solid var(--vg-line); border-radius: 14px; padding: 44px; position: relative; overflow: hidden; }
.vg-magnet-card::before { content: ""; position: absolute; top: -80px; left: -80px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(129,140,248,0.12), transparent 70%); pointer-events: none; }
.vg-magnet-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 16px; }
.vg-magnet-title em { font-style: italic; color: var(--vg-accent); }
.vg-magnet-desc { font-size: 15px; color: var(--vg-ink-2); line-height: 1.6; margin-bottom: 20px; max-width: 520px; }
.vg-magnet-list { list-style: none; margin-bottom: 26px; }
.vg-magnet-list li { font-size: 14px; color: var(--vg-ink-2); padding: 6px 0; display: flex; align-items: flex-start; gap: 10px; }
.vg-magnet-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
.vg-magnet-note { margin-top: 14px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--vg-muted); }
.vg-magnet-visual { display: grid; place-items: center; }
.vg-magnet-pdf { width: 200px; aspect-ratio: 3/4; background: linear-gradient(160deg, #15244F, #080F28); border: 1px solid var(--vg-accent); border-radius: 10px; box-shadow: 0 30px 60px -25px rgba(129,140,248,0.5); display: flex; flex-direction: column; justify-content: flex-end; gap: 8px; padding: 22px; transform: rotate(-4deg); transition: transform .3s; }
.vg-magnet-pdf:hover { transform: rotate(0deg) translateY(-4px); }
.vg-magnet-pdf-tag { align-self: flex-start; position: absolute; top: 18px; left: 18px; font-family: var(--vg-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: var(--vg-bg); background: var(--vg-accent); padding: 4px 9px; border-radius: 4px; }
.vg-magnet-pdf { position: relative; }
.vg-magnet-pdf-title { font-family: var(--vg-serif); font-size: 20px; font-weight: 500; line-height: 1.15; color: var(--vg-ink); letter-spacing: -0.01em; }
.vg-magnet-pdf-sub { font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--vg-muted); }
@media (max-width: 800px) {
  .vg-page .vg-magnet-card { grid-template-columns: 1fr; gap: 32px; padding: 30px 22px; }
  .vg-page .vg-magnet-visual { order: -1; }
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
.vg-guarantee p { font-size: 16px; line-height: 1.6; color: var(--vg-ink-2); max-width: 600px; }
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
.vg-faq-a { font-size: 15px; color: var(--vg-ink-2); line-height: 1.6; padding-left: 28px; }

/* CTA FINAL */
.vg-page .vg-cta-final { background: var(--vg-bg); text-align: center; border: none; padding: 80px 0; }
.vg-cta-final-inner { max-width: 720px; margin: 0 auto; }
.vg-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(32px, 4.5vw, 56px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 20px; }
.vg-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vg-cta-final p { font-size: 17px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 28px; max-width: 580px; margin-left: auto; margin-right: auto; }
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

/* STICKY MOBILE CTA */
.vg-sticky { display: none; }
@media (max-width: 800px) {
  .vg-page { padding-bottom: 76px; }
  .vg-page .vg-sticky {
    display: flex; align-items: center; justify-content: space-between; gap: 14px;
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 60;
    background: rgba(8,15,40,0.96); backdrop-filter: blur(12px);
    border-top: 1px solid var(--vg-line); padding: 12px 18px;
  }
  .vg-page .vg-sticky-info { display: flex; flex-direction: column; }
  .vg-page .vg-sticky-info .vg-s1 { font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
  .vg-page .vg-sticky-info .vg-s2 { font-family: var(--vg-serif); font-size: 18px; font-weight: 500; color: var(--vg-accent); }
  .vg-page .vg-sticky a { padding: 13px 20px; font-size: 14px; }
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

export default function TargetKursiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vg-page">
        {/* ============ URGENCY BAR ============ */}
        <div className="vg-urgency">
          <div className="vg-container vg-urgency-inner">
            <span className="vg-urgency-pulse" aria-hidden="true" />
            <span className="vg-urgency-text">
              <strong>5.0 oqim ochiq</strong> — atigi <strong>7 joy</strong> qoldi · early-bird narx tez tugaydi
            </span>
            <a href="#yozilish" data-lead-open className="vg-urgency-cta">
              Joyni band qilish
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </a>
          </div>
        </div>

        <main>
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
                  <span>5.0 OQIM · 2026</span>
                </div>

                <div className="vg-hero-pre">Noldan professional targetologgacha — 2 oyda</div>

                <h1 className="vg-hero-headline">
                  Sifatsiz lidlar, natijasiz target kampaniyalar —{" "}
                  <em>sizda ham shundaymi?</em>
                </h1>

                <div className="vg-hero-meta">
                  <span className="vg-hero-meta-badge">META</span>
                  <span>
                    Meta mutaxassislaridan o&apos;rgangan{" "}
                    <strong>Performance Marketing</strong> tizimini — Target kursi.
                  </span>
                </div>

                <p className="vg-hero-sub">
                  Gap shundaki: bir oydan keyin reklamangiz butunlay boshqacha ishlay boshlaydi — xarajat o&apos;sha-o&apos;sha, lekin{" "}
                  <strong>lidlar sifati keskin oshgan</strong> va <strong>arzonlashgan</strong> holatda.
                </p>

                <div className="vg-hero-cta-row">
                  <a href="#yozilish" data-lead-open className="vg-btn-primary">
                    Joyimni band qilaman
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                  <a href="#lid-magnit" data-lead-open data-lead-mode="magnit" className="vg-btn-secondary">
                    Bepul strategiya (PDF)
                  </a>
                </div>

                <div className="vg-cta-note">
                  <span className="vg-cta-dot" /> 30 soniya · Majburiyatsiz · Atigi <strong>7 joy</strong> qoldi
                </div>

                <div className="vg-trustline">
                  ISFT · ZIYO YOG&apos;DUSI · TURON MED · MED EXPERT VA BOSHQA BIZNESLAR BILAN TAJRIBA
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
              <div className="vg-section-eyebrow">01 / Tanish holatmi?</div>
              <h2 className="vg-section-title">
                Lidlar qimmat, bundan ham yomoni — &laquo;men qoldirmadim&raquo;, puli yo&apos;q mijozlar. <em>Sifatsiz lidlar.</em>
              </h2>

              <div className="vg-plain-list">
                {problems.map((p, i) => (
                  <div key={i} className="vg-plain-row">
                    <span className="vg-plain-mark vg-plain-x">✕</span>
                    <p>{p}</p>
                  </div>
                ))}
              </div>

              <p className="vg-problem-bridge">
                Muammo shundaki: oldin qilganimizdek — auditoriya qiziqishlarini tanlab target yoqamiz, lid arzon bo&apos;lsa yaxshi, qimmat bo&apos;lsa o&apos;chirib qaytadan yoqamiz. <em>Bu yechim emas.</em> Biz &laquo;nega ishlamadi?&raquo; degan savolga javob topishimiz kerak.
              </p>
            </div>
          </section>

          {/* ============ AGITATION ============ */}
          <section className="vg-section vg-agitate" id="agitatsiya">
            <div className="vg-container">
              <div className="vg-section-eyebrow">02 / Ammo esda tuting</div>
              <h2 className="vg-section-title">
                Bu ketishda pul sarflaysiz — <em>natija esa yo&apos;q.</em>
              </h2>
              <p className="vg-section-lead">
                Oddiy haqiqat:
              </p>

              <div className="vg-plain-list">
                <div className="vg-plain-row">
                  <span className="vg-plain-mark vg-plain-x">✕</span>
                  <p>Yuqori qiymatli natija qila oladigan targetolog bo&apos;lmasangiz — bu raqobatda yutqazasiz.</p>
                </div>
              </div>

              <p className="vg-problem-bridge">
                Lekin yaxshi xabar bor:{" "}
                <em>buni bitta to&apos;g&apos;ri tizim bilan hal qilsa bo&apos;ladi.</em>
              </p>
            </div>
          </section>

          {/* ============ MECHANISM ============ */}
          <section className="vg-section" id="mexanizm">
            <div className="vg-container">
              <div className="vg-section-eyebrow">03 / Yechim</div>
              <h2 className="vg-section-title">
                Yaxshi xabar shuki — boshqacha <em>yechim</em> bor.
              </h2>
              <p className="vg-section-lead">
                Sirti oddiy: reklama tugmasini emas, sovuq mijozdan kassagacha bo&apos;lgan har bir qadamni boshqarishni o&apos;rganasiz. Mana farqi:
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
                <a href="#yozilish" data-lead-open className="vg-btn-primary">
                  Shu tizimni o&apos;rganmoqchiman
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* ============ AUDIENCE ============ */}
          <section className="vg-section" id="kimga">
            <div className="vg-container">
              <div className="vg-section-eyebrow">04 / Ushbu kursim kimlar uchun</div>
              <h2 className="vg-section-title">
                Mana shunday <em>odamlar</em> uchun.
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
              <div className="vg-section-eyebrow">05 / Format</div>
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
              <div className="vg-section-eyebrow">06 / Dastur</div>
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

          {/* ============ INSTRUCTOR ============ */}
          <section className="vg-section" id="ustoz">
            <div className="vg-container">
              <div className="vg-section-eyebrow">07 / Ustoz</div>
              <div className="vg-instructor">
                <div className="vg-instructor-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/001.avif" alt="Uchqun Turdiyev" />
                  <div className="vg-badge">
                    $80.000+
                    <strong>Boshqarilgan reklama byudjeti</strong>
                  </div>
                </div>
                <div>
                  <h2>
                    Uchqun Turdiyev — <em>Marketolog, Targetolog, Dasturchi.</em>
                  </h2>
                  <p>
                    Men o&apos;rgatadigan narsani har kuni <strong>o&apos;zim ishlataman</strong>. Bu kurs nazariyani emas, har kuni dalada sinaladigan amaliyotni beradi.
                  </p>
                  <p>
                    2025-yilda <strong>$80.000+ byudjet</strong> boshqardim. Maktab uchun $4,600 sarflab 250 o&apos;quvchi, institut uchun 3,500 mijoz jalb qildik. Tizim Meta mutaxassislari auditidan o&apos;tgan.
                  </p>
                  <p>
                    Target — Marketing — Dasturlash kombinatsiyasi uyg&apos;unlashgan kurs.
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

          {/* ============ TESTIMONIALS ============ */}
          <section className="vg-section">
            <div className="vg-container">
              <div className="vg-section-eyebrow">08 / Talabalar</div>
              <h2 className="vg-section-title">
                Bitiruvchilar <em>nima deydi?</em>
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
              <div className="vg-section-eyebrow">09 / Tarkibida</div>
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

          {/* ============ LEAD MAGNET ============ */}
          <section className="vg-section vg-magnet" id="lid-magnit">
            <div className="vg-container">
              <div className="vg-magnet-card">
                <div className="vg-magnet-left">
                  <div className="vg-section-eyebrow">10 / Hali tayyor emasmisiz?</div>
                  <h2 className="vg-magnet-title">
                    Avval <em>bepul</em> boshlang.
                  </h2>
                  <p className="vg-magnet-desc">
                    Yaxshi xabar shuki — bugun yozilishingiz shart emas. Real natija
                    keltiradigan birinchi qadamni hoziroq bepul oling: &laquo;2026-yilda
                    Meta mutaxassislari tavsiyasi&raquo; PDF&apos;ini telefoningizga
                    yuboramiz. Ko&apos;rib chiqasiz, sinab ko&apos;rasiz — keyin qaror qilasiz.
                  </p>
                  <ul className="vg-magnet-list">
                    <li>Advantage+ Audience</li>
                    <li>Meta AI auditoriyani qanday topishi</li>
                    <li>Landing Page View optimizatsiyasi</li>
                    <li>LAL auditoriya strategiyasi</li>
                  </ul>
                  <a href="#lid-magnit" data-lead-open data-lead-mode="magnit" className="vg-btn-primary">
                    Bepul PDF&apos;ni olish
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                  <div className="vg-magnet-note">Bepul · Sizga sovg&apos;a</div>
                </div>
                <div className="vg-magnet-visual" aria-hidden="true">
                  <div className="vg-magnet-pdf">
                    <span className="vg-magnet-pdf-tag">PDF</span>
                    <span className="vg-magnet-pdf-title">2026-yilda Meta mutaxassislari tavsiyasi</span>
                    <span className="vg-magnet-pdf-sub">Vision Group · Bepul qo&apos;llanma</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ PRICING ============ */}
          <section className="vg-section" id="narx">
            <div className="vg-container">
              <div className="vg-section-eyebrow">11 / Narx</div>
              <h2 className="vg-section-title">
                2 oylik kurs. <em>Bitta mijoz</em> — narxni qoplaydi.
              </h2>
              <p className="vg-section-lead">
                Oyma-oy bo&apos;lib to&apos;lash imkoniyati, 1 yillik dostup va 15 kunlik pulni qaytarish kafolati bilan.
              </p>

              <div className="vg-seats">
                <div className="vg-seats-top">
                  <span className="vg-seats-label">5.0 oqim to&apos;ldirilmoqda</span>
                  <span className="vg-seats-count"><strong>8 ta</strong> joy band qilindi</span>
                </div>
                <div className="vg-seats-track"><span className="vg-seats-fill" /></div>
                <div className="vg-seats-foot">Atigi <strong>7 joy</strong> qoldi — qabul yopilgach narx ko&apos;tariladi</div>
              </div>

              <div className="vg-price-solo">
                <div className="vg-price-badge">2 OYLIK KURS</div>

                <div className="vg-price-head">
                  <div>
                    <div className="vg-price-name">Noldan professional targetologgacha</div>
                    <div className="vg-price-old">9,600,000 so&apos;m</div>
                    <div className="vg-price-amount">
                      3,200,000 <span className="vg-price-per">so&apos;m / oy</span>
                    </div>
                    <div className="vg-price-currency">Jami 6,400,000 so&apos;m · 2 oy</div>
                  </div>
                  <div className="vg-price-save">
                    <span className="vg-price-save-num">−33%</span>
                    <span className="vg-price-save-lbl">Chegirma</span>
                  </div>
                </div>

                <ul className="vg-price-list">
                  {priceFeatures.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a href="#yozilish" data-lead-open className="vg-btn-primary vg-price-cta">
                  5.0 oqimga yozilish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
                <div className="vg-price-foot">Joylar cheklangan · Qabul yopilgach narx ko&apos;tariladi</div>
              </div>
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
                    Darslar sifatiga shubha qilsangiz —{" "}
                    <em>pulingiz to&apos;liq qaytadi.</em>
                  </h2>
                  <p>
                    Birinchi 14 kun ichida (taxminan 8 ta dars) kursda qolish o&apos;zingizning xohishingiz bo&apos;lishi kerak. Aks holda — to&apos;lovni hech qanday savolsiz qaytarib olasiz. Xavf to&apos;liq biznes tomonida.
                  </p>
                  <div className="vg-guarantee-sign">— Uchqun Turdiyev, Vision Group</div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section className="vg-section" id="faq">
            <div className="vg-container">
              <div className="vg-section-eyebrow">12 / Savol-javob</div>
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
                  Ammo esda tuting: joylar cheklangan va qabul tez yopiladi. Ikki maydonni
                  to&apos;ldiring — administrator 24 soat ichida bog&apos;lanadi.
                </p>

                <div className="vg-cd-eyebrow">
                  Qabul yopilishiga / <strong>early-bird narxga</strong> qoldi:
                </div>
                <CountdownTimer target="2026-06-30T00:00:00+05:00" />

                <div className="vg-cohort-info">
                  {cohort.map((c) => (
                    <div key={c.lbl} className="vg-cohort-cell">
                      <span className="vg-lbl">{c.lbl}</span>
                      <span className={`vg-val ${c.urgent ? "vg-urgent" : ""}`}>{c.val}</span>
                    </div>
                  ))}
                </div>

                <TargetKLidForm leadValue={3200000} />
              </div>
            </div>
          </section>
        </main>

        {/* ============ STICKY MOBILE CTA ============ */}
        <div className="vg-sticky">
          <div className="vg-sticky-info">
            <span className="vg-s1">2 oylik kurs · 1 yil dostup</span>
            <span className="vg-s2">3,200,000 so&apos;mdan</span>
          </div>
          <a href="#yozilish" data-lead-open className="vg-btn-primary">
            Joyni band qilish
          </a>
        </div>

        {/* ============ SOCIAL PROOF TOAST ============ */}
        <SocialProofToast count={2} />

        {/* ============ GLOBAL LEAD MODAL ============ */}
        <LeadModal />
      </div>
    </>
  );
}