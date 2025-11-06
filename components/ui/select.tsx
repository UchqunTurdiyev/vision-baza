import * as React from "react";
export function Select({ value, onChange, options, className = "" }: { value?: string; onChange?: (v: string) => void; options: string[]; className?: string }) {
return (
<select
className={["w-full px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-indigo-400", className].join(" ")}
value={value}
onChange={(e) => onChange?.(e.target.value)}
>
{options.map((o) => (
<option key={o} value={o} className="bg-[#0b1220] text-white">
{o || "— Barchasi —"}
</option>
))}
</select>
);
}