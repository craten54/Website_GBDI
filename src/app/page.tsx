import Link from "next/link";
import fs from "fs";
import path from "path";
import { siteConfig } from "@/lib/site.config";
import { getAllRenungan } from "@/lib/renungan";
import { formatDateIndonesian } from "@/lib/utils";

interface Acara {
  title: string;
  date: string;
  time: string;
  place: string;
  description: string;
  link: string;
}

interface NilaiInti {
  title: string;
  description: string;
  icon?: string;
}

function getAcara(): Acara[] {
  try {
    const filePath = path.join(process.cwd(), "content", "data", "acara.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function getNilaiInti(): NilaiInti[] {
  try {
    const filePath = path.join(process.cwd(), "content", "data", "nilai-inti.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Beranda — GBDI",
  description: "Gereja yang melayani, bukan dilayani. Datang apa adanya.",
};

export default function HomePage() {
  const latestRenungan = getAllRenungan().slice(0, 3);
  const acaraList = getAcara();
  const nilaiIntiList = getNilaiInti();

  // Find next upcoming event (or first event if dates are placeholders)
  const nextAcara = acaraList.length > 0 ? acaraList[0] : null;

  return (
    <div className="flex flex-col gap-24 pb-24 text-white">
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 backdrop-blur-xs">
            <span>Komunitas Iman Kristen Virtual</span>
          </div>
          <h1 className="mt-8 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight drop-shadow-md text-white">
            Gereja yang melayani, <br className="hidden sm:inline" />
            bukan dilayani.
          </h1>
          <p className="mt-6 text-xl text-amber-200/90 sm:text-2xl font-light">
            Datang apa adanya.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
            GBDI adalah ruang yang terbuka, jujur, dan hangat bagi siapa pun yang
            merasa jauh dari kehidupan bergereja, lelah, atau sedang mencari perjumpaan yang tulus.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-base font-bold text-black shadow-lg transition hover:bg-amber-400 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Gabung di Discord
            </a>
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Renungan Terbaru ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Refleksi & Tulisan
            </span>
            <h2 className="mt-1 font-heading text-3xl font-extrabold text-white">
              Renungan Terbaru
            </h2>
          </div>
          <Link
            href="/renungan"
            className="text-sm font-bold text-amber-300 hover:text-amber-200 hover:underline underline-offset-4"
          >
            Lihat semua renungan →
          </Link>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestRenungan.map((item) => (
            <article
              key={item.slug}
              className="glass-card-interactive flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <time dateTime={item.date}>{formatDateIndonesian(item.date)}</time>
                  <span>{item.author}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-white">
                  <Link
                    href={`/renungan/${item.slug}`}
                    className="hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href={`/renungan/${item.slug}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline underline-offset-2"
                >
                  Baca tulisan →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. Berikutnya di GBDI ──────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/15">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Jadwal & Pertemuan
              </span>
              <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl text-white">
                Berikutnya di GBDI
              </h2>

              {nextAcara ? (
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-xl font-bold text-white">
                    {nextAcara.title}
                  </p>
                  <p className="text-sm text-amber-300/90 font-medium">
                    {formatDateIndonesian(nextAcara.date)} • {nextAcara.time} • {nextAcara.place}
                  </p>
                  <p className="mt-1 text-sm text-white/80 leading-relaxed">
                    {nextAcara.description}
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-base text-white/75">
                  Belum ada jadwal acara terdekat. Kunjungi Discord GBDI untuk pengumuman terkini.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/komunitas/cgv"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Tentang CGV
              </Link>
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
              >
                Cek di Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Tentang Singkat ─────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Mengenal Komunitas
        </span>
        <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl text-white">
          Sahabat bagi yang Mencari
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          GBDI lahir dari kegelisahan bahwa gereja tidak seharusnya berjarak dengan kenyataan manusia.
          Kami percaya gereja tidak semata-mata dibatasi oleh bangunan fisik atau jarak.
          Melalui ruang virtual, kami ingin hadir bagi mereka yang lelah, kecewa, atau masih mencari kehangatan persekutuan.
        </p>
        <div className="mt-8">
          <Link
            href="/tentang"
            className="inline-flex items-center gap-2 text-base font-bold text-amber-300 hover:text-amber-200 hover:underline underline-offset-4"
          >
            <span>Baca selengkapnya cerita kami →</span>
          </Link>
        </div>
      </section>

      {/* ── 5. Nilai Inti ──────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Dasar Sikap Kami
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-white">
            Tiga Nilai Inti
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {nilaiIntiList.map((nilai, index) => (
            <div
              key={index}
              className="glass-card-interactive rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 font-heading font-extrabold text-xl">
                  0{index + 1}
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-white">
                  {nilai.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {nilai.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Ajakan Terlibat ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Volunteer card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Melayani Bersama
              </span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold text-white">
                Volunteer GBDI
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                GBDI bertumbuh karena orang-orang yang rindu melayani. Baik di bidang ilustrasi, musik, audio mastering, maupun video editing — mari bergabung dan melayani bersama.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/komunitas/volunteer"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
              >
                Lihat Bidang & Mendaftar
              </Link>
            </div>
          </div>

          {/* Pendampingan card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Ruang Pribadi
              </span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold text-white">
                Pendampingan Pastoral
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Membutuhkan teman bercerita, berdoa bersama, atau mencari pendampingan iman? Kami menyediakan ruang percakapan pribadi yang aman dan rahasia.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/komunitas/pendampingan"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Informasi Pendampingan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
