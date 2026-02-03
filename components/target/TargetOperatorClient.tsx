"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "@/constants/statuses";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { Trash2 } from "lucide-react";
import TargetLeadComments from "../comments/TargetLeadComments";

// Sana formatlaydi
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

type TargetLead = {
  _id?: string;
  id?: string;
  fullName: string;
  phone: string;
  source: string;
  status: string;
  note?: string;
  createdAt?: string | Date;
  lastCommentText?: string;
  flagged?: boolean;
  // 🔹 Targetga xos qoʻshimcha maydonlar:
  businessType?: string;
  socialPage?: string;
  budget?: string;
};

export default function TargetOperatorClient() {
  const [columns, setColumns] = useState<Record<string, TargetLead[]>>(() =>
    Object.fromEntries(LEAD_STATUSES.map((s) => [s, []]))
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // 🔍 qidiruv
  const [search, setSearch] = useState("");
  const normalizedQuery = search.trim().toLowerCase();
  const searchDigits = normalizedQuery.replace(/\D/g, "");

  // ✅ NEW: Tanlash (checkbox) state
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

  // ✅ NEW: Bulk delete (parol bilan)
  async function bulkDeleteSelectedTarget() {
    if (selectedIds.length === 0) return;

    const ok = confirm(`Rostdan ham ${selectedIds.length} ta leadni o‘chirasizmi?`);
    if (!ok) return;

    const password = prompt("Parolni kiriting:");
    if (!password) return;

    // faqat ObjectId bo‘lganlarini yuboramiz (24 hex)
    const validIds = selectedIds.filter((id) => /^[a-f\d]{24}$/i.test(id));

    if (validIds.length === 0) {
      alert("Tanlanganlar orasida valid ID topilmadi.");
      return;
    }

    const r = await fetch("/api/target-leads/bulk-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: validIds, password }),
      cache: "no-store",
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      if (r.status === 401) alert("Parol noto‘g‘ri.");
      else if (r.status === 500) alert("Server paroli sozlanmagan.");
      else alert(data?.error || "O‘chirishda xatolik");
      return;
    }

    // Front tarafdan ham o‘chirib yuboramiz (reload shart emas)
    const delSet = new Set(validIds);

    setColumns((prev) => {
      const next: typeof prev = {};
      for (const status of Object.keys(prev)) {
        next[status] = (prev[status] ?? []).filter((l) => {
          const sid = String(l._id ?? l.id ?? "");
          return !delSet.has(sid);
        });
      }
      return next;
    });

    clearSelected();
    alert(`O‘chirildi: ${data?.deletedCount ?? 0} ta`);
  }

  // 🔴 qaysi kartada flag update bo‘layotganini bilish uchun
  const [flagLoadingId, setFlagLoadingId] = useState<string | null>(null);

  async function load() {
    const r = await fetch("/api/target-leads", { cache: "no-store" });
    if (!r.ok) return;
    const j = await r.json();
    const items: TargetLead[] = Array.isArray(j?.leads) ? j.leads : [];
    const grouped: Record<string, TargetLead[]> = Object.fromEntries(
      LEAD_STATUSES.map((s) => [s, []])
    );
    for (const lead of items) (grouped[lead.status] ??= []).push(lead);
    setColumns(grouped);
  }

  useEffect(() => {
    void load();
  }, []);

  // status almashtirish
  async function moveLead(serverId: string, nextStatus: string) {
    const r = await fetch(`/api/target-leads/${serverId}`, {
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
      const idx = fromArr.findIndex(
        (l) => String(l._id ?? l.id) === draggableId
      );
      if (idx === -1) return prev;
      const [item] = fromArr.splice(idx, 1);
      item.status = to;
      next[from] = fromArr;
      next[to] = [...(next[to] ?? []), item];
      return next;
    });
    void moveLead(draggableId, to);
  }

  // komment qo‘shilganda kartadagi preview ni yangilash
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

  // 🔴 flag tugmasi (yashil chiroqcha)
  async function toggleFlag(lead: TargetLead) {
    const id = lead._id || lead.id;
    if (!id) return;

    try {
      setFlagLoadingId(String(id));

      const res = await fetch(`/api/target-leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flagged: !lead.flagged,
        }),
      });

      if (!res.ok) {
        console.error("Failed to update flag");
        return;
      }

      const data = await res.json().catch(() => ({}));
      const newFlag =
        data?.lead?.flagged ??
        (typeof lead.flagged === "boolean" ? !lead.flagged : true);

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

  // DELETE
  async function handleDeleteSecureLead(leadId: string) {
    const ok = confirm("Ushbu kartani o‘chirishni tasdiqlaysizmi?");
    if (!ok) return;

    const password = prompt("Parolni kiriting:");
    if (!password) return;

    const r = await fetch(`/api/target-leads/${leadId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      cache: "no-store",
    });

    if (r.ok) {
      alert("Karta o‘chirildi.");
      window.location.reload();
      return;
    }

    const msg = await r.text().catch(() => "");
    if (r.status === 401) alert("Parol noto‘g‘ri.");
    else if (r.status === 404)
      alert("Topilmadi (allaqachon o‘chirilgan bo‘lishi mumkin).");
    else if (r.status === 400) alert("Noto‘g‘ri ID.");
    else if (r.status === 500)
      alert("Server paroli sozlanmagan. Admin bilan bog‘laning.");
    else alert("O‘chirishda xatolik: " + msg);
  }


  return (
    <div className="p-5">
      <Card className="p-4 bg-slate-950/60 border border-white/10 text-white">
        <CardTitle>Target CRM — Lead statuslari</CardTitle>

        {/* 🔍 SEARCH INPUT */}
        <div className="mt-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ism yoki telefon raqimi bo‘yicha qidirish..."
            className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* ✅ NEW: Bulk action bar */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={bulkDeleteSelectedTarget}
            disabled={selectedIds.length === 0}
            className="text-xs px-3 py-2 rounded-md border border-white/20 disabled:opacity-40"
          >
            Tanlanganlarni o‘chirish ({selectedIds.length})
          </button>

          <button
            type="button"
            onClick={clearSelected}
            disabled={selectedIds.length === 0}
            className="text-xs px-3 py-2 rounded-md border border-white/20 disabled:opacity-40"
          >
            Tanlovni tozalash
          </button>
        </div>

        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {LEAD_STATUSES.map((status) => {
                const list = columns[status] ?? [];

                // qidiruv filteri
                const visibleLeads = list.filter((lead) => {
                  if (!normalizedQuery) return true;

                  const name = (lead.fullName || "").toLowerCase();
                  const phoneDigits = (lead.phone || "").replace(/\D/g, "");

                  const matchName = name.includes(normalizedQuery);
                  const matchPhone =
                    searchDigits.length > 0
                      ? phoneDigits.includes(searchDigits)
                      : false;

                  return matchName || matchPhone;
                });

                // ✅ NEW: shu ustundagi ko‘rinayotgan server idlar (select all uchun)
                const visibleIds = visibleLeads
                  .map((l) => String(l._id ?? l.id ?? ""))
                  .filter(Boolean);

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
                        {/* ✅ NEW: header + select all */}
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-center font-semibold text-white text-sm">
                            {status}{" "}
                            {visibleLeads.length > 0
                              ? `(${visibleLeads.length})`
                              : ""}
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
                          const idStr = String(
                            lead._id ?? lead.id ?? `${lead.phone}-${index}`
                          );
                          const isOpen = !!expanded[idStr];
                          const preview = (lead.lastCommentText ?? "").trim();

                          // ✅ NEW: selection uchun server id
                          const serverId = String(lead._id ?? lead.id ?? "");

                          return (
                            <Draggable
                              key={idStr}
                              draggableId={idStr}
                              index={index}
                            >
                              {(dragProvided) => (
                                <div
                                  ref={dragProvided.innerRef}
                                  {...dragProvided.draggableProps}
                                  className="bg-white/10 p-3 rounded-lg mb-2 text-white relative"
                                >
                                  {/* ✅ NEW: checkbox (kartani tanlash) */}
                                  <label
                                    className="absolute top-2 left-2"
                                    onMouseDown={(e) => e.stopPropagation()}
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onTouchStart={(e) => e.stopPropagation()}
                                    title="Belgilash"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={serverId ? selected.has(serverId) : false}
                                      onChange={() => {
                                        if (!serverId) return;
                                        toggleSelected(serverId);
                                      }}
                                      className="cursor-pointer mb-2"
                                      disabled={!serverId}
                                    />
                                  </label>

                                  {/* 🔴 Yashil chiroqcha tugmasi */}
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation(); // drag bilan urishmasin
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
                                      className={`w-2 h-2 rounded-full ${
                                        lead.flagged ? "bg-white" : "bg-transparent"
                                      }`}
                                    />
                                  </button>

                                  {/* Drag handle + karta kontenti */}
                                  <div
                                    {...dragProvided.dragHandleProps}
                                    className="text-xs text-white/50 gap-2 mb-2 mt-4 select-none cursor-grab"
                                    title="Ustunlar orasida ko‘chiring"
                                  >
                                    <div className="font-medium text-lg">
                                      {lead.fullName}
                                    </div>
                                    <div className="flex items-center gap-2">
  <div className="text-lg text-white/60">{lead.phone}</div>

  <button
    type="button"
    onClick={() => navigator.clipboard.writeText(String(lead.phone))}
    className="rounded-md border cursor-pointer border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10 active:bg-green-300"
  >
    Copy
  </button>
</div>

                                    <div className="text-lg text-white/60">
                                      Biznes: {lead.businessType}
                                    </div>
                                    <div className="text-lg text-white/60">
                                      budjeti: {lead.budget}
                                    </div>

                                    tg: {lead.socialPage}
                                    <div className="text-lg text-white/60">
                                      komment: {lead.note}
                                    </div>

                                    <div className="flex items-center justify-between">
                                      <div className="text-[11px] text-white/50">
                                        {fmtDateTime(lead.createdAt)}
                                      </div>

                                      <div className="mb-2 flex justify-end">
                                        <button
                                          type="button"
                                          onClick={() => handleDeleteSecureLead(idStr)}
                                          className="text-xs px-2 py-1 border rounded-md cursor-pointer border-white/30 hover:bg-white/10"
                                        >
                                          <Trash2 className="w-4 h-4 text-red-400" />
                                        </button>
                                      </div>
                                    </div>

                                    <Badge>{lead.source}</Badge>

                                    <div className="mt-2 text-xs text-white/70 truncate">
                                      {preview ? preview : "Kommentlar yo‘q."}
                                    </div>

                                    {/* Kommentlar bo‘limini ochish/yopish */}
                                    <div
                                      className="mt-1 text-right"
                                      onMouseDown={(e) => e.stopPropagation()}
                                      onPointerDown={(e) => e.stopPropagation()}
                                      onTouchStart={(e) => e.stopPropagation()}
                                    >
                                      <button
                                        type="button"
                                        className="text-white/70 text-[11px] underline cursor-pointer"
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
                                      <TargetLeadComments
                                        leadId={idStr}
                                        onAfterAdd={(last) => updatePreview(idStr, last)}
                                      />
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
