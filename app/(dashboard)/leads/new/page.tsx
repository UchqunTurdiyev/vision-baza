// app/(dashboard)/leads/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "@/constants/statuses";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import LeadComments from "@/components/comments/LeadComments";

type Lead = {
  _id?: string;
  id?: string;
  fullName: string;
  phone: string;
  source: string;
  status: string;
  note?: string;
  lastCommentText?: string; // preview
};

export default function LeadsPage() {
  const [columns, setColumns] = useState<Record<string, Lead[]>>(
    () => Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]))
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // leadId -> open/closed

  async function load() {
    try {
      const r = await fetch("/api/leads", { cache: "no-store" });
      if (!r.ok) {
        console.error("GET /api/leads failed:", r.status, await r.text());
        return;
      }
      const j = await r.json();
      const items: Lead[] = Array.isArray(j?.leads) ? j.leads : [];

      const grouped: Record<string, Lead[]> = Object.fromEntries(
        LEAD_STATUSES.map((s) => [s, []])
      );
      for (const lead of items) (grouped[lead.status] ??= []).push(lead);
      setColumns(grouped);
    } catch (e) {
      console.error("load() error:", e);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function moveLead(serverId: string, nextStatus: string) {
    try {
      const r = await fetch(`/api/leads/${serverId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!r.ok) {
        console.error("PATCH failed:", r.status, await r.text());
      }
    } catch (e) {
      console.error("moveLead() error:", e);
    }
  }

  function onDragEnd(result: DropResult) {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    const from = source.droppableId;
    const to = destination.droppableId;

    setColumns((prev) => {
      const next = { ...prev };
      const fromArr = Array.from(next[from] ?? []);
      const idx = fromArr.findIndex((l) => String(l._id ?? l.id) === draggableId);
      if (idx === -1) return prev;
      const [item] = fromArr.splice(idx, 1);
      item.status = to;
      next[from] = fromArr;
      next[to] = [...(next[to] ?? []), item];
      return next;
    });

    void moveLead(draggableId, to);
  }

  // Komment qo‘shilganda preview’ni yangilash
  function updatePreview(leadId: string, lastText: string) {
    setColumns((prev) => {
      const next: typeof prev = {};
      for (const k of Object.keys(prev)) {
        next[k] = prev[k].map((l) =>
          String(l._id ?? l.id) === leadId
            ? { ...l, lastCommentText: lastText }
            : l
        );
      }
      return next;
    });
  }

  return (
    <div className="p-5">
      <Card className="p-4">
        <CardTitle>Operator panel — Lead statuslari</CardTitle>
        <CardContent>
          <div className="mb-4" />
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Agar statuslar soni boshqacha bo‘lsa, grid-cols ni moslang */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {LEAD_STATUSES.map((status) => (
                <Droppable key={status} droppableId={status}>
                  {(dropProvided) => (
                    <div
                      ref={dropProvided.innerRef}
                      {...dropProvided.droppableProps}
                      className="bg-white/5 p-3 rounded-xl min-h-[340px] border border-white/10"
                    >
                      <h2 className="text-center font-semibold text-white mb-3">
                        {status}{" "}
                        {(columns[status]?.length ?? 0) > 0
                          ? `(${columns[status].length})`
                          : ""}
                      </h2>

                      {(columns[status] ?? []).map((lead, index) => {
                        // ✅ Faqat real Mongo ID bilan ishlaymiz
                        const realId =
                          (lead.id && String(lead.id)) ||
                          (lead._id && String(lead._id)) ||
                          null;

                        const draggableKey =
                          realId ?? `noid-${lead.phone}-${index}`;
                        const draggableId = realId ?? draggableKey; // DnD uchun id bo‘lishi shart

                        const isOpen = realId ? !!expanded[realId] : false;
                        const preview = (lead.lastCommentText ?? "").trim();

                        return (
                          <Draggable
                            key={draggableKey}
                            draggableId={draggableId}
                            index={index}
                          >
                            {(dragProvided) => (
                              <div
                                ref={dragProvided.innerRef}
                                {...dragProvided.draggableProps}
                                className="bg-white/10 p-3 rounded-lg mb-2 text-white"
                              >
                                {/* Drag handle */}
                                <div
                                  {...dragProvided.dragHandleProps}
                                  className="text-xs text-white/50 flex items-center gap-2 mb-2 select-none cursor-grab"
                                  title="Ustunlar orasida ko‘chiring"
                                >
                                  <span>✥</span> Ko‘chirish
                                </div>

                                <div className="font-medium">
                                  {lead.fullName}
                                </div>
                                <div className="text-sm text-white/60">
                                  {lead.phone}
                                </div>
                                <Badge>{lead.source}</Badge>

                                {/* 1 qator preview (doim ko‘rinadi) */}
                                <div className="mt-2 text-xs text-white/70 truncate">
                                  {preview || "Kommentlar yo‘q."}
                                </div>

                                {/* ▼/▲ tugma — to‘liq kommentlar */}
                                <div
                                  className="mt-1 text-right"
                                  onMouseDown={(e) => e.stopPropagation()}
                                  onPointerDown={(e) => e.stopPropagation()}
                                  onTouchStart={(e) => e.stopPropagation()}
                                >
                                  {realId ? (
                                    <button
                                      type="button"
                                      className="text-white/70 text-xs underline"
                                      onClick={() =>
                                        setExpanded((p) => ({
                                          ...p,
                                          [realId]: !p[realId],
                                        }))
                                      }
                                    >
                                      {isOpen
                                        ? "▲ Yopish"
                                        : "▼ Barchasini ko‘rish"}
                                    </button>
                                  ) : (
                                    <span className="text-red-300 text-xs">
                                      ID topilmadi — komment o‘chirildi
                                    </span>
                                  )}
                                </div>

                                {/* Ochilganda to‘liq ro‘yxat + forma */}
                                {realId && isOpen ? (
                                  <LeadComments
                                    leadId={realId}
                                    onAfterAdd={(last) =>
                                      updatePreview(realId, last)
                                    }
                                  />
                                ) : null}
                              </div>
                            )}
                          </Draggable>
                        );
                      })}

                      {dropProvided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
}
