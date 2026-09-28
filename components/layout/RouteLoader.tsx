/**
 * Slim top-of-page progress bar shown while a lazy route chunk is loading
 * (rendered as the Suspense fallback in App.tsx) — most noticeable on
 * heavier chunks like the Projects page.
 */
export function RouteLoader() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        overflow: 'hidden',
        background: 'rgba(220,38,38,0.15)',
      }}
    >
      <div className="route-loader-bar" />
      <style>{`
        .route-loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 40%;
          background: #dc2626;
          animation: routeLoaderSlide 1.1s ease-in-out infinite;
        }
        @keyframes routeLoaderSlide {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
