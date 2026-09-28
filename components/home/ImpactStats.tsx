import { useEffect, useRef, useState } from 'react';
import { impact } from '@/data/sitetext';

/**
 * A single count-up number. Reproduces animateCounter() from impact.html:
 * parses "500+" / "10k+" into number + suffix, eases 0 → number over 2s on first
 * intersection, then restores the exact literal string (so the "k" is not multiplied).
 */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)([a-zA-Z+]+)?$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || '';
    const duration = 2000;

    let raf = 0;
    let startTime: number | null = null;
    function step(ts: number) {
      if (startTime === null) startTime = ts;
      const progress = ts - startTime;
      const pct = Math.min(progress / duration, 1);
      const ease = 1 - (1 - pct) * (1 - pct); // ease-out quad
      setDisplay(Math.floor(ease * targetNum) + suffix);
      if (progress < duration) {
        raf = window.requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            raf = window.requestAnimationFrame(step);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="stat-number-counter"
      style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#111827',
        fontFamily: "'Montserrat',sans-serif",
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}
    >
      {display}
    </div>
  );
}

/** Ported from _includes/sections/home/impact.html. */
export function ImpactStats() {
  const stats = impact.stats;
  if (!stats.length) return null;

  return (
    <section
      id="impact"
      style={{ padding: '4rem 0', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div id="impactGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                ...(i < stats.length - 1 ? { borderRight: '1px solid #e5e7eb' } : {}),
              }}
            >
              <Counter value={stat.number} />
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#6b7280',
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          #impactGrid { grid-template-columns: repeat(2, 1fr) !important; }
          #impactGrid > div { border-right: none !important; border-bottom: 1px solid #e5e7eb; }
          #impactGrid > div:nth-child(odd) { border-right: 1px solid #e5e7eb !important; }
          #impactGrid > div:nth-child(3),
          #impactGrid > div:nth-child(4) { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
