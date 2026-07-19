import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/config';

/**
 * GA4 analytics (replaces the dead UA-66983412-1 Universal Analytics property).
 * Renders nothing until a GA4 Measurement ID is supplied via NEXT_PUBLIC_GA_ID.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
