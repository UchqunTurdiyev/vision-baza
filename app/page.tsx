// app/page.tsx
// ❌ redirect kerak emas, o‘chirib tashlaymiz
// import { redirect } from "next/navigation";

import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="lg:max-w-5xl w-full mx-auto px-4 py-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Vision Group Jamoasi
        </h1>

      </div>
    </main>
  );
}
