/**
 * Site-wide configuration and shared constants.
 * Ported from _config.yml plus values that were duplicated across templates
 * (now single-sourced here).
 */

export const site = {
  title: 'Code for Nepal',
  email: 'contact@codefornepal.org',
  description:
    "Community of volunteers helping address Nepal's challenges using civic tech to innovate, organize and advocate digital literacy",
  // _config.yml left url empty; the live canonical is codefornepal.org.
  url: 'https://codefornepal.org',
  logo: '/assets/img/c4n_logo.png',
  favicon: '/assets/img/c4n-icon.jpg',
  twitter: '@codefornepal',
  fbPages: '201272103415379',
} as const;

/** The single Google Form used by every fellowship "Apply" CTA (was duplicated 4× in templates). */
export const FELLOWSHIP_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfjd4VXYxSOxc707VXc9gwVJ2k8urkRR258AMFgD0eqDGpgWA/viewform';

/** Data Crunch hackathon application (Devfolio). */
export const HACKATHON_APPLY_URL = 'https://data-crunch.devfolio.co/';

/** Formspree endpoint for the contact form (POST). */
export const FORMSPREE_ENDPOINT = `https://formspree.io/${site.email}`;

/** Disqus shortname (preserves existing comment threads). */
export const DISQUS_SHORTNAME = 'codefornepal-1';

/** PayPal hosted button (footer + donations). */
export const PAYPAL_BUTTON_ID = 'A8L4MMC7NP5ZS';

/**
 * GA4 Measurement ID (G-XXXXXXX). The original UA-66983412-1 is a dead Universal
 * Analytics property. Supply a real ID via NEXT_PUBLIC_GA_ID to enable analytics.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
