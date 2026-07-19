import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { FellowshipContent } from '@/components/pages/FellowshipContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Fellowship', path: '/fellowship2026/' });

export default function Fellowship2026Page() {
  return (
    <PageLayout>
      <FellowshipContent />
    </PageLayout>
  );
}
