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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      <header className="border-b border-white/10 pb-10 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Terhubung dengan GBDI
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Kanal Resmi
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Sebagai komunitas virtual, kami hadir di platform-platform digital tempat Anda biasa berjejaring. Jangan ragu untuk menyapa kami.
        </p>
      </header>

      {/* Grid of Channels */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {CHANNELS.map((ch) => (
          <div
            key={ch.name}
            className="glass-card flex flex-col justify-between p-8 text-white transition hover:border-amber-400/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {ch.name}
                </span>
                <span className="font-mono text-xs text-white/60">
                  {ch.handle}
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-bold text-white">
                {ch.handle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {ch.desc}
              </p>
            </div>

            <div className="mt-8">
              <a
                href={ch.href}
                target={ch.isExternal ? "_blank" : undefined}
                rel={ch.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 shadow-md"
              >
                {ch.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note about dummy data */}
      <div className="glass-card mt-16 p-6 text-center text-xs text-white/70 border-white/10">
        Catatan: Kontak dan tautan di atas saat ini menggunakan data konfigurasi awal ({siteConfig.email}). Data final dapat diperbarui sewaktu-waktu oleh pengelola.
      </div>
    </div>
  );
}
