import { useMemo, useState } from 'react';
import Link from '@/components/ui/Link';
import { useViewMode } from '@/components/ui/ViewToggle';
import { ListToolbar } from '@/components/ui/ListToolbar';
import { Dropdown } from '@/components/ui/Dropdown';
import { PostThumb } from '@/components/ui/PostThumb';
import type { PostSummary } from '@/lib/posts';

interface Props {
  posts: PostSummary[];
  years: string[];
  authors: { name: string; count: number }[];
}

/**
 * Ported from blog/index.html. Shows every post (no pagination) as a table by
 * default, with an optional card view. Search, year and author filters apply to both.
 */
export function BlogList({ posts, years, authors }: Props) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');
  const [author, setAuthor] = useState('all');
  const [view, setView] = useViewMode('c4n:blog-view');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q && year === 'all' && author === 'all') return posts;
    return posts.filter(
      (p) =>
        (!q || p.titleLower.includes(q)) &&
        (year === 'all' || p.year === year) &&
        (author === 'all' || p.author === author),
    );
  }, [query, year, author, posts]);

  return (
    <>
      {/* Header */}
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="blog-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Stories &amp; Updates</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Blog</h1>
          <p style={{ margin: '1.25rem 0 0', fontSize: '0.88rem', color: '#6b7280', fontFamily: "'Droid Serif','Georgia',serif", lineHeight: 1.6 }}>
            <i className="fas fa-pen-nib" style={{ color: '#dc2626', marginRight: '0.5rem' }} />
            Want to write a blog or dataviz for Code for Nepal?{' '}
            <Link href="/contribute/" className="blog-guide-link">
              Consult our contributor guide
            </Link>{' '}
            to learn how to submit one.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '3rem 0 4rem', background: 'white' }}>
        <div className="blog-container">
          <ListToolbar
            view={view}
            onViewChange={setView}
            summary={`Showing ${visible.length} of ${posts.length} posts`}
          >
            <div className="list-search">
              <i className="fas fa-search" aria-hidden />
              <input
                type="search"
                id="blogSearch"
                placeholder="Search posts..."
                aria-label="Search posts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Dropdown
              label="Filter by year"
              value={year}
              onChange={setYear}
              options={[{ value: 'all', label: 'All Years' }, ...years.map((yr) => ({ value: yr, label: yr }))]}
            />
            <Dropdown
              label="Filter by author"
              className="dd-author"
              searchable
              value={author}
              onChange={setAuthor}
              options={[
                { value: 'all', label: 'All Authors' },
                ...authors.map((a) => ({ value: a.name, label: a.name, count: a.count })),
              ]}
            />
          </ListToolbar>

          {visible.length > 0 && view === 'table' && (
            <div className="list-table-wrap">
              <table className="list-table">
                <thead>
                  <tr>
                    <th scope="col" className="col-date">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col" className="col-author">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((post) => (
                    <tr key={post.url}>
                      <td className="col-date">{post.dateFormatted}</td>
                      <td>
                        <Link href={post.url} className="list-table-title">
                          {post.title}
                        </Link>
                      </td>
                      <td className="col-author">{post.author || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {visible.length > 0 && view === 'cards' && (
            <div id="postsGrid">
              {visible.map((post) => (
                <article key={post.url} className="blog-post-card">
                  <Link href={post.url} className="blog-card-thumb" tabIndex={-1} aria-hidden>
                    <PostThumb src={post.image} alt="" />
                  </Link>
                  <div style={{ padding: '1.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9ca3af', margin: '0 0 0.75rem', fontFamily: "'Montserrat',sans-serif" }}>{post.dateFormatted}</p>
                    <h2 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, margin: '0 0 1rem', fontFamily: "'Montserrat',sans-serif" }}>
                      <Link href={post.url} className="blog-card-title">
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.7, flex: 1, margin: '0 0 1.5rem', fontFamily: "'Droid Serif','Georgia',serif" }}>{post.excerpt}</p>
                    <Link href={post.url} className="blog-card-more">
                      Read more <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9ca3af', fontFamily: "'Montserrat',sans-serif", fontSize: '0.9rem' }}>
              <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }} />
              No posts found matching your filters.
            </div>
          )}
        </div>
      </section>

      <style>{`
        .blog-guide-link { color: #dc2626; font-weight: 600; text-decoration: none; }
        .blog-guide-link:hover { color: #b91c1c; text-decoration: underline; }
        .blog-container { max-width: 1300px !important; padding: 0 4rem !important; margin: 0 auto; box-sizing: border-box; }
        #postsGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .blog-post-card { border: 1px solid #f3f4f6; display: flex; flex-direction: column; overflow: hidden; transition: box-shadow 0.2s, border-color 0.2s; }
        .blog-post-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.07); border-color: #e5e7eb; }
        .blog-card-thumb { display: block; overflow: hidden; }
        .blog-card-thumb img { transition: transform 0.4s ease; }
        .blog-post-card:hover .blog-card-thumb img { transform: scale(1.03); }
        .blog-card-title { color: #111827; text-decoration: none; transition: color 0.2s; }
        .blog-card-title:hover { color: #dc2626; text-decoration: none; }
        .blog-card-more { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: #dc2626; text-decoration: none; font-family: 'Montserrat',sans-serif; display: inline-flex; align-items: center; gap: 0.4rem; transition: opacity 0.2s; }
        .blog-card-more:hover { opacity: 0.7; color: #dc2626; text-decoration: none; }
        .list-table .col-date { white-space: nowrap; width: 9rem; color: #6b7280; }
        .list-table .col-author { width: 14rem; color: #6b7280; }
        @media (max-width: 960px) { #postsGrid { grid-template-columns: repeat(2, 1fr); } .blog-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) {
          #postsGrid { grid-template-columns: 1fr; }
          .blog-container { padding: 0 1.5rem !important; }
          .list-table .col-author { display: none; }
          .list-table .col-date { width: 6.5rem; }
        }
      `}</style>
    </>
  );
}
