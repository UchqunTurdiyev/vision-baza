/* eslint-disable @next/next/no-img-element */
// app/layout.tsx  (server component)
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";


const PIXEL_ID_SALES = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '874895024822350';
const PIXEL_ID_TARGET = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '2398531020592784';
const PIXEL_ID_TARGET_KOURSE = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '1499689861130089';
const PIXEL_ID_TARGET_LID_MAGNIT = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '1350142093106140';


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
<meta name="facebook-domain-verification" content="kf75zkwggn22mu7nyva1eovdldfh7w" />


          {/* Meta Pixel base */}
          <Script id="fb-pixel-base" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)n._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${PIXEL_ID_SALES}');
    fbq('init', '${PIXEL_ID_TARGET}');
    fbq('init', '${PIXEL_ID_TARGET_KOURSE}');
    fbq('init', '${PIXEL_ID_TARGET_LID_MAGNIT}');
    // bu yerda fbq('track', 'PageView'); NI OLIB TASHLAYMIZ
  `}
</Script>


      </head>
      <body className="min-h-screen antialiased">
      <noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src={`https://www.facebook.com/tr?id=${PIXEL_ID_SALES}&ev=PageView&noscript=1`}
    alt=""
  />

  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src={`https://www.facebook.com/tr?id=${PIXEL_ID_TARGET}&ev=PageView&noscript=1`}
    alt=""
  />

<img
    height="1"
    width="1"
    style={{ display: "none" }}
    src={`https://www.facebook.com/tr?id=${PIXEL_ID_TARGET_KOURSE}&ev=PageView&noscript=1`}
    alt=""
  />
  <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src={`https://www.facebook.com/tr?id=${PIXEL_ID_TARGET_LID_MAGNIT}&ev=PageView&noscript=1`}
      alt=""
    />
</noscript>
      

      <div className="min-h-screen bg-[#0b1220] text-white">
      <Topbar />
      <div className="flex">
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






