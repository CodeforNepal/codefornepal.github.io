import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { decodeHTML } from 'entities';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;

export interface Post {
  /** Slugified title portion of the filename. */
  slug: string;
  /** Resolved URL path, always leading + trailing slash (e.g. "/2017/04/slug/"). */
  url: string;
  /** URL split into path segments (["2017","04","slug"]) for route matching. */
  segments: string[];
  title: string;
  /** ISO date string (for machine use). */
  date: string;
  /** Pretty date, e.g. "Apr 11, 2021". */
  dateFormatted: string;
  /** Jekyll date_to_string style, e.g. "11 Apr 2021" (post byline). */
  dateToString: string;
  /** Year as string, for the blog year filter. */
  year: string;
  author: string;
  tags: string[];
  description: string;
  image?: string;
  /** Plain-text first paragraph, for card excerpts. */
  excerpt: string;
  /** Raw Markdown body (converted to HTML lazily via markdownToHtml). */
  body: string;
}

/**
 * Jekyll Utils.slugify, default mode: downcase and replace every run of
 * non-alphanumeric characters with a single hyphen, trimming leading/trailing ones.
 * Used to reproduce the default permalink for posts without an explicit `permalink`.
 */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ensureTrailingSlash(p: string): string {
  let u = p.startsWith('/') ? p : `/${p}`;
  if (!u.endsWith('/')) u += '/';
  return u;
}

function toArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map((x) => String(x));
  if (v == null || v === '') return [];
  return [String(v)];
}

function firstParagraphText(markdown: string): string {
  const block = markdown.trim().split(/\n\s*\n/)[0] ?? '';
  return block
    .replace(/<[^>]+>/g, ' ') // strip HTML tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // strip images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[#>*_`~]/g, ' ') // strip common markdown marks
    .replace(/\s+/g, ' ')
    .trim();
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts: Post[] = files.map((file) => {
    const fm = FILENAME_RE.exec(file);
    if (!fm) throw new Error(`Post filename does not match YYYY-MM-DD-slug.md: ${file}`);
    const [, yyyy, mm, dd, rawSlug] = fm;
    const slug = slugify(rawSlug);

    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);

    // URL: explicit permalink verbatim, else Jekyll default /YYYY/MM/DD/slug/.
    const url = data.permalink
      ? ensureTrailingSlash(String(data.permalink))
      : `/${yyyy}/${mm}/${dd}/${slug}/`;

    // Display date: frontmatter date if present, else the filename date.
    // Built/read in UTC so year/month/day never drift across the build machine's timezone.
    const dateObj =
      data.date instanceof Date
        ? data.date
        : data.date
          ? new Date(String(data.date))
          : new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd)));
    const dYear = dateObj.getUTCFullYear();
    const dMonth = dateObj.getUTCMonth();
    const dDay = dateObj.getUTCDate();

    const title = decodeHTML(String(data.title ?? rawSlug));

    return {
      slug,
      url,
      segments: url.split('/').filter(Boolean),
      title,
      date: dateObj.toISOString(),
      dateFormatted: `${MONTHS[dMonth]} ${dDay}, ${dYear}`,
      dateToString: `${dDay} ${MONTHS[dMonth]} ${dYear}`,
      year: String(dYear),
      author: data.author ? String(data.author) : '',
      tags: toArray(data.tags),
      description: data.description ? String(data.description) : '',
      image: data.image ? String(data.image) : undefined,
      excerpt: firstParagraphText(content),
      body: content,
    };
  });

  // Reverse-chronological, matching Jekyll's sort_reverse.
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  cache = posts;
  return posts;
}

export function getPostBySegments(segments: string[]): Post | undefined {
  const key = segments.join('/');
  return getAllPosts().find((p) => p.segments.join('/') === key);
}

/** Posts tagged "highlight", most recent first (mirrors site.tags.highlight). */
export function getHighlightedPosts(limit = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.tags.map((t) => t.toLowerCase()).includes('highlight'))
    .slice(0, limit);
}

/** Convert Markdown (with embedded raw HTML) to an HTML string. */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(file);
}

/** Truncate plain text to N words with an ellipsis (mirrors Liquid truncatewords). */
export function truncateWords(text: string, words: number): string {
  const parts = text.split(/\s+/);
  if (parts.length <= words) return text;
  return parts.slice(0, words).join(' ') + '…';
}

/** Posts per page (mirrors _config.yml pagination.per_page). */
export const PER_PAGE = 50;

export function totalPages(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / PER_PAGE));
}

/** Lightweight post shape for the blog index (cards + client search). */
export interface PostSummary {
  title: string;
  titleLower: string;
  url: string;
  dateFormatted: string;
  year: string;
  excerpt: string;
}

function toSummary(p: Post): PostSummary {
  return {
    title: p.title,
    titleLower: p.title.toLowerCase(),
    url: p.url,
    dateFormatted: p.dateFormatted,
    year: p.year,
    excerpt: truncateWords(p.excerpt, 30),
  };
}

/** All posts as lightweight summaries (for full-corpus client search on the blog index). */
export function getAllSummaries(): PostSummary[] {
  return getAllPosts().map(toSummary);
}

/** The slice of summaries for a given 1-based page. */
export function getPageSummaries(page: number): PostSummary[] {
  const start = (page - 1) * PER_PAGE;
  return getAllPosts().slice(start, start + PER_PAGE).map(toSummary);
}

/** Distinct post years, newest first (for the blog year filter). */
export function getYears(): string[] {
  return [...new Set(getAllPosts().map((p) => p.year))].sort().reverse();
}
