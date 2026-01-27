/* eslint-disable @next/next/no-img-element */
// app/lid-magnit/_components/otzif.tsx

type Testimonial = {
    id: string;
    name: string;
    role?: string;
    avatarUrl: string;   // /public dan yoki https link
    text?: string;       // matnli post (ixtiyoriy)
    youtubeId?: string;  // video bo‘lsa (ixtiyoriy)
    date?: string;
  };
  
  const DEFAULT_TESTIMONIALS: Testimonial[] = [
    {
      id: "t1",
      name: "Sardor M",
      role: "Biznes egasi",
      avatarUrl: "/sardor.jpeg",
      text: "Kursda bunaqa ma'lumotlar berilishini kutmagan edim, lidlar sifati sezilarli oshdi. Eng yoqqani — hammasi tizimli.",
      youtubeId: "4Boc8FjHzGM",
      date: "2026-01-10",
    },
    {
      id: "t2",
      name: "Bek Marketing",
      role: "SMM mutaxassisi",
      avatarUrl: "/otzif.jpeg",
      text: "Ustoz darslar zo'r bo'lyapti. Man to'g'ri joyda ekanligimni borgan sari yanada aniqroq his qilib boryapman, sababi bizaga darsni shunchaki target mutaxassisi emas balki butun marketing tizimini qura oladigan, kontentdan tortib mijoz sotib olishigacha bo'lgan tizimni boshqara oladigan mutaxassisdan dars olyapmiz deb hisoblayapman. Katta rahmat ustoz bundan buyog'i yanada qiziqarliroq bo'lib ketadi xudo xoxlasa👍👍",
      date: "2026-01-18",
    },
    {
      id: "t3",
      name: "Shahzod K.",
      role: "SMM / Marketing",
      avatarUrl: "/otzif2.jpeg",
      youtubeId: "Ihir2cTL_F8",
      date: "2026-01-21",
    },
    {
        id: "t4",
        name: "G'anisher",
        role: "Targetolog",
        avatarUrl: "/g.jpeg",
        text: " 2 yil tajribam xichnarsamas 😂 Ustoz oldida, Olloh rozi boʻlsin sizdan @Uchqunjon_turdiyev muammoga aniq yechim berdiz. Tajribez kottaligi bilinadi (logikez judayam kuchli ekan)",
        date: "2026-01-21",
      },
  ];

 
  
  export default function Otzif({
    items = DEFAULT_TESTIMONIALS,
    title = "Otziflar",
    subtitle = "Video va matnli fikrlar — real tajribalar.",
  }: {
    items?: Testimonial[];
    title?: string;
    subtitle?: string;
  }) {
    return (
      <section className="mt-10">
        <div>
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
          
          <p className="mt-1 text-sm text-white/70">{subtitle}. <span className="text-xs text-white/60">({items.length} ta)</span></p> 
          </div>
        </div>
  
        <div className="mt-5 flex justify-between flex-wrap gap-4
          ">
          {items.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur flex-1 min-w-[280px]"
            >
              {/* Header: avatar + name */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="h-11 w-11 rounded-full border border-white/15 object-cover"
                  loading="lazy"
                />
  
                <div className="min-w-0">
                  <p className="font-semibold leading-tight">{t.name}</p>
                  <p className="text-xs text-white/65">
                    {t.role ? t.role : "O‘quvchi"} {t.date ? `• ${t.date}` : ""}
                  </p>
                </div>
              </div>
  
              {/* Text post */}
              {t.text ? (
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  {t.text}
                </p>
              ) : null}
  
              {/* YouTube video */}
              {t.youtubeId ? (
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0&modestbranding=1`}
                      title={`${t.name} - Otzif video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    );
  }
  



//   Ustoz darslar zo'r bo'lyapti. Man to'g'ri joyda ekanligimni borgan sari yanada aniqroq his qilib boryapman, sababi bizaga darsni shunchaki target mutaxassisi emas balki butun marketing tizimini qura oladigan, kontentdan tortib mijoz sotib olishigacha bo'lgan tizimni boshqara oladigan mutaxassisdan dars olyapmiz deb hisoblayapman. Katta rahmat ustoz bundan buyog'i yanada qiziqarliroq bo'lib ketadi xudo xoxlasa👍👍