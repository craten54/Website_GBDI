import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Kontak & Kanal Resmi",
  description:
    "Kanal komunikasi resmi Gereja Bener Dikit Indonesia (GBDI): Discord, Instagram, TikTok, dan email resmi.",
};

const CHANNELS = [
  {
    name: "Discord Community",
    handle: "Server GBDI",
    desc: "Pusat aktivitas komunitas kami sehari-hari: ngobrol santai, persekutuan CGV, diskusi renungan, dan doa.",
    cta: "Gabung Server",
    href: siteConfig.discord,
    isExternal: true,
  },
  {
    name: "Instagram",
    handle: siteConfig.instagramHandle,
    desc: "Informasi kegiatan, kutipan renungan singkat, update komunitas, dan direct message untuk komunikasi personal.",
    cta: "Kunjungi Instagram",
    href: siteConfig.instagram,
    isExternal: true,
  },
  {
    name: "TikTok",
    handle: siteConfig.tiktokHandle,
    desc: "Video pendek refleksi iman, cuplikan pesan inspiratif, dan pengenalan kegiatan virtual GBDI.",
    cta: "Kunjungi TikTok",
    href: siteConfig.tiktok,
    isExternal: true,
  },
  {
    name: "Email Resmi",
    handle: siteConfig.email,
    desc: "Untuk pertanyaan resmi komunitas, pendaftaran volunteer, konsultasi pastoral, atau kerja sama pelayanan.",
    cta: "Kirim Email",
    href: `mailto:${siteConfig.email}`,
    isExternal: false,
  },
] as const;

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="border-b border-ink/10 pb-10 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Terhubung dengan GBDI
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">
          Kanal Resmi
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">
          Sebagai komunitas virtual, kami hadir di platform-platform digital tempat Anda biasa berjejaring. Jangan ragu untuk menyapa kami.
        </p>
      </header>

      {/* Grid of Channels */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {CHANNELS.map((ch) => (
          <div
            key={ch.name}
            className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-warm-white p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-violet">
                  {ch.name}
                </span>
                <span className="font-mono text-xs text-ink/60">
                  {ch.handle}
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-bold">
                {ch.handle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {ch.desc}
              </p>
            </div>

            <div className="mt-8">
              <a
                href={ch.href}
                target={ch.isExternal ? "_blank" : undefined}
                rel={ch.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex w-full items-center justify-center rounded-full bg-violet px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
              >
                {ch.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note about dummy data */}
      <div className="mt-16 rounded-2xl border border-ink/10 bg-paper p-6 text-center text-xs text-ink/60">
        Catatan: Kontak dan tautan di atas saat ini menggunakan data konfigurasi awal ({siteConfig.email}). Data final akan diperbarui oleh pengelola sebelum rilis ke domain publik.
      </div>
    </div>
  );
}

