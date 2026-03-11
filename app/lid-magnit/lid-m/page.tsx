// app/lid-magnit/page.tsx

import Link from "next/link";
import Otzif from "@/components/Otziflar/otzif";
import LidMagnitForm from "../_components/LidMagnitForm";

export default function LidMagnitPage() {
  // 🔁 Shu yerga YouTube videongiz ID sini yozing:


  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Vision-group uslubiga yaqin fon */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
   
      <div className="mx-auto w-full lg:max-w-2xl px-4 py-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          
          <h1 className="m-3 text-xl md:text-2xl font-extrabold leading-tight text-center">
          Sizda ham reklamadan kelayotganlar faqat &quot;narx so&apos;rab&quot; yo&apos;q bo&apos;lib ketyaptimi? Unda algoritmni to&apos;g&apos;irlash vaqti keldi.
          </h1>


          <h1 className="m-3 text-lg md:text-xl font-bold leading-tight text-indigo-400">
            Nega reklamangizga faqat &quot;qiziquvchilar&quot; yozyapti? 👇
          </h1>

          {/* ✅ 2) Professional Landing Copy */}
          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
            $100 tikib, kamida $200 foyda ko&apos;rmayotgan bo&apos;lsangiz — sizda Meta bilan &quot;aloqa&quot; yo&apos;q!
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/85">
            Ko&apos;pchilik target yoqadi va faqat &quot;Lidlar soni&quot;ga qaraydi. Lekin lidlar arzon bo&apos;lsa-da, sotuv bo&apos;lmasa, bu tizim xato ishlayotganini bildiradi. Meta algoritmi sizga shunchaki yozadigan odamlarni emas, **&quot;sotib oladigan&quot;** mijozlarni topishi kerak.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border-l-4 border-red-500 bg-white/5 p-4">
              <h3 className="font-bold text-red-400">Xato: Harakat (Engagement) tuzog&apos;i</h3>
              <p className="text-sm text-white/80">
                Agar siz faqat Direct&apos;ga yozish uchun reklama yoqsangiz, algoritm zerikkanidan negativ yozadigan yoki puli yo&apos;q bo&apos;lsa ham &quot;narxi necha?&quot; deb so&apos;raydiganlarni topib keladi. Meta ularning hamyonini ajratmaydi.
              </p>
              <p className="text-sm text-blue-500 py-3">Bu orqali sotuv qilishimiz mumkin albatta lekin juda ko&apos;p nazorat qilishiniz kerak bo&apos;ladi va bu usul arzon maxsulot va arzon target uchun.</p>
            </div>

            <div className="rounded-xl border-l-4 border-yellow-500 bg-white/5 p-4">
              <h3 className="font-bold text-yellow-400">Xato: Lid-forma — bu hali pul emas!</h3>
              <p className="text-sm text-white/80">
                Lid qoldirgan har bir kishi xaridor emas. Meta uchun sizga lid olib kelish — vazifa bajarilganini anglatadi. Ularning sotib olish-olmasligi Meta uchun qiziq emas.
              </p>
              <p className="text-sm text-blue-500">Bu orqali sotuv qilishimiz konversiyasi yuqori lekin bu xam ideal emas sababi 100 lid 10 ta sotuv bu degani biz 90 lid uchun bekorga pul to&apos;ladik degani. Albatta bu xam ishlaydi lekin ideal emas.</p>

            </div>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-green-400">
            Yechim: Signal va ROAS nazorati
          </h2>

          <p className="mt-3 text-base leading-relaxed text-white/85">
            Haqiqiy foyda uchun biz Metaga **&quot;Sotib olgan mijoz&quot;** signalini yuborishimiz kerak. Buning uchun:
          </p>

          <ul className="mt-4 space-y-3 text-base text-white/85">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span><b>CRM, Veb-sayt orqali target yoqadigan bo&apos;lsangiz:</b> Sotuvchi mijozga sotganida &ldquo;SOTIB OLDI&ldquo; bo&apos;limiga o&apos;tkazsa , Metaga ushbu inson sotib oldi signal boradi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span><b>Algoritmning &ldquo;Ko&apos;zi&quot; ochiladi:</b> Meta o&apos;sha soniyada aynan pul to&apos;lagan odamga o&apos;xshash auditoriyani qidirishni boshlaydi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span><b>ROAS nazorati:</b> Tikilgan $1 pul qancha sof foyda keltirganini aniq raqamlarda ko&apos;rasiz.</span>
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5 italic">
            <p className="text-base leading-relaxed text-white/90">
              Men Turdiyev Uchqun, Performance Marketing orqali kontentni to&apos;g&apos;ri sozlashdan tortib, sotuv bo&apos;lgungacha bo&apos;lgan har bir qadamni raqamlar bilan boshqarishni o&apos;rgataman.
            </p>
          </div>

          <p className="mt-8 text-lg font-semibold text-center text-indigo-300">
            Siz ham reklamangizni &ldquo;harajat&ldquo;dan &ldquo;investitsiya&ldquo;ga aylantirmoqchimisiz? Unda ro&apos;yxatdan o&apos;ting:
          </p>

          {/* ✅ Otziflar component */}
          <Otzif />

          {/* ✅ 3) Forma */}
          <div className="mt-8">
            <LidMagnitForm />
          </div>

          <p className="mt-6 text-center text-sm text-white/70">
            Agar siz professional target kursimga qiziqsangiz:{" "}
            <Link href="/target-kursi" className="text-blue-400 underline hover:text-blue-300 transition-colors">
              Target kursi haqida batafsil
            </Link>
          </p>

          <p className="mt-4 text-center text-[10px] text-white/40 uppercase tracking-widest">
            Tugmani bosgach 5 sekunddan keyin Telegram kanalga yo‘naltirilasiz.
          </p>
        </div>
      </div>
    </main>
  );
}