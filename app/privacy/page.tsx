import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Prose } from '@/components/pages/Prose';
import { getRootMarkdown } from '@/lib/staticMarkdown';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Privacy Policy', path: '/privacy/' });

export default async function PrivacyPage() {
  const { html } = await getRootMarkdown('PRIVACY_POLICY.md');
  return (
    <PageLayout>
      <Prose html={html} />
    </PageLayout>
  );
}
