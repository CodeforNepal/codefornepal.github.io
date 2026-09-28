import { site } from './config';

export interface PageMeta {
  title?: string;
  description: string;
  /** Absolute path like "/about/" or "/2017/04/slug/". */
  canonical: string;
  image?: string;
  type: 'website' | 'article';
}

/**
 * Build the resolved per-page metadata consumed by <Seo>.
 * Fixes the original defect where the canonical was hardcoded to the homepage
 * on every page — here it is per-page.
 */
export function buildMeta(opts: {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): PageMeta {
  const { title, description, path, image, type = 'website' } = opts;
  return {
    title,
    description: description ?? site.description,
    canonical: site.url + path,
    image: image ?? site.favicon,
    type,
  };
}

/** Full <title> string (mirrors the Next `%s | Code for Nepal` template). */
export function pageTitle(title?: string): string {
  return title ? `${title} | ${site.title}` : site.title;
}
