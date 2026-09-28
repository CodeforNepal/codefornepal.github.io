import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { RevealProvider } from '@/components/layout/RevealProvider';
import { Footer } from '@/components/layout/Footer';
import { RouteLoader } from '@/components/layout/RouteLoader';
import { PageTransition } from '@/components/layout/PageTransition';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { HomePage } from './pages/HomePage';

// Route-level code splitting keeps the blog corpus (virtual:content) and Leaflet
// out of the initial bundle.
const BlogPage = lazy(() => import('./pages/BlogPages').then((m) => ({ default: m.BlogPage })));
const PaginatedBlogPage = lazy(() =>
  import('./pages/BlogPages').then((m) => ({ default: m.PaginatedBlogPage })),
);
const PostPage = lazy(() => import('./pages/PostPage').then((m) => ({ default: m.PostPage })));
const AboutPage = lazy(() => import('./pages/StaticPages').then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.ProjectsPage })),
);
const FellowshipPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.FellowshipPage })),
);
const HackathonPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.HackathonPage })),
);
const JoinUsPage = lazy(() => import('./pages/StaticPages').then((m) => ({ default: m.JoinUsPage })));
const TeamPage = lazy(() => import('./pages/StaticPages').then((m) => ({ default: m.TeamPage })));
const CodeOfConductPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.CodeOfConductPage })),
);
const PrivacyPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.PrivacyPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/StaticPages').then((m) => ({ default: m.NotFoundPage })),
);

/** Scroll to the top on every route change (Next.js did this by default). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Redirect a path without a trailing slash to the canonical trailing-slash form
 * (parity with Jekyll / the old Next `trailingSlash: true`). The home path and
 * paths that look like files (feed.xml, *.html) are left alone.
 */
function TrailingSlashRedirect({ children }: { children: React.ReactNode }) {
  const { pathname, search, hash } = useLocation();
  if (pathname !== '/' && !pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(pathname)) {
    return <Navigate to={`${pathname}/${search}${hash}`} replace />;
  }
  return <>{children}</>;
}

export function App() {
  return (
    <RevealProvider>
      <ScrollToTop />
      <TrailingSlashRedirect>
        <Suspense fallback={<RouteLoader />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/projects/" element={<ProjectsPage />} />
              <Route path="/fellowship2026/" element={<FellowshipPage />} />
              <Route path="/data_crunch_hackathon_2024/" element={<HackathonPage />} />
              <Route path="/joinus/" element={<JoinUsPage />} />
              <Route path="/team/" element={<TeamPage />} />
              <Route path="/blog/" element={<BlogPage />} />
              <Route path="/page/:num/" element={<PaginatedBlogPage />} />
              <Route path="/codeofconduct/" element={<CodeOfConductPage />} />
              <Route path="/privacy/" element={<PrivacyPage />} />
              <Route path="/404.html" element={<NotFoundPage />} />
              {/* Blog posts: /YYYY/MM/DD/slug/ and explicit permalinks. */}
              <Route path="/:y/:m/:d/:slug/" element={<PostPage />} />
              <Route path="*" element={<PostPage />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </TrailingSlashRedirect>
      <Footer />
      <GoogleAnalytics />
    </RevealProvider>
  );
}
