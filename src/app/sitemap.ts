import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { getAllRenungan } from "@/lib/renungan";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const routes = [
    "",
    "/tentang",
    "/renungan",
    "/komunitas",
    "/komunitas/cgv",
    "/komunitas/vox-dei",
    "/komunitas/volunteer",
    "/komunitas/pendampingan",
    "/kontak",
    "/about-this-site",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic renungan pages
  const renunganRoutes = getAllRenungan().map((r) => ({
    url: `${baseUrl}/renungan/${r.slug}`,
    lastModified: new Date(r.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...renunganRoutes];
}

