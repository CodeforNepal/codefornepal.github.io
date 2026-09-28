import { Helmet } from 'react-helmet-async';
import { site } from '@/lib/config';
import { buildMeta, pageTitle } from '@/lib/seo';

interface Props {
  title?: string;
  description?: string;
  /** Absolute path like "/about/" (defaults to "/"). */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Per-page <head> tags. Replaces the Next.js `export const metadata` / generateMetadata
 * mechanism. Renders title, description, canonical, Open Graph and Twitter Card tags.
 */
export function Seo({ title, description, path = '/', image, type = 'website' }: Props) {
  const meta = buildMeta({ title, description, path, image, type });
  const fullTitle = pageTitle(title);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />

      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:site_name" content={site.title} />
      <meta property="og:locale" content="en_US" />
      {meta.image && <meta property="og:image" content={meta.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
    </Helmet>
  );
}
