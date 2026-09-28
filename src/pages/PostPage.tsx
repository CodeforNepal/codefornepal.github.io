import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { DisqusThread } from '@/components/blog/DisqusThread';
import { NotFoundPage } from './StaticPages';
import { getPostBySegments, getPostBody } from '@/lib/posts';

/**
 * Ported from _layouts/post.html. Matches any leftover path against the known
 * post URLs (covers both permalink schemes — explicit + Jekyll default).
 */
export function PostPage() {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const post = getPostBySegments(segments);
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    if (post) getPostBody(post.url).then((h) => alive && setHtml(h ?? ''));
    return () => {
      alive = false;
    };
  }, [post]);

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
            {html !== null && <div dangerouslySetInnerHTML={{ __html: html }} />}
          </div>
        </div>
        <DisqusThread path={post.url} identifier={post.url} />
      </PageLayout>
    </>
  );
}
