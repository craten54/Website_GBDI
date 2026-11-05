import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/renungan", label: "Renungan" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/kontak", label: "Kontak" },
] as const;

const BAND_COLORS = [
  "bg-rose",
  "bg-sun",
  "bg-teal",
  "bg-violet",
  "bg-sky",
] as const;

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Color band */}
      <div className="flex h-2" aria-hidden="true">
        {BAND_COLORS.map((color) => (
          <span key={color} className={`flex-1 ${color}`} />
        ))}
      </div>

      <div className="bg-ink text-warm-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-2xl font-extrabold tracking-tight text-white
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-gbdi.png"
                alt="Logo GBDI"
                className="h-8 w-8 object-contain rounded-full bg-paper p-0.5"
              />
              <span>GBDI</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed opacity-75">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigasi" className="flex flex-col gap-2">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest opacity-50">
              Halaman
            </h3>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm opacity-75 hover:opacity-100
                           focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-violet"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest opacity-50">
              Terhubung
            </h3>
            <a
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-75 hover:opacity-100
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              Discord
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-75 hover:opacity-100
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              Instagram
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-75 hover:opacity-100
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              TikTok
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm opacity-75 hover:opacity-100
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 px-4 py-6 text-center text-xs opacity-50 sm:px-6">
          © 2026 {siteConfig.name}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
