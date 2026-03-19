
import { HeroPhoto } from "../comments/HeroPhoto";
import { TargetKursLeadForm } from "../comments/TargetKursLeadForm";
// import Otzif from "../Otziflar/otzif";
import MetaImageZoom from "../comments/ImageZoom";
import { PartnersCarousel } from "./PartnersCarousel";
import Link from "next/link";
import TargetKursiAudienceSwitch from "./TargetKursiAudienceSwitch";
import Otzif from "../Otziflar/otzif";

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
  <div className="rounded-4xl border border-white/10 bg-linear-to-br from-white/10 to-transparent p-6 md:p-12 relative overflow-hidden">
    
    {/* Orqa fondagi yengil effekt */}
    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

    {/* 1. STATUS ROW */}
    <div className="flex items-center gap-3">
      <div className="flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
      </div>
      <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-white/50">
        Vision Group • $80,000+ Ad Spend Experience
      </p>
    </div>

    {/* 2. TEXT CONTENT - Desktopda markazlashgan yoki chapda chiroyli turishi uchun */}
    <div className="mt-8 max-w-3xl">
    <h1 className="text-3xl md:text-5xl font-black leading-[1.15] text-white italic">
  Meta Mutaxassislaridan O‘rgangan <span className="text-yellow-300">Tizimim</span> bilan Performance Marketolog darajasiga chiqing
</h1>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/70">
        3 yillik real keyslar va Meta ekspertlari auditi asosida shakllangan <b className="text-white">Performance tizim</b>. Shunchaki reklama yoqishni emas, natija qilishni o&apos;rgataman.
      </p>

      {/* 3. MOBIL RASM (Faqat telefonda chiqadi: hidden lg:hidden bo'lishi shart emas, lg:hidden o'zi yetadi) */}
      <div className="mt-8 lg:hidden overflow-hidden rounded-[28px] border border-white/10 bg-[#07113a] shadow-2xl">
          <HeroPhoto />
      </div>

      {/* 4. ACTION BUTTONS */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
        <a
          href="#register"
          className="w-full sm:w-auto flex items-center justify-center rounded-2xl bg-yellow-300 px-10 py-5 text-lg font-black text-[#050B2B] transition-all hover:bg-yellow-200 hover:scale-105 active:scale-95 shadow-xl shadow-yellow-300/25"
        >
          Bepul maslahat olish
        </a>
        
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full border-2 border-[#050B2B] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
                U{i}
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-white/50 leading-tight italic">
            Yaqinda 12 kishi <br /> kursga yozildi
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 2. AUDIENCE SECTION (YANGI QO'SHILDI) */}
      <section className="mx-auto max-w-[920px] px-4 pt-12">
        <h2 className="text-2xl font-extrabold text-center mb-8">Bu kurs kimlar uchun?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="text-yellow-300 font-bold italic mb-2">Tadbirkorlar</h4>
            <p className="text-sm text-white/70">O&apos;z biznesingizga arzon va sifatli lidlar oqimini mustaqil yo&apos;lga qo&apos;ying.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="text-2xl mb-2">💼</div>
            <h4 className="text-yellow-300 font-bold italic mb-2">Frilanserlar</h4>
            <p className="text-sm text-white/70">Yangi darajaga chiqing va xizmat haqingizni $500+ ga ko&apos;taring.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="text-2xl mb-2">🎓</div>
            <h4 className="text-yellow-300 font-bold italic mb-2">Talabalar</h4>
            <p className="text-sm text-white/70">Hech qanday tajribasiz eng talabgir zamonaviy kasbni noldan egallang.</p>
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
   <Otzif />
</section>

{/* 4. PRICING SECTION */}
<section className="mx-auto max-w-[980px] px-4 pt-20 text-center">
  <h2 className="text-3xl md:text-5xl font-black mb-4 italic">Ishtirok etish tariflari</h2>
  <p className="text-white/60 mb-12 max-w-xl mx-auto italic">
    Maqsadingiz va tajribangizga mos tarifni tanlang. Har bir tarif natijaga yo&apos;naltirilgan.
  </p>
  
  <div className="grid md:grid-cols-3 gap-6 items-stretch">
    
    {/* 1. START TARIF */}
    <div className="p-6 bg-white/5 border border-white/10 rounded-4xl flex flex-col justify-between hover:border-white/20 transition-all">
      <div>
        <h3 className="text-lg font-bold italic text-white/80">Start</h3>
        <div className="text-3xl font-black my-6 text-white">
          970 000 <span className="text-xs font-normal text-white/40 uppercase tracking-tighter text-nowrap">so&apos;m</span>
        </div>
        <ul className="text-left space-y-4 mb-8 text-white/70 text-[13px]">
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">✓</span> 
            <span>Targetni to&apos;g&apos;ri yoqishgacha bo&apos;lgan barcha darslar</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">✓</span> 
            <span>Algoritmlar va texnik sozlamalar</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">✓</span> 
            <span>Umumiy guruhda savol-javob</span>
          </li>
          <li className="opacity-20 flex items-center gap-2"><span>✕</span> <span>$80,000 lik keyslar tahlili</span></li>
          <li className="opacity-20 flex items-center gap-2"><span>✕</span> <span>Portfolio va ishga joylashish</span></li>
        </ul>
      </div>
      <a href="#register" className="block w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 font-bold transition-all text-sm">
        Tanlash
      </a>
    </div>

    {/* 2. STANDART - ENG OPTIMAL (MARKAZDA) */}
    <div className="p-8 bg-[#0a154d] border-2 border-yellow-400 rounded-4xl relative shadow-2xl shadow-yellow-400/10 flex flex-col justify-between transform md:scale-105 z-10">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
        Eng ommabop
      </div>
      <div>
        <h3 className="text-xl font-bold italic text-white">Standart</h3>
        <div className="text-4xl font-black my-6 text-yellow-400">
          1 470 000 <span className="text-sm font-normal text-white/50 uppercase tracking-tighter">so&apos;m</span>
        </div>
        <ul className="text-left space-y-4 mb-8 text-sm">
          <li className="flex items-center gap-3">
            <span className="text-yellow-300 font-bold text-lg">✓</span> 
            <span className="font-bold">Jonli Zoom darslar (Yozib olinadi)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-300 font-bold text-lg">✓</span> 
            <span className="font-bold underline decoration-yellow-300/30">24/7 Shaxsiy Support</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-300 font-bold text-lg">✓</span> 
            <span className="text-yellow-300">$80,000 lik real keyslar tahlili</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-300 font-bold text-lg">✓</span> 
            <span><b>Ishga joylashish va Portfolio</b> bo&apos;yicha ko&apos;mak</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-300 font-bold text-lg">✓</span> 
            <span>Sotuvchi sayt yasash va Copywriting</span>
          </li>
        </ul>
      </div>
      <a href="#register" className="block w-full py-4 bg-yellow-400 text-black rounded-2xl font-black hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 uppercase text-xs tracking-widest">
        Kursga yozilish
      </a>
    </div>

    {/* 3. PREMIUM / VIP */}
    <div className="p-6 bg-white/5 border border-white/10 rounded-4xl flex flex-col justify-between hover:border-white/20 transition-all">
      <div>
        <h3 className="text-lg font-bold italic text-white/80">Premium</h3>
        <div className="text-3xl font-black my-6 text-white text-nowrap">
          3 470 000 <span className="text-xs font-normal text-white/40 uppercase tracking-tighter">so&apos;m</span>
        </div>
        <ul className="text-left space-y-4 mb-8 text-white/70 text-[13px]">
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">★</span> 
            <span>Standart tarifdagi barcha imkoniyatlar</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300 font-bold">★</span> 
            <span className="text-white font-bold italic underline decoration-yellow-300/30">Shaxsiy Mentorlik (3 oy davomida)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">★</span> 
            <span>Loyihalaringiz uchun shaxsiy audit</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">★</span> 
            <span>Meta mutaxassislar tizimiga kirish</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-300">★</span> 
            <span>Mijoz bilan muzokara o&apos;tkazish darslari</span>
          </li>
        </ul>
      </div>
      <a href="#register" className="block w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 font-bold transition-all text-sm">
        Hoziroq band qilish
      </a>
    </div>
  </div>
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

