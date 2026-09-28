import { useParams } from 'react-router-dom';
import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { BlogList } from '@/components/blog/BlogList';
import { NotFoundPage } from './StaticPages';
import { getAllSummaries, getPageSummaries, getYears, totalPages } from '@/lib/posts';

/** Blog index = page 1 (posts 1–50). */
export function BlogPage() {
  const tp = totalPages();
  return (
    <>
      <Seo title="Blog" path="/blog/" />
      <PageLayout>
        <BlogList
          pagePosts={getPageSummaries(1)}
          allPosts={getAllSummaries()}
          years={getYears()}
          page={1}
          totalPages={tp}
          prevPath={null}
          nextPath={tp > 1 ? '/page/2/' : null}
        />
      </PageLayout>
    </>
  );
}

/** Pages 2..N of the blog (jekyll-paginate-v2 permalink /page/:num/). Page 1 lives at /blog/. */
export function PaginatedBlogPage() {
  const { num } = useParams<{ num: string }>();
  const page = parseInt(num ?? '', 10);
  const tp = totalPages();

  if (!Number.isInteger(page) || page < 2 || page > tp) return <NotFoundPage />;

  const prevPath = page === 2 ? '/blog/' : `/page/${page - 1}/`;
  const nextPath = page < tp ? `/page/${page + 1}/` : null;

  return (
    <>
      <Seo title="Blog" path={`/page/${page}/`} />
      <PageLayout>
        <BlogList
          pagePosts={getPageSummaries(page)}
          allPosts={getAllSummaries()}
          years={getYears()}
          page={page}
          totalPages={tp}
          prevPath={prevPath}
          nextPath={nextPath}
        />
      </PageLayout>
    </>
  );
}
