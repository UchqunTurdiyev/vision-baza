import * as React from "react";


const base =
"inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-0 active:scale-[.98]";


const variants: Record<string, string> = {
primary:
"bg-gradient-to-b from-indigo-500 to-indigo-600 py-2 text-white shadow-[0_8px_20px_rgba(79,70,229,.35)] hover:from-indigo-400 hover:to-indigo-600 focus:ring-indigo-400",
subtle:
"bg-white/5 border border-white/10 text-white hover:bg-white/10",
ghost:
"bg-transparent text-white/80 hover:bg-white/10",
};


export function Button({ variant = "primary", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants }) {
return (
<button {...props} className={[base, variants[variant] ?? variants.primary, className].join(" ")} />
);
}