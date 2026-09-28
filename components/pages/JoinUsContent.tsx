import Link from '@/components/ui/Link';

const cards = [
  { icon: 'fab fa-slack', title: 'Slack', href: 'https://join.slack.com/t/codefornepal/shared_invite/zt-fm07r7gz-97iagKnDNJ3DbX8QKR6Bxg', desc: 'Say hello and introduce yourself to the community. Talk and collaborate with team members in real-time.', cta: 'Join Channel' },
  { icon: 'fab fa-github', title: 'GitHub', href: 'https://github.com/CodeforNepal', desc: 'Look at our civic tech codebases. Contribute by writing code, resolving issues, or suggesting enhancements.', cta: 'View Projects' },
  { icon: 'fab fa-linkedin-in', title: 'LinkedIn', href: 'https://linkedin.com/company/code-for-nepal/', desc: 'Follow us for professional updates, announcements, project launches, and educational opportunities.', cta: 'Follow Us' },
  { icon: 'fab fa-facebook', title: 'Facebook', href: 'https://facebook.com/codefornepal', desc: 'Connect with us, share our stories, and get in touch with digital advocates across our local communities.', cta: 'Visit Page' },
  { icon: 'fab fa-twitter', title: 'Twitter / X', href: 'https://twitter.com/codefornepal', desc: 'Follow our updates, tweet discussions, share insights, and join open civic tech conversations.', cta: 'Follow Updates' },
];

/** Ported from joinus/index.html. */
export function JoinUsContent() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="joinus-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Get Involved</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Join Our Community</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="joinus-container">
          <div style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '1.08rem', color: '#4b5563', lineHeight: 1.8, fontFamily: "'Droid Serif','Georgia',serif", margin: '0 0 2.5rem' }}>
              You can help us and many in Nepal just from your couch or sofa. We welcome{' '}
              <strong>designers</strong>, <strong>marketers</strong>, <strong>coders</strong>,{' '}
              <strong>writers</strong>, <strong>problem-solvers</strong>, and{' '}
              <strong>anyone else</strong> interested in helping people make better use of technology
              and become digitally and data literate.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="join-card"
                style={{ border: '1px solid #f3f4f6', padding: '2rem', display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'white', transition: 'box-shadow 0.2s, border-color 0.2s', boxSizing: 'border-box' }}
              >
                <div style={{ width: '2.5rem', height: '2.5rem', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <i className={c.icon} style={{ color: '#dc2626', fontSize: '1.25rem' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 0.5rem', fontFamily: "'Montserrat',sans-serif" }}>{c.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.65, margin: '0 0 1.5rem', fontFamily: "'Droid Serif','Georgia',serif", flex: 1 }}>{c.desc}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dc2626', fontFamily: "'Montserrat',sans-serif", display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  {c.cta} <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </span>
              </a>
            ))}
          </div>

          <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif", borderTop: '1px solid #f3f4f6', paddingTop: '2rem' }}>
            We also encourage you to explore our website, learn about our projects, and read our{' '}
            <Link
              href="/codeofconduct/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#dc2626', textDecoration: 'none', fontWeight: 600 }}
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
        .join-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.07); border-color: #e5e7eb !important; }
        @media (max-width: 960px) { .joinus-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) { .joinus-container { padding: 0 1.5rem !important; } }
      `}</style>
    </>
  );
}
