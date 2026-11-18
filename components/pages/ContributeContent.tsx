import type { CSSProperties, ReactNode } from 'react';
import Link from '@/components/ui/Link';
import { site } from '@/lib/config';

/**
 * "How to create dataviz & blog for Code for Nepal" — contributor guide, ported from
 * documents/How to create dataviz & blog for Code for Nepal.docx. Links to the old
 * WordPress archive (/blogs/, /category/dataviz/) now point at the /blog/ index.
 */

const serif = "'Droid Serif','Georgia',serif";
const sans = "'Montserrat',sans-serif";

const bodyText: CSSProperties = {
  fontSize: '0.98rem',
  color: '#4b5563',
  lineHeight: 1.8,
  fontFamily: serif,
};

const h2Style: CSSProperties = {
  fontSize: 'clamp(1.35rem,3vw,1.75rem)',
  fontWeight: 700,
  color: '#111827',
  margin: '0 0 1.25rem',
  fontFamily: sans,
  letterSpacing: '-0.02em',
};

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:/.test(href);
  return (
    <Link
      href={href}
      className="guide-link"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Link>
  );
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          flexShrink: 0,
          width: '1.75rem',
          height: '1.75rem',
          borderRadius: '50%',
          background: '#fef2f2',
          color: '#dc2626',
          fontFamily: sans,
          fontWeight: 700,
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.15rem',
        }}
      >
        {n}
      </span>
      <div style={{ ...bodyText, flex: 1, minWidth: 0 }}>{children}</div>
    </li>
  );
}

const tools = [
  { name: 'World Bank Databank', href: 'https://databank.worldbank.org/' },
  { name: 'Open Data Nepal', href: 'https://opendatanepal.com/' },
  { name: 'Tableau Public', href: 'https://public.tableau.com/' },
  { name: 'Visual.ly', href: 'https://visual.ly/' },
  { name: 'Google Public Data Explorer', href: 'https://www.google.com/publicdata/directory' },
];

export function ContributeContent() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="guide-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: sans, fontWeight: 600 }}>
            Contributor Guide
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: '0 0 0.75rem', fontFamily: sans, letterSpacing: '-0.02em' }}>
            Write a Blog or Dataviz for Code for Nepal
          </h1>
          <p style={{ ...bodyText, color: '#6b7280', maxWidth: '640px', margin: 0 }}>
            Have a story, an insight, or a chart about Nepal worth sharing? Here&apos;s how to prepare
            a blog post or data visualization and submit it to Code for Nepal.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 5rem', background: 'white' }}>
        <div className="guide-container">
          <div style={{ maxWidth: '760px' }}>
            {/* Blog */}
            <h2 style={h2Style}>How to write a blog</h2>
            <p style={{ ...bodyText, marginTop: 0 }}>
              Find topics related to data literacy or digital literacy, or analyze data to create a
              data visualization that shares interesting facts or a point of view about Nepal.
            </p>
            <p style={bodyText}>
              Blog posts should usually be no more than <strong>500 words</strong>. At times you can
              simply have a data visualization and around <strong>250 accompanying words</strong> that
              provide context. See our <A href="/blog/">published blogs and dataviz</A> for examples.
            </p>
            <div
              style={{
                borderLeft: '3px solid #dc2626',
                background: '#fef2f2',
                padding: '1rem 1.25rem',
                margin: '1.5rem 0',
              }}
            >
              <p style={{ ...bodyText, margin: 0, color: '#374151' }}>
                All data and sources used in a blog post must be cited clearly. Content should be
                original, created by the author. Whenever sentences are copied from other sources or
                publications, they should be in quotation marks.
              </p>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '2rem 0 1rem', fontFamily: sans }}>
              Submitting your blog post
            </h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Step n={1}>
                Write your post in a Google Doc (see how to{' '}
                <A href="https://support.google.com/docs/answer/7068618?hl=en&co=GENIE.Platform=Desktop">create</A>{' '}
                a Google Doc).
              </Step>
              <Step n={2}>
                <A href="https://support.google.com/docs/answer/2494822?co=GENIE.Platform%3DDesktop&hl=en">Share</A>{' '}
                the document with <strong>editing rights</strong> for Code for Nepal.
              </Step>
              <Step n={3}>
                Send the link to Code for Nepal staff or email the blog coordinator at{' '}
                <A href={`mailto:${site.email}`}>{site.email}</A>.
              </Step>
            </ol>

            <hr style={{ border: 0, borderTop: '1px solid #f3f4f6', margin: '3.5rem 0' }} />

            {/* Dataviz */}
            <h2 style={h2Style}>How to create a dataviz</h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <Step n={1}>
                Look for interesting data sources, such as the Central Bureau of Statistics website or
                the Education, Health, Finance and other ministries. Or check out{' '}
                <A href="https://opendatanepal.com/">Open Data Nepal</A>.
              </Step>
              <Step n={2}>
                Once you have identified data, copy it into a Google Spreadsheet, then clean and
                analyze it. If you find an interesting trend or storyline, create an interactive
                dataviz: a chart, a map, or a graph. For best practices, read:
                <ul style={{ margin: '0.6rem 0 0', paddingLeft: '1.2rem' }}>
                  <li>
                    The Financial Times guide to{' '}
                    <A href="https://digiday.com/uk/financial-times-guide-data-visualization/">creating a dataviz</A>{' '}
                    and examples of a{' '}
                    <A href="https://www.ft.com/personal-finance/chart-that-tells-story">chart that tells a story</A>.
                  </li>
                  <li>
                    <A href="https://www.washingtonpost.com/graphics/2017/ns/year-in-graphics/">Washington Post dataviz examples</A>.
                  </li>
                  <li>
                    The <A href="/blog/">dataviz we have published</A> on Code for Nepal.
                  </li>
                </ul>
              </Step>
              <Step n={3}>
                In the dataviz or your accompanying blog, make sure the original data source link is
                clearly mentioned.
              </Step>
              <Step n={4}>
                We recommend Google Sheets, Google Maps, Tableau, Carto, or other free tools to create
                your dataviz.
              </Step>
              <Step n={5}>
                All data must come from official sources such as Nepal government agencies, the UN,
                World Bank, IMF, or other credible agencies. Data must be machine-readable and your
                analysis must be independently verifiable.
              </Step>
              <Step n={6}>
                Submit your dataviz to the Code for Nepal blog coordinator at{' '}
                <A href={`mailto:${site.email}`}>{site.email}</A>.
              </Step>
            </ol>

            <hr style={{ border: 0, borderTop: '1px solid #f3f4f6', margin: '3.5rem 0' }} />

            {/* Tools */}
            <h2 style={h2Style}>Need inspiration to get started?</h2>
            <p style={{ ...bodyText, marginTop: 0 }}>Check out some of our favorite tools and data sources:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {tools.map((t) => (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guide-chip"
                >
                  {t.name} <i className="fas fa-external-link-alt" style={{ fontSize: '0.65rem' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: '#111827' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', fontFamily: sans, letterSpacing: '-0.02em' }}>
            Ready to submit?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.7, fontFamily: serif }}>
            Share your Google Doc or dataviz with us by email, or say hello in our community first.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${site.email}?subject=Blog%20%2F%20Dataviz%20submission`} className="guide-btn guide-btn-primary">
              <i className="fas fa-envelope" /> Email Your Submission
            </a>
            <Link href="/joinus/" className="guide-btn guide-btn-outline">
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .guide-container { max-width: 1300px; padding: 0 4rem; margin: 0 auto; box-sizing: border-box; }
        .guide-link { color: #dc2626; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
        .guide-link:hover { text-decoration: underline; color: #b91c1c; }
        .guide-chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.55rem 1rem; border: 1px solid #e5e7eb; color: #111827; font-family: ${sans}; font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: border-color 0.2s, color 0.2s; }
        .guide-chip:hover { border-color: #dc2626; color: #dc2626; text-decoration: none; }
        .guide-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.75rem; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; font-family: ${sans}; transition: background 0.2s, border-color 0.2s; }
        .guide-btn:hover { text-decoration: none; }
        .guide-btn-primary { background: #dc2626; color: white; }
        .guide-btn-primary:hover { background: #b91c1c; color: white; }
        .guide-btn-outline { border: 2px solid rgba(255,255,255,0.5); color: white; }
        .guide-btn-outline:hover { border-color: white; color: white; }
        @media (max-width: 960px) { .guide-container { padding: 0 2.5rem; } }
        @media (max-width: 640px) { .guide-container { padding: 0 1.5rem; } }
      `}</style>
    </>
  );
}
