"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function NewLeadPage() {
  const [form, setForm] = useState({ fullName: "", phone: "", source: "Telegram", note: "" });
  const [sending, setSending] = useState(false);

  async function createLead(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const r = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) {
        console.error("POST /api/leads failed:", r.status, await r.text());
        return;
      }
      setForm({ fullName: "", phone: "", source: form.source, note: "" });
      alert("Lead saqlandi (status: LID)");
    } catch (err) {
      console.error("createLead error:", err);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-5">
      <Card className="p-5">
        <CardTitle>Yangi lead qo'shish</CardTitle>
        <CardContent>
          <form onSubmit={createLead} className="grid gap-3">
            <Input placeholder="To‘liq ism" value={form.fullName}
                   onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
            <Input placeholder="Telefon (+998...)" value={form.phone}
                   onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Input placeholder="Manba (Telegram/Instagram/Web)" value={form.source}
                   onChange={(e) => setForm({ ...form, source: e.target.value })} />
            <Input placeholder="Izoh (ixtiyoriy)" value={form.note}
                   onChange={(e) => setForm({ ...form, note: e.target.value })} />
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Yuborilmoqda..." : "Saqlash"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}