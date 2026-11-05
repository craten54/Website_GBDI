import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <div className="inline-flex items-center rounded-full bg-violet-light/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet">
        404 — Tidak Ditemukan
      </div>
      <h1 className="mt-6 font-heading text-4xl font-extrabold sm:text-5xl">
        Halaman Ini Belum Ada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
        Sepertinya tautan yang kamu tuju telah dipindahkan atau belum tersedia. Mari kembali ke beranda bersama kami.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3 text-sm font-bold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/renungan"
          className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-7 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
        >
          Baca Renungan
        </Link>
      </div>
    </div>
  );
}

