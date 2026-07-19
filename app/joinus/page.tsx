import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { JoinUsContent } from '@/components/pages/JoinUsContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Join Us', path: '/joinus/' });

export default function JoinUsPage() {
  return (
    <PageLayout>
      <JoinUsContent />
    </PageLayout>
  );
}
