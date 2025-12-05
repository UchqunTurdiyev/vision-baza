// app/page.tsx
// ❌ redirect kerak emas, o‘chirib tashlaymiz
// import { redirect } from "next/navigation";

import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Vision Group Jamoasi
        </h1>

      </div>
    </main>
  );
}
