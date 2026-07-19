'use client';

import { services } from '@/data/sitetext';

/** Ported from _includes/sections/home/services.html ("Our Work"). Shows all services. */
export function ServicesGrid() {
  if (!services.list.length) return null;
  return (
    <section id={services.section || 'work'} style={{ padding: '6rem 0', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            What we do
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem,4vw,2.5rem)',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '1rem',
              fontFamily: "'Montserrat',sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            {services.title || 'Our Work'}
          </h2>
          {services.text && (
            <p
              style={{
                fontSize: '1.05rem',
                color: '#6b7280',
                maxWidth: '540px',
                margin: '0 auto',
                lineHeight: 1.7,
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
            >
              {services.text}
            </p>
          )}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.list.map((service) => (
            <div
              key={service.name}
              style={{
                border: '1px solid #f3f4f6',
                padding: '2rem',
                transition: 'box-shadow 0.2s, border-color 0.2s',
                cursor: 'default',
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
                  width: '2.5rem',
                  height: '2.5rem',
                  background: '#fef2f2',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <i className={service.icon} style={{ color: '#dc2626', fontSize: '1rem' }} />
              </div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '0.6rem',
                  fontFamily: "'Montserrat',sans-serif",
                }}
              >
                {service.url ? (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#dc2626')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#111827')}
                  >
                    {service.name}
                  </a>
                ) : (
                  service.name
                )}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
