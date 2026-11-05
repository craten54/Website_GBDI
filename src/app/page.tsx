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
    <div className="flex flex-col gap-24 pb-24">
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet-light/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet">
            <span>Komunitas Iman Kristen Virtual</span>
          </div>
          <h1 className="mt-8 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight">
            Gereja yang melayani, <br className="hidden sm:inline" />
            bukan dilayani.
          </h1>
          <p className="mt-6 text-xl text-ink/75 sm:text-2xl">
            Datang apa adanya.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70 sm:text-lg">
            GBDI adalah ruang yang terbuka, jujur, dan hangat bagi siapa pun yang
            merasa jauh dari kehidupan bergereja, lelah, atau sedang mencari perjumpaan yang tulus.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3.5 text-base font-bold text-white shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              Gabung di Discord
            </a>
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/40 hover:bg-warm-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Renungan Terbaru ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet">
              Refleksi & Tulisan
            </span>
            <h2 className="mt-1 font-heading text-3xl font-extrabold">
              Renungan Terbaru
            </h2>
          </div>
          <Link
            href="/renungan"
            className="text-sm font-bold text-violet hover:underline underline-offset-4"
          >
            Lihat semua renungan
          </Link>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestRenungan.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-warm-white p-6 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-ink/60">
                  <time dateTime={item.date}>{formatDateIndonesian(item.date)}</time>
                  <span>{item.author}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold leading-snug">
                  <Link
                    href={`/renungan/${item.slug}`}
                    className="hover:text-violet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/75">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/5">
                <Link
                  href={`/renungan/${item.slug}`}
                  className="text-xs font-bold text-violet hover:underline underline-offset-2"
                >
                  Baca tulisan
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. Berikutnya di GBDI ──────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-violet-light/30 to-warm-white p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-violet">
                Jadwal & Pertemuan
              </span>
              <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
                Berikutnya di GBDI
              </h2>

              {nextAcara ? (
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-lg font-bold text-ink">
                    {nextAcara.title}
                  </p>
                  <p className="text-sm text-ink/70">
                    {formatDateIndonesian(nextAcara.date)} • {nextAcara.time} • {nextAcara.place}
                  </p>
                  <p className="mt-1 text-sm text-ink/80">
                    {nextAcara.description}
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-base text-ink/70">
                  Belum ada jadwal acara terdekat. Kunjungi Discord GBDI untuk pengumuman terkini.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/komunitas/cgv"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
              >
                Tentang CGV
              </Link>
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-violet px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Cek di Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Tentang Singkat ─────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Mengenal Komunitas
        </span>
        <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl">
          Sahabat bagi yang Mencari
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
          GBDI lahir dari kegelisahan bahwa gereja tidak seharusnya berjarak dengan kenyataan manusia.
          Kami percaya gereja tidak semata-mata dibatasi oleh bangunan fisik atau jarak.
          Melalui ruang virtual, kami ingin hadir bagi mereka yang lelah, kecewa, atau masih mencari kehangatan persekutuan.
        </p>
        <div className="mt-8">
          <Link
            href="/tentang"
            className="inline-flex items-center gap-2 text-base font-bold text-violet hover:underline underline-offset-4"
          >
            <span>Baca selengkapnya cerita kami</span>
          </Link>
        </div>
      </section>

      {/* ── 5. Nilai Inti ──────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-violet">
            Dasar Sikap Kami
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold">
            Tiga Nilai Inti
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {nilaiIntiList.map((nilai, index) => (
            <div
              key={index}
              className="rounded-2xl border border-ink/10 bg-warm-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-light text-violet font-heading font-extrabold text-xl">
                0{index + 1}
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold">
                {nilai.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {nilai.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Ajakan Terlibat ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Volunteer card */}
          <div className="rounded-3xl border border-ink/10 bg-warm-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet">
                Melayani Bersama
              </span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold">
                Volunteer GBDI
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                GBDI bertumbuh karena orang-orang yang rindu melayani. Baik di bidang ilustrasi, musik, audio mastering, maupun video editing — mari bergabung dan melayani bersama.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/komunitas/volunteer"
                className="inline-flex items-center justify-center rounded-full bg-violet px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Lihat Bidang & Mendaftar
              </Link>
            </div>
          </div>

          {/* Pendampingan card */}
          <div className="rounded-3xl border border-ink/10 bg-warm-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet">
                Ruang Pribadi
              </span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold">
                Pendampingan Pastoral
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Membutuhkan teman bercerita, berdoa bersama, atau mencari pendampingan iman? Kami menyediakan ruang percakapan pribadi yang aman dan rahasia.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/komunitas/pendampingan"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
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
