import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { BlogList } from '@/components/blog/BlogList';
import { buildMetadata } from '@/lib/seo';
import { getAllSummaries, getPageSummaries, getYears, totalPages } from '@/lib/posts';

export const metadata: Metadata = buildMetadata({ title: 'Blog', path: '/blog/' });

/** Blog index = page 1 (posts 1–50). */
export default function BlogPage() {
  const tp = totalPages();
  return (
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
  );
}
