import { PageLayout } from '@/components/layout/PageLayout';

/** Ported from 404.html. */
export default function NotFound() {
  return (
    <PageLayout>
      <div className="container" id="error-page-container">
        <h1>404</h1>
        <p>
          <strong>Page not found :(</strong>
        </p>
        <p>The requested page could not be found.</p>
      </div>
    </PageLayout>
  );
}
