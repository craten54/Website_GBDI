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
          Pelayanan Bersama
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
          Volunteer GBDI
        </h1>
        <p className="mt-4 text-xl text-ink/75">
          GBDI bertumbuh bukan karena organisasi yang kaku, melainkan karena kerelaan hati orang-orang yang ingin memberi diri.
        </p>
      </header>

      <div className="prose mx-auto mt-12 space-y-10">
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

      {/* Roles grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-2xl border border-ink/10 bg-warm-white p-6"
          >
            <h3 className="font-heading text-xl font-bold text-violet">
              {role.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              {role.description}
            </p>
          </div>
        ))}
      </div>

      <div className="prose mx-auto mt-14 space-y-8">
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

      {/* CTA Box */}
      <footer className="mt-16 rounded-3xl border border-ink/10 bg-warm-white p-8 text-center sm:p-12">
        <h3 className="font-heading text-2xl font-bold sm:text-3xl">
          Mari berlayar bersama kami
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75">
          Kirimkan email singkat ke pengelola kami untuk memulai percakapan pendaftaran volunteer.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            Kirim Email Pendaftaran
          </a>
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-7 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
          >
            Tanya di Discord
          </a>
        </div>
      </footer>
    </article>
  );
}

