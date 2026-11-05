"use client";

import { useState } from "react";
import Link from "next/link";
import { Renungan } from "@/lib/renungan";
import { formatDateIndonesian } from "@/lib/utils";

interface RenunganListProps {
  initialRenungan: Renungan[];
  allTags: string[];
}

export function RenunganList({ initialRenungan, allTags }: RenunganListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = selectedTag
    ? initialRenungan.filter((item) => item.tags.includes(selectedTag))
    : initialRenungan;

  return (
    <div>
      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pb-8">
          <span className="text-xs font-semibold text-ink/60 mr-1">Filter topik:</span>
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3.5 py-1 text-xs font-semibold transition ${
              selectedTag === null
                ? "bg-violet text-white"
                : "border border-ink/15 bg-warm-white text-ink/75 hover:bg-violet-light/50"
            }`}
          >
            Semua
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold capitalize transition ${
                selectedTag === tag
                  ? "bg-violet text-white"
                  : "border border-ink/15 bg-warm-white text-ink/75 hover:bg-violet-light/50"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-ink/10 bg-warm-white p-12 text-center">
          <p className="text-base text-ink/70">
            Belum ada renungan dengan topik ini.
          </p>
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className="mt-4 text-xs font-bold text-violet underline underline-offset-2"
          >
            Tampilkan semua renungan
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-ink/10 bg-warm-white p-6 sm:p-8 transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/60">
                <time dateTime={item.date}>{formatDateIndonesian(item.date)}</time>
                <span>•</span>
                <span>{item.author}</span>
                {item.verse && (
                  <>
                    <span>•</span>
                    <span className="font-semibold text-violet">{item.verse}</span>
                  </>
                )}
              </div>

              <h2 className="mt-3 font-heading text-2xl font-bold leading-snug group-hover:text-violet">
                <Link
                  href={`/renungan/${item.slug}`}
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                >
                  {item.title}
                </Link>
              </h2>

              <p className="mt-3 text-base leading-relaxed text-ink/75">
                {item.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-paper px-2 py-0.5 text-xs text-ink/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/renungan/${item.slug}`}
                  className="text-xs font-bold text-violet group-hover:underline underline-offset-2"
                >
                  Baca selengkapnya
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

