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

export function BlogList({ pagePosts, allPosts, years, page, totalPages, prevPath, nextPath }: Props) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');

  const filtering = query.trim() !== '' || year !== 'all';

  const visible = useMemo(() => {
    if (!filtering) return pagePosts;
    const q = query.trim().toLowerCase();
    return allPosts.filter(
      (p) =>
        (!q || p.titleLower.includes(q) || p.authorLower.includes(q)) &&
        (year === 'all' || p.year === year),
    );
  }, [filtering, query, year, pagePosts, allPosts]);

  function pageHref(n: number): string {
    return n === 1 ? '/blog/' : `/page/${n}/`;
  }

  /** Windowed page list with ellipsis gaps, e.g. [1, '…', 4, 5, 6, '…', 12]. */
  function getPageNumbers(current: number, total: number): (number | '…')[] {
    const delta = 1;
    const range: (number | '…')[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);
    if (left > 2) range.push('…');
    for (let i = left; i <= right; i++) range.push(i);
    if (right < total - 1) range.push('…');
    if (total > 1) range.push(total);
    return range;
  }

  return (
    <>
      {/* Header + Search */}
      <section style={{ padding: '3rem 0 2rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="blog-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', marginTop: '2rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Stories &amp; Updates</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Blog</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '680px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                <i className="fas fa-search" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '0.85rem' }} />
                <input
                  type="text"
                  id="blogSearch"
                  aria-label="Search posts by title or author"
                  placeholder="Search by title or author..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.5rem', border: '1px solid #e5e7eb', background: 'white', fontSize: '0.88rem', fontFamily: "'Montserrat',sans-serif", color: '#111827', outline: 'none', boxSizing: 'border-box' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#dc2626')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>
              <select
                id="yearFilter"
                aria-label="Filter by year"
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
          {filtering && (
            <p style={{ fontSize: '0.82rem', color: '#6b7280', margin: '0 0 1.5rem', fontFamily: "'Montserrat',sans-serif" }}>
              {visible.length} {visible.length === 1 ? 'result' : 'results'}
            </p>
          )}
          <div id="postsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {visible.map((post) => {
              const hasCover = Boolean(post.coverImage);
              return (
                <article
                  key={post.url}
                  className="blog-post-card"
                  style={{
                    border: '1px solid #dfe2e7',
                    borderRadius: '6px',
                    boxShadow: '0 1px 2px rgba(15,23,42,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    minHeight: hasCover ? '340px' : '280px',
                    backgroundImage: hasCover ? `url(${post.coverImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,23,42,0.10)';
                    e.currentTarget.style.borderColor = '#c7cbd1';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(15,23,42,0.05)';
                    e.currentTarget.style.borderColor = '#dfe2e7';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {hasCover && (
                    <div
                      aria-hidden
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(17,24,39,0.05) 0%, rgba(17,24,39,0.9) 75%)',
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: 'relative',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: hasCover ? 'flex-end' : undefined,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: hasCover ? 'rgba(255,255,255,0.75)' : '#9ca3af',
                        margin: '0 0 0.75rem',
                        fontFamily: "'Montserrat',sans-serif",
                      }}
                    >
                      {post.dateFormatted}
                      {post.author && <> &middot; {post.author}</>}
                    </p>
                    <h2 style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: hasCover ? '#fff' : '#111827',
                      lineHeight: 1.45,
                      margin: '0 0 1rem',
                      fontFamily: "'Montserrat',sans-serif",
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      <Link
                        href={post.url}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = hasCover ? '#f3f4f6' : '#dc2626')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{
                      fontSize: '0.88rem',
                      color: hasCover ? 'rgba(255,255,255,0.85)' : '#6b7280',
                      lineHeight: 1.7,
                      flex: hasCover ? undefined : 1,
                      margin: '0 0 1.5rem',
                      fontFamily: "'Droid Serif','Georgia',serif",
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.url}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: hasCover ? '#fff' : '#dc2626',
                        textDecoration: 'none',
                        fontFamily: "'Montserrat',sans-serif",
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      Read more <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9ca3af', fontFamily: "'Montserrat',sans-serif", fontSize: '0.9rem' }}>
              <i className="fas fa-search" aria-hidden="true" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }} />
              No posts found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Pagination (only in the default, unfiltered view) */}
      {!filtering && totalPages > 1 && (
        <section style={{ padding: '2rem 0 4rem', background: 'white', borderTop: '1px solid #f3f4f6' }}>
          <div className="blog-container">
            <nav
              aria-label="Blog pagination"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              {prevPath && (
                <Link
                  href={prevPath}
                  aria-label="Previous page"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: '#111827', color: 'white', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
                >
                  <i className="fas fa-arrow-left" aria-hidden="true" style={{ fontSize: '0.7rem' }} />
                </Link>
              )}

              {getPageNumbers(page, totalPages).map((n, i) =>
                n === '…' ? (
                  <span key={`ellipsis-${i}`} style={{ padding: '0 0.4rem', color: '#9ca3af', fontFamily: "'Montserrat',sans-serif" }}>
                    …
                  </span>
                ) : (
                  <Link
                    key={n}
                    href={pageHref(n)}
                    aria-current={n === page ? 'page' : undefined}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '2.25rem',
                      padding: '0.6rem 0.5rem',
                      background: n === page ? '#dc2626' : '#f9fafb',
                      color: n === page ? 'white' : '#111827',
                      border: n === page ? 'none' : '1px solid #e5e7eb',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                  >
                    {n}
                  </Link>
                ),
              )}

              {nextPath && (
                <Link
                  href={nextPath}
                  aria-label="Next page"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: '#dc2626', color: 'white', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
                >
                  <i className="fas fa-arrow-right" aria-hidden="true" style={{ fontSize: '0.7rem' }} />
                </Link>
              )}
            </nav>
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
