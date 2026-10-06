"use client";

import { useEffect, useRef } from "react";
import { VIDEO_FILES, type Copy } from "@/lib/content";

export function VideoModal({
  t,
  index,
  onClose,
}: {
  t: Copy;
  index: number;
  onClose: () => void;
}) {
  const [title, tag, niche, dur] = t.videos[index];
  const videoRef = useRef<HTMLVideoElement>(null);

  // Opened by a click, so browsers allow playback with sound. If one still
  // blocks it, fall back to muted so the video at least plays (controls stay).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-5 backdrop-blur-[6px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="flex max-h-[calc(100vh-40px)] w-full max-w-[760px] flex-wrap gap-6 overflow-auto rounded-3xl bg-cream p-4"
      >
        <div className="relative mx-auto aspect-[9/16] max-w-[340px] flex-[1_1_260px] overflow-hidden rounded-xl">
          <video
            ref={videoRef}
            src={VIDEO_FILES[index].src}
            poster={VIDEO_FILES[index].poster}
            controls
            playsInline
            preload="metadata"
            className="size-full bg-ink object-contain"
          />
        </div>
        <div className="flex flex-[1_1_260px] flex-col gap-3.5 px-2 py-3">
          <div className="flex items-center justify-between gap-2">
            <span className="eyebrow text-rose">
              0{index + 1} · {niche}
            </span>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-ink bg-transparent text-xl text-ink"
            >
              ×
            </button>
          </div>
          <h3 className="display m-0 text-[40px] leading-[0.95] text-ink">{title}</h3>
          <span className="font-serif text-[19px] text-muted italic">
            {tag} · {dur}
          </span>
          <p className="m-0 text-sm leading-[1.7]">{t.modalBody}</p>
          <a
            href="#contato"
            onClick={onClose}
            className="mt-auto self-start rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-blush transition-colors hover:bg-rose hover:text-white"
          >
            {t.modalCta}
          </a>
        </div>
      </div>
    </div>
  );
}
