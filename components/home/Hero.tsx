import { useEffect, type CSSProperties } from 'react';
import { site, FELLOWSHIP_FORM_URL } from '@/lib/config';
import { header } from '@/data/sitetext';
import { useReveal } from '@/components/layout/RevealProvider';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

/**
 * Ported from _includes/sections/home/header.html — the full-viewport hero AND the
 * home page's scroll-lock reveal controller. The original toggled global body classes
 * (is-loaded / is-scrolled); here it drives the shared RevealProvider state that the
 * Nav and the below-the-fold content wrapper also consume.
 */
export function Hero() {
  const { isLoaded, isScrolled, setLoaded, setScrolled } = useReveal();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    let scrolled = false;
    const lockDuration = 1200; // match the reveal transition duration

    const loadTimer = window.setTimeout(() => setLoaded(true), 100);

    const atTop = window.scrollY < 15;
    if (atTop) {
      html.style.setProperty('overflow', 'hidden', 'important');
      body.style.setProperty('overflow', 'hidden', 'important');
    } else {
      scrolled = true;
      setScrolled(true);
    }

    function cleanupListeners() {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
    }

    function activate() {
      if (scrolled) return;
      scrolled = true;
      setScrolled(true);
      window.setTimeout(() => {
        html.style.removeProperty('overflow');
        body.style.removeProperty('overflow');
        const next = document.getElementById('pillars');
        if (next) {
          const targetY = next.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
        // Force any Leaflet map to recalc its container size.
        window.dispatchEvent(new Event('resize'));
        cleanupListeners();
      }, lockDuration);
    }

    function onWheel(e: WheelEvent) {
      if (e.deltaY > 0) {
        e.preventDefault();
        activate();
      }
    }
    let touchStartY = 0;
    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }
    function onTouchMove(e: TouchEvent) {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 30) {
        e.preventDefault();
        activate();
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (['ArrowDown', 'Space', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        activate();
      }
    }
    function onScrollFallback() {
      if (window.scrollY > 15 && !scrolled) {
        scrolled = true;
        setScrolled(true);
        html.style.removeProperty('overflow');
        body.style.removeProperty('overflow');
      }
    }

    if (atTop) {
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('keydown', onKeyDown, { passive: false } as AddEventListenerOptions);
    }
    window.addEventListener('scroll', onScrollFallback);

    const indicator = document.getElementById('heroScrollIndicator');
    indicator?.addEventListener('click', activate);

    return () => {
      window.clearTimeout(loadTimer);
      cleanupListeners();
      window.removeEventListener('scroll', onScrollFallback);
      indicator?.removeEventListener('click', activate);
      html.style.removeProperty('overflow');
      body.style.removeProperty('overflow');
    };
  }, [setLoaded, setScrolled]);

  const titleStyle: CSSProperties = {
    fontSize: 'clamp(2.4rem,6vw,4.5rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    fontFamily: "'Montserrat',sans-serif",
    letterSpacing: '-0.02em',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 1s ${EASE} 0.1s, transform 1s ${EASE} 0.1s`,
  };

  const subtitleStyle: CSSProperties = {
    fontSize: 'clamp(1rem,2.5vw,1.3rem)',
    color: 'rgba(255,255,255,0.78)',
    marginBottom: '3rem',
    lineHeight: 1.75,
    maxWidth: '580px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "'Droid Serif','Georgia',serif",
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 1s ${EASE} 0.4s, transform 1s ${EASE} 0.4s`,
  };

  const ctasStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.85rem',
    maxWidth: '560px',
    margin: '0 auto',
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateY(0)' : 'translateY(20px)',
    pointerEvents: isScrolled ? 'auto' : 'none',
    transition: `opacity 0.8s ${EASE} 0.1s, transform 0.8s ${EASE} 0.1s`,
  };

  const indicatorStyle: CSSProperties = {
    position: 'absolute',
    bottom: '2.5rem',
    left: '50%',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)',
    zIndex: 10,
    cursor: 'pointer',
    opacity: isLoaded ? 0.85 : 0,
    transform: isLoaded ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
    transition: `opacity 1s ${EASE} 0.7s, transform 1s ${EASE} 0.7s`,
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: '#111827',
        minHeight: '100dvh',
        width: '100%',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/assets/img/timeline/cover-hackathon.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          zIndex: 1,
        }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 2 }} />

      {/* Centering wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          width: '100%',
          padding: '6rem 1.5rem 4rem',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'center', color: 'white', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
          {header.title && (
            <h1 id="heroTitle" style={titleStyle}>
              {header.title}
            </h1>
          )}
          {header.text && (
            <p id="heroSubtitle" style={subtitleStyle}>
              {header.text}
            </p>
          )}

          <div id="heroCtas" style={ctasStyle}>
            <a
              href={FELLOWSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.85rem 1.4rem',
                background: '#dc2626',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                fontFamily: "'Montserrat',sans-serif",
                border: '2px solid #dc2626',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#b91c1c';
                e.currentTarget.style.borderColor = '#b91c1c';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#dc2626';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
            >
              Apply for Fellowship
            </a>
            <a
              href={`mailto:${site.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.85rem 1.4rem',
                background: 'transparent',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                fontFamily: "'Montserrat',sans-serif",
                border: '2px solid rgba(255,255,255,0.65)',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div id="heroScrollIndicator" style={indicatorStyle}>
        <p
          style={{
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            marginBottom: '0.6rem',
            fontFamily: "'Montserrat',sans-serif",
          }}
        >
          Scroll to explore
        </p>
        <div
          style={{
            width: '1px',
            height: '2.5rem',
            background: 'rgba(255,255,255,0.3)',
            margin: '0 auto',
            animation: 'heroScrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes heroScrollPulse {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.08); }
        }
        @media (min-width: 600px) {
          #heroCtas { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
