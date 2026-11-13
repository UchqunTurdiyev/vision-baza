import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "CRM'ga kirish",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-16">
      {/* fon: yashil nur va nozik to'r */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
