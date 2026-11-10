import fs from "fs";
import path from "path";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { formatDateIndonesian } from "@/lib/utils";

interface Acara {
  title: string;
  date: string;
  time: string;
  place: string;
  description: string;
  link: string;
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

export const metadata = {
  title: "Connect Group Virtual (CGV)",
  description:
    "Connect Group Virtual GBDI — persekutuan virtual bulanan yang merangkul teman-teman dari seluruh Indonesia.",
};

export default function CgvPage() {
  const acaraList = getAcara();

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
          The Community
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Connect Group Virtual (CGV)
        </h1>
        <p className="mt-4 text-xl text-white/80">
          Satu ruang virtual untuk saling mengenal, berbagi, dan bertumbuh bersama tanpa batasan wilayah.
        </p>
      </header>

      <div className="glass-card rounded-3xl p-8 sm:p-12 mt-12">
        <div className="prose mx-auto space-y-12">
          <section>
            <h2>Apa itu CGV?</h2>
            <p>
              Connect Group Virtual (CGV) adalah wadah persekutuan resmi GBDI yang diadakan secara berkala (direncanakan satu kali dalam sebulan). Pertemuan ini diselenggarakan secara daring di voice dan video channel server Discord GBDI.
            </p>
            <p>
              Di sini, kita meluangkan waktu sejenak dari kesibukan untuk bertegur sapa, membagikan cerita dan pergumulan, merenungkan firman Tuhan secara santai dan aplikatif, serta saling mendoakan.
            </p>
          </section>

          <section>
            <h2>Untuk Siapa?</h2>
            <p>
              CGV terbuka untuk <strong>seluruh teman di Indonesia maupun luar negeri</strong>. Kami sengaja tidak membagi kelompok berdasarkan wilayah geografis tertentu, agar setiap orang bisa saling mengenal saudara seiman dari latar belakang, kota, dan pengalaman yang beragam.
            </p>
            <ul>
              <li>Terbuka bagi kamu yang belum memiliki kelompok sel atau komunitas rohani.</li>
              <li>Terbuka bagi kamu yang merasa ragu, lelah, atau enggan dengan suasana gereja yang menghakimi.</li>
              <li>Terbuka bagi pencari iman yang ingin sekadar mendengar tanpa tekanan harus berbicara.</li>
            </ul>
          </section>

          <section>
            <h2>Bagaimana Cara Mengikutinya?</h2>
            <ol>
              <li>
                <strong>Masuk ke Server Discord GBDI:</strong> Tautan bergabung tersedia di tombol di bawah ini.
              </li>
              <li>
                <strong>Pantau Kanal Jadwal:</strong> Waktu pelaksanaan dan link room akan diumumkan di kanal pengumuman Discord.
              </li>
              <li>
                <strong>Hadir Apa Adanya:</strong> Nyalakan audio atau video sesuai kenyamananmu. Kamu boleh berbagi cerita, atau boleh juga hanya menjadi pendengar.
              </li>
            </ol>
          </section>
        </div>
      </div>

      {/* Schedule Box */}
      <section className="glass-card mt-12 rounded-3xl p-8 sm:p-10 border-amber-400/20">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Jadwal Terdekat
        </span>
        <h2 className="mt-2 font-heading text-2xl font-bold text-white">
          Pertemuan Berikutnya
        </h2>

        {acaraList.length > 0 ? (
          <div className="mt-6 space-y-4">
            {acaraList.map((acara, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {acara.title}
                  </h3>
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/20 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                    {acara.time}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/60">
                  {formatDateIndonesian(acara.date)} • Bertempat di {acara.place}
                </p>
                <p className="mt-3 text-sm text-white/80">
                  {acara.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-white/70">
            Belum ada jadwal pasti untuk bulan ini. Pantau terus kanal Discord kami untuk tanggal dan waktu perjumpaan berikutnya.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-amber-400 shadow-md"
          >
            Gabung di Discord GBDI
          </a>
        </div>
      </section>
    </article>
  );
}
