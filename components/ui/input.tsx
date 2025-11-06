import * as React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
return (
<input
{...props}
className={[
"w-full px-3 py-2 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40",
"outline-none focus:ring-2 focus:ring-indigo-400",
props.className ?? "",
].join(" ")}
/>
);
}