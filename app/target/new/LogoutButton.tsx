"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        await fetch("/api/admin/session", { method: "DELETE" }).catch(() => null);
        window.location.href = "/login";
      }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-lg backdrop-blur transition hover:border-red-400/40 hover:text-red-300 disabled:opacity-60"
    >
      <LogOut className="h-4 w-4" />
      Chiqish
    </button>
  );
}
