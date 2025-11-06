import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Topbar() {
return (
<div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-gradient-to-b from-white/5 to-transparent sticky top-0 z-10 backdrop-blur-sm">
<div className="font-extrabold tracking-tight text-white text-lg">
Sotuv <span className="text-indigo-400">Mutaxassisi</span>
</div>
<div className="flex items-center gap-3 text-sm">
<Link href="/">Dashboard</Link>
<Link href="/leads">Leads</Link>
<Button variant="subtle" className="hidden md:inline-flex">Yangi lead</Button>
</div>
</div>
);
}