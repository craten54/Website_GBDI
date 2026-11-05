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
          The Community
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
          Connect Group Virtual (CGV)
        </h1>
        <p className="mt-4 text-xl text-ink/75">
          Satu ruang virtual untuk saling mengenal, berbagi, dan bertumbuh bersama tanpa batasan wilayah.
        </p>
      </header>

      <div className="prose mx-auto mt-12 space-y-12">
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

      {/* Schedule Box */}
      <section className="mt-16 rounded-3xl border border-ink/10 bg-warm-white p-8 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Jadwal Terdekat
        </span>
        <h2 className="mt-2 font-heading text-2xl font-bold">
          Pertemuan Berikutnya
        </h2>

        {acaraList.length > 0 ? (
          <div className="mt-6 space-y-4">
            {acaraList.map((acara, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-ink/10 bg-paper p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold">
                    {acara.title}
                  </h3>
                  <span className="rounded-full bg-violet-light/60 px-2.5 py-0.5 text-xs font-semibold text-violet">
                    {acara.time}
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink/60">
                  {formatDateIndonesian(acara.date)} • Bertempat di {acara.place}
                </p>
                <p className="mt-3 text-sm text-ink/75">
                  {acara.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-ink/70">
            Belum ada jadwal pasti untuk bulan ini. Pantau terus kanal Discord kami untuk tanggal dan waktu perjumpaan berikutnya.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Gabung di Discord GBDI
          </a>
        </div>
      </section>
    </article>
  );
}

