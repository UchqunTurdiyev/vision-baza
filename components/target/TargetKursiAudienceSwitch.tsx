"use client";

import { useState } from "react";

export default function TargetKursiAudienceSwitch() {
  const [active, setActive] = useState<"new" | "biz" | "pro">("new");

  return (
    <div className="mt-5">
      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setActive("new")}
          className={[
            "flex h-12 w-full items-center justify-center rounded-2xl text-sm font-semibold transition",
            active === "new"
              ? "bg-yellow-300 text-black"
              : "bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",
          ].join(" ")}
        >
          Targetni endi o‘rganmoqchiman
        </button>

        <button
          type="button"
          onClick={() => setActive("biz")}
          className={[
            "flex h-12 w-full items-center justify-center rounded-2xl text-sm font-semibold transition",
            active === "biz"
              ? "bg-yellow-300 text-black"
              : "bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",
          ].join(" ")}
        >
          O‘z biznesim bor
        </button>

        <button
          type="button"
          onClick={() => setActive("pro")}
          className={[
            "flex h-12 w-full items-center justify-center rounded-2xl text-sm font-semibold transition",
            active === "pro"
              ? "bg-yellow-300 text-black"
              : "bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",
          ].join(" ")}
        >
          Targetologman
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 rounded-2xl bg-white/5 p-4">
        {active === "new" && (
       <>
       <h2 className="text-2xl font-bold leading-tight">
         Targetni o‘rganib{" "}
         <span className="text-yellow-300">yuqori daromadli kasb</span>ga ega bo‘lmoqchimisiz?
       </h2>
     
       <p className="mt-3 text-lg leading-relaxed text-white/75">
         Kursga to‘lov qilib, uni tugatgandan keyin
         </p>
       <p className="mt-3 text-lg leading-relaxed text-white/75">

         “To‘liq o‘rgana olamanmi?”
         </p>
       <p className="mt-3 text-lg leading-relaxed text-white/75">

         “Ish topa olamanmi?”
         </p>
       <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">

         “Real tajribasiz qanday ish topaman?”
         {" "}
         deb o‘ylayotgan bo‘lsangiz — men sizga yordam bera olaman.
       </p>
     
       <p className="mt-3 font-semibold text-lg leading-relaxed text-white/75">
         Men sizga “200 mingga target yoqib beraman” degan yondashuvni emas,
         <br />
         <span className="text-yellow-300">
           mijozlaringiz savdosini oshirib, natijadan ulush yoki mo‘may daromad oladigan
         </span>
         <br />
         targetolog bo‘lishni o&apos;rgataman.
       </p>
     
       <p className="mt-3 text-lg leading-relaxed text-white/75">
         Buning uchun siz faqat target yoqishni emas,
         <br />
         <span className="text-yellow-300">
           kassaga pul tushgungacha bo‘lgan barcha qadamlarni ko‘ra oladigan
         </span>
         va to‘liq strategiya tuza oladigan Performance Marketing mutaxassisi bo‘lasiz.
       </p>
     
       <div className="mt-4 rounded-2xl bg-white/5 p-2">
         <h3 className="text-lg font-bold text-white">Kafolat (100% xotirjamlik):</h3>
     
         <p className="mt-2 text-lg font-semibold  leading-relaxed text-white/75">
           Kursning 1-oyi uchun to‘lovning yarmini qilasiz.
           </p>
         <p className="mt-2 text-lg font-semibold  leading-relaxed text-white/75">

           Karta raqamingizni menga yuborasiz.
           </p>
           <p className="mt-2 text-lg leading-relaxed text-white/75 font-semibold">

           Agar kurs davomida sizga ma’qul kelmasa — shunchaki guruhni tark etasiz.
           
         <span className="text-yellow-300">
           {" "}Men esa to‘lovingizni 100% qaytaraman.
           </span>
        </p>
       </div>
     
       <div className="mt-3 rounded-2xl bg-white/5 p-4">
         <h3 className="text-lg font-bold text-white">Darslar qanday o‘tadi?</h3>
     
         <ul className="mt-2 space-y-2 font-semibold  text-lg text-white/80">
           <li>
             • Darslar platformada tayyor yozuv emas —
             <br />
             kelishilgan vaqtda Zoom orqali jonli o‘tadi.
           </li>
           <li>
             • Har bir dars yozib olinadi
             <br />
             va sizga tashlab beriladi.
           </li>
           <li>
             • Qila olmagan joyingizda siz uchun alohida Zoom qilaman
             <br />
             va muammoingizni hal qilib beraman.
           </li>
         </ul>
       </div>
     </>
        )}

        {active === "biz" && (
      <>
      <h2 className="text-2xl font-bold leading-tight">
        Tadbirkorlik bilan shug‘ullanib kelyapsiz, lekin{" "}
        <span className="text-yellow-300">savdo o‘smayaptimi?</span>
      </h2>
    
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
        SMM va targetologlarga sarflagan pulingizga yarasha natija bo‘lmadi?
      </p>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
        O‘zingiz target yoqyapsiz, lekin savdoda o‘sish yo‘qmi?
      </p>
    
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
        Muammo targetda emas.
        </p>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">

        Muammo — siz faqat oxirgi qadamni qilyapsiz.
        </p>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
       
        Target esa jarayonning <span className="text-yellow-300">eng oxirgi bosqichi</span>.
     
    </p>
      <p className="mt-3 text-lg leading-relaxed font-semibold text-white/75">
        Kursimda siz faqat knopkalar bosishni yoki reklama yoqishni emas,
        <br />
        <span className="text-yellow-300">kuchli taklif (offer) yaratishni</span>,
        <br />
        qaysi video va kreativlar sotishini analiz qilishni,
        <br />
        to‘g‘ri strategiya bilan tizimli target yoqishni o‘rganasiz.
      </p>
    
      <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
        Natijada siz targetga tikkan summangizni shunchaki “reklama xarajati” sifatida emas,
        <br />
        <span className="text-yellow-300">
          foyda bilan qaytarib oladigan tizim
        </span>{" "}
        qurasiz.
      </p>
      <div className="mt-4 rounded-2xl bg-white/5 p-2">
         <h3 className="text-lg font-bold text-white">Kafolat (100% xotirjamlik):</h3>
     
         <p className="mt-2 text-lg font-semibold leading-relaxed text-white/75">
           Kursning 1-oyi uchun to‘lovning yarmini qilasiz.
           </p>
         <p className="mt-2 text-lg leading-relaxed font-semibold  text-white/75">

           Karta raqamingizni menga yuborasiz.
           </p>
           <p className="mt-2 text-lg  leading-relaxed text-white/75 font-semibold">

           Agar kurs davomida sizga ma’qul kelmasa — shunchaki guruhni tark etasiz.
           
         <span className="text-yellow-300">
           {" "}Men esa to‘lovingizni 100% qaytaraman.
           </span>
        </p>
       </div>
     
       <div className="mt-3 rounded-2xl bg-white/5 p-4">
         <h3 className="text-lg font-bold text-white">Darslar qanday o‘tadi?</h3>
     
         <ul className="mt-2 space-y-2 text-lg font-semibold text-white/80">
           <li>
             • Darslar platformada tayyor yozuv emas —
             <br />
             kelishilgan vaqtda Zoom orqali jonli o‘tadi.
           </li>
           <li>
             • Har bir dars yozib olinadi
             <br />
             va sizga tashlab beriladi.
           </li>
           <li>
             • Qila olmagan joyingizda siz uchun alohida Zoom qilaman
             <br />
             va muammoingizni hal qilib beraman.
           </li>
         </ul>
       </div>
    </>
        )}

        {active === "pro" && (
     <>
     <h2 className="text-2xl font-bold leading-tight">
       Target va SMM sohasida ishlayapsiz, lekin{" "}
       <span className="text-yellow-300">daromadingiz o‘smayaptimi?</span>
     </h2>
   
     <p className="mt-3 text-lg font-semibold leading-relaxed text-white/75">
       Bir necha yildan beri ishlaysiz.
       </p>
     <p className="mt-3 text-lg leading-relaxed text-white/75">

       Lekin bitta joyda 3 oydan ko‘p ushlanib qola olmayapsiz.
       </p>
       <p className="mt-3 text-lg leading-relaxed text-white/75">

       Daromadingizni ko‘paytira olmayapsiz.
       </p>
       <p className="mt-3 text-lg leading-relaxed text-white/75">

       Qancha ishlasangiz ham, hali ham kutgan maoshingizga chiqa olmadingiz.
     </p>
   
     <p className="mt-3 text-lg leading-relaxed text-white/75">
       Sizga oddiy “yana ko‘proq reklama yoqish” emas,
       <br />
       kamida <span className="text-yellow-300">2x o‘sish</span> va yangi daraja kerak.
     </p>
   
     <p className="mt-3 text-lg font-semibold  leading-relaxed text-white/75">
       Men sizga buning uchun aniq va amaliy yechimlar bilan yordam bera olaman.
       <br />
       Siz “$200 ga target yoqib beraman” deydigan mutaxassis emas,
       <br />
       <span className="text-yellow-300">
         “Savdoyingizni oshiraman va sof foydadan ulush olaman”
       </span>
       <br />
       yoki eng kamida <span className="text-yellow-300">$500+ maosh</span> talab qila oladigan
       mutaxassis darajasiga chiqasiz.
     </p>
   
     <p className="mt-3 text-lg leading-relaxed text-white/75">
       Qanday qilib katta bizneslarni olish,
       <br />
       ularni to‘g‘ri strategiya bilan yuritish,
       <br />
       KPI qo‘yish va natija bilan ishlashgacha —
       <br />
       hammasini to‘liq o‘rgataman.
     </p>
     <div className="mt-4 rounded-2xl bg-white/5 p-2">
         <h3 className="text-lg font-bold text-white">Kafolat (100% xotirjamlik):</h3>
     
         <p className="mt-2 text-lg leading-relaxed text-white/75">
           Kursning 1-oyi uchun to‘lovning yarmini qilasiz.
           </p>
         <p className="mt-2 text-lg leading-relaxed text-white/75">

           Karta raqamingizni menga yuborasiz.
           </p>
           <p className="mt-2 text-lg leading-relaxed text-white/75 font-semibold">

           Agar kurs davomida sizga ma’qul kelmasa — shunchaki guruhni tark etasiz.
           
         <span className="text-yellow-300">
           {" "}Men esa to‘lovingizni 100% qaytaraman.
           </span>
        </p>
       </div>
     
       <div className="mt-3 rounded-2xl bg-white/5 p-4">
         <h3 className="text-lg font-bold text-white">Darslar qanday o‘tadi?</h3>
     
         <ul className="mt-2 space-y-2 text-lg font-semibold text-white/80">
           <li>
             • Darslar platformada tayyor yozuv emas —
             <br />
             kelishilgan vaqtda Zoom orqali jonli o‘tadi.
           </li>
           <li>
             • Har bir dars yozib olinadi
             <br />
             va sizga tashlab beriladi.
           </li>
           <li>
             • Qila olmagan joyingizda siz uchun alohida Zoom qilaman
             <br />
             va muammoingizni hal qilib beraman.
           </li>
         </ul>
       </div>
   </>
        )}
      </div>
    </div>
  );
}