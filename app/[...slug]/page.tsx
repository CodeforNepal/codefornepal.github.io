import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySegments, markdownToHtml } from '@/lib/posts';
import { PageLayout } from '@/components/layout/PageLayout';
import { DisqusThread } from '@/components/blog/DisqusThread';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string[] };

/** One static route per post URL — covers both permalink schemes (explicit + Jekyll default). */
export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.segments }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySegments(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description || undefined,
    path: post.url,
    image: post.image,
    type: 'article',
  });
}

/** Ported from _layouts/post.html (inside the .container.blog wrapper of _layouts/blog.html). */
export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySegments(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.body);

  return (
    <PageLayout blog>
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <Link
          href="/blog/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#dc2626',
            textDecoration: 'none',
            fontFamily: "'Montserrat',sans-serif",
            marginBottom: '2rem',
          }}
        >
          <i className="fas fa-arrow-left" aria-hidden="true" style={{ fontSize: '0.7rem' }} /> Back to Blog
        </Link>

        <h1
          className="title"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.25,
            margin: '0 0 1rem',
            fontFamily: "'Montserrat',sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#9ca3af',
            fontFamily: "'Montserrat',sans-serif",
            margin: '0 0 2.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #f3f4f6',
          }}
        >
          {post.dateToString}
          {post.author && <> &middot; {post.author}</>}
        </p>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <DisqusThread path={post.url} identifier={post.url} />
      </div>

      <style>{`
        .post-content {
          font-family: 'Droid Serif','Georgia',serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #1f2937;
        }
        .post-content > *:first-child { margin-top: 0; }

        .post-content h1, .post-content h2, .post-content h3,
        .post-content h4, .post-content h5, .post-content h6 {
          font-family: 'Montserrat',sans-serif;
          font-weight: 700;
          color: #111827;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .post-content h2 { font-size: 1.5rem; margin: 2.75rem 0 1.25rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f3f4f6; }
        .post-content h3 { font-size: 1.2rem; margin: 2.25rem 0 1rem; }
        .post-content h4 { font-size: 1.05rem; margin: 1.75rem 0 0.75rem; }

        .post-content p { margin: 0 0 1.5rem; }

        .post-content a { color: #dc2626; text-decoration: underline; text-decoration-color: rgba(220,38,38,0.35); text-underline-offset: 2px; }
        .post-content a:hover { text-decoration-color: #dc2626; }

        .post-content strong { font-weight: 700; color: #111827; }
        .post-content em { font-style: italic; }

        .post-content ul, .post-content ol { margin: 0 0 1.5rem; padding-left: 1.5rem; }
        .post-content li { margin-bottom: 0.5rem; }
        .post-content li > ul, .post-content li > ol { margin: 0.5rem 0 0; }

        .post-content blockquote {
          margin: 0 0 1.5rem;
          padding: 0.25rem 1.5rem;
          border-left: 3px solid #dc2626;
          background: #f9fafb;
          color: #4b5563;
          font-style: italic;
        }
        .post-content blockquote p:last-child { margin-bottom: 0; }

        .post-content hr { border: none; border-top: 1px solid #e5e7eb; margin: 3rem 0; }

        .post-content img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 2rem auto;
          border: 1px solid #f3f4f6;
          border-radius: 4px;
        }

        .post-content pre {
          background: #111827;
          color: #f3f4f6;
          padding: 1.25rem 1.5rem;
          border-radius: 6px;
          overflow-x: auto;
          margin: 0 0 1.5rem;
          font-size: 0.85rem;
          line-height: 1.65;
        }
        .post-content pre code {
          background: none;
          color: inherit;
          padding: 0;
          font-size: inherit;
          border: none;
        }
        .post-content code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          background: #f3f4f6;
          color: #b91c1c;
          padding: 0.15rem 0.4rem;
          border-radius: 3px;
          font-size: 0.85em;
        }

        .post-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 2rem;
          font-family: 'Montserrat',sans-serif;
          font-size: 0.88rem;
          overflow-x: auto;
          display: block;
        }
        .post-content table th, .post-content table td {
          border: 1px solid #e5e7eb !important;
          padding: 0.65rem 0.9rem !important;
          text-align: left;
        }
        .post-content table th {
          background: #f9fafb;
          font-weight: 700;
          color: #111827;
        }
        .post-content table tr:nth-child(even) td { background: #fafafa; }

        @media (max-width: 640px) {
          .post-content { font-size: 0.98rem; }
          .post-content pre { padding: 1rem; font-size: 0.8rem; }
        }
      `}</style>

      {/*For Google's article rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            author: post.author ? { '@type': 'Person', name: post.author } : undefined,
            description: post.description || undefined,
            image: post.image ? [post.image] : undefined,
            // mainEntityOfPage: `${site.url}${post.url}`,
          }),
        }}
      />
    </PageLayout>
  );
}