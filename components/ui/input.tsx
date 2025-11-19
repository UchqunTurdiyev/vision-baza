import * as React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
return (
<input
{...props}
className={[
"w-full px-3 py-1 rounded-2xl bg-white/300 border border-indigo-500 text-gray-200 placeholder:text-gray-300",
"outline-none focus:ring-2 focus:ring-indigo-400",
props.className ?? "",
].join(" ")}
/>
);
}