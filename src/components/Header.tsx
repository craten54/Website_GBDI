import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { MobileMenu } from "@/components/MobileMenu";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/renungan", label: "Renungan" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/kontak", label: "Kontak" },
] as const;

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-black/50
                 backdrop-blur-md supports-[backdrop-filter]:bg-black/45 transition-colors text-white"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
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
            className="h-9 w-9 object-contain drop-shadow"
          />
          <span className="text-amber-400">GBDI</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Menu navigasi utama"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-white/85
                         hover:bg-white/10 hover:text-amber-300 transition-colors
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-amber-400"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA (Golden Amber, no violet) */}
        <a
          href={siteConfig.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-amber-500 px-5 py-2 text-sm font-bold text-black
                     hover:bg-amber-400 shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-amber-400 md:inline-flex"
        >
          Gabung di Discord
        </a>

        {/* Mobile menu (client component) */}
        <MobileMenu />
      </div>
    </header>
  );
}
