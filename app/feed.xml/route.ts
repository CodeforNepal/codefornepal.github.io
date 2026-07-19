import { site } from '@/lib/config';
import { getAllPosts } from '@/lib/posts';

// Static Atom feed at /feed.xml (parity with jekyll-feed's default output path).
export const dynamic = 'force-static';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET(): Response {
  const posts = getAllPosts().slice(0, 20);
  const updated = posts[0]?.date ?? new Date().toISOString();
  const feedUrl = `${site.url}/feed.xml`;

  const entries = posts
    .map((p) => {
      const link = site.url + p.url;
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
  <generator uri="https://nextjs.org/" version="15">Next.js</generator>
  <link href="${feedUrl}" rel="self" type="application/atom+xml"/>
  <link href="${site.url}/" rel="alternate" type="text/html"/>
  <updated>${updated}</updated>
  <id>${feedUrl}</id>
  <title type="html">${escapeXml(site.title)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
${entries}
</feed>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}
