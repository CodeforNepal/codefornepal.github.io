'use client';

import { sponsors } from '@/data/sitetext';

/** Ported from _includes/sections/home/sponsors.html. */
export function SponsorsStrip() {
  if (!sponsors.list.length) return null;
  return (
    <section
      id={sponsors.section || 'sponsors'}
      style={{ padding: '5rem 0', background: '#fff', borderTop: '1px solid #f3f4f6' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: '#9ca3af',
            marginBottom: '0.75rem',
            fontFamily: "'Montserrat',sans-serif",
            fontWeight: 500,
          }}
        >
          Supporting our mission
        </p>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '2.5rem',
            fontFamily: "'Montserrat',sans-serif",
          }}
        >
          {sponsors.title || 'Our Sponsors'}
        </h2>
        {sponsors.text && (
          <p
            style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              marginBottom: '2.5rem',
              fontFamily: "'Droid Serif','Georgia',serif",
            }}
          >
            {sponsors.text}
          </p>
        )}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {sponsors.list.map((sponsor) => (
            <a
              key={sponsor.url}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 0.65, transition: 'opacity 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '0.65')}
            >
              <img
                src={sponsor.image}
                alt="Sponsor"
                style={{ maxHeight: '60px', maxWidth: '160px', objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
