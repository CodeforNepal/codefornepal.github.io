import Link from '@/components/ui/Link';

/** Ported from projects/index.html. */
export function ProjectsContent() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="project-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Open Source</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: '0 0 0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Our Projects</h1>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, maxWidth: '600px', margin: 0, fontFamily: "'Droid Serif','Georgia',serif" }}>
                Since 2014, our community has built a series of open-source civic tech and data tools to help Nepalis access and use public information.
              </p>
            </div>
            <a
              href="https://github.com/CodeforNepal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '2px solid #111827', color: '#111827', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif", whiteSpace: 'nowrap', alignSelf: 'flex-start' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111827'; }}
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Featured projects grid — currently rebuilding our project list */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="project-container" style={{ textAlign: 'center' }}>
          <i className="fas fa-tools" style={{ color: '#dc2626', fontSize: '2rem', marginBottom: '1.25rem' }} />
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>
            We&apos;re working on it
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto', fontFamily: "'Droid Serif','Georgia',serif" }}>
            We&apos;re refreshing our project showcase. In the meantime, check out our open-source work directly on GitHub.
          </p>
        </div>
      </section>

      {/* Contribute CTA */}
      <section style={{ padding: '4rem 0', background: '#111827' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Want to contribute?</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif" }}>
            All our projects are open-source. Fork a repo, open an issue, or reach out to get involved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/CodeforNepal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', background: 'white', color: '#111827', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f9fafb')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <i className="fab fa-github" /> GitHub
            </a>
            <Link
              href="/joinus/"
              style={{ display: 'inline-block', padding: '0.85rem 1.75rem', border: '2px solid rgba(255,255,255,0.5)', color: 'white', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'white')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .project-container { max-width: 1300px !important; padding: 0 4rem !important; margin: 0 auto; box-sizing: border-box; }
        @media (max-width: 960px) { .project-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) { .project-container { padding: 0 1.5rem !important; } }
      `}</style>
    </>
  );
}
