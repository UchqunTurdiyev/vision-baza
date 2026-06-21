/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Star, MessageSquare, ArrowLeft } from "lucide-react"; // Ikonkalar uchun

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  avatarUrl: string;
  text?: string;
  youtubeId?: string;
  date?: string;
  rating?: number; // Yangi: 5 yulduzli sistema
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sardor M",
    role: "Biznes egasi",
    avatarUrl: "/sardor.jpeg",
    text: "Kursda bunaqa ma'lumotlar berilishini kutmagan edim, lidlar sifati sezilarli oshdi. Eng yoqqani — hammasi tizimli va mantiqiy.",
    youtubeId: "4Boc8FjHzGM",
    date: "2026-01-10",
    rating: 5,
  },
  {
    id: "t2",
    name: "Bek Marketing",
    role: "SMM mutaxassisi",
    avatarUrl: "/otzif.jpeg",
    text: "Ustoz darslar zo'r bo'lyapti. Man to'g'ri joyda ekanligimni borgan sari yanada aniqroq his qilib boryapman. Bizaga darsni shunchaki target emas, butun marketing tizimini qura oladigan mutaxassis o'tyapti. Katta rahmat ustoz! 👍👍",
    date: "2026-01-18",
    rating: 5,
  },
  {
    id: "t3",
    name: "G'anisher",
    role: "Targetolog",
    avatarUrl: "/g.jpeg",
    text: "2 yil tajribam hech narsa emas ekan 😂 Ustoz oldida, Olloh rozi boʻlsin sizdan. Muammoga aniq yechim berdiz. Tajribangiz kottaligi logikangizdan judayam bilinadi.",
    date: "2026-01-21",
    rating: 5,
  },

];

export default function Otzif({
  items = DEFAULT_TESTIMONIALS,
  title = "O'quvchilarimiz natijalari",
  subtitle = "Real insonlar, real tajribalar va o'sish ko'rsatkichlari.",
  ctaHref = "/target-kursi#register",
}: {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
  ctaHref?: string;
}) {
  return (
    <section className="py-16 px-4 max-w-[1100px] mx-auto overflow-hidden">
      
      {/* 1. Header & Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl text-left">
        
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/60 leading-relaxed font-medium">
            {subtitle} <span className="inline-block ml-2 px-2 py-0.5 bg-white/10 rounded-full text-xs text-yellow-300">+{items.length} ta fikr</span>
          </p>
        </div>
      </div>

      {/* 2. Testimonials Grid - Masonry-like layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((t) => (
          <article
            key={t.id}
            className="break-inside-avoid rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-transparent p-6 backdrop-blur-sm hover:border-yellow-300/30 transition-all duration-300 group"
          >
            {/* Header: User Info */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="h-14 w-14 rounded-2xl border-2 border-white/10 object-cover group-hover:border-yellow-300/50 transition-all"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 p-1 rounded-lg">
                  <MessageSquare className="w-3 h-3 text-black" />
                </div>
              </div>

              <div className="min-w-0">
                <p className="font-bold text-white text-lg leading-tight">{t.name}</p>
                <p className="text-xs text-white/50 font-medium mt-1 uppercase tracking-wider">
                  {t.role || "O'quvchi"} • {t.date}
                </p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4 text-yellow-400">
               {[...Array(t.rating || 5)].map((_, i) => (
                 <Star key={i} className="w-3.5 h-3.5 fill-current" />
               ))}
            </div>

            {/* Video Post (Youtube) */}
            {t.youtubeId && (
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video relative group/video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0&modestbranding=1`}
                  title={`${t.name} feedback`}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}

            {/* Text Post */}
            {t.text && (
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-4xl text-white/10 font-serif">“</span>
                <p className="text-[15px] leading-relaxed text-white/80 italic relative z-10">
                  {t.text}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* 3. Bottom CTA - "Qizdirish"ni davom ettirish */}
      <div className="mt-16 text-center border-t border-white/5 pt-12">
         <h4 className="text-xl font-bold mb-6">Siz ham ushbu natijalarga erishmoqchimisiz?</h4>
         <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-2xl bg-yellow-300 px-10 py-4 text-lg font-black text-[#050B2B] hover:bg-yellow-200 hover:scale-105 transition-all shadow-xl shadow-yellow-300/20"
         >
            Joyimni band qilish
         </Link>
      </div>
    </section>
  );
}