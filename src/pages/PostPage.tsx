import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { DisqusThread } from '@/components/blog/DisqusThread';
import { NotFoundPage } from './StaticPages';
import { getPostBySegments, getPostBody, getCachedPostBody } from '@/lib/posts';

/**
 * Ported from _layouts/post.html. Matches any leftover path against the known
 * post URLs (covers both permalink schemes — explicit + Jekyll default).
 */
export function PostPage() {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const post = getPostBySegments(segments);
  // Loaded body tagged with its URL, so a previous post's body is never shown for the next one.
  const [loaded, setLoaded] = useState<{ url: string; html: string } | null>(null);

  useEffect(() => {
    if (!post || getCachedPostBody(post.url) !== undefined) return;
    let alive = true;
    getPostBody(post.url).then((h) => alive && setLoaded({ url: post.url, html: h ?? '' }));
    return () => {
      alive = false;
    };
  }, [post]);

  const html = !post
    ? null
    : (getCachedPostBody(post.url) ?? (loaded?.url === post.url ? loaded.html : null));

  if (!post) return <NotFoundPage />;

  return (
    <>
      <Seo
        title={post.title}
        description={post.description || undefined}
        path={post.url}
        image={post.image}
        type="article"
      />
      <PageLayout blog>
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">{post.title}</h1>
            <p>
              {post.dateToString} - {post.author}
            </p>
            {html !== null ? (
              <div className="post-body-in" dangerouslySetInnerHTML={{ __html: html }} />
            ) : (
              // Reserve space while the body chunk loads so the footer doesn't jump up and back.
              <div aria-busy="true" style={{ minHeight: '60vh' }} />
            )}
          </div>
        </div>
        <DisqusThread path={post.url} identifier={post.url} />
        <style>{`
          .post-body-in { animation: postBodyIn 0.25s ease-out both; }
          @keyframes postBodyIn { from { opacity: 0; } to { opacity: 1; } }
          @media (prefers-reduced-motion: reduce) { .post-body-in { animation: none; } }
        `}</style>
      </PageLayout>
    </>
  );
}
