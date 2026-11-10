import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Pendampingan Pastoral",
  description:
    "Ruang percakapan pribadi, konseling rohani, dan doa bersama pendamping GBDI. Tempat aman untuk didengar tanpa dihakimi.",
};

export default function PendampinganPage() {
  const mailtoUrl = `mailto:${siteConfig.email}?subject=Permohonan%20Pendampingan%20-%20GBDI`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/komunitas"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline underline-offset-4"
        >
          <span>← Kembali ke Komunitas</span>
        </Link>
      </div>

      <header className="border-b border-white/10 pb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Konseling & Doa
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Pendampingan Pastoral
        </h1>
        <p className="mt-4 text-xl text-white/80">
          Terkadang yang kita butuhkan hanyalah seseorang yang bersedia duduk bersama kita, mendengarkan, dan tidak terburu-buru menghakimi.
        </p>
      </header>

      {/* Emergency Disclaimer Alert Box */}
      <div className="mt-10 rounded-2xl border border-amber-400/40 bg-amber-950/40 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
            !
          </div>
          <div className="text-sm leading-relaxed text-white/90">
            <h2 className="font-heading text-base font-bold text-amber-300">
              Catatan Penting Mengenai Layanan Darurat
            </h2>
            <p className="mt-1">
              Pendampingan di GBDI bersifat pastoral (rohani dan persahabatan iman) dan <strong>bukan layanan medis, psikologis, atau tanggap darurat krisis kejiwaan</strong>.
            </p>
            <p className="mt-2 text-white/80">
              Jika Anda atau orang terdekat sedang berada dalam kondisi darurat medis atau mengalami pikiran untuk menyakiti diri sendiri, mohon segera hubungi layanan profesional terdekat atau hotline kesehatan jiwa darurat:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 font-semibold text-amber-200">
              <li>Hotline Kementerian Kesehatan: <strong>119</strong> (ekstensi 8)</li>
              <li>LISA Suicide Prevention Helpline: <strong>+62 811-3855-472</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-12">
        <div className="prose mx-auto space-y-10">
          <section>
            <h2>Ruang Aman untuk Berbagi</h2>
            <p>
              Kehidupan bergereja sering kali diasosiasikan dengan tuntutan kesalehan lahiriah yang membuat banyak orang enggan membuka luka batinnya. Di GBDI, kami menyediakan ruang percakapan privat antara Anda dan pendamping komunitas kami (termasuk {siteConfig.founder}).
            </p>
            <p>
              Setiap cerita, keluh kesah, atau pertanyaan yang dibagikan akan dijaga kerahasiaannya dengan penuh rasa hormat.
            </p>
          </section>

          <section>
            <h2>Hal-Hal yang Bisa Dibicarakan</h2>
            <ul>
              <li><strong>Keraguan dan Pertanyaan Iman:</strong> Pergumulan ketika ajaran agama terasa bertolak belakang dengan realitas hidupmu.</li>
              <li><strong>Kekecewaan terhadap Institusi Agama:</strong> Ruang untuk memproses trauma atau pengalaman pahit di lingkungan gereja sebelumnya.</li>
              <li><strong>Keletihan Jiwa:</strong> Kehilangan arah hidup, kesepian, beban pekerjaan atau relasi yang menumpuk.</li>
              <li><strong>Permohonan Doa Khusus:</strong> Kebutuhan akan saudara seiman yang ikut menopangmu di hadapan Tuhan.</li>
            </ul>
          </section>

          <section>
            <h2>Bagaimana Cara Menghubungi?</h2>
            <p>
              Untuk menjaga kenyamanan dan privasi, Anda dapat menghubungi kami melalui pesan email pribadi atau direct message Instagram resmi kami.
            </p>
            <p>
              Kami akan merespons secepat mungkin dan bila disepakati bersama, dapat mengatur waktu untuk obrolan teks atau panggilan suara secara privat.
            </p>
          </section>
        </div>
      </div>

      {/* Contact Box */}
      <footer className="glass-card mt-16 p-8 text-center sm:p-12 border-amber-400/20">
        <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Kirimkan Pesan Pribadi
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
          Tuliskan apa yang sedang menjadi beban hatimu ke alamat email pendampingan kami.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
          >
            Hubungi via Email ({siteConfig.email})
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
          >
            Instagram DM ({siteConfig.instagramHandle})
          </a>
        </div>
      </footer>
    </article>
  );
}
