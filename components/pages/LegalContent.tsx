const serif = "'Droid Serif','Georgia',serif";
const sans = "'Montserrat',sans-serif";

/**
 * Shared layout for the Markdown-backed legal pages (Code of Conduct, Privacy
 * Policy). Same header band and container as the contributor guide, with a
 * styled prose column for the rendered Markdown.
 */
export function LegalContent({
  eyebrow,
  title,
  intro,
  html,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  html: string;
}) {
  return (
    <>
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="legal-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: sans, fontWeight: 600 }}>
            {eyebrow}
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: '0 0 0.75rem', fontFamily: sans, letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          <p style={{ fontSize: '0.98rem', color: '#6b7280', lineHeight: 1.8, fontFamily: serif, maxWidth: '640px', margin: 0 }}>
            {intro}
          </p>
        </div>
      </section>

      <section style={{ padding: '3.5rem 0 5rem', background: 'white' }}>
        <div className="legal-container">
          <div className="legal-prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>

      <style>{`
        .legal-container { max-width: 1300px; padding: 0 4rem; margin: 0 auto; box-sizing: border-box; }
        .legal-prose { max-width: 760px; font-family: ${serif}; font-size: 0.98rem; line-height: 1.8; color: #4b5563; }
        .legal-prose > :first-child { margin-top: 0; }
        .legal-prose h2 { font-family: ${sans}; font-size: clamp(1.25rem,2.6vw,1.5rem); font-weight: 700; color: #111827; letter-spacing: -0.02em; margin: 3rem 0 1rem; padding-top: 2.5rem; border-top: 1px solid #f3f4f6; }
        .legal-prose > h2:first-child { padding-top: 0; border-top: 0; }
        .legal-prose h3 { font-family: ${sans}; font-size: 1.05rem; font-weight: 700; color: #111827; margin: 2rem 0 0.75rem; }
        .legal-prose p { margin: 0 0 1.1rem; line-height: 1.8; }
        .legal-prose strong, .legal-prose b { color: #374151; font-weight: 700; }
        .legal-prose ul, .legal-prose ol { margin: 0 0 1.25rem; padding-left: 1.25rem; }
        .legal-prose li { margin-bottom: 0.5rem; padding-left: 0.25rem; }
        .legal-prose li::marker { color: #dc2626; }
        .legal-prose a { color: #dc2626; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
        .legal-prose a:hover { color: #b91c1c; text-decoration: underline; }
        @media (max-width: 960px) { .legal-container { padding: 0 2.5rem; } }
        @media (max-width: 640px) { .legal-container { padding: 0 1.5rem; } .legal-prose h2 { margin-top: 2.25rem; padding-top: 2rem; } }
      `}</style>
    </>
  );
}
