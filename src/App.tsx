import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { RevealProvider } from '@/components/layout/RevealProvider';
import { Footer } from '@/components/layout/Footer';
import { RouteLoader } from '@/components/layout/RouteLoader';
import { PageTransition } from '@/components/layout/PageTransition';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { HomePage } from './pages/HomePage';

// Route-level code splitting keeps the blog corpus (virtual:content) and Leaflet
// out of the initial bundle.
const loadBlogPages = () => import('./pages/BlogPages');
const loadPostPage = () => import('./pages/PostPage');
const loadStaticPages = () => import('./pages/StaticPages');

const BlogPage = lazy(() => loadBlogPages().then((m) => ({ default: m.BlogPage })));
const LegacyBlogPageRedirect = lazy(() =>
  loadBlogPages().then((m) => ({ default: m.LegacyBlogPageRedirect })),
);
const PostPage = lazy(() => loadPostPage().then((m) => ({ default: m.PostPage })));
const AboutPage = lazy(() => loadStaticPages().then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.ProjectsPage })),
);
const ContributePage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.ContributePage })),
);
const FellowshipPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.FellowshipPage })),
);
const HackathonPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.HackathonPage })),
);
const JoinUsPage = lazy(() => loadStaticPages().then((m) => ({ default: m.JoinUsPage })));
const TeamPage = lazy(() => loadStaticPages().then((m) => ({ default: m.TeamPage })));
const CodeOfConductPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.CodeOfConductPage })),
);
const PrivacyPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.PrivacyPage })),
);
const NotFoundPage = lazy(() =>
  loadStaticPages().then((m) => ({ default: m.NotFoundPage })),
);

/**
 * Scroll to the top on every route change (Next.js did this by default). A layout
 * effect runs before paint, so the new page never shows a frame at the old scroll
 * position.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Warm the lazy route chunks once the browser is idle after first load, so later
 * navigations render immediately instead of waiting on a network fetch.
 */
function PreloadRoutes() {
  useEffect(() => {
    const preload = () => {
      loadStaticPages();
      loadBlogPages();
      loadPostPage();
    };
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(preload, { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(preload, 1500);
    return () => window.clearTimeout(id);
  }, []);
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
              <Route path="/contribute/" element={<ContributePage />} />
              <Route path="/fellowship2026/" element={<FellowshipPage />} />
              <Route path="/data_crunch_hackathon_2024/" element={<HackathonPage />} />
              <Route path="/joinus/" element={<JoinUsPage />} />
              <Route path="/team/" element={<TeamPage />} />
              <Route path="/blog/" element={<BlogPage />} />
              <Route path="/page/:num/" element={<LegacyBlogPageRedirect />} />
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
      <PreloadRoutes />
      <GoogleAnalytics />
    </RevealProvider>
  );
}
