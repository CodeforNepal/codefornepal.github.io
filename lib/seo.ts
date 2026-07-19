import type { Metadata } from 'next';
import { site } from './config';

/**
 * Build per-page Metadata (title, description, canonical, Open Graph, Twitter).
 * Fixes the original defect where components/meta.html hardcoded the canonical to
 * the homepage on every page — here the canonical is per-page.
 */
export function buildMetadata(opts: {
  title?: string;
  description?: string;
  /** Absolute path like "/about/" or "/2017/04/slug/". */
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const { title, description, path, image, type = 'website' } = opts;
  const url = path;
  const desc = description ?? site.description;
  const ogImage = image ?? site.favicon;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type,
      title: title ?? site.title,
      description: desc,
      url,
      siteName: site.title,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: title ?? site.title,
      description: desc,
      site: site.twitter,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
