/**
 * Vision Group — "CAPI nima va nega kerak?" sahifasi (/target-capi)
 * PASO copywriting formulasi: Problem → Agitate → Solution → Outcome
 * Dizayn tizimi target-kursi / target-k sahifalari bilan bir xil. Forma — bir xil.
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";
import { SocialProofToast } from "@/components/comments/Socialprooftoast";
import LeadModal from "@/components/target/LeadModal";

const problems = [
  "Meta Pixel faqat saytdagi harakatni ko'radi — kim haqiqatan to'lov qilgani, kim qaytib kelmagani haqida tasavvuri yo'q.",
  "iOS yangilanishlari va brauzer cheklovlari (cookie, ad-blocker) sababli Pixel ko'pchilik mijoz harakatini umuman ko'rmaydi.",
  "Natijada Meta «kim sotib oladi»ni emas, «kim sahifani ochdi»ni o'rganadi — bu esa sifatsiz, qimmat lidlarga olib keladi.",
];

const agitate = [
  {
    num: "01",
    title: "Pul behuda ketadi",
    desc: "Algoritm noto'g'ri auditoriyaga o'rgangani uchun byudjetingiz sotib olmaydigan odamlarga sarflanadi.",
  },
  {
    num: "02",
    title: "Mijoz yo'qotasiz",
    desc: "Meta ko'ra olmagan har bir haqiqiy xaridor — algoritm uchun yo'q hisoblanadi. Eng qiymatli mijozlaringiz statistikadan tushib qoladi.",
  },
  {
    num: "03",
    title: "Lid sifati tushadi",
    desc: "CAPI bo'lmasa, Meta «qiziquvchilar»ni «xaridorlar»dan ajrata olmaydi va shu sifatsiz auditoriyani ko'paytirishda davom etadi.",
  },
];

const solutionSteps = [
  {
    num: "01",
    title: "CAPI nima?",
    desc: "Conversions API — saytingiz yoki CRM'ingizdan to'g'ridan-to'g'ri serverga, Meta'ga ma'lumot yuboradigan texnologiya. Pixel faqat brauzerdan ko'rsa, CAPI buni server orqali, cheklovlarsiz yuboradi.",
  },
  {
    num: "02",
    title: "CRM bilan integratsiya",
    desc: "Lid CRM'ga tushgandan keyin, sotuv bosqichlari (lid → bog'lanildi → sotib oldi) avtomatik Meta'ga CAPI orqali yuboriladi — hech qanday qo'lda ishlovsiz.",
  },
  {
    num: "03",
    title: "Sotib olgan mijozni qanday ko'rsatamiz?",
    desc: "Mijoz to'lov qilgan zahoti, uning eventi (Purchase) qiymati bilan birga Meta'ga yuboriladi. Meta endi aniq biladi: \"shu odam sotib oldi, unga o'xshaganlarni top\".",
  },
];

const outcomes = [
  "Lidlar sezilarli arzonlashadi — algoritm endi to'g'ri auditoriyani qidiradi.",
  "Reklama faqat sizning ashaddiy mijozlaringizga o'xshagan auditoriyaga ko'rina boshlaydi.",
  "Sifatsiz, \"qiziquvchi-lekin-sotib-olmaydigan\" lid muammosidan butkul xalos bo'lasiz.",
  "Meta algoritmi to'liq kuchda ishlay boshlaydi — chunki uni to'g'ri ma'lumot bilan ta'minlaysiz.",
];

const styles = `
.vgc-page {
  --vg-bg: #080F28; --vg-bg-2: #0E1A3D; --vg-bg-3: #15244F;
  --vg-ink: #FFFFFF; --vg-ink-2: rgba(255,255,255,0.76); --vg-muted: rgba(255,255,255,0.5);
  --vg-line: rgba(120,150,225,0.16); --vg-accent: #818CF8; --vg-accent-2: #6366F1;
  --vg-serif: 'Fraunces', Georgia, serif; --vg-sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; --vg-mono: 'Geist Mono', ui-monospace, monospace;
  font-family: var(--vg-sans); background: var(--vg-bg); color: var(--vg-ink); line-height: 1.5; font-size: 16px; overflow-x: hidden; -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(900px 460px at 50% -16%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(circle at 1px 1px, rgba(150,180,255,0.035) 1px, transparent 0);
  background-size: 100% 720px, 22px 22px; background-repeat: no-repeat, repeat; scroll-behavior: smooth;
}
.vgc-page *, .vgc-page *::before, .vgc-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vgc-page a { color: inherit; text-decoration: none; }
.vgc-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

.vgc-page .vgc-urgency { background: linear-gradient(90deg, var(--vg-accent-2), var(--vg-accent)); }
.vgc-urgency-inner { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 9px 24px; flex-wrap: wrap; }
.vgc-urgency-text { font-size: 13px; font-weight: 500; color: #0A0F2C; }
.vgc-urgency-text strong { font-weight: 800; }
.vgc-urgency-cta { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: #fff; background: #0A0F2C; padding: 7px 16px; border-radius: 999px; }

.vgc-page .vgc-hero { padding: 60px 0 70px; border-bottom: 1px solid var(--vg-line); position: relative; overflow: hidden; }
.vgc-hero-eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-muted); margin-bottom: 28px; flex-wrap: wrap; }
.vgc-hero-eyebrow::before { content: ""; width: 32px; height: 1px; background: var(--vg-accent); }
.vgc-hero-headline { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(34px, 5.6vw, 64px); line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 24px; max-width: 920px; }
.vgc-hero-headline em { font-style: italic; font-weight: 500; color: var(--vg-accent); }
.vgc-hero-sub { font-size: 17px; line-height: 1.6; color: var(--vg-ink-2); max-width: 680px; margin-bottom: 36px; }
.vgc-hero-sub strong { font-weight: 600; color: var(--vg-ink); }
.vgc-hero-cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }

.vgc-btn-primary { background: var(--vg-accent); color: var(--vg-bg); padding: 16px 28px; border-radius: 6px; font-size: 15px; font-weight: 700; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; font-family: var(--vg-sans); box-shadow: 0 12px 30px -12px rgba(129,140,248,0.5); }
.vgc-btn-secondary { padding: 16px 28px; border: 1px solid var(--vg-line); border-radius: 6px; font-size: 15px; font-weight: 500; background: transparent; color: var(--vg-ink); display: inline-flex; align-items: center; gap: 8px; font-family: var(--vg-sans); }

.vgc-page .vgc-section { padding: 70px 0; border-bottom: 1px solid var(--vg-line); }
.vgc-section-eyebrow { font-family: var(--vg-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vg-accent); margin-bottom: 20px; }
.vgc-section-title { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(28px, 4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; margin-bottom: 20px; max-width: 860px; }
.vgc-section-title em { font-style: italic; color: var(--vg-accent); }
.vgc-section-lead { font-size: 16px; color: var(--vg-ink-2); max-width: 700px; line-height: 1.6; margin-bottom: 44px; }

/* PROBLEM */
.vgc-page .vgc-problem { background: var(--vg-bg-2); }
.vgc-problem-list { display: flex; flex-direction: column; gap: 14px; }
.vgc-prob { display: flex; gap: 16px; padding: 22px 24px; background: var(--vg-bg); border: 1px solid var(--vg-line); border-radius: 8px; }
.vgc-prob-x { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; border: 1px solid rgba(239,68,68,0.6); color: #F87171; display: grid; place-items: center; font-size: 13px; font-weight: 700; }
.vgc-prob p { font-size: 15px; line-height: 1.6; color: var(--vg-ink-2); }

/* AGITATE */
.vgc-agitate-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.vgc-agitate-card { background: var(--vg-bg); border: 1px solid rgba(239,68,68,0.28); border-radius: 8px; padding: 26px 22px; position: relative; overflow: hidden; }
.vgc-agitate-card::before { content: ""; position: absolute; top: 0; left: 0; bottom: 0; width: 3px; background: #EF4444; opacity: 0.7; }
.vgc-agitate-num { font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.12em; color: #F87171; margin-bottom: 12px; }
.vgc-agitate-card h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 19px; margin-bottom: 10px; }
.vgc-agitate-card p { font-size: 13.5px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 800px) { .vgc-agitate-grid { grid-template-columns: 1fr; } }

/* SOLUTION (mechanism) */
.vgc-mech-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--vg-line); border-radius: 8px; overflow: hidden; }
.vgc-mech { padding: 30px 26px; border-right: 1px solid var(--vg-line); background: var(--vg-bg-2); }
.vgc-mech:last-child { border-right: none; }
.vgc-mech-num { font-family: var(--vg-mono); font-size: 12px; letter-spacing: 0.12em; color: var(--vg-accent); margin-bottom: 14px; }
.vgc-mech h3 { font-family: var(--vg-serif); font-weight: 500; font-size: 20px; letter-spacing: -0.02em; margin-bottom: 12px; }
.vgc-mech p { font-size: 13.5px; color: var(--vg-ink-2); line-height: 1.6; }
@media (max-width: 900px) { .vgc-mech-grid { grid-template-columns: 1fr; } .vgc-mech { border-right: none !important; border-bottom: 1px solid var(--vg-line); } .vgc-mech:last-child { border-bottom: none; } }

/* OUTCOME */
.vgc-page .vgc-outcome { background: linear-gradient(180deg, var(--vg-bg) 0%, var(--vg-bg-2) 100%); }
.vgc-outcome-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.vgc-outcome-list li { display: flex; gap: 12px; font-size: 15px; color: var(--vg-ink-2); line-height: 1.55; padding: 18px 20px; background: var(--vg-bg); border: 1px solid var(--vg-line); border-radius: 8px; }
.vgc-outcome-list li::before { content: "✓"; color: var(--vg-accent); font-weight: 700; flex-shrink: 0; }
@media (max-width: 800px) { .vgc-outcome-list { grid-template-columns: 1fr; } }

/* AI NOTE CARD */
.vgc-ai-card { display: flex; gap: 22px; align-items: flex-start; background: var(--vg-bg-2); border: 1px solid var(--vg-line); border-radius: 10px; padding: 28px 26px; margin-top: 36px; }
.vgc-ai-badge { flex-shrink: 0; font-family: var(--vg-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: var(--vg-bg); background: var(--vg-accent); padding: 8px 12px; border-radius: 6px; }
.vgc-ai-card p { font-size: 14.5px; color: var(--vg-ink-2); line-height: 1.6; }
.vgc-ai-card p strong { color: var(--vg-ink); }

.vgc-page .vgc-cta-final { background: var(--vg-bg); text-align: center; border: none; padding: 80px 0; }
.vgc-cta-final-inner { max-width: 720px; margin: 0 auto; }
.vgc-cta-final h2 { font-family: var(--vg-serif); font-weight: 400; font-size: clamp(30px, 4vw, 48px); line-height: 1.08; letter-spacing: -0.025em; margin-bottom: 20px; }
.vgc-cta-final h2 em { font-style: italic; color: var(--vg-accent); }
.vgc-cta-final p { font-size: 16px; color: var(--vg-ink-2); line-height: 1.55; margin-bottom: 34px; max-width: 580px; margin-left: auto; margin-right: auto; }

.vgc-sticky { display: none; }
@media (max-width: 800px) {
  .vgc-page { padding-bottom: 76px; }
  .vgc-page .vgc-sticky { display: flex; align-items: center; justify-content: space-between; gap: 14px; position: fixed; left: 0; right: 0; bottom: 0; z-index: 60; background: rgba(8,15,40,0.96); backdrop-filter: blur(12px); border-top: 1px solid var(--vg-line); padding: 12px 18px; }
  .vgc-page .vgc-sticky-info { display: flex; flex-direction: column; }
  .vgc-page .vgc-sticky-info .vgc-s1 { font-family: var(--vg-mono); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--vg-muted); }
  .vgc-page .vgc-sticky-info .vgc-s2 { font-family: var(--vg-serif); font-size: 18px; font-weight: 500; color: var(--vg-accent); }
  .vgc-page .vgc-sticky a { padding: 13px 20px; font-size: 14px; }
}
`;

export default function TargetCapiLanding() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vgc-page">
        <div className="vgc-urgency">
          <div className="vgc-container vgc-urgency-inner">
            <span className="vgc-urgency-text">
              <strong>CAPI bo&apos;lmasa</strong> — har bir lid sizga qimmatga tushadi
            </span>
            <a href="#yozilish" data-lead-open className="vgc-urgency-cta">
              Tizimni o&apos;rganaman
            </a>
          </div>
        </div>

        <main>
          {/* HERO */}
          <section className="vgc-hero">
            <div className="vgc-container">
              <div className="vgc-hero-eyebrow">
                <span>VISION GROUP</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span>META CAPI</span>
              </div>

              <h1 className="vgc-hero-headline">
                Meta Pixel <em>mijozlarni ko&apos;rmaydi.</em> Shu sababli lidlaringiz qimmat va sifatsiz.
              </h1>

              <p className="vgc-hero-sub">
                Pixel cheklovlari sababli Meta sizning haqiqiy xaridorlaringizning ko&apos;pini
                umuman <strong>ko&apos;rmaydi</strong>. Natijada algoritm noto&apos;g&apos;ri
                auditoriyaga o&apos;rganadi va siz ko&apos;p mijoz yo&apos;qotasiz. Yechim —{" "}
                <strong>CAPI (Conversions API)</strong> orqali Meta&apos;ga to&apos;g&apos;ri
                ma&apos;lumot berish.
              </p>

              <div className="vgc-hero-cta-row">
                <a href="#yozilish" data-lead-open className="vgc-btn-primary">
                  Tizimni o&apos;rganaman
                </a>
                <a href="#capi" className="vgc-btn-secondary">
                  CAPI nima — batafsil
                </a>
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <section className="vgc-section vgc-problem" id="muammo">
            <div className="vgc-container">
              <div className="vgc-section-eyebrow">01 / Muammo</div>
              <h2 className="vgc-section-title">
                Nega lidlar <em>qimmat va sifatsiz</em> bo&apos;lib qoladi?
              </h2>
              <p className="vgc-section-lead">
                Javob ko&apos;pchilik o&apos;ylaganidan oddiyroq: muammo kreativda emas, Meta&apos;ning
                mijozlaringiz haqida <em>to&apos;liq ma&apos;lumotga ega emasligida.</em>
              </p>

              <div className="vgc-problem-list">
                {problems.map((p, i) => (
                  <div key={i} className="vgc-prob">
                    <div className="vgc-prob-x">✕</div>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AGITATE */}
          <section className="vgc-section" id="oqibat">
            <div className="vgc-container">
              <div className="vgc-section-eyebrow">02 / Oqibati</div>
              <h2 className="vgc-section-title">
                CAPI&apos;ni qo&apos;llamasangiz — <em>nima yo&apos;qotasiz?</em>
              </h2>
              <p className="vgc-section-lead">
                Bu shunchaki texnik kamchilik emas. Har kuni byudjet va mijoz hisobida real yo&apos;qotish.
              </p>

              <div className="vgc-agitate-grid">
                {agitate.map((a) => (
                  <div key={a.num} className="vgc-agitate-card">
                    <div className="vgc-agitate-num">{a.num}</div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOLUTION */}
          <section className="vgc-section" id="capi">
            <div className="vgc-container">
              <div className="vgc-section-eyebrow">03 / Yechim</div>
              <h2 className="vgc-section-title">
                CAPI va CRM integratsiyasi — <em>qanday ishlaydi?</em>
              </h2>
              <p className="vgc-section-lead">
                Pixel o&apos;rniga (yoki unga qo&apos;shimcha) server darajasida ishlaydigan tizim
                qurib, Meta&apos;ga to&apos;g&apos;ri ma&apos;lumot beramiz.
              </p>

              <div className="vgc-mech-grid">
                {solutionSteps.map((s) => (
                  <div key={s.num} className="vgc-mech">
                    <div className="vgc-mech-num">{s.num}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="vgc-ai-card">
                <span className="vgc-ai-badge">AI</span>
                <p>
                  Bu tizimni qurish uchun dasturchi shart emas — <strong>sun&apos;iy intellekt
                  bilan ishlash ko&apos;nikmasi</strong> kifoya. To&apos;g&apos;ri yo&apos;naltirilgan
                  AI yordamida CRM↔Meta CAPI integratsiyasini <strong>o&apos;zingiz qura olasiz.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* OUTCOME */}
          <section className="vgc-section vgc-outcome" id="natija">
            <div className="vgc-container">
              <div className="vgc-section-eyebrow">04 / Natija</div>
              <h2 className="vgc-section-title">
                To&apos;g&apos;ri sozlangach — <em>nimalarga erishasiz?</em>
              </h2>

              <ul className="vgc-outcome-list">
                {outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA FINAL + FORM */}
          <section className="vgc-cta-final" id="yozilish">
            <div className="vgc-container">
              <div className="vgc-cta-final-inner">
                <div className="vgc-section-eyebrow" style={{ justifyContent: "center" }}>
                  05 / Yozilish
                </div>
                <h2>
                  Bu tizimni <em>o&apos;zingiz qurishni</em> o&apos;rganing.
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
        <div className="vgc-sticky">
          <div className="vgc-sticky-info">
            <span className="vgc-s1">Meta CAPI tizimi</span>
            <span className="vgc-s2">Lidlarni arzonlashtiring</span>
          </div>
          <a href="#yozilish" data-lead-open className="vgc-btn-primary">
            Joyni band qilish
          </a>
        </div>

        <SocialProofToast count={2} />
        <LeadModal />
      </div>
    </>
  );
}
