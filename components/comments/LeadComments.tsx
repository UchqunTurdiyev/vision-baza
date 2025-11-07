// components/comments/LeadComments.tsx
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Comment = {
  _id: string;
  text: string;
  author?: string;
  createdAt?: string;
};

type Props = {
  leadId: string;
  onAfterAdd?: (lastText: string) => void;  // ✅ qo'shildi
};

export default function LeadComments({ leadId, onAfterAdd }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [text, setText] = useState("");

  async function load() {
    try {
      setLoading(true);
      const r = await fetch(`/api/leads/${leadId}/comments`, { cache: "no-store" });
      if (!r.ok) return;
      const j = await r.json();
      const arr = Array.isArray(j?.comments) ? j.comments : [];
      setComments(arr);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { if (leadId) load(); }, [leadId]);

  async function add() {
    const v = text.trim();
    if (!v) return;

    // Optimistic
    const tempId = `tmp-${Date.now()}`;
    const optimistic: Comment = {
      _id: tempId,
      text: v,
      author: "Siz",
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [optimistic, ...prev]);
    setText("");
    setSending(true);

    try {
      const r = await fetch(`/api/leads/${leadId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: v }),
      });
      if (!r.ok) {
        // rollback
        setComments((prev) => prev.filter((c) => c._id !== tempId));
        setText(v);
        return;
      }
      const j = await r.json();
      const arr = Array.isArray(j?.comments) ? j.comments : [];
      setComments(arr);
      // ✅ parentga oxirgi komment matnini aytib qo'yamiz
      onAfterAdd?.(arr[0]?.text ?? v);
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="mt-2 space-y-2"
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <div className="flex gap-2">
        <Input placeholder="Komment..." value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="subtle" onClick={add} disabled={sending || !text.trim()}>
          Qo‘shish
        </Button>
      </div>

      {loading ? (
        <div className="text-xs text-white/60">Yuklanmoqda...</div>
      ) : comments.length === 0 ? (
        <div className="text-xs text-white/60">Kommentlar yo‘q.</div>
      ) : (
        <div className="space-y-2 max-h-40 overflow-auto pr-1">
          {comments.map((c) => (
            <div key={c._id} className="text-xs text-white/80 border border-white/10 rounded p-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{c.author ?? "Operator"}</span>
                {c.createdAt ? <span className="text-white/50">{new Date(c.createdAt).toLocaleString()}</span> : null}
              </div>
              <div className="mt-1">{c.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
