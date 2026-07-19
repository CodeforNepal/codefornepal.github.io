import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/layout/PageLayout';
import { BlogList } from '@/components/blog/BlogList';
import { buildMetadata } from '@/lib/seo';
import { getAllSummaries, getPageSummaries, getYears, totalPages } from '@/lib/posts';

type Params = { num: string };

export const metadata: Metadata = buildMetadata({ title: 'Blog', path: '/blog/' });

/** Pages 2..N of the blog (jekyll-paginate-v2 permalink /page/:num/). Page 1 lives at /blog/. */
export function generateStaticParams(): Params[] {
  const tp = totalPages();
  const params: Params[] = [];
  for (let n = 2; n <= tp; n++) params.push({ num: String(n) });
  return params;
}

export default async function PaginatedBlogPage({ params }: { params: Promise<Params> }) {
  const { num } = await params;
  const page = parseInt(num, 10);
  const tp = totalPages();
  if (!Number.isInteger(page) || page < 2 || page > tp) notFound();

  const prevPath = page === 2 ? '/blog/' : `/page/${page - 1}/`;
  const nextPath = page < tp ? `/page/${page + 1}/` : null;

  return (
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
  );
}
