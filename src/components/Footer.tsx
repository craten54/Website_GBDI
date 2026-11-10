import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/renungan", label: "Renungan" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/kontak", label: "Kontak" },
  { href: "/about-this-site", label: "Tentang Situs Ini" },
] as const;

// Warm palette colorband matching amber/golden/earthy background (No purple)
const BAND_COLORS = [
  "bg-amber-500",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-amber-300",
  "bg-amber-600",
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      {/* Color band */}
      <div className="flex h-1.5" aria-hidden="true">
        {BAND_COLORS.map((color) => (
          <span key={color} className={`flex-1 ${color}`} />
        ))}
      </div>

      <div className="bg-black/65 backdrop-blur-md text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-2xl font-extrabold tracking-tight text-white
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-gbdi.png"
                alt="Logo GBDI"
                className="h-8 w-8 object-contain"
              />
              <span className="text-amber-400">GBDI</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigasi" className="flex flex-col gap-2">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400/80">
              Halaman
            </h3>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/75 hover:text-amber-300
                           focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-amber-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400/80">
              Terhubung
            </h3>
            <a
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/75 hover:text-amber-300
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400 transition-colors"
            >
              Discord
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/75 hover:text-amber-300
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/75 hover:text-amber-300
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400 transition-colors"
            >
              TikTok
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/75 hover:text-amber-300
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Copyright & Creator Credit */}
        <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/70 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            © 2026 {siteConfig.name}. Semua hak dilindungi.
          </span>
          <div className="flex items-center gap-3">
            <span>
              Web by <strong className="text-amber-400 font-semibold">{siteConfig.creator.name}</strong>
            </span>
            <span>•</span>
            <Link
              href="/about-this-site"
              className="text-amber-300 hover:underline underline-offset-2"
            >
              About this site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
