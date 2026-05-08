/**
 * Vision Group — Performance Marketing 3.0 Landing Page
 * Dark Blue + Yellow Theme | Compact & Fast Version
 * ============================================================
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
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
  { num: "12+", lbl: "Bizneslar" },
  { num: "4 yil", lbl: "Tajriba" },
];

const tickerItems = [
  "META AUDITDAN O'TGAN TIZIM",
  "100% PULNI QAYTARISH KAFOLATI",
  "JONLI ZOOM DARSLAR",
  "AI INTEGRATION",
  "REAL PORTFOLIO",
  "SERTIFIKAT",
];

const months = [
  {
    num: "1-OY",
    title: "Texnik Targetolog",
    desc: "Meta Ads kabineti, piksel sozlash, AI yordamida tezkor sayt yasash.",
    skills: [
      "Meta Ads Pro: algoritm va auditoriya",
      "AI Integration: samaradorlik",
      "Birinchi reklama kompaniyasi",
      "Mijoz auditi va qizil chiziq",
      "Meta mutaxassislari tavsiyasi asosida pro texnikalar",
      "Yangi biznes $1000 boshqarish strategiyasi",
    ],
  },
  {
    num: "2-OY",
    title: "Kontent Targetolog",
    desc: "Rad etib bo'lmas takliflar, sotadigan kontent va copywriting.",
    skills: [
      "Hook & Offer yaratish",
      "Sotadigan kontent va kreativlar",
      "Copywriting texnikasi",
      "AI orqali sayt yasash",
      "Piksel, CAPI to'liq sozlash web sitega ulash",
      "Web site lidlarni, telegram bot va CRM ga yo'naltirish"
    ],
  },
  {
    num: "3-OY",
    title: "Strategik Targetolog",
    desc: "Performance Marketing: 0 dan to'lovgacha to'liq voronka va analitika.",
    skills: [
      "Performance Marketing",
      "To'liq funnel qurish",
      "Deep Analytics",
      "Test → Optimizatsiya → Scaling",
      "Lead magnit strategiyasi",
      "ROAS optimizatsiyasi",
      "Real biznes audit va portfolio",
    ],
  },
];

const credentials = [
  { yr: "2022", text: '"Shogirdlar 4.0" va Marketing kursi bitiruvchisi' },
  { yr: "2024", text: "Xayot Sharapovdan target mentorship" },
  { yr: "2025", text: "Meta mutaxassislari bilan hamkorlik" },
  { yr: "2025", text: "$80,000+ ad spend, ROAS 82×, 3,500+ o'quvchi" },
  { yr: "2026", text: "Vision Group IV oqim" },
];

const cases = [
  {
    tag: "KAYS 01 / Ta'lim",
    num: "3,500",
    small: " o'quvchi",
    desc: "ISFT Institute Samarqand uchun target kampaniyasi. Auditoriya segmentatsiyasi orqali rekord natija.",
    meta: "2025 / 6 oy",
  },
  {
    tag: "KAYS 02 / Maktab",
    num: "$4600",
    small: " → 250",
    desc: "Bitta maktabga atigi $4600 byudjet bilan 250 o'quvchi olindi.",
    meta: "2025 / 2 oy",
  },
  {
    tag: "KAYS 03 / ROAS",
    num: "82×",
    small: " qaytim",
    desc: "Har $1 reklama uchun o'rtacha $82 tushum. LTV hisobiga 1:412 ROAS.",
    meta: "2025 / Yillik",
  },
];

const testimonials = [
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
  {
    initials: "MA",
    name: "Maxmudov Akmal",
    role: "Targetolog · III oqim",
    quote: "Ustoz erinmasdan ingliz va rus tilida ham ko'rsatib berdi. Bunaqa xarakterli bo'lish hammani qo'lidan kelmaydi.",
  },
  {
    initials: "ShS",
    name: "Shahnoza S.",
    role: "Marketolog · III oqim",
    quote: "3 yildan beri target ishliman, lekin bugungi dars bomba. Hali xech narsani bilmas ekanman.",
  },
  {
    initials: "Y",
    name: "Yulduzxon",
    role: "Targetolog · III oqim",
    quote: "Sizni kursingizgacha o'zimni zo'r targetolog deb o'ylardim. Tanlab adashmabman.",
  },
  {
    initials: "S",
    name: "Sora",
    role: "Targetolog · III oqim",
    quote: "Audit qilib berganingizda ancha xatolarimi bilib oldim. Rahmat!",
  },
];

const includedItems = [
  { num: "i.", title: "36 jonli Zoom darsi", desc: "Haftada 3 marta interaktiv mashg'ulot." },
  { num: "ii.", title: "24/7 individual support", desc: "Telegram orqali ustozning shaxsiy yordami." },
  { num: "iii.", title: "AI Integration", desc: "Samaradorlikni 3-5 baravar oshirasiz." },
  { num: "iv.", title: "Real portfolio", desc: "Haqiqiy biznes uchun reklama yoqasiz." },
  { num: "v.", title: "Ish topish", desc: "Ish olish texnikalari." },
  { num: "vi.", title: "Yopiq community", desc: "Bitiruvchilar networking tarmog'i." },
  { num: "vii.", title: "Abadiy materiallar", desc: "Barcha video va shablonlar umrbod." },
  { num: "viii.", title: "30 kunlik kafolat", desc: "Pulni 100% qaytarish imkoniyati." },
];

const tiers = [
  {
    name: "Boshlovchi",
    tagline: "Guruhda o'rganib, mustaqil ishga kirishish",
    oldPrice: "1,470,000 so'm",
    price: "970,000",
    currency: "SO'M / TO'LIQ KURS",
    featured: false,
    features: [
      { text: "16 jonli Zoom darsi", included: true },
      { text: "Guruhda support", included: true },
      { text: "Materiallar abadiy", included: true },
      { text: "Sertifikat", included: true },
      { text: "15 kunlik kafolat", included: true },
      { text: "Individual mentoring", included: false },
    ],
  },
  {
    name: "Standart",
    tagline: "Eng yaxshi narx-sifat. Target o'zlashtirish.",
    oldPrice: "1,970,000 so'm",
    price: "1,470,000",
    currency: "SO'M / TO'LIQ KURS",
    featured: true,
    features: [
      { text: "Boshlovchi tarif hammasi", included: true },
      { text: "36 jonli Zoom darsi", included: true },
      { text: "Haftada 1 marta maslahat", included: true },
      { text: "Real portfolio", included: true },
      { text: "Yopiq community", included: true },
      { text: "Birinchi mijoz mentor", included: true },
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
      { text: "Standart tarif hammasi", included: true },
      { text: "Haftada 3 marta 1-on-1", included: true },
      { text: "Reklama kabineti audit", included: true },
      { text: "3 mijoz topishga yordam", included: true },
      { text: "Lifetime support 1 yil", included: true },
      { text: "VIP Telegram chat", included: true },
    ],
  },
];

const cohort = [
  { lbl: "Oqim", val: "IV · 2026", urgent: false },
  { lbl: "Boshlanishi", val: "15-may", urgent: false },
  { lbl: "Format", val: "Online / Zoom", urgent: false },
  { lbl: "Qoldi", val: "7 / 15 joy", urgent: true },
];

// ============ STYLES (scoped under .vg-page) ============

const styles = `
.vg-page {
  --vg-bg: #050B2B;
  --vg-bg-2: #07113a;
  --vg-bg-3: #0A1547;
  --vg-ink: #FFFFFF;
  --vg-ink-2: rgba(255,255,255,0.75);
  --vg-muted: rgba(255,255,255,0.5);
  --vg-line: rgba(255,255,255,0.12);
  --vg-line-2: rgba(255,255,255,0.06);
  --vg-accent: #FCD34D;
  --vg-accent-2: #FBBF24;
  --vg-paper: #07113a;

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
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0);
  background-size: 24px 24px;
  scroll-behavior: smooth;
}
.vg-page *, .vg-page *::before, .vg-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vg-page a { color: inherit; text-decoration: none; }

.vg-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

/* HERO */
.vg-page .vg-hero { padding: 60px 0 70px; border-bottom: 1px solid var(--vg-line); position: relative; }
.vg-hero-eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 28px; flex-wrap: wrap; }
.vg-hero-eyebrow::before { content: ""; width: 32px; height: 1px; background: var(--vg-accent); }
.vg-hero-headline { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(38px, 6.5vw, 80px); line-height: 0.98; letter-spacing: -0.035em; margin-bottom: 24px; font-variation-settings: "opsz" 144; }
.vg-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vg-hero-headline .vg-strike { position: relative; display: inline-block; }
.vg-hero-headline .vg-strike::after { content: ""; position: absolute; left: -2%; right: -2%; top: 52%; height: 4px; background: var(--vg-accent); transform: rotate(-3deg); }
.vg-hero-sub { font-size: 17px; line-height: 1.55; color: var(--vg-ink-2); max-width: 640px; margin-bottom: 36px; }
.vg-hero-sub strong { font-weight: 600; color: var(--vg-ink); }
.vg-hero-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 44px; }

.vg-btn-primary { background: var(--vg-accent); color: var(--vg-bg); padding: 16px 28px; border-radius: 4px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all .2s; font-family: var(--vg-sans); }
.vg-btn-primary:hover { background: var(--vg-accent-2); transform: translateY(-1px); box-shadow: 0 10px 25px -10px rgba(252,211,77,0.4); }
.vg-btn-primary svg { transition: transform .2s; }
.vg-btn-primary:hover svg { transform: translateX(4px); }
.vg-btn-secondary { padding: 16px 28px; border: 1px solid var(--vg-line); border-radius: 4px; font-size: 15px; font-weight: 500; background: transparent; color: var(--vg-ink); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; font-family: var(--vg-sans); }
.vg-btn-secondary:hover { background: var(--vg-bg-2); border-color: var(--vg-accent); }

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
.vg-ticker-track { display: flex; gap: 40px; animation: vg-scroll 35s linear infinite; white-space: nowrap; font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; }
.vg-ticker-track span { display: flex; align-items: center; gap: 12px; }
.vg-ticker-track .vg-dot { color: var(--vg-bg); }
@keyframes vg-scroll { to { transform: translateX(-50%); } }

/* SECTIONS */
.vg-page .vg-section { padding: 70px 0; border-bottom: 1px solid var(--vg-line); }
.vg-section-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
.vg-section-eyebrow::before { content: "§"; font-family: var(--vg-serif); font-size: 16px; color: var(--vg-ink); }
.vg-section-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(30px, 4.5vw, 52px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 20px; max-width: 860px; }
.vg-section-title em { font-style: italic; color: var(--vg-accent); }
.vg-section-lead { font-size: 17px; color: var(--vg-ink-2); max-width: 680px; line-height: 1.55; margin-bottom: 48px; }

/* CURRICULUM */
.vg-curriculum-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-2); border-radius: 8px; overflow: hidden; }
.vg-month { padding: 36px 28px; border-right: 1px solid var(--vg-line); position: relative; transition: background .2s; }
.vg-month:hover { background: var(--vg-bg-3); }
.vg-month:last-child { border-right: none; }
.vg-month-num { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
.vg-month-num::before { content: ""; width: 20px; height: 1px; background: var(--vg-accent); }
.vg-month-title { font-family: var(--vg-serif); font-size: 28px; font-weight: 500; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 18px; }
.vg-month-title em { font-style: italic; color: var(--vg-accent); }
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
.vg-instructor-photo .vg-badge { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(5,11,43,0.92); backdrop-filter: blur(8px); color: var(--vg-ink); padding: 14px 18px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; z-index: 2; border: 1px solid var(--vg-line); border-radius: 4px; }
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
.vg-inc { padding: 26px; display: flex; gap: 18px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); transition: background .2s; }
.vg-inc:hover { background: var(--vg-bg-3); }
.vg-inc:nth-child(2n) { border-right: none; }
.vg-inc:nth-last-child(-n+2) { border-bottom: none; }
.vg-inc-num { font-family: var(--vg-serif); font-style: italic; font-size: 26px; font-weight: 500; color: var(--vg-accent); flex-shrink: 0; width: 36px; }
.vg-inc h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 18px; margin-bottom: 6px; letter-spacing: -0.01em; color: var(--vg-ink); }
.vg-inc p { font-size: 13px; color: var(--vg-ink-2); line-height: 1.55; }
@media (max-width: 800px) {
  .vg-page .vg-included-grid { grid-template-columns: 1fr; }
  .vg-page .vg-inc { border-right: none !important; }
}

/* PRICING */
.vg-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-2); border-radius: 8px; overflow: hidden; }
.vg-tier { padding: 40px 30px; border-right: 1px solid var(--vg-line); position: relative; display: flex; flex-direction: column; }
.vg-tier:last-child { border-right: none; }
.vg-tier.vg-featured { background: linear-gradient(180deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); }
.vg-tier-badge { position: absolute; top: 0; right: 0; background: var(--vg-accent); color: var(--vg-bg); padding: 6px 14px; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; }
.vg-tier h3 { font-family: var(--vg-serif); font-size: 24px; font-weight: 500; letter-spacing: -0.02em; margin-bottom: 6px; color: var(--vg-ink); }
.vg-tier-tagline { font-size: 13px; color: var(--vg-muted); margin-bottom: 28px; min-height: 36px; }
.vg-price-old { text-decoration: line-through; font-family: var(--vg-mono); font-size: 12px; color: var(--vg-muted); margin-bottom: 6px; }
.vg-price-amount { font-family: var(--vg-serif); font-size: 46px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; color: var(--vg-accent); }
.vg-price-currency { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-muted); margin-bottom: 22px; letter-spacing: 0.05em; }
.vg-tier ul { list-style: none; margin: 20px 0 28px; flex-grow: 1; }
.vg-tier ul li { padding: 9px 0; font-size: 13px; border-bottom: 1px dashed var(--vg-line); display: flex; gap: 10px; color: var(--vg-ink-2); }
.vg-tier ul li::before { content: "→"; color: var(--vg-accent); font-weight: 600; }
.vg-tier ul li.vg-no::before { content: "—"; color: var(--vg-muted); opacity: 0.5; }
.vg-tier ul li.vg-no { color: var(--vg-muted); opacity: 0.5; }
.vg-tier .vg-btn-primary { width: 100%; justify-content: center; }
@media (max-width: 900px) {
  .vg-page .vg-pricing { grid-template-columns: 1fr; }
  .vg-page .vg-tier { border-right: none; border-bottom: 1px solid var(--vg-line); }
  .vg-page .vg-tier:last-child { border-bottom: none; }
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

/* CTA FINAL */
.vg-page .vg-cta-final { background: var(--vg-bg-2); text-align: center; border: none; padding: 80px 0; }
.vg-cta-final-inner { max-width: 720px; margin: 0 auto; }
.vg-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(32px, 4.5vw, 56px); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 20px; }
.vg-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vg-cta-final p { font-size: 17px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 36px; max-width: 580px; margin-left: auto; margin-right: auto; }
.vg-cohort-info { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--vg-line); background: var(--vg-bg-3); margin-bottom: 36px; border-radius: 8px; overflow: hidden; }
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

/* ANIMATIONS */
@keyframes vg-fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.vg-page .vg-hero-headline, .vg-page .vg-hero-sub, .vg-page .vg-hero-cta-row, .vg-page .vg-hero-stats { animation: vg-fadeUp .6s ease-out backwards; }
.vg-page .vg-hero-sub { animation-delay: .08s; }
.vg-page .vg-hero-cta-row { animation-delay: .16s; }
.vg-page .vg-hero-stats { animation-delay: .24s; }
`;

// ============ COMPONENT ============

export default function TargetKursiPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vg-page">
        <main>
          {/* ============ HERO ============ */}
          <section className="vg-hero">
            <div className="vg-container">
              <div className="vg-hero-eyebrow">
                <span>VISION GROUP</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>PERFORMANCE MARKETING </span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>2026 — IV oqim</span>
              </div>

              <h1 className="vg-hero-headline">
                Reklama <span className="vg-strike">yoqishni</span> emas,{" "}
                <em>natija qilishni</em> o&apos;rganasiz.
              </h1>

              <p className="vg-hero-sub">
                <strong>$100,000+ reklama byudjetini boshqargan</strong> va Meta mutaxassislari auditidan o&apos;tgan tizim asosida{" "}
                <strong>3 oylik intensiv Zoom-kursi</strong>. Yuqori daromadli{" "}
                <strong>strategik mutaxassisga</strong> aylanasiz.
              </p>

              <div className="vg-hero-cta-row">
                <a href="#yozilish" className="vg-btn-primary">
                  IV oqimga yozilish
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
                <a href="#narx" className="vg-btn-secondary">
                  Narxlarni ko&apos;rish
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
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i}>
                  <span className="vg-dot">●</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* ============ CURRICULUM ============ */}
          <section className="vg-section" id="dastur">
            <div className="vg-container">
              <div className="vg-section-eyebrow">01 / Dastur</div>
              <h2 className="vg-section-title">
                3 oy. <em>Uch bosqich.</em> Bitta tizim.
              </h2>
              <p className="vg-section-lead">
                Har oy oldingisi ustiga quriladi. Texnik fundament → sotadigan kontent → strategik tizim.
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
              <div className="vg-section-eyebrow">02 / Ustoz</div>
              <div className="vg-instructor">
                <div className="vg-instructor-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/001.avif" alt="Uchqun Turdiyev" />
                  <div className="vg-badge">
                    $100,000+
                    <strong>Boshqarilgan reklama byudjeti</strong>
                  </div>
                </div>
                <div>
                  <h2>
                    Uchqun Turdiyev — <em>Marketolog, Targetolog, Dasturchi.</em>
                  </h2>
                  <p>
                    <strong>4 yillik tajribam</strong> va xalqaro <strong>Meta mutaxassislaridan</strong> olgan bilimlarim asosida sizni yuqori daromadli strategga aylantiraman.
                  </p>
                  <p>
                    Mehriniso Nurullayevnaning &quot;Shogirdlar 4.0&quot; bitiruvchisiman. 2025-yilda <strong>$80,000 byudjet</strong> boshqardim. Maktab uchun $4600 sarflab 250 o&apos;quvchi, institut uchun 3,500 o&apos;quvchi jalb qildik.
                  </p>
                  <p>
                    Meta mutaxassislari oyiga 3 marta auditim — bu tizim sinov va auditdan o&apos;tgan.
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

          {/* ============ CASES ============ */}
          <section className="vg-section" id="natija">
            <div className="vg-container">
              <div className="vg-section-eyebrow">03 / Real keyslar</div>
              <h2 className="vg-section-title">
                Raqamlar — <em>haqiqiy bizneslar</em>
              </h2>
              <p className="vg-section-lead">
                Yuqorida ko&apos;rsatilgan natijalar — kurs ustozining real mijozlari uchun olib borgan kampaniyalari.
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
              <div className="vg-section-eyebrow">04 / Talabalar</div>
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
              <div className="vg-section-eyebrow">05 / Tarkibida</div>
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
              <div className="vg-section-eyebrow">06 / Narxlar</div>
              <h2 className="vg-section-title">
                Uch tarif. <em>Sizga moslashadi.</em>
              </h2>
              <p className="vg-section-lead">
                Bo&apos;lib to&apos;lash imkoniyati barcha tariflarda mavjud (3 oy, 0% ustama).
              </p>

              <div className="vg-pricing">
                {tiers.map((tier) => (
                  <div key={tier.name} className={`vg-tier ${tier.featured ? "vg-featured" : ""}`}>
                    {tier.featured && <div className="vg-tier-badge">Ko&apos;p tanlanadi</div>}
                    <h3>{tier.name}</h3>
                    <div className="vg-tier-tagline">{tier.tagline}</div>
                    <div className="vg-price-old">{tier.oldPrice}</div>
                    <div className="vg-price-amount">{tier.price}</div>
                    <div className="vg-price-currency">{tier.currency}</div>
                    <ul>
                      {tier.features.map((f) => (
                        <li key={f.text} className={f.included ? "" : "vg-no"}>
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
                    <em>pulingiz to&apos;liq qaytariladi.</em>
                  </h2>
                  <p>
                    Birinchi 14 kun ichida (taxminan 6 ta dars) kursda qolish o&apos;zingizning xohishingiz bo&apos;lishi kerak. Aks holda — to&apos;lovni hech qanday savolsiz qaytarib olasiz.
                  </p>
                  <div className="vg-guarantee-sign">— Uchqun Turdiyev, Vision Group</div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ CTA FINAL ============ */}
          <section className="vg-cta-final" id="yozilish">
            <div className="vg-container">
              <div className="vg-cta-final-inner">
                <div className="vg-section-eyebrow" style={{ justifyContent: "center" }}>
                  07 / Yozilish
                </div>
                <h2>
                  Joyingizni <em>band qiling.</em>
                </h2>
                <p>
                  IV oqim cheklangan — har oqimga 15 tadan ko&apos;p o&apos;quvchi olmaymiz. Konsultatsiya tekin.
                </p>

                <div className="vg-cohort-info">
                  {cohort.map((c) => (
                    <div key={c.lbl} className="vg-cohort-cell">
                      <span className="vg-lbl">{c.lbl}</span>
                      <span className={`vg-val ${c.urgent ? "vg-urgent" : ""}`}>{c.val}</span>
                    </div>
                  ))}
                </div>

                <TargetKLidForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}