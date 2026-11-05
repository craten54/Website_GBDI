// ============================================================
// site.config.ts — Satu sumber untuk semua data yang bisa berubah.
// Ganti nilai dummy sebelum rilis ke produksi.
// ============================================================

export const siteConfig = {
  name: "Gereja Bener Dikit Indonesia",
  shortName: "GBDI",
  tagline: "Gereja yang melayani, bukan dilayani. Datang apa adanya.",
  description:
    "GBDI adalah komunitas iman Kristen virtual yang terbuka bagi siapa saja — ruang untuk bertanya, bertumbuh, dan berjalan bersama dalam kasih Kristus.",
  url: "https://gbdi.id",
  locale: "id_ID",
  lang: "id",

  // Kontak (dummy — ganti sebelum rilis)
  discord: "https://discord.gg/contoh",
  email: "halo@contoh.id",
  instagram: "https://instagram.com/contoh",
  instagramHandle: "@contoh",
  tiktok: "https://tiktok.com/@contoh",
  tiktokHandle: "@contoh",

  // Pengelola
  founder: "Pdt. Benedikt",

  // Warna brand
  colors: {
    violet: "#7051f3",
    paper: "#fdf8ef",
    ink: "#201a34",
    warmWhite: "#fffdf8",
  },
} as const;

export type SiteConfig = typeof siteConfig;

