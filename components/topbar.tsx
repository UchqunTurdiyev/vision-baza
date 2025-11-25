import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Topbar() {
return (
<div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-gradient-to-b from-white/5 to-transparent sticky top-0 z-10 backdrop-blur-sm">
<div className="flex items-center gap-6 font-extrabold tracking-tight text-white ">
  <div className="text-2xl">VISION <span className="text-indigo-400 text-2xl">Group</span></div>


<div className="flex gap-4 pl-10 max-md:hidden">
          <Link
            href="/sotuv"
            className="inline-flex items-center text-lg justify-center  text-white font-semibold shadow-lg hover:text-indigo-400 transition"
          >
             Sotuv Kursi
          </Link>

          <Link
            href="/target"
            className="inline-flex text-lg items-center justify-center  text-indigo-100 hover:text-indigo-400 transition"
          >
             Target xizmati
          </Link>


        </div>
</div>


<div className="flex items-center gap-3 text-sm">
      <Image
        src="/logo.png"
        alt="ISFT logo"
        width={60}
        height={60}
        priority
        className="rounded-lg"
      />
</div>
</div>
);
}