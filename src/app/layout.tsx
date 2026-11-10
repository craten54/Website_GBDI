import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: {
    template: "%s — GBDI",
    default: "GBDI — Gereja Bener Dikit Indonesia",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-dvh flex flex-col font-body text-white relative antialiased selection:bg-amber-500 selection:text-black">
        {/* ── Fixed Blurred Photo Background (gbdichurch.org style, no paper overlay) ── */}
        <div
          className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-black"
          aria-hidden="true"
        >
          {/* Blurred Background Image */}
          <div
            className="absolute -inset-[6%] bg-cover bg-center filter blur-[20px] scale-110 opacity-90"
            style={{
              backgroundImage: "url('/images/background.jpg'), url('/images/background.png')",
            }}
          />
          {/* Subtle dark ambient tint so text is ultra-sharp and legible */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
        </div>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
