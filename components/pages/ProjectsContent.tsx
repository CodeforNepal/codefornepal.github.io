import { useMemo, useState } from 'react';
import Link from '@/components/ui/Link';
import { projects, projectStatuses, type ProjectStatus } from '@/data/projects';

type Filter = 'All' | ProjectStatus;
const filters: Filter[] = ['All', ...projectStatuses];

const counts = Object.fromEntries(
  projectStatuses.map((s) => [s, projects.filter((p) => p.status === s).length]),
) as Record<ProjectStatus, number>;

/** Short host label for an external link, e.g. "nepalmap.org" / "GitHub". */
function linkLabel(url: string): string {
  const host = url.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
  if (host === 'github.com') return 'GitHub';
  if (host === 'facebook.com') return 'Facebook';
  if (host === 'nyti.ms') return 'NYTimes';
  return host;
}

/** Ported from projects/index.html. */
export function ProjectsContent() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  );

  return (
    <>
      {/* Header */}
      <section style={{ padding: '3rem 0 2.5rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
        <div className="project-container">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#dc2626', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>Open Source</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111827', margin: '0 0 0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Our Projects</h1>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, maxWidth: '600px', margin: 0, fontFamily: "'Droid Serif','Georgia',serif" }}>
                Since 2014, our community and partners have run civic tech, data, and digital literacy projects to help Nepalis access and use public information.
              </p>
            </div>
            <a
              href="https://github.com/CodeforNepal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '2px solid #111827', color: '#111827', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif", whiteSpace: 'nowrap', alignSelf: 'flex-start' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111827'; }}
            >
              <i className="fab fa-github" /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects by Code for Nepal & partners */}
      <section style={{ padding: '4rem 0 5rem', background: 'white' }}>
        <div className="project-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.35rem,3vw,1.75rem)', fontWeight: 700, color: '#111827', margin: '0 0 0.4rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>
                Projects by Code for Nepal &amp; Partners
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, fontFamily: "'Droid Serif','Georgia',serif" }}>
                Showing {visible.length} of {projects.length} projects
              </p>
            </div>
            <div role="tablist" aria-label="Filter projects by status" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  className={`project-filter${filter === f ? ' is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  <span className="project-filter-count">{f === 'All' ? projects.length : counts[f]}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="projectsGrid">
            {visible.map((p) => {
              const external = /^https?:/.test(p.link);
              const inner = (
                <>
                  <span className={`project-status project-status-${p.status.toLowerCase()}`}>{p.status}</span>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#111827', margin: '0.9rem 0 0.5rem', fontFamily: "'Montserrat',sans-serif", lineHeight: 1.35 }}>{p.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.65, margin: 0, fontFamily: "'Droid Serif','Georgia',serif", flex: 1 }}>
                    {p.about || 'Details coming soon.'}
                  </p>
                  {p.link && (
                    <span className="project-card-cta">
                      {external ? `Visit ${linkLabel(p.link)}` : 'Read the story'}{' '}
                      <i className={external ? 'fas fa-external-link-alt' : 'fas fa-arrow-right'} style={{ fontSize: '0.65rem' }} />
                    </span>
                  )}
                </>
              );
              return p.link ? (
                <Link
                  key={p.name}
                  href={p.link}
                  className="project-card"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {inner}
                </Link>
              ) : (
                <div key={p.name} className="project-card">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section style={{ padding: '4rem 0', background: '#111827' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Want to contribute?</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif" }}>
            All our projects are open-source. Fork a repo, open an issue, or reach out to get involved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/CodeforNepal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', background: 'white', color: '#111827', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#f9fafb')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
            >
              <i className="fab fa-github" /> GitHub
            </a>
            <Link
              href="/joinus/"
              style={{ display: 'inline-block', padding: '0.85rem 1.75rem', border: '2px solid rgba(255,255,255,0.5)', color: 'white', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'white')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .project-container { max-width: 1300px !important; padding: 0 4rem !important; margin: 0 auto; box-sizing: border-box; }
        #projectsGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .project-card { display: flex; flex-direction: column; align-items: flex-start; padding: 1.75rem; border: 1px solid #f3f4f6; background: white; text-decoration: none; transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s; box-sizing: border-box; min-width: 0; }
        a.project-card:hover { text-decoration: none; box-shadow: 0 4px 24px rgba(0,0,0,0.07); border-color: #e5e7eb; transform: translateY(-2px); }
        .project-status { font-family: 'Montserrat',sans-serif; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; padding: 0.3rem 0.65rem; border-radius: 9999px; }
        .project-status-ongoing { background: #fef2f2; color: #dc2626; }
        .project-status-pipeline { background: #fffbeb; color: #b45309; }
        .project-status-completed { background: #f3f4f6; color: #4b5563; }
        .project-card-cta { margin-top: 1.25rem; font-family: 'Montserrat',sans-serif; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #dc2626; display: inline-flex; align-items: center; gap: 0.4rem; overflow-wrap: anywhere; }
        .project-filter { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border: 1px solid #e5e7eb; background: white; color: #4b5563; font-family: 'Montserrat',sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: border-color 0.2s, color 0.2s, background 0.2s; }
        .project-filter:hover { border-color: #111827; color: #111827; }
        .project-filter.is-active { background: #111827; border-color: #111827; color: white; }
        .project-filter-count { font-size: 0.68rem; opacity: 0.65; }
        @media (max-width: 960px) { #projectsGrid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { #projectsGrid { grid-template-columns: 1fr; } }
        @media (max-width: 960px) { .project-container { padding: 0 2.5rem !important; } }
        @media (max-width: 640px) { .project-container { padding: 0 1.5rem !important; } }
      `}</style>
    </>
  );
}
