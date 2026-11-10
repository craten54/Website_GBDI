import fs from "fs";
import path from "path";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { VoxDeiPolaroidGrid, VoxDeiVideo } from "@/components/VoxDeiPolaroidGrid";

export const metadata = {
  title: "Vox Dei — Galeri Musik & Video Rohani",
  description:
    "Koleksi lagu pujian, cover rohani, dan karya kreasi multimedia GBDI Vox Dei yang berkolaborasi dengan kreator dan teman-teman VTuber.",
};

const PLAYLIST_URL = "https://www.youtube.com/playlist?list=PL6GgTa6SShSGix5GEM5cmQl2t3kHcWjcK";

function getVoxDeiPlaylist(): VoxDeiVideo[] {
  try {
    const filePath = path.join(process.cwd(), "content", "data", "voxdei-playlist.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

export default function VoxDeiPage() {
  const playlist = getVoxDeiPlaylist();

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/komunitas"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline underline-offset-4"
        >
          <span>← Kembali ke Komunitas</span>
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 pb-12 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Karya Rohani & Multimedia
          </span>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300">
            {playlist.length} Karya Tersedia
          </span>
        </div>

        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          GBDI Vox Dei
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-white/80">
          Menyuarakan iman, keindahan, dan pengharapan melalui harmoni lagu, aransemen musik, dan kolaborasi kreatif visual bersama teman-teman VTuber.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-xs font-bold text-black shadow-md transition hover:bg-amber-400"
          >
            <span>Buka Playlist Lengkap di YouTube</span>
            <span>↗</span>
          </a>
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
          >
            <span>Diskusi Musik di Discord</span>
          </a>
        </div>
      </header>

      {/* ── 3-Column Polaroid Gallery Section ──────────────────────── */}
      <section className="mt-14">
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <span className="font-handwriting text-3xl font-bold text-amber-300 sm:text-4xl">
              Galeri Musik & Lagu Rohani
            </span>
            <p className="text-sm text-white/80 mt-1">
              Pilih dan klik kartu foto polaroid untuk langsung menuju ke setiap video di YouTube atau gunakan tombol Putar Cepat.
            </p>
          </div>
          <div className="text-xs text-white/60 italic">
            * 3 Grid Sejajar • Tautan Langsung ke YouTube
          </div>
        </div>

        {/* Polaroid Grid Component */}
        <VoxDeiPolaroidGrid videos={playlist} />
      </section>

      {/* ── Tentang Vox Dei Section ────────────────────────────────── */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-20">
        <div className="prose mx-auto space-y-12">
          <section>
            <h2>Apa itu Vox Dei?</h2>
            <p>
              <strong>Vox Dei</strong> (dari bahasa Latin yang berarti <em>Suara Allah</em>) adalah inisiatif pelayanan musik dan multimedia di bawah naungan GBDI. Platform ini lahir dari kerinduan untuk menghadirkan lagu-lagu pujian, refleksi musikal, dan konten video rohani yang segar, relevan, serta dapat dinikmati di tengah keseharian pendengar masa kini.
            </p>
            <p>
              Keunikan Vox Dei adalah kolaborasi erat dengan teman-teman VTuber (Virtual YouTuber) dan kreator digital independen. Kami percaya bahwa ekspresi seni digital dan dunia maya adalah sarana yang sah dan indah untuk memuliakan Tuhan dan menyentuh hati manusia.
            </p>
          </section>

          <section>
            <h2>Bentuk Pelayanan</h2>
            <ul>
              <li><strong>Lagu Pujian & Penyembahan:</strong> Produksi aransemen lagu rohani orisinal maupun cover tematik dari Kidung Jemaat, Pelengkap Kidung Jemaat, dan lagu kontemporer.</li>
              <li><strong>Refleksi Musikal:</strong> Audio renungan yang dipadukan dengan alunan musik meditatif untuk saat teduh pribadi.</li>
              <li><strong>Video Musik Animasi:</strong> Visual kreatif yang mendukung pesan iman melalui medium grafis digital.</li>
            </ul>
          </section>

          <section>
            <h2>Ingin Ikut Berpartisipasi?</h2>
            <p>
              Vox Dei selalu membuka pintu kolaborasi bagi pemusik, vokalis, produser audio, ilustrator, hingga animator yang ingin menyalurkan bakatnya untuk melayani sesama.
            </p>
            <p>
              Jika kamu tertarik terlibat dalam proyek musik berikutnya, silakan kunjungi halaman pendaftaran volunteer atau hubungi tim kami melalui email atau Discord.
            </p>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="glass-card mt-16 p-8 text-center sm:p-10 border-amber-400/20">
        <h3 className="font-heading text-2xl font-bold text-white">
          Dukung & Ikuti Perjalanan Vox Dei
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
          Karya-karya terbaru dirilis secara berkala melalui kanal YouTube dan diumumkan di komunitas Discord GBDI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/komunitas/volunteer"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
          >
            Gabung Tim Musik / Kreatif
          </Link>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
          >
            Buka Playlist YouTube
          </a>
        </div>
      </footer>
    </article>
  );
}
