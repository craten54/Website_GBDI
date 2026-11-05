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
      className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95
                 backdrop-blur-md supports-[backdrop-filter]:bg-paper/80"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-2xl font-extrabold tracking-tight text-ink
                     focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-violet"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-gbdi.png"
            alt="Logo GBDI"
            className="h-9 w-9 object-contain"
          />
          <span className="text-violet">GBDI</span>
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
              className="rounded-lg px-3 py-2 text-sm font-semibold text-ink
                         hover:bg-violet-light hover:text-violet
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-violet"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={siteConfig.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-violet px-5 py-2 text-sm font-bold text-white
                     hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-violet md:inline-flex"
        >
          Gabung di Discord
        </a>

        {/* Mobile menu (client component) */}
        <MobileMenu />
      </div>
    </header>
  );
}
