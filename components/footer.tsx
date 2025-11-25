import React from 'react'

export default function Footer() {
  return (
    <footer className="relative px-6 py-8 border-t border-slate-800/70 bg-slate-950/60">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Chap tomoni – brend va qisqa izoh */}
    <div>
      <p className="text-sm font-semibold text-emerald-200">
        Vision Group 
      </p>
      <p className="mt-1 text-xs text-slate-400 max-w-md">
        Marketing, target, sotuv va SMM xizmatlari. <br />
        Biznesingizni to‘liq audit qilamiz. <br />
        Sotuv bo‘limingizni tizimlashtirib beramiz.
      </p>
    </div>

    {/* O‘ng tomoni – kontakt va ijtimoiy tarmoqlar */}
    <div className="flex flex-col items-center md:items-end gap-2">
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs text-slate-300">
        <a
          href="tel:+998913137727"
          className="hover:text-emerald-300 transition"
        >
          +998 91 313 77 27
        </a>
     
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs text-slate-300">
        <a
          href="https://t.me/vision_g_bot"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300 transition"
        >
          Telegram
        </a>
        <a
          href="https://www.instagram.com/vision_group_uz"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300 transition"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-300 transition"
        >
          YouTube
        </a>
      </div>

      <p className="mt-1 text-[10px] text-slate-500">
        © {new Date().getFullYear()} Vision Group. Barcha huquqlar himoyalangan.
      </p>
    </div>
  </div>
</footer>

  )
}
