/**
 * Vision Group — /web
 * Performance Marketing target kursi · Jeff Walker PLF uslubidagi SODDA sotuv sahifasi.
 * Hook → qisqa hikoya (kutish) → kuchli cheklangan taklif → bitta CTA + forma.
 * Dark navy + Indigo · target-kursi formasi.
 */

import { TargetKLidForm } from "@/components/comments/TargetKLidForm";

const includes = [
  "To'g'ri target yoqish: auditoriya, algoritm, byudjet",
  "Pixel + CAPI to'liq sozlash (iOS'ga chidamli)",
  "CAPI orqali CRM integratsiyasi — «TO'LOV QILDI» Meta'ga avtomatik",
  "Haftada 4 Zaps + 2 jonli Zoom dars",
  "1 yillik dostup + 24/7 Telegram support",
  "Real portfolio + birinchi mijozga yordam",
];

const styles = `
.vw-page {
  --bg: #080F28; --bg2: #0E1A3D; --bg3: #15244F;
  --ink: #fff; --ink2: rgba(255,255,255,0.82); --muted: rgba(255,255,255,0.55);
  --line: rgba(120,150,225,0.18); --acc: #818CF8; --acc2: #6366F1;
  --serif: 'Fraunces', Georgia, serif;
  --sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --mono: 'Geist Mono', ui-monospace, monospace;
  background: var(--bg); color: var(--ink); font-family: var(--sans);
  line-height: 1.55; -webkit-font-smoothing: antialiased; overflow-x: hidden;
  background-image:
    radial-gradient(900px 460px at 50% -14%, rgba(99,102,241,0.13), transparent 60%),
    radial-gradient(circle at 1px 1px, rgba(150,180,255,0.03) 1px, transparent 0);
  background-size: 100% 760px, 22px 22px;
  background-repeat: no-repeat, repeat;
}
.vw-page *, .vw-page *::before, .vw-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
.vw-page a { color: inherit; text-decoration: none; }
.vw-wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }

/* URGENCY */
.vw-urgency { background: linear-gradient(90deg, var(--acc2), var(--acc)); }
.vw-urgency-in { max-width: 1000px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 9px 24px; flex-wrap: wrap; }
.vw-urgency-in span { font-size: 13px; font-weight: 600; color: #0A0F2C; }
.vw-urgency-in a { font-size: 13px; font-weight: 700; color: #fff; background: #0A0F2C; padding: 6px 15px; border-radius: 999px; }

/* HERO — centered */
.vw-hero { text-align: center; padding: 72px 0 60px; }
.vw-eyebrow { display: inline-flex; align-items: center; gap: 9px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--acc); margin-bottom: 22px; }
.vw-eyebrow i { width: 8px; height: 8px; border-radius: 50%; background: var(--acc); display: inline-block; }
.vw-h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(36px, 5.4vw, 64px); line-height: 1.02; letter-spacing: -0.03em; margin: 0 auto 22px; max-width: 720px; }
.vw-h1 em { font-style: italic; color: var(--acc); }
.vw-sub { font-size: 18px; color: var(--ink2); line-height: 1.6; margin: 0 auto 30px; max-width: 560px; }
.vw-sub b { color: var(--ink); font-weight: 600; }
.vw-btn { display: inline-flex; align-items: center; gap: 9px; padding: 16px 30px; border-radius: 8px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all .2s; }
.vw-btn-primary { background: var(--acc); color: #0A0F2C; box-shadow: 0 16px 36px -12px rgba(129,140,248,0.6); }
.vw-btn-primary:hover { background: var(--acc2); color: #fff; transform: translateY(-1px); }
.vw-note { margin-top: 14px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.04em; color: var(--muted); }
.vw-note strong { color: var(--acc); }
.vw-trust { margin-top: 30px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; color: var(--muted); }

/* STORY */
.vw-story { padding: 56px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.vw-story p { font-size: 18px; line-height: 1.7; color: var(--ink2); margin-bottom: 18px; }
.vw-story p:last-child { margin-bottom: 0; }
.vw-story em { font-style: italic; color: var(--acc); font-family: var(--serif); }
.vw-story b { color: var(--ink); font-weight: 600; }

/* OFFER */
.vw-offer-sec { padding: 60px 0; text-align: center; }
.vw-offer-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--acc); margin-bottom: 14px; }
.vw-offer-title { font-family: var(--serif); font-weight: 400; font-size: clamp(28px, 4vw, 42px); letter-spacing: -0.025em; line-height: 1.06; margin-bottom: 30px; }
.vw-offer-title em { font-style: italic; color: var(--acc); }
.vw-card { text-align: left; background: linear-gradient(180deg, var(--bg3), var(--bg2)); border: 1px solid var(--line); border-radius: 16px; padding: 36px; box-shadow: 0 30px 70px -40px rgba(99,102,241,0.5); }
.vw-card-bar { height: 3px; border-radius: 999px; background: linear-gradient(90deg, var(--acc), var(--acc2)); margin: -36px -36px 26px; }
.vw-card ul { list-style: none; margin-bottom: 28px; }
.vw-card li { font-size: 15px; color: var(--ink2); padding: 9px 0; display: flex; gap: 11px; line-height: 1.5; border-bottom: 1px dashed var(--line); }
.vw-card li:last-child { border-bottom: none; }
.vw-card li::before { content: "✓"; color: var(--acc); font-weight: 700; flex-shrink: 0; }
.vw-price-row { display: flex; align-items: flex-end; gap: 14px; flex-wrap: wrap; padding-top: 22px; border-top: 1px solid var(--line); }
.vw-price-old { text-decoration: line-through; font-family: var(--mono); font-size: 14px; color: var(--muted); }
.vw-price-now { font-family: var(--serif); font-size: 46px; font-weight: 500; color: var(--acc); letter-spacing: -0.03em; line-height: 1; }
.vw-price-now small { font-family: var(--mono); font-size: 13px; color: var(--muted); letter-spacing: 0; }
.vw-price-meta { font-family: var(--mono); font-size: 12px; color: var(--ink2); margin-top: 6px; }
.vw-scarbox { margin: 22px 0; font-size: 14px; color: var(--ink2); background: rgba(129,140,248,0.1); border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; }
.vw-scarbox strong { color: var(--acc); }
.vw-card .vw-btn { width: 100%; justify-content: center; }
.vw-card-foot { text-align: center; font-family: var(--mono); font-size: 11px; color: var(--muted); margin-top: 14px; }

/* FORM */
.vw-form-sec { padding: 64px 0 80px; text-align: center; border-top: 1px solid var(--line); }
.vw-form-sec h2 { font-family: var(--serif); font-weight: 400; font-size: clamp(26px, 4vw, 40px); letter-spacing: -0.025em; line-height: 1.05; margin-bottom: 12px; }
.vw-form-sec h2 em { font-style: italic; color: var(--acc); }
.vw-form-sec > .vw-wrap > p { font-size: 16px; color: var(--ink2); max-width: 520px; margin: 0 auto 26px; }
`;

export default function WebLanding() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vw-page">
        {/* URGENCY */}
        <div className="vw-urgency">
          <div className="vw-urgency-in">
            <span><b style={{ fontWeight: 800 }}>5.0 oqim ochildi</b> — atigi 15 kishi olamiz</span>
            <a href="#ariza">Yozilish</a>
          </div>
        </div>

        {/* HERO — hook */}
        <section className="vw-hero">
          <div className="vw-wrap">
            <span className="vw-eyebrow"><i /> Performance Marketing · 5.0 oqim</span>
            <h1 className="vw-h1">
              Target yoqishni hamma biladi. <em>To&apos;g&apos;ri yoqishni</em> — kam kishi.
            </h1>
            <p className="vw-sub">
              2 oyda: to&apos;g&apos;ri target, Pixel + CAPI va CRM integratsiyasini real
              biznesda o&apos;rganasiz. <b>Reklama taxmin bilan emas — aniq signal bilan ishlaydi.</b>
            </p>
            <a href="#ariza" className="vw-btn vw-btn-primary">
              Joyimni band qilaman
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.7" /></svg>
            </a>
            <p className="vw-note">30 soniya · majburiyatsiz · atigi <strong>7 / 15 joy</strong> qoldi</p>
            <p className="vw-trust">ISFT · JAPAN SCHOOL · ZIYO YOG&apos;DUSI · TURON MED · MED EXPERT</p>
          </div>
        </section>

        {/* STORY — qisqa, kutish hosil qiluvchi */}
        <section className="vw-story">
          <div className="vw-wrap">
            <p>
              <em>Gap shundaki…</em> target yoqishni deyarli hamma biladi. Lekin reklama,
              algoritmga «kim sotib oldi» degan aniq signal bo&apos;lmasa, <b>ko&apos;r</b> ishlaydi —
              byudjet behuda yonadi.
            </p>
            <p>
              <em>Eng qizig&apos;i esa…</em> Pixel + CAPI server-eventlari va CRM integratsiyasi
              algoritmga aniq aytadi: «mana bu odam pul to&apos;ladi». Shundan keyin Meta xuddi
              shunday xaridorlarni <b>o&apos;zi qidirib topadi</b> — CPM tushadi, ROAS oshadi.
            </p>
            <p>
              <em>Yaxshi xabar shuki…</em> buni o&apos;zingiz yillab izlanib o&apos;rganishingiz shart
              emas. 2 oyda, Meta mutaxassislari auditidan o&apos;tgan tizim asosida, real biznesda
              o&apos;z qo&apos;lingiz bilan qurib o&apos;rganasiz.
            </p>
          </div>
        </section>

        {/* OFFER — kuchli, cheklangan */}
        <section className="vw-offer-sec" id="taklif">
          <div className="vw-wrap">
            <div className="vw-offer-eyebrow">Taklif</div>
            <h2 className="vw-offer-title">2 oyda — <em>noldan natijagacha.</em></h2>

            <div className="vw-card">
              <div className="vw-card-bar" />
              <ul>
                {includes.map((i) => (<li key={i}>{i}</li>))}
              </ul>

              <div className="vw-price-row">
                <div>
                  <div className="vw-price-old">9,600,000 so&apos;m</div>
                  <div className="vw-price-now">3,200,000 <small>so&apos;m / oy</small></div>
                  <div className="vw-price-meta">Jami 6,400,000 so&apos;m · 2 oy · bo&apos;lib to&apos;lash mumkin</div>
                </div>
              </div>

              <div className="vw-scarbox">
                <strong>Ammo esda tuting:</strong> 5.0 oqimga atigi <strong>15 kishi</strong> olamiz va
                bu narx faqat shu oqim uchun. Joylar to&apos;lgach — narx ko&apos;tariladi.
              </div>

              <a href="#ariza" className="vw-btn vw-btn-primary">Joyimni band qilaman</a>
              <div className="vw-card-foot">15 kunlik pulni qaytarish kafolati — xavf biz tomonda</div>
            </div>
          </div>
        </section>

        {/* CTA — forma */}
        <section className="vw-form-sec" id="ariza">
          <div className="vw-wrap">
            <h2>Bitta qadam — <em>boshlang.</em></h2>
            <p>Ism va telefon qoldiring — administrator 24 soat ichida bog&apos;lanib, hammasini tushuntiradi.</p>
            <TargetKLidForm
              leadValue={3200000}
              title={<>Kursga <span style={{ fontStyle: "italic", color: "#818CF8" }}>yozilish</span></>}
              subtitle={<>Ism va telefon — boshqa hech narsa kerak emas. Administrator <strong style={{ color: "#fff" }}>24 soat ichida</strong> bog&apos;lanadi.</>}
              ctaText="Joyimni band qilaman"
            />
          </div>
        </section>
      </div>
    </>
  );
}
