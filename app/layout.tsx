// app/layout.tsx  (server component)
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';


const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '874895024822350';


export const metadata = {
  title: "Vision Group — Sotuv mutaxassisi tayyorlash kursi va ish o‘rinlari",
  description:
    "Vision Group — sotuv mutaxassisi tayyorlash kursi va sotuv bo‘yicha yuqori daromadli ish o‘rinlari platformasi. Amaliy darslar, kafolatlangan ish takliflari va real natijalar.",
  keywords: [
    "sotuvchi",
    "sotuv mutaxassisi tayyorlash kursi",
    "sotuv mutaxassisi",
    "sotuvchi kursi",
    "sotuv kursi",
    "sotuv bo‘yicha ish",
    "ish kerak sotuvchi",
    "sotuv xodimi",
    "sales kurs",
    "sales manager kursi",
    "sotuv xodimi",
    "sotuv menejeri",
    "ish kerak",
    "ishchi kerak",
    "sotuv texnikasi",
    "sotuv kursi",
    "sotuv bo‘yicha ish",
    "hh.uz",
    "hh.ru",
    "sales jobs uzbekistan"
  ],
  openGraph: {
    title: "Vision Group — Sotuv mutaxassisi tayyorlash kursi",
    description:
      "Amaliyotga asoslangan sotuv mutaxassisi tayyorlash kursi. Real keyslar, mentorlar tajribasi va kafolatlangan ish o‘rinlari Vision Baza platformasida.",
    url: "https://vision-group.uz/leads",
    type: "website"
  }
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = "uz"; // Agar til tanlovi bo'lsa, cookie/headers’dan serverda oling
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vision Baza",
    url: "https://www.vision-group.uz/leads",
    logo: "https://www.vision-group.uz/logo.png",
    description:
      "Sotuvchi, sotuv xodimi va sotuv menejerlari uchun ish o‘rinlari va treninglar platformasi.",
    sameAs: [
      "https://t.me/sotuv_mutaxassisi",
      "https://www.instagram.com/sotuv_mutaxassisi/",
    ],
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Brauzer tarjimasini to'xtatish (ixtiyoriy) */}
        <link rel="icon" href="https://www.vision-group.uz/logo.png" sizes="48x48" />
        <title>Vision Group — Sotuv mutaxassisi tayyorlash kursi va ish o‘rinlari</title>
        <meta name="google" content="notranslate" />
<meta name="description" content="Vision Group — sotuv mutaxassisi tayyorlash kursi va sotuv bo‘yicha yuqori daromadli ish o‘rinlari platformasi. Amaliy darslar, kafolatlangan ish takliflari va real natijalar." />
<meta name="keywords" content="sotuv mutaxassisi tayyorlash kursi, sotuvchi kursi, sotuv kursi, ish kerak sotuvchi, sotuv xodimi, sotuv bo‘yicha ish" />



        

          {/* Meta Pixel base */}
  <Script id="fb-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

      </head>
      <body className="min-h-screen antialiased">
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
