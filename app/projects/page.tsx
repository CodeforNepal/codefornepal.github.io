import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { ProjectsContent } from '@/components/pages/ProjectsContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ title: 'Projects', path: '/projects/' });

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  );
}
