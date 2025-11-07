// app/layout.tsx  (server component)
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";


const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '874895024822350';

export const metadata: Metadata = {
  title: 'Sotuv Kursi — Professional Landing',
  description: 'Sotuv kursi uchun zamonaviy landing sahifa. 1 oyda amaliy ko‘nikmalar, ishga yo‘naltirish, kafolatlangan natija.',
  openGraph: {
  title: 'Sotuv Kursi — Professional Landing',
  description: '1 oyda amaliy ko‘nikmalar. Ishga yo‘naltirish. Ustozlar — 10+ yillik tajriba.',
  type: 'website'
  },
  metadataBase: new URL('https://example.com')
  };


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = "uz"; // Agar til tanlovi bo'lsa, cookie/headers’dan serverda oling
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Brauzer tarjimasini to'xtatish (ixtiyoriy) */}
        <meta name="google" content="notranslate" />

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
        </body>
    </html>
  );
}
