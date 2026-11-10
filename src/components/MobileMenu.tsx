"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/renungan", label: "Renungan" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/kontak", label: "Kontak" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg
                   text-white hover:bg-white/10 focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Slide-down panel */}
      <nav
        id="mobile-nav"
        className={`fixed inset-x-0 top-0 z-40 flex flex-col gap-2 bg-[#140e13]/95 border-b border-white/10
                    px-6 pb-8 pt-20 shadow-2xl transition-transform duration-300 ease-in-out
                    md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}
        aria-label="Menu navigasi utama (mobile)"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={close}
            className="rounded-lg px-4 py-3 text-lg font-semibold text-white/90
                       hover:bg-white/10 hover:text-amber-300 focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            {label}
          </Link>
        ))}
        <a
          href={siteConfig.discord}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-500
                     px-6 py-3 text-base font-bold text-black hover:bg-amber-400
                     focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-amber-400"
        >
          Gabung di Discord
        </a>
      </nav>
    </>
  );
}
