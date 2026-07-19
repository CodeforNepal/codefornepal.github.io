import type { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { buildMetadata } from '@/lib/seo';
import { team } from '@/data/team';

export const metadata: Metadata = buildMetadata({ title: 'Team', path: '/team/' });

/**
 * Ported from team/index.html — the older jekyll-agency Bootstrap team layout,
 * kept as-is (team.yml has no role/social, so those render empty, matching today).
 */
export default function TeamPage() {
  return (
    <PageLayout>
      <section className="bg-light page-section" id={team.section || 'team'}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{team.title}</h2>
              <h3 className="section-subheading text-muted">{team.text}</h3>
            </div>
          </div>

          <div
            id="teamGrid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem 1.5rem',
              justifyItems: 'center',
              marginBottom: '3rem',
            }}
          >
            {team.people.map((person) => (
              <div key={person.name} style={{ width: '100%', maxWidth: '340px' }}>
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={person.image}
                    alt=""
                    style={{ width: '280px', height: '280px', objectFit: 'cover', border: '7px solid rgba(0,0,0,0.1)' }}
                  />
                  <a href={person.linkedinUrl} className="text-decoration-none" target="blank">
                    <h4>{person.name}</h4>
                  </a>
                  <p className="text-muted" />
                  <ul className="list-inline social-buttons" />
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="large text-muted" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #teamGrid { grid-template-columns: 1fr !important; gap: 2rem 1.5rem !important; }
        }
      `}</style>
    </PageLayout>
  );
}
