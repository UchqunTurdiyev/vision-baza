"use client";
import { useState } from "react";

export default function NewLeadPage() {
  const [form, setForm] = useState({ fullName: "", phone: "", source: "Telegram", note: "" });
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const r = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error(await r.text());
      setForm({ fullName: "", phone: "", source: form.source, note: "" });
      alert("Lead saqlandi. (Status: LID)");
    } catch (err: any) {
      alert(`Xato: ${err?.message ?? err}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Yangi lead</h1>
      <form onSubmit={submit} className="grid gap-3">
        <input className="border rounded px-3 py-2" placeholder="To‘liq ism" required
               value={form.fullName} onChange={e=>setForm({...form, fullName: e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="Telefon (+998...)"
               value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} required/>
        <input className="border rounded px-3 py-2" placeholder="Manba (Telegram/Instagram/Web)"
               value={form.source} onChange={e=>setForm({...form, source: e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="Izoh (ixtiyoriy)"
               value={form.note} onChange={e=>setForm({...form, note: e.target.value})}/>
        <button disabled={sending} className="rounded bg-black text-white px-4 py-2">
          {sending ? "Yuborilmoqda..." : "Saqlash"}
        </button>
      </form>
    </div>
  );
}
