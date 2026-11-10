import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Tentang Situs Ini (About this site)",
  description:
    "Informasi publikasi, hak cipta, kredit perancang & pengembang, serta prinsip teknologi di balik situs web resmi GBDI.",
};

export default function AboutThisSitePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      {/* Header */}
      <header className="border-b border-white/10 pb-10 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Informasi & Transparansi
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Tentang Situs Ini
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Prinsip perancangan, kepemilikan konten, kredit pengembang web, dan komitmen privasi di balik ruang digital GBDI.
        </p>
      </header>

      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-12">
        <div className="prose mx-auto space-y-12">
          {/* Tujuan Situs */}
          <section>
            <h2>1. Tujuan dan Visi Situs Web</h2>
            <p>
              Situs web ini dihadirkan sebagai wajah dan jembatan penghubung bagi <strong>Gereja Bener Dikit Indonesia (GBDI)</strong> — sebuah komunitas iman Kristen virtual yang merangkul siapa pun tanpa memandang sekat geografis.
            </p>
            <p>
              Terinspirasi oleh kesederhanaan dan ketenangan ruang perjumpaan komunitas seperti Taizé, situs ini dirancang bukan sekadar sebagai media brosur statis, melainkan ruang yang tenang, lapang, dan ramah untuk membaca renungan iman, mendengarkan karya musik rohani Vox Dei, serta menemukan jalan untuk bergabung ke dalam persekutuan daring kami.
            </p>
          </section>

          {/* Pengembang & Perancang Web (Kredit User) */}
          <section>
            <h2>2. Desain & Pengembangan Web (Webmaster)</h2>
            <p>
              Situs web ini dirancang dan dibangun dari awal oleh:
            </p>
            <div className="not-prose my-6 rounded-2xl border border-amber-400/30 bg-black/50 p-6 sm:p-8 shadow-md backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300">
                    Web Designer & Developer
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                    {siteConfig.creator.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-400 mt-1">
                    {siteConfig.creator.role}
                  </p>
                  <p className="text-sm text-white/80 mt-3 max-w-lg leading-relaxed">
                    {siteConfig.creator.note}
                  </p>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  {siteConfig.creator.github && (
                    <a
                      href={siteConfig.creator.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-amber-400 shadow-sm"
                    >
                      <span>GitHub Profile</span>
                      <span>↗</span>
                    </a>
                  )}
                  {siteConfig.creator.portfolio && (
                    <a
                      href={siteConfig.creator.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
                    >
                      <span>Repository Proyek</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 italic">
              * Data kredit pengembang ini dapat disesuaikan sewaktu-waktu melalui berkas konfigurasi <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded border border-white/15 text-amber-300">src/lib/site.config.ts</code>.
            </p>
          </section>

          {/* Penerbit & Penanggung Jawab */}
          <section>
            <h2>3. Penerbit & Penanggung Jawab Konten</h2>
            <p>
              <strong>Penerbit:</strong> Komunitas Gereja Bener Dikit Indonesia (GBDI)<br />
              <strong>Penanggung Jawab Konten & Rohani:</strong> {siteConfig.founder}<br />
              <strong>Kontak Komunitas:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
              <strong>Server Komunitas:</strong> <a href={siteConfig.discord} target="_blank" rel="noopener noreferrer">Discord GBDI</a>
            </p>
          </section>

          {/* Arsitektur Teknologi */}
          <section>
            <h2>4. Arsitektur & Teknologi</h2>
            <p>
              Situs ini dibangun dengan prinsip <em>Static Site Generation (SSG)</em> yang mengutamakan kecepatan, ketahanan, dan kesederhanaan pemeliharaan:
            </p>
            <ul>
              <li><strong>Framework:</strong> Next.js (App Router) dengan ekspor berkas statis (output: export).</li>
              <li><strong>Bahasa & Logika:</strong> TypeScript untuk keandalan tipe kode.</li>
              <li><strong>Tata Letak & Gaya:</strong> Tailwind CSS dengan palet desain gelap bernuansa warm golden amber dan frosted glass.</li>
              <li><strong>Format Konten:</strong> Berkas Markdown/MDX mandiri di dalam repositori tanpa ketergantungan pada basis data (database-free).</li>
            </ul>
          </section>

          {/* Privasi & Tanpa Pelacak */}
          <section>
            <h2>5. Privasi Pengunjung</h2>
            <p>
              Kami menghormati ketenangan dan privasi setiap pengunjung. Situs web ini:
            </p>
            <ul>
              <li>Tidak memasang cookie pelacak iklan pihak ketiga atau alat pelacak komersial.</li>
              <li>Tidak meminta pembuatan akun pengguna atau kata sandi untuk sekadar membaca renungan.</li>
              <li>Semua pemutaran video eksternal (seperti YouTube Vox Dei) menggunakan sistem <em>click-to-load</em> sehingga koneksi ke server eksternal hanya terhubung saat pengguna secara sadar mengklik tombol putar.</li>
            </ul>
          </section>

          {/* Hak Cipta & Kredit Media */}
          <section>
            <h2>6. Hak Cipta & Kredit Media</h2>
            <p>
              Seluruh teks renungan, materi perenungan Kitab Suci, dan identitas GBDI adalah milik komunitas GBDI dan para kontributornya.
            </p>
            <p>
              Karya musik, visual, dan video di bawah bendera <strong>Vox Dei</strong> diciptakan melalui kolaborasi kreatif bersama teman-teman VTuber dan kreator musik rohani. Hak kekayaan intelektual atas lagu dan visual tetap dihormati dan diatribusikan kepada masing-masing pencipta.
            </p>
          </section>

          {/* Saran & Masukan */}
          <section>
            <h2>7. Umpan Balik & Pertanyaan</h2>
            <p>
              Jika Anda menemukan kesalahan ketik, kendala tampilan pada perangkat tertentu, atau memiliki saran bagi pengembangan ruang web ini, silakan hubungi tim pengelola atau buat percakapan di server Discord kami.
            </p>
          </section>
        </div>
      </div>

      {/* Footer Navigation Back */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
        <Link
          href="/"
          className="text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline underline-offset-4"
        >
          ← Kembali ke Beranda
        </Link>
        <Link
          href="/kontak"
          className="text-sm font-semibold text-white/80 hover:text-white hover:underline underline-offset-4"
        >
          Hubungi Kami →
        </Link>
      </div>
    </article>
  );
}
