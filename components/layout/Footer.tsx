'use client';

import Link from 'next/link';
import { site, PAYPAL_BUTTON_ID } from '@/lib/config';
import { footer } from '@/data/sitetext';

/** Ported from _includes/footer.html. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background: 'var(--ink-900)', color: 'var(--on-dark)', padding: '4rem 0 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Donation CTA strip */}
        <div
          style={{
            background: 'var(--ink-800)',
            borderRadius: 'var(--radius-lg)',
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
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--on-dark)',
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
                color: 'var(--on-dark-muted)',
                fontFamily: 'var(--font-body)',
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
                background: 'var(--brand-red)',
                color: 'var(--on-dark)',
                padding: '0.6rem 1.5rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-heading)',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--brand-red-dark)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--brand-red)')}
            >
              Donate Now
            </button>
            <img
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
              alt=""
              style={{ position: 'absolute', border: 0 }}
            />
          </form>
        </div>

        {/* 3-column grid */}
        <div
          id="footerGrid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Column 1: Logo + mission + social (the ONLY place social links appear) */}
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
                color: 'var(--on-dark-muted)',
                lineHeight: 1.7,
                margin: '0 0 0.5rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              Increasing digital literacy and open data use to empower communities across Nepal.
            </p>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.4)',
                margin: '0 0 1.5rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              A registered nonprofit run by volunteers.
            </p>
            {footer.social.length > 0 && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {footer.social.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.url}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '50%',
                      color: 'var(--on-dark-muted)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--brand-red)';
                      e.currentTarget.style.color = 'var(--on-dark)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'var(--on-dark-muted)';
                    }}
                  >
                    <i className={link.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--on-dark-faint)',
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
                      color: 'var(--on-dark-muted)',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-heading)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--on-dark)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--on-dark-muted)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact — just the email now; social lives in Column 1 only */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--on-dark-faint)',
                margin: '0 0 1.25rem',
              }}
            >
              Get in Touch
            </h4>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--on-dark-muted)',
                margin: '0 0 0.75rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <i className="fas fa-envelope" aria-hidden="true" style={{ marginRight: '0.5rem', color: 'var(--brand-red)' }} />
              <a
                href={`mailto:${site.email}`}
                style={{ color: 'var(--on-dark-muted)', textDecoration: 'none' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--on-dark)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--on-dark-muted)')}
              >
                {site.email}
              </a>
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--on-dark-muted)',
                margin: 0,
                fontFamily: 'var(--font-heading)',
              }}
            >
              <i className="fas fa-location-dot" aria-hidden="true" style={{ marginRight: '0.5rem', color: 'var(--brand-red)' }} />
              Kathmandu, Nepal
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          id="footerBottom"
          style={{
            borderTop: '1px solid var(--on-dark-hairline)',
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
              fontFamily: 'var(--font-heading)',
            }}
          >
            &copy; {year} {site.title}. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link
              href="/codeofconduct/"
              target="_blank"
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--on-dark-muted)')}
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
                fontFamily: 'var(--font-heading)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--on-dark-muted)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {footer.privacy}
            </Link>
            <a
              href="#page-top"
              aria-label="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--brand-red)';
                e.currentTarget.style.color = 'var(--on-dark)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <i className="fas fa-arrow-up" aria-hidden="true" style={{ fontSize: '0.75rem' }} />
            </a>
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
                fontFamily: 'var(--font-body)',
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