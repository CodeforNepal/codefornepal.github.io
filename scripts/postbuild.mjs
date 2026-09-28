// Post-build: emit the static XML endpoints that the old Next.js app produced
// via route handlers (feed.xml, sitemap.xml) plus a GitHub Pages SPA 404 fallback.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadPosts } from './content.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const OUT = path.join(ROOT, 'out');

const SITE = {
  title: 'Code for Nepal',
  description:
    "Community of volunteers helping address Nepal's challenges using civic tech to innovate, organize and advocate digital literacy",
  url: 'https://codefornepal.org',
};
const PER_PAGE = 50;

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const posts = await loadPosts();

/* ---- feed.xml (Atom, parity with jekyll-feed) ---- */
{
  const recent = posts.slice(0, 20);
  const updated = recent[0]?.date ?? new Date().toISOString();
  const feedUrl = `${SITE.url}/feed.xml`;
  const entries = recent
    .map((p) => {
      const link = SITE.url + p.url;
      const summary = p.description || p.excerpt;
      return `  <entry>
    <title type="html">${escapeXml(p.title)}</title>
    <link href="${escapeXml(link)}" rel="alternate" type="text/html" title="${escapeXml(p.title)}"/>
    <published>${p.date}</published>
    <updated>${p.date}</updated>
    <id>${escapeXml(link)}</id>
    <summary type="html">${escapeXml(summary)}</summary>
    ${p.author ? `<author><name>${escapeXml(p.author)}</name></author>` : ''}
  </entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <generator uri="https://vitejs.dev/" version="6">Vite</generator>
  <link href="${feedUrl}" rel="self" type="application/atom+xml"/>
  <link href="${SITE.url}/" rel="alternate" type="text/html"/>
  <updated>${updated}</updated>
  <id>${feedUrl}</id>
  <title type="html">${escapeXml(SITE.title)}</title>
  <subtitle>${escapeXml(SITE.description)}</subtitle>
${entries}
</feed>
`;
  fs.writeFileSync(path.join(OUT, 'feed.xml'), xml);
}

/* ---- sitemap.xml ---- */
{
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
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  for (let n = 2; n <= totalPages; n++) staticPaths.push(`/page/${n}/`);

  const urls = [
    ...staticPaths.map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`),
    ...posts.map(
      (p) =>
        `  <url><loc>${SITE.url}${p.url}</loc><lastmod>${p.date.slice(0, 10)}</lastmod></url>`,
    ),
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml);
}

/* ---- robots.txt ---- */
fs.writeFileSync(
  path.join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`,
);

/* ---- 404.html: GitHub Pages SPA fallback ---- */
{
  const indexHtml = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
  const redirectScript = `<script>sessionStorage.redirect = location.href;</script>`;
  const html404 = indexHtml.replace('</head>', `  ${redirectScript}\n</head>`);
  fs.writeFileSync(path.join(OUT, '404.html'), html404);
}

console.log(
  `postbuild: wrote feed.xml, sitemap.xml (${posts.length} posts), robots.txt, 404.html`,
);
