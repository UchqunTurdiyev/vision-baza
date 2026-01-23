// app/lid-magnit/page.tsx

import Link from "next/link";
import LidMagnitForm from "./_components/LidMagnitForm";
import Otzif from "@/components/Otziflar/otzif";

export default function LidMagnitPage() {
  // 🔁 Shu yerga YouTube videongiz ID sini yozing:
  // Masalan: https://www.youtube.com/watch?v=VIDEO_ID  => VIDEO_ID
  const YOUTUBE_ID = "8Rl_cjL3FJY";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Vision-group uslubiga yaqin fon */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
   
      <div className="mx-auto w-full lg:max-w-2xl px-4 py-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
        <h1 className="m-3 text-xl md:text-2xl font-extrabold leading-tight">
  Siz istagan darslik 
</h1>
          {/* ✅ 1) Yuqorida YouTube video */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <h1 className="m-3 text-xl md:text-2xl font-extrabold leading-tight">
  Agar sizga qiziq bo&apos;lsa! 👇
</h1>
       {/* ✅ 2) Video ostidan keyin sotuv sarlavhasi + matn (IDEAL LANDING COPY) */}
<h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
  HAQIQATAN ham ishlaydigan Facebook Ads tizimi!
</h1>

<p className="mt-4 text-base leading-relaxed text-white/85">
  Keling, rostini aytaylik: so‘nggi 12–24 oy ichida Facebook reklamasi tubdan o‘zgardi.
  O‘tgan yili ishlagan usullar bugun ishlamaydi. Hatto 6 oy oldingi “ishlayotgan” yondashuvlar ham
  ko‘pchilikda natija bermay qo‘ydi.
</p>

<p className="mt-4 text-base leading-relaxed text-white/85">
  Eng yomoni — eskicha-targeting, 20–30ta content,
  lid arzon tushdi lekin sotuv yoq muammo sotuvchidami? sotuvchi almashdi! baribir shu xol qaytarilmoqdami buni echimi faqat sotuvchida emas target tizimi noto&apos;g&apos;ri qurilganida. 
</p>

<h2 className="mt-8 text-xl font-bold">
  Bu muammoni echimi oddiy bo‘lishi mumkin bo‘lsa-chi?
</h2>

<p className="mt-3 text-base leading-relaxed text-white/85">
  Muammo qayerda ekanligini siz kreativingizdan tortib sotuv bo&apos;lguniga qadar raqamlar bilan boshqara olsangizchi?
  Va bu Facebook’ning yangi AI tizimi to&apos;g&apos;ri qo&apos;llash orqali real sotuvga olib keladigan tizim bo&apos;lsachi?
</p>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

  <p className="mt-2 text-base leading-relaxed text-white/85">
    Men reklamalarimni Meta kompaniyasi xodimlari orqali audit qildirdim.
    Natijada kampaniyalar 180° o‘zgardi: lidlar sifati oshdi, lidlar 2 baravar arzonlashdi va
    juda ko‘p insaydlarga ega bo‘ldim.
  </p>

  <p className="mt-3 text-base leading-relaxed text-white/85">
    Sababi oddiy: kuniga $1500 gacha reklamaga sarflayman. Shu sababli oyiga 3 marta audit qildirib turaman.
    Chunki katta byudjetda “xato” — eng qimmat narsa.
  </p>

  <p className="mt-3 text-base leading-relaxed text-white/85">
   Men Turdiyev Uchqun Performance Marketing orqali contentni to&apos;g&apos;ri sozlash, Targetni to&apos;g&apos;ri yo&apos;naltirish, sotuvni to&apos;g&apos;ri tizimlash, umumiy aytganda sotuv bo&apos;lgungacha bo&apos;lgan qadamlarni raqamlar orqali ko&apos;rib sozlashni o&apos;rgataman
  </p>
</div>

<h2 className="mt-8 text-xl font-bold">
  Facebook Ads’dagi asosiy muammo nimada?
</h2>

<p className="mt-3 text-base leading-relaxed text-white/85">
  Eski usul lidlar qimmat tushdi yomon kompaniya lidlar arzon tushdi yaxshi kompaniya. Bu kabi fikirlash bizning sotuvimiz marjamiz 0 hali deganini bildiradi
</p>

<p className="mt-4 text-base leading-relaxed text-white/85">
  To‘g‘ri savol endi bu emas: <span className="font-semibold text-white">“Hamma ayb sotuvchida sotuvchim sota olmayaptimi?”</span>
  To‘g‘ri savol endi bu emas: <span className="font-semibold text-white">“Mukammal auditoriyani qanday topsam bo‘ladi?”</span>
  To‘g‘ri savol: <span className="font-semibold text-white">“Men haqiqiy foydadan Targetolog Marketolog va Sotuvchiga KPI berishim kerakmi?”</span>
  To‘g‘ri savol: <span className="font-semibold text-white">“Qanday reklama yaratsam, u keng bozordan menga kerakli auditoriyani o‘zi tortadi?”</span>
</p>

<h2 className="mt-8 text-xl font-bold">
  Endi yangicha ishlaydigan yondashuv: Performance Marketing
</h2>

<ul className="mt-4 space-y-2 text-base text-white/85">
  <li>✅ Har bir qadam RAQAMLAR bilan o‘lchanadi CTR, CPC, CPL, CPA, ROAS.</li>
  <li>✅ Byudjet ustidan to‘liq nazorat. Bu yondashuv pulni kuydirmaydi, balki ko‘paytiradi.</li>
  <li>✅ Tez test → tez natija. Bozor nimani xohlayotganini tez bilib olasiz.</li>
  <li>✅ Ishlayotgan kampaniyani masshtablash bo‘yicha aniq yo‘l xarita beradi</li>
  <li>✅ Mutaxassis foydadan ulush oladigan darajaga chiqadi</li>
</ul>

<p className="mt-6 text-base leading-relaxed text-white/85">
  Sizga ham ushbu texnikalar qiziqmi? Unda ro&apos;yxatdan o&apos;ting
</p>

<p className="mt-4 text-base leading-relaxed text-white/85">
  Agar siz professional target kursimga qiziqsangiz, ushbu link orqali ma&apos;lumot oling:{" "}
  <Link href="/target-kursi" className="text-blue-400 italic hover:text-blue-300">
    Target kursi
  </Link>
</p>


   {/* ✅ Otziflar component */}
   <Otzif />
          {/* ✅ 3) Forma o‘z holicha qoladi */}
          <div className="mt-8">
            <LidMagnitForm />
          </div>

          <p className="mt-4 text-xs text-white/60">
            Tugmani bosganingizdan so‘ng “Raxmat” sahifasiga o‘tasiz va
            5 sekunddan keyin Telegram kanalga yo‘naltirilasiz.
          </p>
        </div>
      </div>
    </main>
  );
}





