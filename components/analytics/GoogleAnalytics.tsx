import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/config';

/**
 * GA4 analytics (replaces the dead UA-66983412-1 Universal Analytics property).
 * Renders nothing until a GA4 Measurement ID is supplied via VITE_GA_ID.
 */
export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    const w = window as unknown as { dataLayer: unknown[] };
    w.dataLayer = w.dataLayer || [];
    function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);

  return null;
}
