import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Volunteer GBDI",
  description:
    "Mari melayani bersama di GBDI — mencari teman-teman bertalenta di bidang ilustrasi, aransemen musik, mixing & mastering, dan video editing.",
};

const ROLES = [
  {
    title: "Illustrator / Artist",
    description:
      "Membuat ilustrasi digital, visual aset khotbah/renungan, karakter art, atau artwork untuk sampul video Vox Dei.",
  },
  {
    title: "Music Arrangers",
    description:
      "Menyusun aransemen musik untuk pujian, renungan meditatif, atau proyek lagu rohani kolaborasi bersama VTuber.",
  },
  {
    title: "Audio Mixing & Mastering",
    description:
      "Mengolah rekaman vokal dan instrumen agar terdengar seimbang, jernih, dan nyaman didengarkan di berbagai perangkat.",
  },
  {
    title: "Video Editors",
    description:
      "Merangkai footage, visualizer, lyric video, atau animasi pendek untuk publikasi konten rohani di media sosial dan YouTube.",
  },
] as const;

export default function VolunteerPage() {
  const mailtoUrl = `mailto:${siteConfig.email}?subject=Volunteer%20GBDI%20-%20[Nama%20Anda]`;

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
          Pelayanan Bersama
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Volunteer GBDI
        </h1>
        <p className="mt-4 text-xl text-white/80">
          GBDI bertumbuh bukan karena organisasi yang kaku, melainkan karena kerelaan hati orang-orang yang ingin memberi diri.
        </p>
      </header>

      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-12">
        <div className="prose mx-auto space-y-10">
          <section>
            <h2>Panggilan untuk Melayani</h2>
            <p>
              Di GBDI, kami memegang teguh kata-kata Yesus dalam Markus 10:45 bahwa pelayanan sejati adalah tentang memberi, bukan meminta untuk dilayani. Pelayanan tidak diukur dari seberapa besar panggung yang kita miliki, melainkan dari ketulusan hati untuk hadir dan mendampingi sesama.
            </p>
            <p>
              Karena seluruh perjumpaan kami berbasis daring, kebutuhan pelayanan kami banyak bersentuhan dengan dunia kreatif dan teknologi. Kami tidak menuntut keahlian setingkat profesional kelas dunia — yang terutama adalah kerinduan untuk belajar, berkolaborasi, dan melayani dengan rendah hati.
            </p>
          </section>

          <section>
            <h2>Bidang Pelayanan yang Dibutuhkan</h2>
            <p>
              Saat ini kami membuka kesempatan bagi teman-teman yang ingin terlibat dalam bidang-bidang berikut:
            </p>
          </section>
        </div>
      </div>

      {/* Roles grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="glass-card p-6 border-white/10 transition hover:border-amber-400/40"
          >
            <h3 className="font-heading text-xl font-bold text-amber-400">
              {role.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {role.description}
            </p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-12">
        <div className="prose mx-auto space-y-8">
          <section>
            <h2>Bagaimana Cara Mendaftar?</h2>
            <p>
              Jika kamu tertarik bergabung atau sekadar ingin bertanya lebih lanjut mengenai bentuk kontribusi yang bisa kamu berikan:
            </p>
            <ol>
              <li>Klik tombol pendaftaran via email di bawah ini.</li>
              <li>Ceritakan sedikit tentang dirimu, latar belakangmu, dan bidang yang kamu minati.</li>
              <li>Sertakan portofolio atau contoh karya sederhana jika ada (link Google Drive, Artstation, SoundCloud, dsb).</li>
            </ol>
            <p>
              Tim kami akan menyambutmu dengan hangat dan menjadwalkan obrolan santai secara daring untuk saling mengenal.
            </p>
          </section>
        </div>
      </div>

      {/* CTA Box */}
      <footer className="glass-card mt-16 p-8 text-center sm:p-12 border-amber-400/20">
        <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Mari berlayar bersama kami
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
          Kirimkan email singkat ke pengelola kami untuk memulai percakapan pendaftaran volunteer.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
          >
            Kirim Email Pendaftaran
          </a>
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
          >
            Tanya di Discord
          </a>
        </div>
      </footer>
    </article>
  );
}
