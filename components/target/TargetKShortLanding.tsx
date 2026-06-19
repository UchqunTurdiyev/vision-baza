/**
 * Vision Group — Performance Marketing target kursi (/target-k)
 * Qisqa, fokuslangan sotuv sahifasi. Dizayn tizimi target-kursi sahifasi
 * (RapidLaunchLanding.tsx) bilan bir xil — rang, shrift, klasslar, forma.
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
import { SocialProofToast } from "@/components/comments/Socialprooftoast";
import LeadModal from "@/components/target/LeadModal";

const audience = [
  {
    tag: "01",
    title: "Targetni endi o'rganayotganlar",
    desc: "Oldindan bilim shart emas — fundamentdan boshlab, real ishlaydigan tizimgacha qadam-baqadam o'rganasiz.",
  },
  {
    tag: "02",
    title: "Biznes egalari",
    desc: "Reklamani birovga ishonib byudjetni behuda sarflashni to'xtatib, jarayonni o'zingiz nazorat qilishni o'rganasiz.",
  },
];

const skills = [
  "Meta mutaxassislari tomonidan o'rgatilgan texnikalar",
  "Meta bilan CRM integratsiyasi",
  "Mijoz rad eta olmaydigan kuchli taklif (offer) yaratish",
  "Sotuv saytlarini (landing page) yasash",
  "Sotadigan copywriting",
  "Sovuq mijozdan kassagacha bo'lgan to'liq tizim",
];

const format = [
  { num: "i.", title: "Haftada 2 video dars", desc: "Zapis tarzida yuboriladi — o'z vaqtingizda ko'rib, qayta mustahkamlaysiz." },
  { num: "ii.", title: "Haftada 2 jonli dars", desc: "Savol-javob va amaliyot bilan boyitilgan jonli dars jarayoni." },
  { num: "iii.", title: "2 oylik dastur", desc: "0 dan professional Performance Marketing mutaxassisigacha bosqichma-bosqich." },
  { num: "iv.", title: "2 bo'lib to'lash", desc: "6 400 000 so'mni 2 oyga bo'lib to'lash imkoniyati — moliyaviy yuk yengillashadi." },
];

const faqs = [
  {
    q: "Targetdan umuman bilmasam, qiyin bo'lmaydimi?",
    a: "Yo'q. Kurs 0 dan boshlanadi va fundamentdan boshlab o'rgatadi. Kompyuter bilan ishlay olsangiz, yetarli.",
  },
  {
    q: "To'lovni bo'lib to'lasa bo'ladimi?",
    a: "Ha, 6 400 000 so'mni 2 bo'lib to'lash imkoniyati mavjud.",
  },
  {
    q: "Kursdan keyin nima qila olaman?",
    a: "Sovuq mijozdan kassagacha bo'lgan to'liq tizimni mustaqil qura olasiz: target, CRM integratsiya, taklif, sotuv sayti va copywriting.",
  },
];

const styles = `
.vgk-page {
  --vg-bg: #080F28;
  --vg-bg-2: #0E1A3D;
  --vg-bg-3: #15244F;
  --vg-ink: #FFFFFF;
  --vg-ink-2: rgba(255,255,255,0.76);
  --vg-muted: rgba(255,255,255,0.5);
  --vg-line: rgba(120,150,225,0.16);
  --vg-accent: #818CF8;
  --vg-accent-2: #6366F1;

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
  background-image:
    radial-gradient(900px 460px at 50% -16%, rgba(99,102,241,0.12), transparent 60%),
    radial-gradient(circle at 1px 1px, rgba(150,180,255,0.035) 1px, transparent 0);
  background-size: 100% 720px, 22px 22px;
  background-repeat: no-repeat, repeat;
  scroll-behavior: smooth;
}
.vgk-page *, .vgk-page *::before, .vgk-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vgk-page a { color: inherit; text-decoration: none; }
.vgk-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

.vgk-page .vgk-urgency { background: linear-gradient(90deg, var(--vg-accent-2), var(--vg-accent)); }
.vgk-urgency-inner { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 9px 24px; flex-wrap: wrap; }
.vgk-urgency-text { font-size: 13px; font-weight: 500; color: #0A0F2C; }
.vgk-urgency-text strong { font-weight: 800; }
.vgk-urgency-cta { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: #fff; background: #0A0F2C; padding: 7px 16px; border-radius: 999px; }

.vgk-page .vgk-hero { padding: 60px 0 70px; border-bottom: 1px solid var(--vg-line); position: relative; overflow: hidden; }
.vgk-hero-eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 28px; flex-wrap: wrap; }
.vgk-hero-eyebrow::before { content: ""; width: 32px; height: 1px; background: var(--vg-accent); }
.vgk-hero-headline { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(36px, 6vw, 70px); line-height: 1.02; letter-spacing: -0.03em; margin-bottom: 24px; max-width: 920px; }
.vgk-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vgk-hero-sub { font-size: 17px; line-height: 1.6; color: var(--vg-ink-2); max-width: 660px; margin-bottom: 36px; }
.vgk-hero-sub strong { font-weight: 600; color: var(--vg-ink); }
.vgk-hero-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 18px; }

.vgk-btn-primary { background: var(--vg-accent); color: var(--vg-bg); padding: 16px 28px; border-radius: 6px; font-size: 15px; font-weight: 700; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; font-family: var(--vg-sans); box-shadow: 0 12px 30px -12px rgba(129,140,248,0.5); }
.vgk-btn-secondary { padding: 16px 28px; border: 1px solid var(--vg-line); border-radius: 6px; font-size: 15px; font-weight: 500; background: transparent; color: var(--vg-ink); display: inline-flex; align-items: center; gap: 8px; font-family: var(--vg-sans); }

.vgk-page .vgk-section { padding: 70px 0; border-bottom: 1px solid var(--vg-line); }
.vgk-section-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 20px; }
.vgk-section-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(28px, 4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; margin-bottom: 20px; max-width: 860px; }
.vgk-section-title em { font-style: italic; color: var(--vg-accent); }
.vgk-section-lead { font-size: 16px; color: var(--vg-ink-2); max-width: 700px; line-height: 1.6; margin-bottom: 44px; }

.vgk-aud-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.vgk-aud { background: var(--vg-bg-2); border: 1px solid var(--vg-line); border-radius: 8px; padding: 28px 26px; }
.vgk-aud-tag { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-accent); letter-spacing: 0.1em; margin-bottom: 16px; }
.vgk-aud h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 21px; letter-spacing: -0.02em; margin-bottom: 10px; }
.vgk-aud p { font-size: 14px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) { .vgk-page .vgk-aud-grid { grid-template-columns: 1fr; } }

.vgk-skills-list { list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 28px; border: 1px solid var(--vg-line); border-radius: 8px; background: var(--vg-bg-2); padding: 28px; }
.vgk-skills-list li { font-size: 14.5px; color: var(--vg-ink-2); display: flex; gap: 10px; line-height: 1.5; }
.vgk-skills-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
@media (max-width: 700px) { .vgk-skills-list { grid-template-columns: 1fr; } }

.vgk-format-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vgk-fmt { padding: 28px 26px; display: flex; gap: 16px; border-right: 1px solid var(--vg-line); border-bottom: 1px solid var(--vg-line); background: var(--vg-bg-2); }
.vgk-fmt:nth-child(2n) { border-right: none; }
.vgk-fmt:nth-last-child(-n+2) { border-bottom: none; }
.vgk-fmt-num { font-family: var(--vg-serif); font-style: italic; font-size: 26px; font-weight: 500; color: var(--vg-accent); flex-shrink: 0; width: 38px; }
.vgk-fmt h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 18px; margin-bottom: 8px; letter-spacing: -0.01em; }
.vgk-fmt p { font-size: 13.5px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) { .vgk-format-grid { grid-template-columns: 1fr; } .vgk-fmt { border-right: none !important; } }

.vgk-page .vgk-price-solo { position: relative; max-width: 640px; background: linear-gradient(180deg, var(--vg-bg-3) 0%, var(--vg-bg-2) 100%); border: 1px solid var(--vg-line); border-radius: 14px; padding: 38px 34px; overflow: hidden; box-shadow: 0 30px 70px -40px rgba(129,140,248,0.45); }
.vgk-page .vgk-price-solo::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--vg-accent), var(--vg-accent-2)); }
.vgk-price-badge { display: inline-block; font-family: var(--vg-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--vg-bg); background: var(--vg-accent); padding: 6px 12px; border-radius: 4px; margin-bottom: 22px; }
.vgk-price-name { font-family: var(--vg-serif); font-size: 19px; font-weight: 500; letter-spacing: -0.01em; color: var(--vg-ink); margin-bottom: 14px; max-width: 320px; line-height: 1.2; }
.vgk-price-amount { font-family: var(--vg-serif); font-size: 48px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; color: var(--vg-accent); margin-bottom: 8px; }
.vgk-price-per { font-family: var(--vg-mono); font-size: 14px; color: var(--vg-muted); }
.vgk-price-currency { font-family: var(--vg-mono); font-size: 12px; color: var(--vg-ink-2); letter-spacing: 0.04em; margin-bottom: 24px; }
.vgk-price-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 22px; margin-bottom: 28px; }
.vgk-price-list li { font-size: 13.5px; color: var(--vg-ink-2); display: flex; align-items: flex-start; gap: 9px; line-height: 1.45; }
.vgk-price-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
.vgk-page .vgk-price-cta { width: 100%; justify-content: center; font-size: 16px; padding: 17px 28px; }
.vgk-price-foot { text-align: center; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.04em; color: var(--vg-muted); margin-top: 16px; }
@media (max-width: 640px) { .vgk-page .vgk-price-solo { padding: 28px 22px; } .vgk-price-list { grid-template-columns: 1fr; } }

.vgk-faq-list { border-top: 1px solid var(--vg-line); }
.vgk-faq-item { border-bottom: 1px solid var(--vg-line); padding: 22px 0; }
.vgk-faq-q { font-family: var(--vg-serif); font-size: 18px; font-weight: 500; letter-spacing: -0.01em; margin-bottom: 10px; display: flex; gap: 14px; }
.vgk-faq-q::before { content: "?"; font-family: var(--vg-serif); font-style: italic; color: var(--vg-accent); }
.vgk-faq-a { font-size: 14.5px; color: var(--vg-ink-2); line-height: 1.6; padding-left: 28px; }

.vgk-page .vgk-cta-final { background: var(--vg-bg); text-align: center; border: none; padding: 80px 0; }
.vgk-cta-final-inner { max-width: 720px; margin: 0 auto; }
.vgk-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.08; letter-spacing: -0.025em; margin-bottom: 20px; }
.vgk-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vgk-cta-final p { font-size: 16px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 34px; max-width: 580px; margin-left: auto; margin-right: auto; }

.vgk-sticky { display: none; }
@media (max-width: 800px) {
  .vgk-page { padding-bottom: 76px; }
  .vgk-page .vgk-sticky { display: flex; align-items: center; justify-content: space-between; gap: 14px; position: fixed; left: 0; right: 0; bottom: 0; z-index: 60; background: rgba(8,15,40,0.96); backdrop-filter: blur(12px); border-top: 1px solid var(--vg-line); padding: 12px 18px; }
  .vgk-page .vgk-sticky-info { display: flex; flex-direction: column; }
  .vgk-page .vgk-sticky-info .vgk-s1 { font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
  .vgk-page .vgk-sticky-info .vgk-s2 { font-family: var(--vg-serif); font-size: 18px; font-weight: 500; color: var(--vg-accent); }
  .vgk-page .vgk-sticky a { padding: 13px 20px; font-size: 14px; }
}
`;

export default function TargetKShortLanding() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vgk-page">
        <div className="vgk-urgency">
          <div className="vgk-container vgk-urgency-inner">
            <span className="vgk-urgency-text">
              <strong>Performance Marketing kursi</strong> — joylar cheklangan
            </span>
            <a href="#yozilish" data-lead-open className="vgk-urgency-cta">
              Joyni band qilish
            </a>
          </div>
        </div>

        <main>
          {/* HERO */}
          <section className="vgk-hero">
            <div className="vgk-container">
              <div className="vgk-hero-eyebrow">
                <span>VISION GROUP</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>PERFORMANCE MARKETING</span>
              </div>

              <h1 className="vgk-hero-headline">
                Sovuq mijozdan <em>kassagacha</em> bo&apos;lgan butun jarayonni qura olasiz.
              </h1>

              <p className="vgk-hero-sub">
                Targetni endi o&apos;rganayotganlar va o&apos;z biznesini o&apos;zi boshqarmoqchi
                bo&apos;lgan biznes egalari uchun. <strong>2 oylik</strong> amaliy kurs — Meta
                mutaxassislari tomonidan o&apos;rgatilgan texnikalar asosida.
              </p>

              <div className="vgk-hero-cta-row">
                <a href="#yozilish" data-lead-open className="vgk-btn-primary">
                  Joyimni band qilaman
                </a>
                <a href="#narx" className="vgk-btn-secondary">
                  Narxni ko&apos;rish
                </a>
              </div>
            </div>
          </section>

          {/* AUDIENCE */}
          <section className="vgk-section" id="kimga">
            <div className="vgk-container">
              <div className="vgk-section-eyebrow">01 / Kimlar uchun</div>
              <h2 className="vgk-section-title">
                Aniq <em>ikki toifa</em> uchun qurilgan.
              </h2>
              <div className="vgk-aud-grid">
                {audience.map((a) => (
                  <div key={a.tag} className="vgk-aud">
                    <div className="vgk-aud-tag">{a.tag}</div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="vgk-section" id="natija">
            <div className="vgk-container">
              <div className="vgk-section-eyebrow">02 / Kurs tugagach</div>
              <h2 className="vgk-section-title">
                Nimalarga <em>erishasiz?</em>
              </h2>
              <p className="vgk-section-lead">
                Kurs tugatib, Performance Marketing mutaxassisi bo&apos;lasiz:
              </p>
              <ul className="vgk-skills-list">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* FORMAT */}
          <section className="vgk-section" id="format">
            <div className="vgk-container">
              <div className="vgk-section-eyebrow">03 / Format</div>
              <h2 className="vgk-section-title">
                2 oy. <em>Aniq tartib.</em>
              </h2>
              <div className="vgk-format-grid">
                {format.map((f) => (
                  <div key={f.title} className="vgk-fmt">
                    <div className="vgk-fmt-num">{f.num}</div>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section className="vgk-section" id="narx">
            <div className="vgk-container">
              <div className="vgk-section-eyebrow">04 / Narx</div>
              <h2 className="vgk-section-title">
                2 oylik kurs. <em>Bitta mijoz</em> — narxni qoplaydi.
              </h2>

              <div className="vgk-price-solo">
                <div className="vgk-price-badge">2 OYLIK KURS</div>
                <div className="vgk-price-name">Performance Marketing — Target kursi</div>
                <div className="vgk-price-amount">
                  3 200 000 <span className="vgk-price-per">so&apos;m / oy</span>
                </div>
                <div className="vgk-price-currency">Jami 6 400 000 so&apos;m · 2 bo&apos;lib to&apos;lash mumkin</div>

                <ul className="vgk-price-list">
                  <li>Haftada 2 video dars (zapis)</li>
                  <li>Haftada 2 jonli dars</li>
                  <li>Meta mutaxassislari texnikalari</li>
                  <li>CRM integratsiyasi amaliyoti</li>
                  <li>Sotuv sayti va copywriting</li>
                  <li>2 bo&apos;lib to&apos;lash imkoniyati</li>
                </ul>

                <a href="#yozilish" data-lead-open className="vgk-btn-primary vgk-price-cta">
                  Kursga yozilish
                </a>
                <div className="vgk-price-foot">Joylar cheklangan</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="vgk-section" id="faq">
            <div className="vgk-container">
              <div className="vgk-section-eyebrow">05 / Savol-javob</div>
              <h2 className="vgk-section-title">
                Oxirgi <em>shubhalaringiz</em>
              </h2>
              <div className="vgk-faq-list">
                {faqs.map((f) => (
                  <div key={f.q} className="vgk-faq-item">
                    <div className="vgk-faq-q">{f.q}</div>
                    <div className="vgk-faq-a">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA FINAL + FORM */}
          <section className="vgk-cta-final" id="yozilish">
            <div className="vgk-container">
              <div className="vgk-cta-final-inner">
                <div className="vgk-section-eyebrow" style={{ justifyContent: "center" }}>
                  06 / Yozilish
                </div>
                <h2>
                  Sovuq mijozdan <em>kassagacha</em> — endi siz quring.
                </h2>
                <p>
                  Ism va telefon raqamingizni qoldiring — administrator 24 soat ichida
                  bog&apos;lanadi. Hech narsaga majbur emassiz.
                </p>

                <TargetKLidForm leadValue={3200000} />
              </div>
            </div>
          </section>
        </main>

        {/* STICKY MOBILE CTA */}
        <div className="vgk-sticky">
          <div className="vgk-sticky-info">
            <span className="vgk-s1">2 oylik kurs</span>
            <span className="vgk-s2">3 200 000 so&apos;mdan</span>
          </div>
          <a href="#yozilish" data-lead-open className="vgk-btn-primary">
            Joyni band qilish
          </a>
        </div>

        <SocialProofToast count={2} />
        <LeadModal />
      </div>
    </>
  );
}
