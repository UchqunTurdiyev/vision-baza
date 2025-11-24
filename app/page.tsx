// app/page.tsx
// ❌ redirect kerak emas, o‘chirib tashlaymiz
// import { redirect } from "next/navigation";

import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Vision Group CRM bosh sahifasi
        </h1>

        <p className="mt-4 text-slate-300 max-w-2xl">
          Bu yerda Sotuv va Target bo‘yicha barcha leadlarni boshqarishingiz mumkin.
          Kerakli bo‘limni tanlang.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          
          <a
            href="/leads"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-900/50 hover:bg-indigo-400 transition"
          >
            🧲 Sotuv Kursi)
          </a>

          <a
            href="/target/new"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-indigo-400/60 text-indigo-100 hover:bg-indigo-500/10 transition"
          >
            🎯 Target Kursi
          </a>

        </div>
      </div>
    </main>
  );
}
