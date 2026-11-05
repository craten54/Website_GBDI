// Utility to read and parse MDX frontmatter for renungan
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Renungan {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  verse?: string;
  audio?: string;
  cover?: string;
  draft?: boolean;
  content: string;
}

const RENUNGAN_DIR = path.join(process.cwd(), "content", "renungan");

export function getAllRenungan(): Renungan[] {
  if (!fs.existsSync(RENUNGAN_DIR)) return [];

  const files = fs.readdirSync(RENUNGAN_DIR).filter((f) => f.endsWith(".mdx"));

  const renungan = files
    .map((filename) => {
      const filePath = path.join(RENUNGAN_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      if (data.draft === true) return null;

      const slug = filename.replace(/\.mdx$/, "");

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        author: data.author || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        verse: data.verse,
        audio: data.audio,
        cover: data.cover,
        draft: data.draft,
        content,
      } as Renungan;
    })
    .filter(Boolean) as Renungan[];

  // Sort by date descending
  renungan.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return renungan;
}

export function getRenunganBySlug(slug: string): Renungan | null {
  const filePath = path.join(RENUNGAN_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (data.draft === true) return null;

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    author: data.author || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    verse: data.verse,
    audio: data.audio,
    cover: data.cover,
    draft: data.draft,
    content,
  };
}

export function getAllTags(): string[] {
  const renungan = getAllRenungan();
  const tagSet = new Set<string>();
  renungan.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

