import Link from '@/components/ui/Link';
import { site, PAYPAL_BUTTON_ID } from '@/lib/config';
import { footer } from '@/data/sitetext';

const hostname = (url: string) => url.replace(/^https?:\/\//, '').split('/')[0];

/** Ported from _includes/footer.html. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background: '#111827', color: 'white', padding: '4rem 0 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Donation CTA strip */}
        <div
          style={{
            background: '#1f2937',
            borderRadius: '8px',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Support our mission
            </p>
            <p
              style={{
                margin: '0.25rem 0 0',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
            >
              Every contribution helps expand digital literacy in Nepal.
            </p>
          </div>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={PAYPAL_BUTTON_ID} />
            <button
              type="submit"
              style={{
                background: '#dc2626',
                color: 'white',
                padding: '0.6rem 1.5rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: "'Montserrat',sans-serif",
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#b91c1c')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#dc2626')}
            >
              Donate Now
            </button>
            <img
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
              alt=""
            />
          </form>
        </div>

        {/* 3-column grid */}
        <div
          id="footerGrid"
          style={{
            display: 'grid',
            gridTemplateColumns: '35% 30% 35%',
            gap: '3rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Column 1: Logo + mission + social */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src={site.logo}
                alt={site.title}
                style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                margin: '0 0 1.5rem',
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
            >
              Increasing digital literacy and open data use to empower communities across Nepal.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {footer.social.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#dc2626';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 1.25rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { href: '/about/', label: 'About' },
                { href: '/fellowship2026/', label: 'Fellowship 2026' },
                { href: '/projects/', label: 'Projects' },
                { href: '/blog/', label: 'Blog' },
                { href: '/joinus/', label: 'Join Us' },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: '0.6rem' }}>
                  <Link
                    href={l.href}
                    style={{
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 1.25rem',
              }}
            >
              Connect
            </h4>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.75)',
                margin: '0 0 0.5rem',
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: '#dc2626' }} />
              <a
                href={`mailto:${site.email}`}
                style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {site.email}
              </a>
            </p>
            <div style={{ marginTop: '1rem' }}>
              {footer.social.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontFamily: "'Montserrat',sans-serif",
                    marginBottom: '0.5rem',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  <i className={link.icon} style={{ width: '16px', textAlign: 'center' }} />
                  <span>{hostname(link.url)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          id="footerBottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '1.5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            &copy; {year} {site.title}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link
              href="/codeofconduct/"
              target="_blank"
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontFamily: "'Montserrat',sans-serif",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {footer.legalTitle}
            </Link>
            <Link
              href="/privacy/"
              target="_blank"
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontFamily: "'Montserrat',sans-serif",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {footer.privacy}
            </Link>
          </div>
        </div>

        {/* License line */}
        {footer.license && (
          <div style={{ paddingBottom: '1.5rem' }}>
            <p
              style={{
                margin: 0,
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.6,
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
              dangerouslySetInnerHTML={{ __html: footer.license }}
            />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #footerGrid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #footerBottom { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
