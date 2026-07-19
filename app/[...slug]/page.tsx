import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySegments, markdownToHtml } from '@/lib/posts';
import { PageLayout } from '@/components/layout/PageLayout';
import { DisqusThread } from '@/components/blog/DisqusThread';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string[] };

/** One static route per post URL — covers both permalink schemes (explicit + Jekyll default). */
export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.segments }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySegments(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description || undefined,
    path: post.url,
    image: post.image,
    type: 'article',
  });
}

/** Ported from _layouts/post.html (inside the .container.blog wrapper of _layouts/blog.html). */
export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySegments(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.body);

  return (
    <PageLayout blog>
      <div className="row">
        <div className="col-md-12">
          <h1 className="title">{post.title}</h1>
          <p>
            {post.dateToString} - {post.author}
          </p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <DisqusThread path={post.url} identifier={post.url} />
    </PageLayout>
  );
}
