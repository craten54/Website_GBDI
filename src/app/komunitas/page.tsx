import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Komunitas",
  description:
    "Ruang untuk berjumpa, bersekutu, melayani, dan bertumbuh bersama dalam komunitas iman Kristen virtual GBDI.",
};

const COMMUNITY_SECTIONS = [
  {
    href: "/komunitas/cgv",
    kicker: "Persekutuan Virtual",
    title: "Connect Group Virtual (CGV)",
    description:
      "Ruang pertemuan daring bulanan untuk semua teman GBDI dari Sabang sampai Merauke. Tidak dibatasi wilayah, terbuka untuk siapa pun.",
    badge: "1× Sebulan",
  },
  {
    href: "/komunitas/vox-dei",
    kicker: "Musik & Seni Rohani",
    title: "Vox Dei",
    description:
      "Platform karya musik dan video rohani kreatif yang dikembangkan bersama teman-teman VTuber, menyuarakan iman lewat harmoni dan melodi.",
    badge: "YouTube",
  },
  {
    href: "/komunitas/volunteer",
    kicker: "Pelayanan",
    title: "Volunteer GBDI",
    description:
      "Panggilan untuk melayani bersama dalam bidang ilustrasi, aransemen musik, mixing & mastering, serta penyuntingan video.",
    badge: "Mari Melayani",
  },
  {
    href: "/komunitas/pendampingan",
    kicker: "Konseling & Doa",
    title: "Pendampingan Pastoral",
    description:
      "Ruang percakapan pribadi yang hangat dan rahasia bagi siapa pun yang membutuhkan teman mendengarkan atau didoakan.",
    badge: "Pribadi",
  },
] as const;

export default function KomunitasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="border-b border-ink/10 pb-8 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Kehidupan Komunitas
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">
          Berjalan Bersama
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">
          GBDI menghadirkan berbagai ruang untuk saling menguatkan, berekspresi, dan melayani. Temukan tempat yang tepat untuk langkah perziarahan imanmu.
        </p>
      </header>

      {/* Grid of Community Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {COMMUNITY_SECTIONS.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-warm-white p-8 transition-all hover:-translate-y-1 hover:border-violet/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-violet">
                  {sec.kicker}
                </span>
                <span className="rounded-full bg-violet-light/50 px-2.5 py-0.5 text-xs font-semibold text-violet">
                  {sec.badge}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold leading-snug group-hover:text-violet">
                {sec.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {sec.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-1.5 text-xs font-bold text-violet group-hover:underline underline-offset-4">
              <span>Pelajari lebih lanjut</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Discord Banner */}
      <div className="mt-16 rounded-3xl border border-ink/10 bg-gradient-to-r from-violet-light/40 to-warm-white p-8 sm:p-12 text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Semua kegiatan bermula di Discord
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-ink/75">
          Server Discord kami adalah ruang berkumpul sehari-hari tempat anggota komunitas saling bertukar kabar, berdiskusi, dan berbagi doa.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            Masuk ke Server Discord GBDI
          </a>
        </div>
      </div>
    </div>
  );
}

