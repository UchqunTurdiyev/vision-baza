"use client";

import { useEffect, useState } from "react";

type Props = {
  leadId: string;
  onAfterAdd?: (lastText: string) => void;
};

type LeadComment = {
  _id?: string;
  text: string;
  createdAt?: string;
};

export default function TargetLeadComments({ leadId, onAfterAdd }: Props) {
  const [comments, setComments] = useState<LeadComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function loadComments() {
    try {
      setLoading(true);
      setError(null);
  
      const res = await fetch(`/api/target-leads/${leadId}/comments`);
  
      if (!res.ok) {
        const text = await res.text();
        console.error(
          "Target comments API error:",
          res.status,
          text
        );
        throw new Error("Kommentlarni olishda xatolik");
      }
  
      const data = await res.json();
      setComments(Array.isArray(data?.comments) ? data.comments : []);
    } catch (e: any) {
      console.error(e);
      setError(e?.message || "Xatolik");
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    void loadComments();
  }, [leadId]);

  async function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;

    try {
      setSending(true);
      setError(null);
      const res = await fetch(`/api/target-leads/${leadId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Komment qo‘shishda xatolik");
      }

      const data = await res.json().catch(() => ({}));
      const newComment: LeadComment =
        data?.comment ?? {
          text: trimmed,
          createdAt: new Date().toISOString(),
        };

      setComments((prev) => [...prev, newComment]);
      setText("");
      if (onAfterAdd) onAfterAdd(trimmed);
    } catch (e: any) {
      console.error(e);
      setError(e?.message || "Komment qo‘shishda xatolik");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mt-2 border-t border-white/10 pt-2 text-xs text-white/80">
      <div className="max-h-40 overflow-y-auto space-y-1 mb-2 pr-1">
        {loading && <div>Komentlar yuklanmoqda...</div>}
        {!loading && comments.length === 0 && (
          <div className="text-white/40">Kommentlar yo‘q.</div>
        )}
        {comments.map((c, idx) => (
          <div
            key={c._id ?? idx}
            className="rounded-md bg-white/5 px-2 py-1 flex justify-between gap-2"
          >
            <div>{c.text}</div>
            {c.createdAt && (
              <div className="text-[10px] text-white/40 whitespace-nowrap">
                {new Date(c.createdAt).toLocaleString("uz-UZ", {
                  day: "2-digit",
                  month: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-1">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Komment yozish..."
          className="flex-1 rounded-md border border-white/20 bg-transparent px-2 py-1 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={sending}
          className="px-2 py-1 rounded-md bg-white/20 text-[11px] font-semibold hover:bg-white/30 disabled:opacity-60"
        >
          {sending ? "..." : "Qo‘shish"}
        </button>
      </div>

      {error && (
        <div className="mt-1 text-[10px] text-red-400">{error}</div>
      )}
    </div>
  );
}
