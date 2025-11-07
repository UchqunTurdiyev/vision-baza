


// app/(dashboard)/leads/page.tsx
"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "@/constants/statuses";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";

type Lead = {
  _id?: string;
  id?: string;
  fullName: string;
  phone: string;
  source: string;
  status: string;
  note?: string;
};

export default function LeadsPage() {
  const [columns, setColumns] = useState<Record<string, Lead[]>>(
    () => Object.fromEntries(LEAD_STATUSES.map(s => [s, []]))
  );

  async function load() {
    try {
      const r = await fetch("/api/leads", { cache: "no-store" });
      if (!r.ok) {
        console.error("GET /api/leads failed:", r.status, await r.text());
        return;
      }
      const j = await r.json();
      const items: Lead[] = Array.isArray(j?.leads) ? j.leads : [];

      // ✅ har doim bo‘sh ustunlar ham bo‘lsin
      const grouped: Record<string, Lead[]> = Object.fromEntries(LEAD_STATUSES.map(s => [s, []]));
      for (const lead of items) {
        const s = lead.status;
        (grouped[s] ??= []).push(lead);
      }
      setColumns(grouped);
    } catch (e) {
      console.error("load() error:", e);
    }
  }

  useEffect(() => { load(); }, []);

  async function moveLead(serverId: string, nextStatus: string) {
    try {
      const r = await fetch(`/api/leads/${serverId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!r.ok) console.error("PATCH failed:", r.status, await r.text());
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

    // 🔁 Optimistic UI
    setColumns(prev => {
      const next = { ...prev };
      const fromArr = Array.from(next[from] ?? []);
      const idx = fromArr.findIndex(l => String(l._id ?? l.id) === draggableId);
      if (idx === -1) return prev;

      const [item] = fromArr.splice(idx, 1);
      item.status = to;
      next[from] = fromArr;
      next[to] = [...(next[to] ?? []), item];
      return next;
    });

    // 🔗 Serverga yuboramiz
    moveLead(draggableId, to);
  }

  return (
    <div className="p-5">
      <Card className="p-4">
        <CardTitle>Operator panel — Lead statuslari</CardTitle>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {LEAD_STATUSES.map((status) => (
                <Droppable key={status} droppableId={status}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-white/5 p-3 rounded-xl min-h-[300px] border border-white/10"
                    >
                      <h2 className="text-center font-semibold text-white mb-3">
                        {status} {(columns[status]?.length ?? 0) > 0 ? `(${columns[status].length})` : ""}
                      </h2>

                      {(columns[status] ?? []).map((lead, index) => {
                        // ✅ doim STRING va UNIK bo‘lsin
                        const idStr = String(lead._id ?? lead.id ?? `${lead.phone}-${index}`);
                        return (
                          <Draggable key={idStr} draggableId={idStr} index={index}>
                            {(prov) => (
                              <div
                                ref={prov.innerRef}
                                {...prov.draggableProps}
                                {...prov.dragHandleProps}
                                className="bg-white/10 p-3 rounded-lg mb-2 text-white cursor-grab"
                              >
                                <div className="font-medium">{lead.fullName}</div>
                                <div className="text-sm text-white/60">{lead.phone}</div>
                                <Badge>{lead.source}</Badge>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
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
