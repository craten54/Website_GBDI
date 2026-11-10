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

  // Pembuat & Pengembang Web (About this site)
  creator: {
    name: "Craten54",
    role: "Web Designer & Frontend Developer",
    github: "https://github.com/craten54",
    email: "halo@contoh.id",
    portfolio: "https://github.com/craten54/Website_GBDI",
    note: "Situs web GBDI dirancang dan dibangun dari nol menggunakan Next.js App Router, TypeScript, dan Tailwind CSS.",
  },

  // Foto latar belakang utama (tersedia di /public/images/background.jpg)
  backgroundImage: "/images/background.jpg",

  // Warna brand hangat & bersahabat (Aksen Emas/Amber, Bebas Ungu)
  colors: {
    gold: "#d49a42",
    goldLight: "#fbf2e3",
    goldHover: "#e5aa52",
    ink: "#ffffff",
    inkMuted: "#e0d7ce",
    terracotta: "#e07a5f",
    amber: "#f4a261",
    sand: "#ede0d4",
  },
} as const;

export type SiteConfig = typeof siteConfig;
