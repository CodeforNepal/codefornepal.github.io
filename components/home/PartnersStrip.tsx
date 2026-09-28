import { clients } from '@/data/sitetext';

/**
 * Ported from _includes/sections/home/clients.html.
 * There is no `clients` data in sitetext.yml, so this renders nothing today (dormant) —
 * reproduced faithfully.
 */
export function PartnersStrip() {
  if (!clients.list.length) return null;
  return (
    <section
      id={clients.section || 'clients'}
      style={{ padding: '4rem 0', background: '#f9fafb', borderTop: '1px solid #f3f4f6' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: '#9ca3af',
            marginBottom: '2.5rem',
            fontFamily: "'Montserrat',sans-serif",
            fontWeight: 500,
          }}
        >
          {clients.title || 'Our Partners'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {clients.list.map((client) => (
            <a
              key={client.url}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              <img
                src={client.logo}
                alt={client.title}
                style={{ maxHeight: clients.maxHeight || '70px', maxWidth: '140px', objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
