'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { site } from '@/lib/config';
import { navigation } from '@/data/navigation';
import { useReveal } from './RevealProvider';

const linkStyle: CSSProperties = {
  color: 'white',
  fontSize: '0.78rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  textDecoration: 'none',
  fontFamily: "'Montserrat',sans-serif",
  padding: '0.5rem 0.9rem',
  borderRadius: '4px',
};

const mobileLinkStyle: CSSProperties = {
  display: 'block',
  color: 'white',
  fontSize: '0.82rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  textDecoration: 'none',
  fontFamily: "'Montserrat',sans-serif",
  padding: '0.75rem 0',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
};

/**
 * Ported from _includes/nav.html.
 * On the home page (`reveal`), the bar starts hidden and is revealed once the
 * hero reveal fires (isScrolled) — replacing the original body.is-scrolled coupling.
 */
export function Nav({ reveal = false }: { reveal?: boolean }) {
  const { isScrolled } = useReveal();
  const [mobileOpen, setMobileOpen] = useState(false);

  const revealed = !reveal || isScrolled;

  const navStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: '#111827',
    boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
    ...(reveal
      ? {
          transition:
            'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: revealed ? 'auto' : 'none',
        }
      : {}),
  };

  return (
    <>
      <nav id="mainNav" style={navStyle}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src={site.logo}
              alt={site.title}
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop links */}
          <div
            id="navDesktopLinks"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.page}
                href={`/${item.page}/`}
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            id="navToggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              lineHeight: 1,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          id="navMobileMenu"
          style={{
            display: mobileOpen ? 'block' : 'none',
            background: '#1f2937',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '1rem 1.5rem',
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.page}
              href={`/${item.page}/`}
              style={mobileLinkStyle}
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      <style>{`
        @media (max-width: 767px) {
          #navDesktopLinks { display: none !important; }
          #navToggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
