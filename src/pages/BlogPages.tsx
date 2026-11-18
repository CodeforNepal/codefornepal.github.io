import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { BlogList } from '@/components/blog/BlogList';
import { getAllSummaries, getAuthors, getYears, preloadPostBodies } from '@/lib/posts';

/** Blog index: every post on one page (table view by default, cards optional). */
export function BlogPage() {
  // Visitors on the index usually open a post next; warm the post bodies so the
  // article renders in one go instead of popping in after the title.
  useEffect(() => {
    const id = window.setTimeout(preloadPostBodies, 800);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Seo title="Blog" path="/blog/" />
      <PageLayout>
        <BlogList posts={getAllSummaries()} years={getYears()} authors={getAuthors()} />
      </PageLayout>
    </>
  );
}

/**
 * Legacy paginated URLs (/page/:num/, from jekyll-paginate-v2). The blog is no
 * longer paginated, so these redirect to the single blog index.
 */
export function LegacyBlogPageRedirect() {
  return <Navigate to="/blog/" replace />;
}
