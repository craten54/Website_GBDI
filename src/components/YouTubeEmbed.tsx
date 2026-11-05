"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-sm group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/40">
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-white shadow-lg transition-transform duration-200 group-hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
          aria-label={`Putar video ${title}`}
        >
          <svg
            className="ml-1 h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-white/90 drop-shadow">
        Klik untuk memuat dan memutar video
      </div>
    </div>
  );
}
