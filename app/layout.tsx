// app/layout.tsx  (server component)
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";


const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '874895024822350';
const PIXEL2_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '874895024822350';


export const metadata = {
  title: "Vision Group — Marketing, target va sotuv tizimlari",
  description:
    "Vision Group — Marketing strategiyasi, target, sotuv tizimi, SMM, web-sayt va Telegram bot yechimlari orqali biznesingiz uchun barqaror lead va sotuv oqimini quradigan agentlik.",
  keywords: [
    "Vision Group",
    "marketing",
    "marketolog",
    "marketing agentligi",
    "marketing strategiyasi",
    "target reklama",
    "target",
    "targetolog",
    "Instagram reklama",
    "Facebook reklama",
    "Meta Ads",
    "sotuv tizimi",
    "sotuv",
    "ROP",
    "sotuv bo‘limi",
    "SMM xizmatlari",
    "copywriting",
    "web-sayt yaratish",
    "Telegram bot",
    "lead generation",
    "Samarqand marketing",
    "business audit",
    "online reklama"
  ],
  openGraph: {
    title: "Vision Group — Marketing Target reklama,  va sotuv tizimlari",
    description:
      "Biznesingizni to‘liq audit qilamiz, marketing va target strategiyasini ishlab chiqamiz, sotuv veb-sayti va Telegram bot bilan birga barqaror lead va sotuv oqimini quramiz.",
    url: "https://vision-group.uz",
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
        <meta name="google" content="notranslate" />
        <title>Vision Group — Marketing, Target va Sotuv tizimlari</title>
<meta
  name="description"
  content="Vision Group — Marketing target reklama, , sotuv tizimi, SMM va web-sayt yechimlari bilan biznesingiz uchun barqaror lead va sotuv oqimini quradigan agentlik. Biznes auditidan tortib, target, sotuv veb-sayti va Telegram botgacha bir joyda."
/>
<meta
  name="keywords"
  content="Vision Group, marketing agentligi target reklama, targetolog, Instagram reklama, Facebook reklama, sotuv tizimi, sotuv bo‘limi, SMM xizmatlari, web-sayt yaratish, Telegram bot, lead generation, Samarqand marketing"
/>




        

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
            fbq('init', '${PIXEL2_ID}');
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
      

      <div className="min-h-screen bg-[#0b1220] text-white">
      <Topbar />
      <div className="flex mx-20 mx-auto">
        {/* <Sidebar /> */}
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
        <SpeedInsights />
        </body>
    </html>
  );
}


