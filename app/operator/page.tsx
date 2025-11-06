"use client";
import { useEffect, useMemo, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { PIPELINE } from "@/constants/statuses";
await fetch("/api/leads", { cache: "no-store" }) // GET default


type Lead = { _id: string; fullName: string; phone: string; source: string; status: string; note?: string };

export default function OperatorBoard() {
  const [items, setItems] = useState<Lead[]>([]);

  const cols = useMemo(() => {
    const m: Record<string, Lead[]> = {};
    PIPELINE.forEach(c => (m[c] = []));
    for (const l of items) (m[l.status] ||= []).push(l);
    return m;
  }, [items]);

  async function load() {
    try {
      const r = await fetch("/api/leads", { cache: "no-store" });
      if (!r.ok) throw new Error(await r.text());
      const j = await r.json();
      setItems(Array.isArray(j.leads) ? j.leads : []);
    } catch {
      setItems([]);
    }
  }
  useEffect(() => { load(); }, []);

  async function updateStatus(id: string, next: string) {
    const r = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    if (!r.ok) console.error("PATCH failed", await r.text());
  }

  function onDragEnd(result: DropResult) {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    const from = source.droppableId;
    const to = destination.droppableId;
    if (from === to) return;
    // Optimistic
    setItems(prev => prev.map(l => (l._id === draggableId ? { ...l, status: to } : l)));
    updateStatus(draggableId, to);
  }

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-xl font-semibold mb-4">Operator — Kanban</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 min-w-max">
          {PIPELINE.map(col => (
            <Droppable droppableId={col} key={col}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}
                     className="w-80 bg-gray-50 border rounded-xl p-3">
                  <div className="font-semibold mb-2">{col}</div>
                  {(cols[col] || []).map((l, idx) => (
                    <Draggable draggableId={l._id} index={idx} key={l._id}>
                      {(p) => (
                        <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                             className="mb-2 rounded-lg border bg-white p-3 shadow">
                          <div className="font-medium">{l.fullName}</div>
                          <div className="text-sm text-gray-600">{l.phone} • {l.source}</div>
                          {l.note ? <div className="text-xs text-gray-500 mt-1">{l.note}</div> : null}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
