import Link from "next/link";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Vox Dei",
  description:
    "Vox Dei — ruang pelayanan musik dan video rohani kreatif GBDI berkolaborasi dengan kreator dan teman-teman VTuber.",
};

export default function VoxDeiPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/komunitas"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-violet hover:underline underline-offset-4"
        >
          <span>← Kembali ke Komunitas</span>
        </Link>
      </div>

      <header className="border-b border-ink/10 pb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Musik & Video Rohani
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
          Vox Dei
        </h1>
        <p className="mt-4 text-xl text-ink/75">
          Menyuarakan iman, keindahan, dan harapan melalui harmoni musik dan kreasi visual digital.
        </p>
      </header>

      {/* Featured Video Embed (click to load) */}
      <section className="mt-12">
        <h2 className="sr-only">Video Unggulan Vox Dei</h2>
        <div className="max-w-2xl mx-auto">
          {/* Dummy video ID according to requirements */}
          <YouTubeEmbed videoId="dQw4w9WgXcQ" title="[Contoh] Lagu Vox Dei GBDI" />
          <p className="mt-2 text-center text-xs text-ink/60">
            [Contoh] Preview karya lagu dan musik rohani Vox Dei GBDI.
          </p>
        </div>
      </section>

      <div className="prose mx-auto mt-14 space-y-12">
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
            <li><strong>Lagu Pujian & Penyembahan:</strong> Produksi aransemen lagu rohani orisinal maupun cover tematik.</li>
            <li><strong>Refleksi Musikal:</strong> Audio renungan yang dipadukan dengan alunan musik meditatif untuk saat teduh.</li>
            <li><strong>Video Musik Animasi:</strong> Visual kreatif yang mendukung pesan iman melalui medium grafis digital.</li>
          </ul>
        </section>

        <section>
          <h2>Ingin Ikut Berpartisipasi?</h2>
          <p>
            Vox Dei selalu membuka pintu kolaborasi bagi pemusik, vokalis, produser audio, ilustrator, hingga animator yang ingin menyalurkan bakatnya untuk melayani sesama.
          </p>
          <p>
            Jika kamu tertarik terlibat dalam proyek musik berikutnya, silakan kunjungi halaman pendaftaran volunteer atau hubungi tim kami melalui email.
          </p>
        </section>
      </div>

      <footer className="mt-16 rounded-3xl border border-ink/10 bg-warm-white p-8 text-center sm:p-10">
        <h3 className="font-heading text-2xl font-bold">
          Dukung & Ikuti Perjalanan Vox Dei
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75">
          Karya-karya terbaru dirilis secara berkala melalui kanal YouTube dan diumumkan di komunitas Discord GBDI.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/komunitas/volunteer"
            className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Gabung Tim Musik / Kreatif
          </Link>
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-7 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
          >
            Bahas di Discord
          </a>
        </div>
      </footer>
    </article>
  );
}

