'use client';

import Link from 'next/link';

const SLACK_URL =
  'https://join.slack.com/t/codefornepal/shared_invite/zt-fm07r7gz-97iagKnDNJ3DbX8QKR6Bxg';

const skills = [
  { icon: 'fas fa-palette', label: 'Designers' },
  { icon: 'fas fa-bullhorn', label: 'Marketers' },
  { icon: 'fas fa-code', label: 'Coders' },
  { icon: 'fas fa-pen-nib', label: 'Writers' },
  { icon: 'fas fa-lightbulb', label: 'Problem-solvers' },
];

const followCards = [
  {
    icon: 'fab fa-github',
    title: 'GitHub',
    href: 'https://github.com/CodeforNepal',
    desc: 'Look at our civic tech codebases. Contribute by writing code, resolving issues, or suggesting enhancements.',
    cta: 'View Projects',
  },
  {
    icon: 'fab fa-linkedin-in',
    title: 'LinkedIn',
    href: 'https://linkedin.com/company/code-for-nepal/',
    desc: 'Follow us for professional updates, announcements, project launches, and educational opportunities.',
    cta: 'Follow Us',
  },
  {
    icon: 'fab fa-facebook',
    title: 'Facebook',
    href: 'https://facebook.com/codefornepal',
    desc: 'Connect with us, share our stories, and get in touch with digital advocates across our local communities.',
    cta: 'Visit Page',
  },
  {
    icon: 'fab fa-twitter',
    title: 'Twitter / X',
    href: 'https://twitter.com/codefornepal',
    desc: 'Follow our updates, tweet discussions, share insights, and join open civic tech conversations.',
    cta: 'Follow Updates',
  },
];

/** Redesigned from joinus/index.html: Slack elevated as the primary "join" CTA
 *  (it's the only channel that's actually two-way/real-time per the original copy),
 *  the skills list pulled out of prose into a scannable row, and the remaining
 *  four channels reframed as lighter-weight "follow us" cards instead of five
 *  equally-weighted options competing for the same click. */
export function JoinUsContent() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '4rem 0 3rem', background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border-soft)' }}>
        <div className="joinus-container">
          <p
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: 'var(--brand-red)',
              marginBottom: '0.75rem',
              marginTop: '2rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
            }}
          >
            Get Involved
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.75rem,4vw,2.75rem)',
              fontWeight: 700,
              color: 'var(--ink-900)',
              margin: '0 0 1.25rem',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              maxWidth: '640px',
            }}
          >
            Join Our Community
          </h1>
          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--ink-600)',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
              margin: '0 0 2rem',
              maxWidth: '640px',
            }}
          >
            You can help us — and many across Nepal — right from your couch or sofa. Whatever you're good at, there's a place for you here.
          </p>
          <a
            href={SLACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'var(--brand-red)',
              color: 'var(--on-dark)',
              padding: '0.85rem 1.75rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none',
              borderRadius: 'var(--radius-sm)',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--brand-red-dark)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'var(--brand-red)')}
          >
            <i className="fab fa-slack" aria-hidden="true" style={{ fontSize: '1rem' }} />
            Say Hello on Slack
          </a>
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-400)', marginTop: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            Our most active space — introduce yourself and start collaborating in real time.
          </p>
        </div>
      </section>

      {/* Who we're looking for */}
      <section style={{ padding: '3.5rem 0', background: 'white', borderBottom: '1px solid var(--border-soft)' }}>
        <div className="joinus-container">
          <h2
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--ink-400)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              margin: '0 0 1.5rem',
            }}
          >
            We welcome
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map((s) => (
              <span
                key={s.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.6rem 1.1rem',
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--ink-900)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                <i className={s.icon} aria-hidden="true" style={{ color: 'var(--brand-red)', fontSize: '0.85rem' }} />
                {s.label}
              </span>
            ))}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.6rem 1.1rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--ink-500)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-body)',
              }}
            >
              …and anyone else who wants to help people become digitally and data literate.
            </span>
          </div>
        </div>
      </section>

      {/* Follow us elsewhere */}
      <section style={{ padding: '4rem 0 5rem', background: 'var(--surface-subtle)' }}>
        <div className="joinus-container">
          <h2
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--ink-400)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              margin: '0 0 1.5rem',
            }}
          >
            Follow us elsewhere
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem',
            }}
          >
            {followCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="join-card"
                style={{
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  background: 'white',
                  transition: 'box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    background: '#fef2f2',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <i className={c.icon} aria-hidden="true" style={{ color: 'var(--brand-red)', fontSize: '1.05rem' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--ink-900)', margin: '0 0 0.5rem', fontFamily: 'var(--font-heading)' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', lineHeight: 1.6, margin: '0 0 1.25rem', fontFamily: 'var(--font-body)', flex: 1 }}>
                  {c.desc}
                </p>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--brand-red)',
                    fontFamily: 'var(--font-heading)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {c.cta} <i className="fas fa-arrow-right" aria-hidden="true" style={{ fontSize: '0.65rem' }} />
                </span>
              </a>
            ))}
          </div>

          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--ink-500)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
              borderTop: '1px solid var(--border-soft)',
              paddingTop: '2rem',
              margin: 0,
            }}
          >
            We also encourage you to explore our website, learn about our projects, and read our{' '}
            <Link
              href="/codeofconduct/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--brand-red)', textDecoration: 'none', fontWeight: 600 }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Code of Conduct
            </Link>{' '}
            policy.
          </p>
        </div>
      </section>

      <style>{`
        .joinus-container { max-width: 1300px !important; padding: 0 4rem !important; margin: 0 auto; box-sizing: border-box; }
        .join-card:hover {
          box-shadow: 0 8px 24px rgba(15,23,42,0.08);
          border-color: var(--border) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 960px) { .joinus-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) { .joinus-container { padding: 0 1.5rem !important; } }
      `}</style>
    </>
  );
}