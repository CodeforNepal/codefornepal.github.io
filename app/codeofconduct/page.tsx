import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Prose } from '@/components/pages/Prose';
import { getRootMarkdown } from '@/lib/staticMarkdown';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Code of Conduct', path: '/codeofconduct/' });

export default async function CodeOfConductPage() {
  const { html } = await getRootMarkdown('CODE_OF_CONDUCT.md');
  return (
    <PageLayout>
      <Prose html={html} />
    </PageLayout>
  );
}
