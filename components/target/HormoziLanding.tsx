// // RapidLandingPage.tsx
// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, type Variants } from "framer-motion";

// const BG = "bg-[#0A1230]"; // dark blue (asosiy fon)
// const PANEL = "bg-white/[0.06] border-white/10"; // ochroq “glass”
// const TEXT = "text-white";
// const MUTED = "text-white/70";
// const MUTED2 = "text-white/80";
// const RED = "text-red-400";
// const RED_LINE = "bg-red-500/80";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 18 },
//   show: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
//   }),
// };

// function Section({
//   id,
//   children,
//   className = "",
// }: {
//   id?: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <motion.section
//       id={id}
//       className={className}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       {children}
//     </motion.section>
//   );
// }

// function Container({ children }: { children: React.ReactNode }) {
//   // Telefonni ideal qilish uchun: kichik ekranlarda max-w torroq
//   return (
//     <div className="mx-auto w-full max-w-[980px] px-4 sm:px-6">{children}</div>
//   );
// }

// function Card({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`rounded-3xl border ${PANEL} shadow-[0_24px_120px_rgba(0,0,0,0.35)] ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// function Hr() {
//   return <div className="h-px w-full bg-white/10" />;
// }

// export default function RapidLandingPage() {
//   return (
//     <main className={`${BG} ${TEXT} min-h-screen`}>
//       {/* BG glow */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[110px]" />
//         <div className="absolute top-32 left-8 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-[120px]" />
//       </div>

//       {/* HERO */}
//       <Section id="top" className="border-b border-white/10">
//         <Container>
//           <div className="py-10 sm:py-14">
//             <motion.p
//               variants={fadeUp}
//               custom={0}
//               className="text-center text-[11px] font-semibold tracking-[0.22em] text-white/65 sm:text-xs"
//             >
//               OCHILDI: 9-RAQAMLI REKLAMA MUTAXASSISI ISHLATADIGAN YASHIRIN
//               FRAMEWORK
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               custom={1}
//               className="mx-auto mt-4 max-w-[20ch] text-center text-[28px] font-extrabold leading-[1.12] sm:max-w-none sm:text-5xl"
//             >
//               Qanday qilib foydali reklama kampaniyalarini ishga tushirib,
//               kengaytirasiz (scale qilasiz)…
//             </motion.h1>

//             <motion.div
//               variants={fadeUp}
//               custom={2}
//               className="mt-4 text-center"
//             >
//               <div className="inline-flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-3">
//                 <span className={`text-[28px] font-black sm:text-5xl ${RED}`}>
//                   10 daqiqada
//                 </span>
//                 <span className="text-[28px] font-black sm:text-5xl">
//                   (yoki undan ham tez)!
//                 </span>
//               </div>

//               <div className={`mx-auto mt-4 h-[2px] w-52 ${RED_LINE}`} />
//             </motion.div>

//             <motion.p
//               variants={fadeUp}
//               custom={3}
//               className="mx-auto mt-5 max-w-[56ch] text-center text-sm text-white/75 sm:text-base"
//             >
//               Agentligimiz mijozlarimiz uchun barqaror natija beradigan tizim —
//               reklama xarajatida oyiga 7-figure darajasigacha yetadigan uslub.
//             </motion.p>
//           </div>
//         </Container>

//         <div className="h-3 w-full bg-red-500/55" />
//       </Section>

//       {/* BIG NEWS + FORM (MOBILE FIRST) */}
//       <Section className="py-10 sm:py-14">
//         <Container>
//           <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
//             <Card className="p-6 sm:p-8">
//               <motion.h2
//                 variants={fadeUp}
//                 custom={0}
//                 className="text-3xl font-black leading-tight sm:text-4xl"
//               >
//                 KATTA YANGILIK:
//               </motion.h2>

//               <motion.p
//                 variants={fadeUp}
//                 custom={1}
//                 className="mt-5 text-lg font-semibold leading-snug text-white/90 sm:text-xl"
//               >
//                 Birinchi marta — “Rapid Launch & Scale” Framework’imizni
//                 ochyapman.
//               </motion.p>

//               <motion.p
//                 variants={fadeUp}
//                 custom={2}
//                 className="mt-4 text-sm text-white/75 sm:text-base"
//               >
//                 Bu tizim marketing sohasidagi ENG katta nomlar uchun{" "}
//                 <span className="font-black text-white">$100M+</span> savdo
//                 natijasini olib kelgan.
//               </motion.p>

//               <motion.div
//                 variants={fadeUp}
//                 custom={3}
//                 className="mt-6 rounded-2xl bg-white/[0.05] p-4 text-xs text-white/70"
//               >
//                 Telefon uchun: shu bloklar vertikal va “thumb friendly” tugmalar
//                 bilan tayyorlangan.
//               </motion.div>
//             </Card>

//             <Card className="p-6 sm:p-8">
//               <motion.p
//                 variants={fadeUp}
//                 custom={0}
//                 className="text-xs font-semibold text-white/60"
//               >
//                 Ma’lumotlaringizni kiriting
//               </motion.p>

//               <motion.div variants={fadeUp} custom={1} className="mt-4 space-y-3">
//                 <label className="block">
//                   <span className="mb-1 block text-xs font-semibold text-white/60">
//                     Ism Familiya
//                   </span>
//                   <input
//                     className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
//                     placeholder="Ism Familiyangiz"
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="mb-1 block text-xs font-semibold text-white/60">
//                     Email
//                   </span>
//                   <input
//                     className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
//                     placeholder="example@gmail.com"
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="mb-1 block text-xs font-semibold text-white/60">
//                     Telefon
//                   </span>
//                   <input
//                     className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
//                     placeholder="+998 __ ___ __ __"
//                   />
//                 </label>

//                 <button className="mt-2 w-full rounded-2xl bg-emerald-500 px-4 py-4 text-base font-extrabold text-white shadow-sm hover:bg-emerald-600 active:scale-[0.99]">
//                   2-qadamga o‘tish
//                 </button>

//                 <p className="text-center text-[11px] text-white/50">
//                   Maxfiylik hurmat qilinadi. Spam yo‘q.
//                 </p>
//               </motion.div>
//             </Card>
//           </div>
//         </Container>
//       </Section>

//       <Hr />

//       {/* AUTHORITY (MOBILE STACK) */}
//       <Section className="py-10 sm:py-14">
//         <Container>
//           <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
//             <Card className="p-6 sm:p-8">
//               <motion.h3
//                 variants={fadeUp}
//                 custom={0}
//                 className="text-2xl font-black leading-tight sm:text-3xl"
//               >
//                 OXIRI: 2025-yilda ham ishlaydigan Facebook Ads tizimi!
//               </motion.h3>

//               <motion.p
//                 variants={fadeUp}
//                 custom={1}
//                 className={`mt-5 text-sm ${MUTED} sm:text-base`}
//               >
//                 Keling, rostini aytaylik: Facebook reklamalari so‘nggi 12–24 oy
//                 ichida keskin o‘zgardi.
//               </motion.p>

//               <motion.div variants={fadeUp} custom={2} className="mt-5 space-y-3">
//                 <p className={`font-extrabold ${RED}`}>
//                   O‘tgan yili ishlagan narsa endi ishlamaydi.
//                 </p>
//                 <p className={`font-extrabold ${RED}`}>
//                   6 oy oldingi uslub ham allaqachon eskirgan.
//                 </p>
//                 <p className={`text-sm ${MUTED2} sm:text-base`}>
//                   Ko‘p “guru”lar yillardan beri real kampaniya yuritmagan.
//                 </p>
//                 <p className={`text-sm ${MUTED2} sm:text-base`}>
//                   Ular sizning pulingizni yeb ketadigan, asabingizni buzadigan
//                   eski metodlarni o‘rgatishyapti.
//                 </p>
//               </motion.div>

//               <motion.p
//                 variants={fadeUp}
//                 custom={3}
//                 className="mt-7 text-base font-semibold text-white sm:text-lg"
//               >
//                 Agar foydali kampaniyani ishga tushirish va scale qilish oddiy
//                 bo‘lsa-chi?
//               </motion.p>

//               <motion.p
//                 variants={fadeUp}
//                 custom={4}
//                 className={`mt-2 text-base font-black ${RED} sm:text-lg`}
//               >
//                 Agar 10 daqiqada konversiya beradigan kampaniya qo‘ya olsangiz-chi?
//               </motion.p>

//               <motion.h4
//                 variants={fadeUp}
//                 custom={5}
//                 className={`mt-8 text-lg font-black ${RED}`}
//               >
//                 MEN KIMMAN VA NEGA MENI TINGLASH KERAK?
//               </motion.h4>

//               <motion.p
//                 variants={fadeUp}
//                 custom={6}
//                 className={`mt-3 text-sm ${MUTED2} sm:text-base`}
//               >
//                 Men Hernan Vazquezman va bozordagi ko‘p “reklama ekspertlari”dan
//                 farqli ravishda…
//               </motion.p>

//               <motion.ul
//                 variants={fadeUp}
//                 custom={7}
//                 className={`mt-5 list-disc space-y-2 pl-5 text-sm ${MUTED2} sm:text-base`}
//               >
//                 <li>2012-yildan beri HAR KUNI reklama yuritaman.</li>
//                 <li>$100M+ reklama budjetini boshqarganman.</li>
//                 <li>$250M+ attribut qilingan savdo yaratganman.</li>
//                 <li>
//                   Yirik nomlar uchun kampaniyalar: Grant Cardone, Frank Kern,
//                   Agora Publishing, Patrick Bet-David, Dan Fleyshman, Dan Graziosi,
//                   Tony Robbins, Lionel Messi va boshqalar.
//                 </li>
//                 <li>Hozir ham oyiga 7-figure reklama xarajatini boshqaraman.</li>
//               </motion.ul>

//               <motion.p
//                 variants={fadeUp}
//                 custom={8}
//                 className={`mt-5 text-sm ${MUTED2} sm:text-base`}
//               >
//                 Eng muhimi — men har kuni “front”daman: hozir nima ishlayotganini
//                 real ko‘rib turaman.
//               </motion.p>
//             </Card>

//             <Card className="p-6 sm:p-8">
//               <div className="mx-auto flex max-w-sm flex-col items-center">
//                 <div className="relative h-40 w-40 overflow-hidden rounded-full border-[6px] border-red-500 sm:h-56 sm:w-56">
//                   <Image
//                     src="/hernan.jpg"
//                     alt="Hernan Vazquez"
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 160px, 224px"
//                   />
//                 </div>

//                 <div className="mt-5 text-center">
//                   <p className="text-lg font-black">Hernan Vazquez</p>
//                   <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/60">
//                     YIRIK NOMLAR UCHUN ADS
//                     <br />
//                     <span className="normal-case">*Hozir ham reklama yurityapti</span>
//                   </p>
//                 </div>

//                 <div className="mt-6 w-full rounded-2xl bg-white/[0.05] p-4 text-sm text-white/70">
//                   <p className="font-semibold text-white/80">Eslatma:</p>
//                   <p className="mt-1">
//                     Rasm bo‘lmasa, /public/hernan.jpg qo‘ying yoki Image blokini olib
//                     tashlang.
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </Container>
//       </Section>

//       {/* PROBLEM (DARK BLUE, NOT BLACK) */}
//       <Section className="border-y border-white/10 bg-[#07102A]">
//         <Container>
//           <div className="py-10 sm:py-14">
//             <motion.h3
//               variants={fadeUp}
//               custom={0}
//               className="text-2xl font-black sm:text-4xl"
//             >
//               2025-YILDA FACEBOOK ADS’DAGI ASOSIY MUAMMO
//             </motion.h3>

//             <motion.p variants={fadeUp} custom={1} className={`mt-5 ${MUTED2}`}>
//               Facebook reklamasini “eski” usulda yuritish —{" "}
//               <span className="font-black text-white">TUGADI</span>.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               custom={2}
//               className="mt-6 text-white/85 underline underline-offset-4"
//             >
//               Oldin shuni qilish kerak edi:
//             </motion.p>

//             <motion.ul
//               variants={fadeUp}
//               custom={3}
//               className="mt-4 space-y-2 text-white/85"
//             >
//               <li>- 20–30 ta turli qiziqishlarga ega ad set ochish?</li>
//               <li>- Pixel 50–100 ta konversiya bilan “o‘rganishini” kutish?</li>
//               <li>- Lookalike’lar bilan sekin-sekin scale qilish?</li>
//               <li>- Oxirgi chora sifatida broad targeting’ga o‘tish?</li>
//             </motion.ul>

//             <motion.p
//               variants={fadeUp}
//               custom={4}
//               className="mt-6 font-black underline underline-offset-4"
//             >
//               U paytlar tugadi.
//             </motion.p>

//             <motion.p variants={fadeUp} custom={5} className={`mt-6 ${MUTED2}`}>
//               Facebook’ning AI’i keskin darajada aqllashdi. Platforma targeting
//               qanday ishlashini butunlay o‘zgartirdi.
//             </motion.p>

//             <motion.p variants={fadeUp} custom={6} className={`mt-4 ${MUTED2}`}>
//               Natija? “Eski Facebook” uchun tuzilgan kampaniyalarga pul kuydirish.
//             </motion.p>

//             <motion.h4
//               variants={fadeUp}
//               custom={7}
//               className="mt-10 text-xl font-black sm:text-3xl"
//             >
//               NEGA ESKI METODLAR ENDI ISHLAMAYDI
//             </motion.h4>

//             <motion.p variants={fadeUp} custom={8} className={`mt-4 ${MUTED2}`}>
//               Facebook AI juda aqlli bo‘lib ketdi — platforma ishlash tarzini
//               tubdan o‘zgartirdi.
//             </motion.p>

//             <motion.p variants={fadeUp} custom={9} className={`mt-4 ${MUTED2}`}>
//               Micro-target: “Faqat shu odamlargagina ko‘rsat, qolgan qiziqishi
//               mumkin bo‘lganlarni e’tiborsiz qoldir” degani.
//             </motion.p>

//             <motion.p variants={fadeUp} custom={10} className={`mt-4 ${MUTED2}`}>
//               Targeting’ni qanchalik ko‘p nazorat qilsangiz — natija shunchalik
//               yomonlashadi va siz ko‘proq to‘laysiz.
//             </motion.p>
//           </div>
//         </Container>
//       </Section>

//       {/* MINDSET */}
//       <Section className="py-10 sm:py-14">
//         <Container>
//           <Card className="p-6 sm:p-10">
//             <motion.h3
//               variants={fadeUp}
//               custom={0}
//               className="text-2xl font-black sm:text-4xl"
//             >
//               HAMMASINI O‘ZGARTIRADIGAN “MINDSET SHIFT”
//             </motion.h3>

//             <motion.p variants={fadeUp} custom={1} className={`mt-5 ${MUTED2}`}>
//               “Qanday qilib ideal auditoriyani topaman?” o‘rniga shuni so‘rang:
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               custom={2}
//               className="mt-6 text-lg font-black text-white sm:text-2xl"
//             >
//               “Qanday qilib broad bozordan turib, ideal auditoriyamni o‘ziga
//               tortadigan reklama yarataman?”
//             </motion.p>

//             <motion.ul
//               variants={fadeUp}
//               custom={3}
//               className="mt-6 list-disc space-y-4 pl-6 text-white/85"
//             >
//               <li>
//                 Networking’da faqat “potensial mijoz” deb yozilgan nishon
//                 taqqanlar bilan gaplashish
//               </li>
//               <li>
//                 Bazmda shunday hikoya aytishki — ideal mijozlar o‘zlari siz tomonga
//                 kelsin
//               </li>
//             </motion.ul>

//             <motion.p variants={fadeUp} custom={4} className={`mt-6 ${MUTED2}`}>
//               Ikkinchi yo‘l samaraliroq, lekin boshqa skill set kerak. Framework
//               ichida aynan shuni ko‘rsataman.
//             </motion.p>
//           </Card>
//         </Container>
//       </Section>

//       {/* INTRODUCING */}
//       <Section className="py-10 sm:py-14">
//         <Container>
//           <Card className="p-6 sm:p-10">
//             <motion.h3
//               variants={fadeUp}
//               custom={0}
//               className="text-center text-2xl font-black sm:text-5xl"
//             >
//               RAPID LAUNCH & SCALE FRAMEWORK
//             </motion.h3>

//             <motion.p
//               variants={fadeUp}
//               custom={1}
//               className="mx-auto mt-6 max-w-3xl text-center text-white/75"
//             >
//               Yillar davomidagi testlar va millionlab reklama xarajatlari — bitta
//               oddiy, takrorlanuvchi tizimga jamlangan.
//             </motion.p>

//             <motion.ul
//               variants={fadeUp}
//               custom={2}
//               className="mx-auto mt-8 max-w-3xl space-y-3 text-white/85"
//             >
//               <li className="flex gap-3">
//                 <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
//                 Kreativ tayyor bo‘lsa — 10 daqiqada qo‘llaysiz.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
//                 Facebook’ning yangi AI’i bilan ishlaydi.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
//                 Fokus: targeting emas — natija beradigan narsalar.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
//                 Scale qilish uchun aniq yo‘l.
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
//                 “Svetofor” tizimi: keep / kill / scale.
//               </li>
//             </motion.ul>

//             <motion.p
//               variants={fadeUp}
//               custom={3}
//               className="mx-auto mt-10 max-w-3xl text-center text-white/75"
//             >
//               Bu nazariya emas — bu biz har kuni ishlatadigan real tizim.
//             </motion.p>
//           </Card>
//         </Container>
//       </Section>

//       {/* PRICE / CTA */}
//       <Section className="py-10 sm:py-14">
//         <Container>
//           <Card className="p-6 sm:p-10">
//             <motion.h3
//               variants={fadeUp}
//               custom={0}
//               className="text-center text-2xl font-black sm:text-5xl"
//             >
//               DARHOL KIRISH — ATIGI $5!
//             </motion.h3>

//             <motion.div
//               variants={fadeUp}
//               custom={1}
//               className="mt-8 grid gap-8 lg:grid-cols-2"
//             >
//               <div className="text-white/85">
//                 <p className="text-lg font-black">Nega aynan $5?</p>
//                 <p className="mt-2">3 ta sabab:</p>

//                 <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/80">
//                   <li>
//                     Odam oz bo‘lsa ham sarmoya qilsa, amalda ko‘proq qo‘llaydi.
//                   </li>
//                   <li>
//                     Minglab jiddiy marketologlar ishlatib natija olgani yaxshi.
//                   </li>
//                   <li>
//                     Newsletter: hozir ishlayotgan strategiyalar (upsell keyingi
//                     sahifada 🙂).
//                   </li>
//                 </ol>
//               </div>

//               <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
//                 <p className="text-sm font-semibold text-white/70">Tezkor harakat</p>
//                 <p className="mt-2 text-2xl font-black text-white">Kirishni oling</p>

//                 <button className="mt-6 w-full rounded-2xl bg-emerald-500 px-5 py-4 text-base font-extrabold text-white hover:bg-emerald-600 active:scale-[0.99]">
//                   Sotib olish va kirish
//                 </button>

//                 <p className="mt-3 text-center text-xs text-white/55">
//                   Mobil uchun ideal: katta tugma, oson bosiladi.
//                 </p>
//               </div>
//             </motion.div>
//           </Card>
//         </Container>
//       </Section>

//       {/* GUARANTEE */}
//       <Section className="pb-12">
//         <Container>
//           <Card className="p-6 sm:p-10">
//             <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-center">
//               <motion.div
//                 variants={fadeUp}
//                 custom={0}
//                 className="mx-auto flex justify-center"
//               >
//                 <div className="relative h-36 w-36 overflow-hidden rounded-full border-[6px] border-red-500 sm:h-52 sm:w-52">
//                   <Image
//                     src="/guarantee.png"
//                     alt="30 kun kafolat"
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 144px, 208px"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={1}>
//                 <h3 className="text-xl font-black sm:text-3xl">
//                   Ha, albatta kafolat bor!
//                 </h3>

//                 <p className="mt-4 text-white/80">
//                   Men natijani 100% kafolatlay olmayman. Lekin bitta narsani
//                   kafolatlayman: oladigan qiymatingiz to‘lovingizdan{" "}
//                   <span className="font-black text-white">10 barobar</span> yuqori
//                   bo‘ladi.
//                 </p>

//                 <p className={`mt-4 font-bold ${RED}`}>
//                   30 kun ichida qiymat yoqmasa — pulni qaytaraman. Savolsiz.
//                 </p>
//               </motion.div>
//             </div>
//           </Card>
//         </Container>
//       </Section>

//       {/* FAQ */}
//       <Section className="border-t border-white/10 bg-[#07102A]">
//         <Container>
//           <div className="py-10 sm:py-14">
//             <motion.h3
//               variants={fadeUp}
//               custom={0}
//               className="text-center text-2xl font-black sm:text-5xl"
//             >
//               TEZ-TEZ SO‘RALADIGAN SAVOLLAR
//             </motion.h3>

//             <div className="mx-auto mt-8 max-w-3xl space-y-7">
//               <motion.div variants={fadeUp} custom={1} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
//                 <p className="font-black">Savol: So‘nggi o‘zgarishlarda ham ishlaydimi?</p>
//                 <p className="mt-2 text-white/80">
//                   Javob: Ha! Bu framework aynan yangi AI va algoritm bilan ishlash
//                   uchun yaratilgan.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={2} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
//                 <p className="font-black">Savol: Texnik bilim shartmi?</p>
//                 <p className="mt-2 text-white/80">
//                   Javob: Yo‘q. Ads Manager’da ishlay olsangiz yetadi.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={3} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
//                 <p className="font-black">Savol: Natijani qachon ko‘raman?</p>
//                 <p className="mt-2 text-white/80">
//                   Javob: Kafolat yo‘q. Lekin tez deploy va tez test qilishga kuchli yordam beradi.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={4} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
//                 <p className="font-black">Savol: Mening sohamda ham ishlaydimi?</p>
//                 <p className="mt-2 text-white/80">
//                   Javob: Ha. Ko‘p sohalarda sinovdan o‘tgan — prinsiplar universal.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={5} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
//                 <p className="font-black">Savol: Katta budjet kerakmi?</p>
//                 <p className="mt-2 text-white/80">
//                   Javob: Yo‘q. Kuniga $10–20 bilan boshlab scale qilsa bo‘ladi.
//                 </p>
//               </motion.div>

//               <motion.div variants={fadeUp} custom={6} className="pt-2">
//                 <button className="w-full rounded-2xl bg-emerald-500 px-6 py-6 text-xl font-black text-white hover:bg-emerald-600 active:scale-[0.99]">
//                   BOSING VA SOTIB OLING
//                 </button>
//                 <p className="mt-3 text-center text-xs text-white/55">
//                   * Tugmani to‘lov sahifangizga ulaysiz.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </Container>
//       </Section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/10 py-10">
//         <Container>
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <p className="text-xs text-white/55">
//               © {new Date().getFullYear()} Rapid Launch & Scale
//             </p>
//             <a href="#top" className="text-xs font-semibold text-white/70 hover:text-white">
//               Tepaga qaytish ↑
//             </a>
//           </div>
//         </Container>
//       </footer>
//     </main>
//   );
// }
