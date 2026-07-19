'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { PostSummary } from '@/lib/posts';

interface Props {
  pagePosts: PostSummary[];
  allPosts: PostSummary[];
  years: string[];
  page: number;
  totalPages: number;
  prevPath: string | null;
  nextPath: string | null;
}

/**
 * Ported from blog/index.html. Default view shows the current paginated page (50 posts)
 * with prev/next. Searching or picking a year filters across the FULL corpus (an
 * improvement over the original, which only filtered the current page's cards).
 */
export function BlogList({ pagePosts, allPosts, years, page, totalPages, prevPath, nextPath }: Props) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');

  const filtering = query.trim() !== '' || year !== 'all';

  const visible = useMemo(() => {
    if (!filtering) return pagePosts;
    const q = query.trim().toLowerCase();
    return allPosts.filter(
      (p) => (!q || p.titleLower.includes(q)) && (year === 'all' || p.year === year),
    );
  }, [filtering, query, year, pagePosts, allPosts]);

  return (
    <>
      {/* Header + Search */}
      <section style={{ padding: '3rem 0 2rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="blog-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Stories &amp; Updates</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Blog</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '500px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                <i className="fas fa-search" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '0.85rem' }} />
                <input
                  type="text"
                  id="blogSearch"
                  placeholder="Search posts..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.5rem', border: '1px solid #e5e7eb', background: 'white', fontSize: '0.88rem', fontFamily: "'Montserrat',sans-serif", color: '#111827', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#dc2626')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>
              <select
                id="yearFilter"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{ padding: '0.65rem 2rem 0.65rem 1rem', border: '1px solid #e5e7eb', background: 'white', fontSize: '0.88rem', fontFamily: "'Montserrat',sans-serif", color: '#111827', outline: 'none', cursor: 'pointer', height: '38px', boxSizing: 'border-box' }}
              >
                <option value="all">All Years</option>
                {years.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="blog-container">
          <div id="postsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {visible.map((post) => (
              <article
                key={post.url}
                className="blog-post-card"
                style={{ border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#f3f4f6';
                }}
              >
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9ca3af', margin: '0 0 0.75rem', fontFamily: "'Montserrat',sans-serif" }}>{post.dateFormatted}</p>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', lineHeight: 1.45, margin: '0 0 1rem', fontFamily: "'Montserrat',sans-serif" }}>
                    <Link
                      href={post.url}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#dc2626')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#111827')}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.7, flex: 1, margin: '0 0 1.5rem', fontFamily: "'Droid Serif','Georgia',serif" }}>{post.excerpt}</p>
                  <Link
                    href={post.url}
                    style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#dc2626', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif", display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Read more <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9ca3af', fontFamily: "'Montserrat',sans-serif", fontSize: '0.9rem' }}>
              <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }} />
              No posts found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Pagination (only in the default, unfiltered view) */}
      {!filtering && totalPages > 1 && (
        <section style={{ padding: '2rem 0 4rem', background: 'white', borderTop: '1px solid #f3f4f6' }}>
          <div className="blog-container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {prevPath && (
                <Link
                  href={prevPath}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', background: '#111827', color: 'white', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#1f2937')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#111827')}
                >
                  <i className="fas fa-arrow-left" style={{ fontSize: '0.7rem' }} /> Previous
                </Link>
              )}
              <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontFamily: "'Montserrat',sans-serif" }}>
                Page {page} of {totalPages}
              </span>
              {nextPath && (
                <Link
                  href={nextPath}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', background: '#dc2626', color: 'white', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#b91c1c')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#dc2626')}
                >
                  Next <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-container { max-width: 1300px !important; padding: 0 4rem !important; margin: 0 auto; box-sizing: border-box; }
        @media (max-width: 960px) { #postsGrid { grid-template-columns: repeat(2, 1fr) !important; } .blog-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) { #postsGrid { grid-template-columns: 1fr !important; } .blog-container { padding: 0 1.5rem !important; } }
      `}</style>
    </>
  );
}
