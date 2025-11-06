// app/layout.tsx  (server component)
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = "uz"; // Agar til tanlovi bo'lsa, cookie/headers’dan serverda oling
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Brauzer tarjimasini to'xtatish (ixtiyoriy) */}
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
