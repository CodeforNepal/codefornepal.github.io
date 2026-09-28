import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fades/slides the routed page content in on every path change. Keyed by
 * pathname so React remounts and replays the CSS animation on navigation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <div key={key} className="page-transition">
      {children}
      <style>{`
        .page-transition {
          animation: pageTransitionIn 0.32s ease-out;
        }
        @keyframes pageTransitionIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .page-transition { animation: none; }
        }
      `}</style>
    </div>
  );
}
