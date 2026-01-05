"use client";

import { useEffect, useMemo, useState } from "react";
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
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
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
  flagged?: boolean; // 🔴 Yangi maydon
};

export default function OperatorClient() {
  const [columns, setColumns] = useState<Record<string, Lead[]>>(() =>
    Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]))
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // leadId -> opened/closed

  // 🔍 SEARCH
  const [search, setSearch] = useState("");
  const normalizedQuery = search.trim().toLowerCase();
  const searchDigits = normalizedQuery.replace(/\D/g, "");

  const [] = useState<Lead[]>([]); // (sizda bor edi, qoldirdim)

  // ✅ YANGI: Tanlash (checkbox) state
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const selectedIds = useMemo(() => Array.from(selected), [selected]);

  function toggleSelected(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function clearSelected() {
    setSelected(new Set());
  }

  function toggleMany(ids: string[]) {
    setSelected((prev) => {
      const next = new Set(prev);
      const allHave = ids.length > 0 && ids.every((id) => next.has(id));
      if (allHave) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  }

  async function bulkDeleteSelected() {
    if (selectedIds.length === 0) return;

    const ok = confirm(`Rostdan ham ${selectedIds.length} ta kartani o‘chirasizmi?`);
    if (!ok) return;

    const password = prompt("Parolni kiriting:");
    if (!password) return;

    const r = await fetch("/api/leads/bulk-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selectedIds, password }),
      cache: "no-store",
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      if (r.status === 401) alert("Parol noto‘g‘ri.");
      else if (r.status === 500) alert("Server paroli sozlanmagan. Admin bilan bog‘laning.");
      else alert(data?.error || "O‘chirishda xatolik");
      return;
    }

    // ✅ UI’dan ham olib tashlaymiz (reload shart emas)
    setColumns((prev) => {
      const next: typeof prev = {};
      for (const k of Object.keys(prev)) {
        next[k] = (prev[k] ?? []).filter((l, idx) => {
          const idStr = String(l._id ?? l.id ?? `${l.phone}-${idx}`);
          return !selected.has(idStr);
        });
      }
      return next;
    });

    clearSelected();

    alert(`O‘chirildi: ${data?.deletedCount ?? 0} ta`);
  }

  // 🔴 Yangi: qaysi kartada "loading" bo‘layotganini bilish uchun
  const [flagLoadingId, setFlagLoadingId] = useState<string | null>(null);

  // 🔴 Yangi: aylana knopkani bosganda chaqiriladigan funksiya
  async function toggleFlag(lead: Lead) {
    const id = lead._id || lead.id;
    if (!id) return;

    try {
      setFlagLoadingId(String(id));

      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flagged: !lead.flagged, // faqat flag’ni yuboramiz
        }),
      });

      if (!res.ok) {
        console.error("Failed to update flag");
        return;
      }

      const data = await res.json();
      const newFlag = data?.lead?.flagged ?? !lead.flagged;

      // 🔴 Kartalar columns ichida, shuning uchun shu yerda yangilaymiz
      setColumns((prev) => {
        const next: typeof prev = {};
        for (const k of Object.keys(prev)) {
          next[k] = prev[k].map((l) =>
            String(l._id ?? l.id) === String(id) ? { ...l, flagged: newFlag } : l
          );
        }
        return next;
      });
    } catch (e) {
      console.error(e);
    } finally {
      setFlagLoadingId(null);
    }
  }

  async function load() {
    const r = await fetch("/api/leads", { cache: "no-store" });
    if (!r.ok) return;
    const j = await r.json();
    const items: Lead[] = Array.isArray(j?.leads) ? j.leads : [];
    const grouped: Record<string, Lead[]> = Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]));
    for (const lead of items) (grouped[lead.status] ??= []).push(lead);
    setColumns(grouped);
  }

  useEffect(() => {
    load();
  }, []);

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

  // (Sizda bor edi) — faqat setRows xatosi bo‘lmasin deb reloadga o‘tkazdim

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
      window.location.reload(); // sizda bor edi
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
    <div className="p-4">
      <Card className="p-4">
        <CardTitle>Operator panel — Lead statuslari</CardTitle>

        {/* 🔍 SEARCH INPUT */}
        <div className="mt-3 mb-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ism yoki telefon raqami bo‘yicha qidirish..."
            className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* ✅ YANGI: Bulk delete action bar */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={bulkDeleteSelected}
            disabled={selectedIds.length === 0}
            className="text-xs px-3 py-2 rounded-md border border-white/20 disabled:opacity-40"
          >
            Tanlanganlarni o‘chirish ({selectedIds.length})
          </button>
        </div>

        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {LEAD_STATUSES.map((status) => {
                const list = columns[status] ?? [];

                // 🔍 Har bir ustun ichida search bo‘yicha filter qilingan ro‘yxat
                const visibleLeads = list.filter((lead) => {
                  if (!normalizedQuery) return true;

                  const name = (lead.fullName || "").toLowerCase();
                  const phoneDigits = (lead.phone || "").replace(/\D/g, "");

                  const matchName = name.includes(normalizedQuery);
                  const matchPhone = searchDigits.length > 0 ? phoneDigits.includes(searchDigits) : false;

                  return matchName || matchPhone;
                });

                // ✅ YANGI: shu ustundagi ko‘rinayotgan IDlar (select all uchun)
                const visibleIds = visibleLeads.map((lead, index) =>
                  String(lead._id ?? lead.id ?? `${lead.phone}-${index}`)
                );
                const allVisibleSelected =
                  visibleIds.length > 0 && visibleIds.every((id) => selected.has(id));

                return (
                  <Droppable key={status} droppableId={status}>
                    {(dropProvided) => (
                      <div
                        ref={dropProvided.innerRef}
                        {...dropProvided.droppableProps}
                        className="bg-white/5 p-3 rounded-xl min-h-[340px] border border-white/10"
                      >
                        {/* ✅ YANGI: column header’da select all */}
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-center font-semibold text-white">
                            {status} {visibleLeads.length > 0 ? `(${visibleLeads.length})` : ""}
                          </h2>

                          <label
                            className="flex items-center gap-2 text-xs text-white/70 select-none"
                            onMouseDown={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                            onTouchStart={(e) => e.stopPropagation()}
                          >
                            <input
                              type="checkbox"
                              checked={allVisibleSelected}
                              onChange={() => toggleMany(visibleIds)}
                              className="cursor-pointer"
                            />
                            <span>All</span>
                          </label>
                        </div>

                        {visibleLeads.map((lead, index) => {
                          const idStr = String(lead._id ?? lead.id ?? `${lead.phone}-${index}`);
                          const isOpen = !!expanded[idStr];
                          const preview = (lead.lastCommentText ?? "").trim();

                          return (
                            <Draggable key={idStr} draggableId={idStr} index={index}>
                              {(dragProvided) => (
                                <div
                                  ref={dragProvided.innerRef}
                                  {...dragProvided.draggableProps}
                                  className="bg-white/10 p-3 rounded-lg mb-2 text-white relative"
                                >
                                  {/* ✅ YANGI: kartada checkbox */}
                                  <label
                                    className="absolute top-2 left-2 flex items-center gap-2 text-xs text-white/70 select-none"
                                    onMouseDown={(e) => e.stopPropagation()}
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onTouchStart={(e) => e.stopPropagation()}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={selected.has(idStr)}
                                      onChange={() => toggleSelected(idStr)}
                                      className="cursor-pointer mb-2"
                                      title="Belgilash"
                                    />
                                  </label>

                                  {/* 🔴 Flag knopka (sizdagi) */}
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFlag(lead);
                                    }}
                                    disabled={flagLoadingId === idStr}
                                    className={`
                                      absolute top-2 right-2
                                      w-5 h-5 rounded-full border
                                      flex items-center justify-center
                                      transition
                                      ${
                                        lead.flagged
                                          ? "bg-green-500 border-green-500"
                                          : "bg-transparent border-white/40"
                                      }
                                      ${
                                        flagLoadingId === idStr
                                          ? "opacity-50 cursor-not-allowed"
                                          : "cursor-pointer"
                                      }
                                    `}
                                    title={lead.flagged ? "Belgilangan lead" : "Belgilang"}
                                  >
                                    <span
                                      className={`
                                        w-2 h-2 rounded-full
                                        ${lead.flagged ? "bg-white" : "bg-transparent"}
                                      `}
                                    />
                                  </button>

                                  {/* Drag handle + karta kontenti */}
                                  <div
                                    {...dragProvided.dragHandleProps}
                                    className="text-xs text-white/50 gap-2 mt-2 mb-2 select-none cursor-grab"
                                    title="Ustunlar orasida ko‘chiring"
                                  >
                                    <div className="font-medium text-lg">{lead.fullName}</div>
                                    <div className="text-lg text-white/60">{lead.phone}</div>

                                    <div className="flex items-center justify-between">
                                      <div className="text-xs text-white/50">{fmtDateTime(lead.createdAt)}</div>

                                      <div className="mb-2 flex justify-end">
                                        <button
                                          type="button"
                                          onClick={() => handleDeleteSecureLead(idStr)}
                                          className="text-xs px-2 py-1 border rounded-md cursor-pointer"
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
                                        onClick={() =>
                                          setExpanded((p) => ({
                                            ...p,
                                            [idStr]: !p[idStr],
                                          }))
                                        }
                                      >
                                        {isOpen ? "▲ Yopish" : "▼ Barchasini ko‘rish"}
                                      </button>
                                    </div>

                                    {isOpen ? (
                                      <LeadComments leadId={idStr} onAfterAdd={(last) => updatePreview(idStr, last)} />
                                    ) : null}
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}

                        {dropProvided.placeholder}
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
}
