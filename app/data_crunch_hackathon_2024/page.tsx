import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { HackathonContent } from '@/components/pages/HackathonContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Hackathon', path: '/data_crunch_hackathon_2024/' });

export default function HackathonPage() {
  return (
    <PageLayout>
      <HackathonContent />
    </PageLayout>
  );
}
