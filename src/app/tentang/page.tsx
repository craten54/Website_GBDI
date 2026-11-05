import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Cerita di balik lahirnya Gereja Bener Dikit Indonesia (GBDI), makna nama 'Bener Dikit', semangat ekumenis, dan panggilan Markus 10:45.",
};

export default function TentangPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Header */}
      <header className="border-b border-ink/10 pb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-violet">
          Tentang Kami
        </span>
        <h1 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl sm:leading-tight">
          Gereja Maya dengan Integritas Nyata
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/75 sm:text-xl">
          Sebuah ruang yang ramah, terbuka, dan penuh belas kasih bagi siapa pun yang rindu berjalan bersama Kristus.
        </p>
      </header>

      {/* Content Sections */}
      <div className="prose mx-auto mt-16 space-y-16">
        {/* Bagian 1 */}
        <section>
          <h2>Kenapa GBDI Ada</h2>
          <p>
            Gereja Bener Dikit Indonesia (GBDI) lahir dari sebuah kegelisahan yang sederhana, tetapi dekat dengan kenyataan kehidupan manusia. Kami melihat bagaimana sebagian orang mulai merasa jauh dari kehidupan bergereja. Ada yang kehilangan kepercayaan terhadap lembaga keagamaan, ada yang membawa pengalaman yang tidak menyenangkan, dan ada pula yang perlahan kehilangan imannya.
          </p>
          <p>
            Di tengah kenyataan tersebut, muncul sebuah pertanyaan: <em>Mungkinkah gereja tetap hadir dan menjadi sahabat bagi mereka yang merasa telah kehilangan tempat dalam kehidupan bergereja?</em>
          </p>
          <p>
            Berangkat dari kerinduan itulah, GBDI hadir sebagai komunitas iman Kristen yang bertumbuh melalui ruang digital. Kami percaya bahwa gereja tidak semata-mata dibatasi oleh bangunan ataupun jarak yang memisahkan manusia. Melalui berbagai bentuk perjumpaan virtual, kami ingin menghadirkan sebuah ruang tempat setiap orang dapat saling menyapa, mendengarkan, membagikan pergumulan, serta belajar dan bertumbuh bersama dalam kasih Kristus.
          </p>
          <p>
            Bukan untuk menggantikan keberadaan gereja-gereja yang telah ada, melainkan untuk membuka pintu persekutuan bagi mereka yang masih mencari, mempertanyakan, atau merindukan kembali kehangatan sebuah komunitas iman.
          </p>
        </section>

        {/* Bagian 2 */}
        <section>
          <h2>Kenapa &ldquo;Bener Dikit&rdquo;</h2>
          <p>
            Nama <strong>Bener Dikit</strong> merupakan sebuah pengakuan akan kerendahan hati kami sebagai manusia yang masih terus belajar. Kami menyadari bahwa kehidupan iman sering kali dipenuhi pertanyaan, keraguan, dan pergumulan. Tidak seorang pun dapat mengklaim telah sepenuhnya menyelami kedalaman Misteri Ilahi, sebab pengetahuan dan pengalaman manusia senantiasa memiliki keterbatasan.
          </p>
          <p>
            Justru melalui kesadaran akan keterbatasan itulah, kami diajak untuk terus membuka diri terhadap karya Allah dalam kehidupan.
          </p>
          <p>
            Melalui perziarahan kehidupan, kami percaya bahwa Misteri Ilahi senantiasa melingkupi dan menuntun setiap langkah manusia. Di tengah segala pengalaman, baik dalam sukacita maupun pergumulan, kita diajak untuk memaknai setiap peristiwa yang hadir dalam keseharian, menoleh sejenak pada apa yang telah dilalui, dan terus belajar mengenali Sang Cinta dalam hal-hal yang paling sederhana.
          </p>
          <blockquote>
            Sebab beriman, bagi kami, bukan berarti telah memiliki seluruh jawaban, melainkan kesediaan untuk terus mencari, mendengarkan, dan bertumbuh di hadapan Allah.
          </blockquote>
        </section>

        {/* Bagian 3 */}
        <section>
          <h2>Semangat Ekumenis</h2>
          <p>
            Berakar pada Injil Yesus Kristus, GBDI menghidupi semangat ekumenis yang menghargai keberagaman tradisi dan pengalaman iman Kristen. Kami percaya bahwa perbedaan tidak harus menjadi alasan untuk saling menjauhkan diri, melainkan kesempatan untuk saling mendengarkan dan belajar.
          </p>
          <p>
            Dalam semangat tersebut, kami tetap menghormati ajaran-ajaran mendasar iman Kristen, sembari membuka ruang bagi setiap pribadi untuk mengenal dan menghayati imannya dengan tulus, tanpa rasa takut untuk bertanya ataupun mengungkapkan keraguan.
          </p>
        </section>

        {/* Bagian 4 */}
        <section>
          <h2>Markus 10:45: Melayani, Bukan Dilayani</h2>
          <p>
            Semangat pelayanan kami bersumber dari <strong>Markus 10:45</strong>, ketika Yesus Kristus menyatakan bahwa Anak Manusia datang bukan untuk dilayani, melainkan untuk melayani. Sebagaimana Kristus yang hadir, menyapa, dan merengkuh orang-orang yang dijumpai-Nya, kami pun ingin belajar untuk menghadirkan kasih yang sama melalui kehidupan komunitas.
          </p>
          <p>
            Bagi kami, panggilan gereja tidak berhenti pada pemberitaan firman, tetapi menemukan wujudnya melalui kepedulian, solidaritas, kesediaan mendengarkan, dan keberanian untuk hadir bersama mereka yang membutuhkan.
          </p>
          <p>
            Melalui persekutuan virtual (Connect Group), perenungan Kitab Suci, pelayanan musik Vox Dei, ibadah kreatif, dan berbagai kegiatan komunitas, kami berusaha menghadirkan kehidupan iman yang dekat dengan pengalaman manusia sehari-hari. Kami ingin menjadi ruang bagi mereka yang sedang mencari makna, mereka yang lelah menghadapi kehidupan, mereka yang memiliki banyak pertanyaan, maupun mereka yang sekadar merindukan seseorang untuk berjalan bersama.
          </p>
          <p>
            Pada akhirnya, kami menyadari bahwa GBDI sendiri merupakan bagian dari perziarahan yang masih terus berlangsung. Kami belum mengetahui seluruh jawaban atas pertanyaan yang akan kami jumpai, dan kami pun masih terus belajar untuk mengasihi dengan lebih sungguh. Namun, dalam keyakinan akan <em>Providentia Dei</em> — penyelenggaraan dan pemeliharaan Allah — kami percaya bahwa setiap perjumpaan dapat menjadi kesempatan untuk mengalami Sang Cinta, menemukan kembali pengharapan, dan bertumbuh bersama dalam iman kita kepada Kristus.
          </p>
        </section>
      </div>

      {/* CTA Box */}
      <footer className="mt-20 rounded-3xl border border-ink/10 bg-warm-white p-8 text-center sm:p-12">
        <h3 className="font-heading text-2xl font-bold sm:text-3xl">
          Ingin berjalan bersama kami?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/75">
          Kamu tidak perlu menjadi sempurna atau memiliki semua jawaban. Datang apa adanya, temui teman-teman di Discord, atau pelajari lebih lanjut kegiatan komunitas kami.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Gabung di Discord
          </a>
          <Link
            href="/komunitas"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-paper px-7 py-3 text-sm font-semibold text-ink transition hover:bg-warm-white"
          >
            Lihat Komunitas Kami
          </Link>
        </div>
      </footer>
    </article>
  );
}

