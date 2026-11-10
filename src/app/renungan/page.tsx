import { getAllRenungan, getAllTags } from "@/lib/renungan";
import { RenunganList } from "@/components/RenunganList";

export const metadata = {
  title: "Renungan & Refleksi",
  description:
    "Refleksi iman, perenungan Kitab Suci, dan bacaan rohani yang hadir di tengah pergumulan manusia sehari-hari.",
};

export default function RenunganPage() {
  const renungan = getAllRenungan();
  const allTags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 text-white">
      <header className="border-b border-white/15 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Bacaan & Refleksi
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl text-white drop-shadow">
          Renungan Iman
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Tulisan, doa, dan perenungan singkat untuk menemani langkah keseharian kita dalam pengharapan dan kerendahan hati.
        </p>
      </header>

      <RenunganList initialRenungan={renungan} allTags={allTags} />
    </div>
  );
}
