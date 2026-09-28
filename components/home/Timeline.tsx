import { timeline } from '@/data/sitetext';
import { inlineMarkdown } from '@/lib/inline-markdown';

/** Ported from _includes/sections/home/timeline.html. Used by the About page. */
export function Timeline() {
  return (
    <section id={timeline.section || 'about'} style={{ padding: '6rem 0', background: '#fff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
            Our journey
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
            {timeline.title || 'About'}
          </h2>
          {timeline.text && (
            <p
              style={{
                fontSize: '1.05rem',
                color: '#6b7280',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.7,
                fontFamily: "'Droid Serif','Georgia',serif",
              }}
            >
              {timeline.text}
            </p>
          )}
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {timeline.events.map((event, i) => {
            const isRight = event.align === 'right';
            return (
              <div
                key={i}
                className={`timeline-row ${isRight ? 'timeline-row-right' : 'timeline-row-left'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-content-card">
                    <span className="timeline-year">{event.year}</span>
                    <h3 className="timeline-title">{event.title}</h3>
                    <div
                      className="timeline-desc"
                      dangerouslySetInnerHTML={{ __html: `<p>${inlineMarkdown(event.desc)}</p>` }}
                    />
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="timeline-node-circle">
                    {event.image ? (
                      <img src={event.image} alt={event.alt || ''} />
                    ) : (
                      <div className="timeline-node-icon">
                        <i className="fas fa-star" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="timeline-spacer" />
              </div>
            );
          })}

          {timeline.end && (
            <div
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: '#fef2f2',
                border: '1px solid #fee2e2',
                borderRadius: '8px',
                position: 'relative',
                zIndex: 2,
                marginTop: '2rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.1rem',
                  color: '#dc2626',
                  fontWeight: 600,
                  fontFamily: "'Montserrat',sans-serif",
                }}
                dangerouslySetInnerHTML={{ __html: `<p>${inlineMarkdown(timeline.end)}</p>` }}
              />
            </div>
          )}
        </div>
      </div>

      <style>{`
        .timeline-wrapper { position: relative; width: 100%; }
        .timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #e5e7eb; transform: translateX(-50%); z-index: 1; }
        .timeline-row { display: grid; grid-template-columns: 1fr 120px 1fr; align-items: center; margin-bottom: 4rem; position: relative; z-index: 2; }
        .timeline-row-left .timeline-content { grid-column: 1; grid-row: 1; align-self: center; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; }
        .timeline-row-left .timeline-spacer { grid-column: 3; grid-row: 1; }
        .timeline-row-right .timeline-content { grid-column: 3; grid-row: 1; align-self: center; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
        .timeline-row-right .timeline-spacer { grid-column: 1; grid-row: 1; }
        .timeline-node { grid-column: 2; grid-row: 1; align-self: center; display: flex; justify-content: center; align-items: center; height: 100%; }
        .timeline-node-circle { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; border: 4px solid #fff; box-shadow: 0 0 0 2px #dc2626; background: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .timeline-node-circle img { width: 100%; height: 100%; object-fit: cover; }
        .timeline-node-icon { color: #dc2626; font-size: 1.25rem; }
        .timeline-content-card { padding: 1.5rem; background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 8px; text-align: left; max-width: 100%; box-sizing: border-box; }
        .timeline-year { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #dc2626; font-family: 'Montserrat', sans-serif; display: block; margin-bottom: 0.35rem; }
        .timeline-title { font-size: 1.1rem; font-weight: 700; color: #111827; font-family: 'Montserrat', sans-serif; margin: 0 0 0.75rem; }
        .timeline-desc { font-size: 0.88rem; color: #4b5563; line-height: 1.7; font-family: 'Droid Serif', 'Georgia', serif; }
        .timeline-desc p { margin: 0; }
        @media (max-width: 768px) {
          .timeline-line { left: 40px; transform: none; }
          .timeline-row { grid-template-columns: 80px 1fr !important; gap: 1rem; margin-bottom: 3rem; }
          .timeline-row-left .timeline-content, .timeline-row-right .timeline-content { grid-column: 2 !important; align-items: flex-start !important; }
          .timeline-row-left .timeline-content-card, .timeline-row-right .timeline-content-card { text-align: left !important; width: 100%; }
          .timeline-node { grid-column: 1 !important; justify-content: flex-start; }
          .timeline-node-circle { width: 60px; height: 60px; }
          .timeline-spacer { display: none; }
        }
      `}</style>
    </section>
  );
}
