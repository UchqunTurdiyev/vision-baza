import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Topbar() {
return (
<div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-gradient-to-b from-white/5 to-transparent sticky top-0 z-10 backdrop-blur-sm">
<div className="font-extrabold tracking-tight text-white text-lg">
VISION <span className="text-indigo-400">Group</span>
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