
import { HeroPhoto } from "../comments/HeroPhoto";
import { TargetKursLeadForm } from "../comments/TargetKursLeadForm";
// import Otzif from "../Otziflar/otzif";
import MetaImageZoom from "../comments/ImageZoom";
import { PartnersCarousel } from "./PartnersCarousel";
import Link from "next/link";
import TargetKursiAudienceSwitch from "./TargetKursiAudienceSwitch";

export const metadata = {
  title: "Target Kursi — Vision Group",
  description: "Target kursi uchun minimal premium landing. Dark blue + sariq CTA.",
};



export default function TargetKursiPage() {
  return (
    <main className=" bg-[#050B2B] text-white p-3">
      {/* <GlobalMarqueeStyles /> */}
      {/* <BackgroundAccents /> */}

      {/* HERO: siz yuborganiga o‘xshash, lekin premium minimal */}
      <section className="mx-auto max-w-[920px]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-4">
          {/* small top row */}
          <div className="flex items-center justify-between">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/65">
    Vision Group • Target kursi • Performance Marketing
  </p>
          </div>

          {/* image */}
          <div className="mt-4 overflow-hidden lg:hidden rounded-[22px] border border-white/10 bg-[#07113a]">
              <HeroPhoto />
          </div>

          {/* headline */}
          <h1 className="my-5 text-[26px] font-extrabold leading-tight">
          Qanday qilib men sevimli usulim orqali  <span className="text-yellow-300">mijozlarimga yuqori daromad olib keladigan natijalar bilan ta’minladim</span>.
          </h1>
          <a
              href="#register"
              className="rounded-2xl italic  text-sm font-semibold text-blue-500 "
            >
              <button className="border border-blue-300 w-full md:w-56 rounded-xl cursor-pointer hover:text-amber-200 hover:border-amber-300 h-10">
              Mutaxassis maslaxatini olish
              </button>
            </a>
          <p className="mt-4 text-md leading-relaxed text-white/75">
          Meta mutaxassislaridan o&apos;rgangan real tizimni o‘rganing.
          </p>

          {/* CTA */}
          <div className="mt-5">
            
            
         
          </div>
        </div>

    
      </section>

      <section id="dastur" className="mx-auto max-w-[920px] px-4 pt-12">

      <TargetKursiAudienceSwitch />

</section>

      {/* DASTUR */}
      <section id="dastur" className="mx-auto max-w-[920px] px-4 pt-12">
  <h2 className="text-2xl font-extrabold md:text-3xl">
    Kursda siz quyidagi bilimlarni o‘rganasiz:
  </h2>

  <ul className="mt-6 space-y-3 text-lg text-white/80">
    <li>• Targetni 0 dan boshlab <b className="text-white">professional darajada</b> yoqish</li>
    <li>• Target ishlash algoritmlari <span className="text-white/70">(Meta qanday o‘ylaydi va reklama kimga chiqadi)</span></li>
    <li>• Kodlar orqali <b className="text-white">sun’iy intellekt</b> yordamida tezkor web-saytlar yaratish</li>
    <li>• Tilda platformasida <b className="text-white">sotuvga mos</b> sayt yasash</li>
    <li>• Copywriting — <b className="text-white">sotuv postlari</b> yozish texnikalari</li>
    <li>• Offer — <b className="text-white">kuchli taklif</b> yaratish metodikasi</li>
    <li>• Target strategiyasi <span className="text-white/70">(test → optimizatsiya → scale)</span></li>
    <li>• Lead magnet — <b className="text-white">bepul qiymat</b> orqali mijoz jalb qilish</li>
    <li>• Voronka (funnel) — reklama → lid → <b className="text-white">sotuv tizimi</b></li>
    <li>• Performance Marketing — <b className="text-white">natijaga ishlaydigan</b> marketing modeli</li>
    <li>• Ish topish ko‘nikmasi — <b className="text-white">portfolio, real case va bozorga chiqish</b></li>
  </ul>

  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
    <p className="text-base font-extrabold text-yellow-300">
      🔥 SIZ 3 OY DAVOMIDA USHBU BILIMLARNI TO‘LIQ O‘ZLASHTIRASIZ
    </p>
    <p className="mt-2 text-lg text-white/80">
      Va shunchaki <b>“target yoqishni”</b> emas, balki{" "}
      <b className="text-white">Mijozingiz sotuvlarini oshirib ulardan boshlang&apos;ich daromadingiz</b>{" "}
      $700 bilan boshlanadigan doimiy daromadga ega bo&apos;lasiz
    </p>
  </div>
</section>


      {/* MEN HAQIMDA */}
  <section id="men" className="mx-auto max-w-[920px] px-4 pt-12">
  <div className="flex items-end justify-between gap-6">
    <div>
      <h2 className="text-2xl font-extrabold md:text-3xl">Nega menga ishonishingiz kerak</h2>
    </div>

    <a
      href="#register"
      className="hidden rounded-2xl bg-yellow-300 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-200 md:inline-flex"
    >
      Kursni hoziroq boshlash
    </a>
  </div>

  <div className="mt-6 grid gap-4 md:grid-cols-2 md:items-start">
    {/* TEXT */}
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-2xl font-extrabold leading-snug">
        Men <span className="text-yellow-300">Uchqun Turdiyev</span> — Marketolog, Targetolog, Dasturchi.
      </h3>

      <p className="mt-3 text-lg leading-relaxed text-white/75">
        Target bo‘yicha <b className="text-white">bilimlarimni Xayot Sharapov va Meta mutaxassislarini o&apos;zidan</b> bilim olganman.
        So‘nggi <b className="text-white">3 yildan beri</b> marketing va target yo‘nalishida faol ishlayman.
      </p>

      <p className="mt-3 text-lg leading-relaxed text-white/75">
        Mehriniso Nurullayevnadan <span className="text-yellow-300 font-semibold">“Shogirtlar 4.0”</span> va{" "}
        <span className="text-yellow-300 font-semibold">Marketing</span> kursini bitirganman.
        Ushbu 3 yil davomida <b className="text-white">yirik loyihalar</b> va <b className="text-white">bizneslar</b> bilan ishladim.
      </p>

      <p className="mt-3 text-lg leading-relaxed text-white/75">
        <span className="text-yellow-300 font-semibold">2025-yilda</span> umumiy{" "}
        <span className="text-yellow-300 font-extrabold">$80 000</span> reklama byudjetini boshqardim.
        Maktab uchun <b className="text-white">$460 ga 250 ta</b> o‘quvchi, institut uchun esa{" "}
        <b className="text-white">3500 ta</b> o‘quvchi jalb qildik.
      </p>

      <p className="mt-3 text-lg leading-relaxed text-white/75">
        Shuningdek, Meta mutaxassislari tomonidan targetimga{" "}
        <span className="text-yellow-300 font-semibold">oyiga 3 martagacha</span> audit o&apos;tkazib keldim.
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-[#06103a] p-4">
        <div className="text-md font-semibold">
          Natijalar: <span className="text-yellow-300">ROAS</span>
        </div>

        <ul className="mt-3 space-y-2 text-md text-white/80">
          <li className="flex gap-2">
            <span className="text-yellow-300">•</span>
            <span>
              Har sarflangan <b className="text-white">$1</b> reklama uchun o‘rtacha{" "}
              <b className="text-white">$82</b> tushum (ROAS ≈{" "} → Bir mijozning LTV si 1$ uchun $328 qaytyapti.
              <span className="text-yellow-300 font-extrabold">82x</span>).
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-yellow-300">•</span>
            <span>
              2 biznesda: <b className="text-white">$1</b> reklama →{" "}
              <b className="text-white">$68</b> tushum (ROAS ≈{" "} → Bir mijozning LTV si 1$ uchun 410$ qaytyapti.
              <span className="text-yellow-300 font-extrabold">68x</span>).
            </span>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-lg leading-relaxed text-white/75">
      <span className="text-yellow-300 font-semibold"> Mutaxassislik darajasiga erishish uchun Meta kompaniyasi
      mutaxassislaridan</span>  bilim oldim va hozir ham ular bilan hamkorlikda faoliyat yuritib kelmoqdaman.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href="#register"
          className="flex h-11 w-full items-center justify-center rounded-2xl bg-yellow-300 text-lg font-semibold text-black hover:bg-yellow-200 sm:w-auto sm:px-6"
        >
          Mening joyimni band qilish
        </a>

      </div>
    </div>

    {/* WIDE IMAGE */}
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
    <MetaImageZoom />


      <div className="border-t border-white/10 bg-[#050B2B]/50 px-5 py-4">
        <div className="text-sm font-semibold">Uchqun Turdiyev</div>
        <div className="mt-1 text-xs text-white/70">
           Targetolog •  Marketolog • Dasturchi 
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mx-auto my-3 max-w-[920px] text-blue-500 italic text-lg">
   <Link href={'/otzif'}>Biz bilan ishlagan va bizda o&apos;qigan o&apos;quvchilarimiz shaxsiy fikirlari</Link>
</section>


<section className="mx-auto my-3 max-w-[920px]">
<PartnersCarousel />
</section>


<section className="mx-auto max-w-[920px] ">
{/* <Otzif /> */}

<div className="my-3" id="register">

            <TargetKursLeadForm />
</div>


</section>


  

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050B2B]/90 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="text-xs text-white/70">
            Target Kursi •
          </div>
          <a href="#register" className="rounded-xl bg-yellow-300 px-4 py-2 text-md font-semibold text-black">
          Mening joyimni band qilish
          </a>
        </div>
      </div>
    </main>
  );
}

/* ---------- Helpers / UI ---------- */

// function BackgroundAccents() {
//   return (
//     <div className="pointer-events-none fixed inset-0 opacity-35">
//       <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
//       <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
//     </div>
//   );
// }


// /* Marquee CSS: autoplay logo carousel */
// function GlobalMarqueeStyles() {
//   return (
//     <style>{`
//       .marquee{
//         animation: marquee 22s linear infinite;
//         will-change: transform;
//       }
//       @keyframes marquee {
//         0%   { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//       @media (hover:hover){
//         .marquee:hover{ animation-play-state: paused; }
//       }
//       @media (prefers-reduced-motion: reduce){
//         .marquee{ animation: none; }
//       }
//     `}</style>
//   );
// }


