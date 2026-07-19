import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';
import { getAllPosts, totalPages } from '@/lib/posts';

// Required for `output: 'export'` — emits a static sitemap.xml at build.
export const dynamic = 'force-static';

/** Generated sitemap covering all pages + posts (the Jekyll site had none). */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/about/',
    '/projects/',
    '/team/',
    '/joinus/',
    '/fellowship2026/',
    '/data_crunch_hackathon_2024/',
    '/blog/',
    '/codeofconduct/',
    '/privacy/',
  ];

  const pagePaths: string[] = [];
  for (let n = 2; n <= totalPages(); n++) pagePaths.push(`/page/${n}/`);

  const staticEntries: MetadataRoute.Sitemap = [...staticPaths, ...pagePaths].map((p) => ({
    url: site.url + p,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: site.url + p.url,
    lastModified: p.date,
  }));

  return [...staticEntries, ...postEntries];
}
