// app/layout.tsx  (server component)
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

// ✅ Shriftlar — self-hosted (next/font). Render-bloklovchi tashqi so'rov yo'q,
// FOUT/CLS kamayadi, mobil/Instagram brauzerda sahifa sezilarli tez ochiladi.
// Sarlavhalar uchun Poppins (jasur, zamonaviy), matn uchun Source Sans 3
// (o'qilishi oson, ishonchli — kurs sotuv sahifasi uchun tavsiya qilingan juftlik).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

const PIXEL_ID_SALES =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_SALES ?? "874895024822350";
const PIXEL_ID_TARGET =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_TARGET ?? "2398531020592784";
const PIXEL_ID_TARGET_KOURSE =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_TARGET_KOURSE ?? "1499689861130089";
const PIXEL_ID_TARGET_LID_MAGNIT =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_TARGET_LID_MAGNIT ?? "1350142093106140";
const PIXEL_ID_TARGET_VISION =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_TARGET_VISION ?? "1780132279307506";

// ✅ xohlasangiz false qiling (PageView yubormaydi)
const TRACK_PAGEVIEW = true;

const SITE = "https://vision-group.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Vision Group — Target, Performance Marketing va Sotuv tizimlari",
    template: "%s | Vision Group",
  },
  description:
    "Vision Group — Uchqun Turdiyev jamoasi. Target reklama, Performance Marketing, Meta (Instagram/Facebook) Ads, Pixel + CAPI va CRM integratsiyasi orqali biznesingiz uchun barqaror lead va sotuv oqimini quramiz.",
  applicationName: "Vision Group",
  authors: [{ name: "Uchqun Turdiyev" }],
  creator: "Uchqun Turdiyev",
  publisher: "Vision Group",
  keywords: [
    "target",
    "targetolog",
    "target reklama",
    "performance marketing",
    "Performance Marketing kursi",
    "Meta",
    "Meta Ads",
    "Meta reklama",
    "Instagram reklama",
    "Facebook reklama",
    "Pixel CAPI",
    "CRM integratsiya",
    "Uchqun Turdiyev",
    "Uchqun Turdiev",
    "Vision Group",
    "marketing",
    "marketolog",
    "marketing agentligi",
    "marketing strategiyasi",
    "sotuv tizimi",
    "sotuv bo‘limi",
    "ROP",
    "SMM xizmatlari",
    "copywriting",
    "web-sayt yaratish",
    "Telegram bot",
    "lead generation",
    "Samarqand marketing",
    "business audit",
    "online reklama",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Vision Group",
    locale: "uz_UZ",
    title: "Vision Group — Target, Performance Marketing va Sotuv tizimlari",
    description:
      "Uchqun Turdiyev jamoasi. Target, Performance Marketing, Meta Ads, Pixel + CAPI va CRM integratsiyasi bilan barqaror lead va sotuv oqimini quramiz.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Vision Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Group — Target, Performance Marketing va Sotuv tizimlari",
    description:
      "Uchqun Turdiyev jamoasi. Target, Performance Marketing, Meta Ads, Pixel + CAPI va CRM integratsiyasi.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7Ixx-WvobudWil_tPEn5P3j9XnnWRnD_scgSb-26DAw",
  },
};

// ✅ JSON-LD — Google'da "Uchqun Turdiyev", "performance marketing", "Meta", "target"
// so'rovlarida saytni tanitishga yordam beruvchi tuzilgan ma'lumot.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Vision Group",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "Target reklama, Performance Marketing va sotuv tizimlari agentligi. Meta (Instagram/Facebook) Ads, Pixel + CAPI va CRM integratsiyasi.",
      founder: { "@id": `${SITE}/#uchqun` },
      areaServed: "UZ",
      sameAs: [
        "https://t.me/Uchqun_Turdiev",
        "https://www.instagram.com/vision.group.target",
        "https://www.youtube.com/@uchqunturdiev6271",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+998996277727",
        contactType: "sales",
        areaServed: "UZ",
        availableLanguage: ["uz", "ru"],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#uchqun`,
      name: "Uchqun Turdiyev",
      alternateName: "Uchqun Turdiev",
      url: SITE,
      jobTitle: "Performance Marketing mutaxassisi, Vision Group asoschisi",
      worksFor: { "@id": `${SITE}/#organization` },
      knowsAbout: [
        "Performance Marketing",
        "Meta Ads",
        "Target reklama",
        "Pixel va CAPI",
        "CRM integratsiya",
        "Sotuv tizimlari",
      ],
      sameAs: [
        "https://t.me/Uchqun_Turdiev",
        "https://www.instagram.com/vision.group.target",
        "https://www.youtube.com/@uchqunturdiev6271",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Vision Group",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "uz-UZ",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${poppins.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Tezroq tashqi resurslar uchun preconnect */}
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" crossOrigin="" />

        <meta name="google" content="notranslate" />
        <meta
          name="facebook-domain-verification"
          content="kf75zkwggn22mu7nyva1eovdldfh7w"
        />

        {/* Google Analytics (GA4) + Google Ads — kontentdan keyin yuklanadi */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWBHX63YJH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWBHX63YJH', { page_path: window.location.pathname });
            gtag('config', 'AW-18037719903');
          `}
        </Script>

        {/* ✅ Meta Pixel base — afterInteractive: PageView erta ishga tushadi,
            shunda reklamadan kelgan tashrifchilar "Landing page view" sifatida
            to'g'ri sanaladi (lazyOnload juda kech edi → tashriflar yo'qolardi). */}
        <Script id="fb-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${PIXEL_ID_SALES}');
            fbq('init', '${PIXEL_ID_TARGET}');
            fbq('init', '${PIXEL_ID_TARGET_KOURSE}');
            fbq('init', '${PIXEL_ID_TARGET_LID_MAGNIT}');
            fbq('init', '${PIXEL_ID_TARGET_VISION}');
            ${TRACK_PAGEVIEW ? "fbq('track','PageView');" : ""}
          `}
        </Script>
      </head>

      <body className="min-h-screen antialiased">
        {/* ✅ noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID_SALES}&ev=PageView&noscript=1" alt="" />
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID_TARGET}&ev=PageView&noscript=1" alt="" />
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID_TARGET_KOURSE}&ev=PageView&noscript=1" alt="" />
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID_TARGET_LID_MAGNIT}&ev=PageView&noscript=1" alt="" />
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID_TARGET_VISION}&ev=PageView&noscript=1" alt="" />
            `,
          }}
        />

        <div className="min-h-screen bg-[#0b1220] text-white">
          <Topbar />
          <div className="flex">
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </div>

        <SpeedInsights />
      </body>
    </html>
  );
}
