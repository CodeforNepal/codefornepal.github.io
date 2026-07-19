'use client';

import { pillars } from '@/data/sitetext';

/** Ported from _includes/sections/home/pillars.html. Also the hero's smooth-scroll target (#pillars). */
export function Pillars() {
  if (!pillars.length) return null;
  return (
    <section id="pillars" style={{ padding: '5rem 0', background: 'white' }}>
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
            Our mission
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
            What We Do
          </h2>
        </div>

        <div
          id="pillarsGrid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                padding: '2rem',
                border: '1px solid #f3f4f6',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#f3f4f6';
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '2.75rem',
                  height: '2.75rem',
                  background: '#fef2f2',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className={pillar.icon} style={{ color: '#dc2626', fontSize: '1.1rem' }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 0.5rem',
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6b7280',
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: "'Droid Serif','Georgia',serif",
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #pillarsGrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
