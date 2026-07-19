import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { AboutContent } from '@/components/pages/AboutContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'About', path: '/about/' });

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  );
}
