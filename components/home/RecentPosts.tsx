'use client';

import Link from 'next/link';

export interface RecentPost {
  title: string;
  url: string;
  dateFormatted: string;
  image?: string;
  excerpt: string;
}

/**
 * Ported from _includes/sections/home/highlight.html ("Recent Posts").
 * Receives up to 3 highlight-tagged posts from the server (with excerpts pre-truncated to 28 words).
 */
export function RecentPosts({ posts }: { posts: RecentPost[] }) {
  if (!posts.length) return null;
  return (
    <section style={{ padding: '6rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: '#9ca3af',
              marginBottom: '0.75rem',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: 500,
            }}
          >
            From our blog
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,2.5rem)',
              fontWeight: 700,
              color: '#111827',
              fontFamily: "'Montserrat',sans-serif",
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Recent Posts
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.url}
              style={{
                background: 'white',
                border: '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)')}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              {post.image ? (
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    height: '180px',
                    background: '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fas fa-newspaper" style={{ fontSize: '2rem', color: '#d1d5db' }} />
                </div>
              )}

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p
                  style={{
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#9ca3af',
                    marginBottom: '0.5rem',
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  {post.dateFormatted}
                </p>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#111827',
                    lineHeight: 1.4,
                    marginBottom: '0.75rem',
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  <Link
                    href={post.url}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#dc2626')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#111827')}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={post.url}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#dc2626',
                    textDecoration: 'none',
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/blog/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              border: '2px solid #111827',
              color: '#111827',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textDecoration: 'none',
              fontFamily: "'Montserrat',sans-serif",
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#111827';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#111827';
            }}
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
