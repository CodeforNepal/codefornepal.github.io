import type { Metadata } from 'next';
import { site } from '@/lib/config';
import { RevealProvider } from '@/components/layout/RevealProvider';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  keywords: ['code for nepal', 'c4n', 'volunteer', 'code', 'nepal'],
  authors: [{ name: site.title }],
  icons: { icon: site.favicon },
  openGraph: {
    type: 'website',
    siteName: site.title,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Same four Google Font families the original loaded via <link> in head.html */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
          rel="stylesheet"
        />
      </head>
      <body id="page-top">
        <RevealProvider>
          {children}
          <Footer />
        </RevealProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
