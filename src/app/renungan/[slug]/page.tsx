import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";
import { getAllRenungan, getRenunganBySlug } from "@/lib/renungan";
import { formatDateIndonesian } from "@/lib/utils";
import { siteConfig } from "@/lib/site.config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allRenungan = getAllRenungan();
  return allRenungan.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const renungan = getRenunganBySlug(slug);

  if (!renungan) {
    return {
      title: "Renungan Tidak Ditemukan",
    };
  }

  return {
    title: renungan.title,
    description: renungan.excerpt,
    openGraph: {
      title: `${renungan.title} — GBDI`,
      description: renungan.excerpt,
      type: "article",
      publishedTime: renungan.date,
      authors: [renungan.author],
    },
  };
}

export default async function RenunganDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const renungan = getRenunganBySlug(slug);

  if (!renungan) {
    notFound();
  }

  // Parse markdown to HTML
  const processed = await remark().use(html).process(renungan.content);
  const contentHtml = processed.toString();

  // Find other renungan
  const otherRenungan = getAllRenungan()
    .filter((r) => r.slug !== renungan.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/renungan"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline underline-offset-4"
        >
          <span>← Kembali ke semua renungan</span>
        </Link>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/15">
        {/* Article Header */}
        <header className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <time dateTime={renungan.date}>
              {formatDateIndonesian(renungan.date)}
            </time>
            <span>•</span>
            <span>Ditulis oleh {renungan.author}</span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl sm:leading-tight text-white drop-shadow">
            {renungan.title}
          </h1>

          {renungan.verse && (
            <div className="mt-4 inline-block rounded-lg bg-amber-400/15 border border-amber-400/30 px-3.5 py-1.5 text-sm font-semibold text-amber-300">
              {renungan.verse}
            </div>
          )}

          {/* Audio Player (if available) */}
          {renungan.audio && (
            <div className="mt-6 rounded-2xl border border-white/15 bg-black/40 p-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Dengarkan Audio Renungan
              </span>
              <audio controls className="w-full">
                <source src={renungan.audio} type="audio/mpeg" />
                Peramban Anda tidak mendukung pemutar audio.
              </audio>
            </div>
          )}
        </header>

        {/* Article Body */}
        <div
          className="prose mx-auto mt-10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        {renungan.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            <span className="text-xs font-semibold text-white/60">Topik:</span>
            {renungan.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Discord CTA */}
      <div className="glass-card mt-16 rounded-3xl p-8 text-center sm:p-10 border border-white/15">
        <h2 className="font-heading text-2xl font-bold text-white">
          Ingin mendiskusikan renungan ini?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
          Bergabunglah di server Discord GBDI untuk saling menyapa, berbagi cerita, dan berdiskusi bersama teman-teman komunitas.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-black shadow-lg transition hover:bg-amber-400"
          >
            Gabung di Discord
          </a>
        </div>
      </div>

      {/* Other Reflections */}
      {otherRenungan.length > 0 && (
        <section className="mt-20 border-t border-white/15 pt-12">
          <h2 className="font-heading text-2xl font-bold text-white">
            Renungan Lainnya
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {otherRenungan.map((item) => (
              <article
                key={item.slug}
                className="glass-card-interactive rounded-2xl p-6"
              >
                <time className="text-xs text-white/60" dateTime={item.date}>
                  {formatDateIndonesian(item.date)}
                </time>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-white">
                  <Link
                    href={`/renungan/${item.slug}`}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-xs text-white/75">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
