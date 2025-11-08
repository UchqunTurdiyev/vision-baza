"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "@/constants/statuses";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import LeadComments from "@/components/comments/LeadComments";
import { Trash2 } from "lucide-react";

// Sana formatlaydi (client-safe)
function fmtDateTime(d?: string | Date) {
  if (!d) return "";
  try {
    const dt = new Date(d);
    return new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit"
    }).format(dt);
  } catch {
    return "";
  }
}

type Lead = {
  _id?: string;
  id?: string;
  fullName: string;
  phone: string;
  source: string;
  status: string;
  note?: string;
  createdAt?: string | Date;
  lastCommentText?: string;
};

export default function OperatorClient() {
  const [columns, setColumns] = useState<Record<string, Lead[]>>(
    () => Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]))
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // leadId -> opened/closed

  async function load() {
    const r = await fetch("/api/leads", { cache: "no-store" });
    if (!r.ok) return;
    const j = await r.json();
    const items: Lead[] = Array.isArray(j?.leads) ? j.leads : [];
    const grouped: Record<string, Lead[]> = Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]));
    for (const lead of items) (grouped[lead.status] ??= []).push(lead);
    setColumns(grouped);
  }

  useEffect(() => { load(); }, []);

  async function moveLead(serverId: string, nextStatus: string) {
    const r = await fetch(`/api/leads/${serverId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    if (!r.ok) console.error("PATCH failed:", r.status, await r.text());
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

  function updatePreview(leadId: string, lastText: string) {
    setColumns((prev) => {
      const next: typeof prev = {};
      for (const k of Object.keys(prev)) {
        next[k] = prev[k].map((l) =>
          String(l._id ?? l.id) === leadId ? { ...l, lastCommentText: lastText } : l
        );
      }
      return next;
    });
  }

  async function handleDeleteSecure(id: string) {
    const ok = confirm("Ushbu kartani o‘chirishni tasdiqlaysizmi?");
    if (!ok) return;
  
    const password = prompt("Parolni kiriting:");
    if (!password) return;
  
    const r = await fetch(`/api/leads/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      cache: "no-store",
    });
  
    if (r.status === 200) {
      setRows((list: any[]) => list.filter((x) => x._id !== id));
      return;
    }
  
    const msg = await r.text().catch(() => "");
    if (r.status === 401) alert("Parol noto‘g‘ri.");
    else if (r.status === 404) alert("Topilmadi (allaqachon o‘chirilgan bo‘lishi mumkin).");
    else if (r.status === 400) alert("Noto‘g‘ri ID.");
    else if (r.status === 500) alert("Server paroli sozlanmagan. Admin bilan bog‘laning.");
    else alert("O‘chirishda xatolik: " + msg);
  }
  
  // DELETE
  async function handleDeleteSecureLead(leadId: string) {
    const ok = confirm("Ushbu kartani o‘chirishni tasdiqlaysizmi?");
    if (!ok) return;
  
    const password = prompt("Parolni kiriting:");
    if (!password) return;
  
    const r = await fetch(`/api/leads/${leadId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      cache: "no-store",
    });
  
    if (r.ok) {
      alert("Karta o‘chirildi.");
      window.location.reload(); // shu sahifani yangilaydi
      return;
    }
  
    const msg = await r.text().catch(() => "");
    if (r.status === 401) alert("Parol noto‘g‘ri.");
    else if (r.status === 404) alert("Topilmadi (allaqachon o‘chirilgan bo‘lishi mumkin).");
    else if (r.status === 400) alert("Noto‘g‘ri ID.");
    else if (r.status === 500) alert("Server paroli sozlanmagan. Admin bilan bog‘laning.");
    else alert("O‘chirishda xatolik: " + msg);
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
                  {(dropProvided) => (
                    <div
                      ref={dropProvided.innerRef}
                      {...dropProvided.droppableProps}
                      className="bg-white/5 p-3 rounded-xl min-h-[340px] border border-white/10"
                    >
                      <h2 className="text-center font-semibold text-white mb-3">
                        {status} {(columns[status]?.length ?? 0) > 0 ? `(${columns[status].length})` : ""}
                      </h2>

                      {(columns[status] ?? []).map((lead, index) => {
                        const idStr = String(lead._id ?? lead.id ?? `${lead.phone}-${index}`);
                        const isOpen = !!expanded[idStr];
                        const preview = (lead.lastCommentText ?? "").trim();

                        return (
                          <Draggable key={idStr} draggableId={idStr} index={index}>
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

                                <div className="font-medium">{lead.fullName}</div>
                                <div className="text-sm text-white/60">{lead.phone}</div>
                                <div className="flex items-center justify-between">
                                <div className="text-xs text-white/50">{fmtDateTime(lead.createdAt)}</div>

                                <div className="mb-2 flex justify-end">
                                   <button
                                    type="button"
                                    onClick={() => handleDeleteSecureLead(idStr)}
                                    className="text-xs px-2 py-1 border rounded-md  cursor-pointer"
                                    >
                                 <Trash2 className="w-4 h-4 text-red-500" />
                                   </button>
                                  </div>
                                </div>
                                <Badge>{lead.source}</Badge>

                                <div className="mt-2 text-xs text-white/70 truncate">
                                  {preview ? preview : "Kommentlar yo‘q."}
                                </div>

                                <div
                                  className="mt-1 text-right"
                                  onMouseDown={(e) => e.stopPropagation()}
                                  onPointerDown={(e) => e.stopPropagation()}
                                  onTouchStart={(e) => e.stopPropagation()}
                                >
                                  <button
                                    type="button"
                                    className="text-white/70 text-xs underline cursor-pointer"
                                    onClick={() => setExpanded((p) => ({ ...p, [idStr]: !p[idStr] }))}
                                  >
                                    {isOpen ? "▲ Yopish" : "▼ Barchasini ko‘rish"}
                                  </button>
                                </div>
                                {isOpen ? (
                                  <LeadComments
                                    leadId={idStr}
                                    onAfterAdd={(last) => updatePreview(idStr, last)}
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
function setRows(arg0: (list: any[]) => any[]) {
  throw new Error("Function not implemented.");
}

