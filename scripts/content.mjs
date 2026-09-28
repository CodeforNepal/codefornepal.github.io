// Node-only content loader. Reads Markdown from disk, renders it to HTML, and
// returns fully serialisable objects that the browser bundle consumes via the
// `virtual:content` module (see vite-plugin-content.ts).
//
// Ported from the old lib/posts.ts + lib/staticMarkdown.ts (which used `fs` at
// Next.js build time). All the pure selector helpers now live in lib/posts.ts
// and operate on this data in memory.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { decodeHTML } from 'entities';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const POSTS_DIR = path.join(ROOT, 'content', 'posts');
const FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Jekyll Utils.slugify, default mode: downcase and replace every run of
 * non-alphanumeric characters with a single hyphen, trimming leading/trailing ones.
 */
function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureTrailingSlash(p) {
  let u = p.startsWith('/') ? p : `/${p}`;
  if (!u.endsWith('/')) u += '/';
  return u;
}

function toArray(v) {
  if (Array.isArray(v)) return v.map((x) => String(x));
  if (v == null || v === '') return [];
  return [String(v)];
}

function firstParagraphText(markdown) {
  const block = markdown.trim().split(/\n\s*\n/)[0] ?? '';
  return block
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Convert Markdown (with embedded raw HTML) to an HTML string. */
async function markdownToHtml(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(file);
}

export async function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async (file) => {
      const fm = FILENAME_RE.exec(file);
      if (!fm) throw new Error(`Post filename does not match YYYY-MM-DD-slug.md: ${file}`);
      const [, yyyy, mm, dd, rawSlug] = fm;
      const slug = slugify(rawSlug);

      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);

      const url = data.permalink
        ? ensureTrailingSlash(String(data.permalink))
        : `/${yyyy}/${mm}/${dd}/${slug}/`;

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
        html: await markdownToHtml(content),
      };
    }),
  );

  // Reverse-chronological, matching Jekyll's sort_reverse.
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

/** Read a Markdown file from the repo root, strip front matter, render to HTML. */
export async function loadRootMarkdown(filename) {
  const raw = fs.readFileSync(path.join(ROOT, filename), 'utf8');
  const { data, content } = matter(raw);
  return { title: data.title ? String(data.title) : '', html: await markdownToHtml(content) };
}

export async function loadContent() {
  const [posts, codeOfConduct, privacy] = await Promise.all([
    loadPosts(),
    loadRootMarkdown('CODE_OF_CONDUCT.md'),
    loadRootMarkdown('PRIVACY_POLICY.md'),
  ]);
  return { posts, rootMarkdown: { codeOfConduct, privacy } };
}
