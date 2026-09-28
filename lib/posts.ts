import content from 'virtual:content';

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
}

export interface RootMarkdown {
  title: string;
  html: string;
}

const data: {
  posts: Post[];
  rootMarkdown: Record<'codeOfConduct' | 'privacy', RootMarkdown>;
} = content;

export function getAllPosts(): Post[] {
  return data.posts;
}

export function getPostBySegments(segments: string[]): Post | undefined {
  const key = segments.join('/');
  return data.posts.find((p) => p.segments.join('/') === key);
}

/** Root Markdown pages (CODE_OF_CONDUCT.md / PRIVACY_POLICY.md), rendered to HTML. */
export function getRootMarkdown(which: 'codeOfConduct' | 'privacy'): RootMarkdown {
  return data.rootMarkdown[which];
}

/** Posts tagged "highlight", most recent first (mirrors site.tags.highlight). */
export function getHighlightedPosts(limit = 3): Post[] {
  return data.posts
    .filter((p) => p.tags.map((t) => t.toLowerCase()).includes('highlight'))
    .slice(0, limit);
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
  return Math.max(1, Math.ceil(data.posts.length / PER_PAGE));
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
  return data.posts.map(toSummary);
}

/** The slice of summaries for a given 1-based page. */
export function getPageSummaries(page: number): PostSummary[] {
  const start = (page - 1) * PER_PAGE;
  return data.posts.slice(start, start + PER_PAGE).map(toSummary);
}

/** Distinct post years, newest first (for the blog year filter). */
export function getYears(): string[] {
  return [...new Set(data.posts.map((p) => p.year))].sort().reverse();
}

/**
 * Rendered post body HTML by URL. The bodies live in a separate virtual module
 * (`virtual:post-bodies`) that is dynamically imported so the ~1 MB corpus is
 * only fetched when a post page is actually viewed.
 */
export async function getPostBody(url: string): Promise<string | undefined> {
  const mod = await import('virtual:post-bodies');
  return mod.default[url];
}
