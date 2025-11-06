import { Card } from "@/components/ui/card";


export default function Dashboard() {
return (
<div className="grid md:grid-cols-3 gap-4">
<Card className="p-5">
<div className="text-sm text-white/60">Bugun yangi leadlar</div>
<div className="text-3xl font-bold tracking-tight">—</div>
</Card>
<Card className="p-5">
<div className="text-sm text-white/60">Faol muzokaralar</div>
<div className="text-3xl font-bold tracking-tight">—</div>
</Card>
<Card className="p-5">
<div className="text-sm text-white/60">Yopildi — G‘alaba</div>
<div className="text-3xl font-bold tracking-tight">—</div>
</Card>
</div>
);
}