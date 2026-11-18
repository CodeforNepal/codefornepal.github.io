import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keys the routed content by pathname so each navigation remounts the page, and
 * gently fades in ONLY the page body (#pagecontainer).
 *
 * The wrapper itself is never animated: the fixed Nav lives inside each page, and an
 * opacity/transform animation on its ancestor made the nav blink out and slide back
 * in on every route change (a transform also turns position:fixed into relative
 * positioning for the duration of the animation).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-transition">
      {children}
      <style>{`
        .page-transition #pagecontainer {
          animation: pageContentIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes pageContentIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .page-transition #pagecontainer { animation: none; }
        }
      `}</style>
    </div>
  );
}
