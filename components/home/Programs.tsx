import Link from '@/components/ui/Link';
import { FELLOWSHIP_FORM_URL } from '@/lib/config';

/** Ported from _includes/sections/home/programs.html (content is hardcoded as in the original). */
export function Programs() {
  return (
    <section id="programs" style={{ padding: '5rem 0', background: '#111827', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          id="programsGrid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
        >
          {/* Left: content */}
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: '#dc2626',
                marginBottom: '0.75rem',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 600,
              }}
            >
              Now open
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem,4vw,2.75rem)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                fontFamily: "'Montserrat',sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Data Fellowship 2026
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.75,
                marginBottom: '1rem',
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
            >
              Join our flagship program supported by{' '}
              <strong style={{ color: 'white' }}>DataCamp Donates</strong>. Build in-demand data
              skills, earn certificates, and connect with a community of civic technologists across
              Nepal.
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '2rem',
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              <i className="fas fa-calendar-alt" style={{ marginRight: '0.4rem', color: '#dc2626' }} />
              Applications open: June 1, 2026 &mdash; Rolling basis &bull; Limited seats
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={FELLOWSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.85rem 1.75rem',
                  background: 'white',
                  color: '#111827',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  fontFamily: "'Montserrat',sans-serif",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#f9fafb')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
              >
                Apply Now
              </a>
              <Link
                href="/fellowship2026/"
                style={{
                  display: 'inline-block',
                  padding: '0.85rem 1.75rem',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  fontFamily: "'Montserrat',sans-serif",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = 'white')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: fellowship image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
              <img
                src="/assets/img/data_fellowship_2026.png"
                alt="Data Fellowship 2026"
                style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '400px' }}
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.parentElement) img.parentElement.style.background = '#1f2937';
                  img.style.display = 'none';
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,24,39,0.2)' }} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #programsGrid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
