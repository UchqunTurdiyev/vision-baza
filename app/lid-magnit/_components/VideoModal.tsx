'use client';

import * as React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
};

export default function VideoModal({ open, onClose, videoId, title }: Props) {
  React.useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    // scroll lock
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;

  return (
    <div
      className="fixed inset-0 z-9999 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
        aria-label="Close video"
      />

      {/* modal */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 p-3">
          <p className="truncate text-sm font-semibold">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs hover:bg-white/15"
          >
            Yopish
          </button>
        </div>

        {/* ✅ aspect-video o‘rniga inline ratio — doim ishlaydi */}
        <div style={{ aspectRatio: "16 / 9" }} className="relative w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
