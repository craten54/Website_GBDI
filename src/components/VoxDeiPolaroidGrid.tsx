"use client";

import { useState } from "react";

export interface VoxDeiVideo {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  url: string;
}

interface VoxDeiPolaroidGridProps {
  videos: VoxDeiVideo[];
}

export function VoxDeiPolaroidGrid({ videos }: VoxDeiPolaroidGridProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Clean title helper: remove "| GBDI Vox Dei" suffix for cleaner polaroid handwriting caption
  const cleanTitle = (raw: string) => {
    return raw.replace(/\s*\|\s*GBDI\s*Vox\s*Dei/gi, "").trim();
  };

  return (
    <div>
      {/* ── Modal Video Player (if active) ───────────────────────── */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideoId(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pemutar Musik Vox Dei
              </span>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Tutup pemutar video"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1`}
                title="Vox Dei Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 3-Column Polaroid Grid (Sejajar) ─────────────────────── */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, idx) => {
          const displayTitle = cleanTitle(video.title);

          return (
            <div
              key={video.id}
              className="polaroid-card group flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Photo Area (with aspect ratio & hover effects) */}
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video w-full overflow-hidden rounded-xl border border-ink/10 bg-paper/50"
                title={`Tonton ${video.title} di YouTube`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={displayTitle}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark overlay with play badge on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <svg
                      className="ml-0.5 h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-2 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                    Tonton di YouTube ↗
                  </span>
                </div>

                {/* Video number pill (top-left) */}
                <div className="absolute top-2.5 left-2.5 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold text-ink shadow-xs backdrop-blur-xs">
                  #{String(idx + 1).padStart(2, "0")}
                </div>
              </a>

              {/* Polaroid Frame Caption (Handwriting Style) */}
              <div className="flex flex-1 flex-col justify-between pt-5 pb-2 text-center">
                <div>
                  <h3 className="font-handwriting text-2xl font-bold tracking-wide text-ink sm:text-3xl leading-snug">
                    {displayTitle}
                  </h3>
                  <p className="mt-1 text-xs text-ink/60">
                    Oleh {video.author || "GBDI Vox Dei"}
                  </p>
                </div>

                {/* Action buttons footer */}
                <div className="mt-4 flex items-center justify-center gap-3 border-t border-ink/10 pt-3">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition hover:text-amber-900 hover:underline underline-offset-2"
                  >
                    <span>Buka Video</span>
                    <span>↗</span>
                  </a>
                  <span className="text-ink/20">•</span>
                  <button
                    type="button"
                    onClick={() => setActiveVideoId(video.id)}
                    className="text-xs font-semibold text-ink/75 transition hover:text-amber-700"
                  >
                    Putar Cepat
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

