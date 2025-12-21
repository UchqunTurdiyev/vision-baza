// app/lid-magnit/page.tsx

import Link from "next/link";
import LidMagnitForm from "./_components/LidMagnitForm";

export default function LidMagnitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Vision-group uslubiga yaqin fon (xohlasangiz global fon class’ingizga almashtiring) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(16,185,129,0.10),transparent_55%)]" />

      <div className="mx-auto w-full lg:max-w-2xl px-4 py-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <h1 className="text-2xl font-bold leading-tight">
            Meta kompaniyasi xodimlari tomonidan target reklamalarimni audit qildirdim!
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/85">
            Natijada reklamam 180° ga o‘zgardi: lidlar sifati oshdi, lidlar 2 baravar arzonlashdi
            va ko‘plab insaydlarga ega bo‘ldim.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/85">
            Audit qildirishimning sababi oddiy: kuniga $1500 gacha target reklamaga sarflardim.
            Shu sababli oyiga 3 marta audit qildirib turaman.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Sizgaxam ushbu texnikalar qiziqmi unda ro&apos;yxatdan o&apos;ting bepul qo&apos;llanmaga ega bo&apos;ling
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/85">
              Agar siz professional target kursimga qiziqsangiz unda ushbu link orqali malumot oling 
              <Link rel="stylesheet" href="/target-kursi" className="text-blue-500 italic"> Target kursi</Link>
          </p>

          <div className="mt-8">
            <LidMagnitForm />
          </div>

          <p className="mt-4 text-xs text-white/60">
            Email kiritish ixtiyoriy. Tugmani bosganingizdan so‘ng “Raxmat” sahifasiga o‘tasiz va
            5 sekunddan keyin Telegram kanalga yo‘naltirilasiz.
          </p>
        </div>
      </div>
    </main>
  );
}
