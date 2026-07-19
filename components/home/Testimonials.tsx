'use client';

import { testimonials } from '@/data/sitetext';

/** Ported from _includes/sections/home/testimonials.html. */
export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: '#dc2626',
              marginBottom: '0.6rem',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: 600,
            }}
          >
            Stories
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,2.5rem)',
              fontWeight: 700,
              color: '#111827',
              margin: 0,
              fontFamily: "'Montserrat',sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            What our fellows say
          </h2>
        </div>

        <div
          id="testimonialsGrid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                padding: '2.5rem',
                border: '1px solid #f3f4f6',
                position: 'relative',
              }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)')}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div
                style={{
                  fontSize: '4rem',
                  color: '#dc2626',
                  fontFamily: 'Georgia,serif',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  opacity: 0.4,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                  fontFamily: "'Droid Serif','Georgia',serif",
                  fontStyle: 'italic',
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#fef2f2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-user" style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#111827',
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #testimonialsGrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
