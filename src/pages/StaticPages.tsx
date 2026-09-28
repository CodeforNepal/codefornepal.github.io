import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { Prose } from '@/components/pages/Prose';
import { AboutContent } from '@/components/pages/AboutContent';
import { FellowshipContent } from '@/components/pages/FellowshipContent';
import { HackathonContent } from '@/components/pages/HackathonContent';
import { JoinUsContent } from '@/components/pages/JoinUsContent';
import { ProjectsContent } from '@/components/pages/ProjectsContent';
import { getRootMarkdown } from '@/lib/posts';
import { team } from '@/data/team';

export function AboutPage() {
  return (
    <>
      <Seo title="About" path="/about/" />
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <Seo title="Projects" path="/projects/" />
      <PageLayout>
        <ProjectsContent />
      </PageLayout>
    </>
  );
}

export function FellowshipPage() {
  return (
    <>
      <Seo title="Fellowship" path="/fellowship2026/" />
      <PageLayout>
        <FellowshipContent />
      </PageLayout>
    </>
  );
}

export function HackathonPage() {
  return (
    <>
      <Seo title="Hackathon" path="/data_crunch_hackathon_2024/" />
      <PageLayout>
        <HackathonContent />
      </PageLayout>
    </>
  );
}

export function JoinUsPage() {
  return (
    <>
      <Seo title="Join Us" path="/joinus/" />
      <PageLayout>
        <JoinUsContent />
      </PageLayout>
    </>
  );
}

/**
 * Ported from team/index.html — the older jekyll-agency Bootstrap team layout,
 * kept as-is (team.yml has no role/social, so those render empty, matching today).
 */
export function TeamPage() {
  return (
    <>
      <Seo title="Team" path="/team/" />
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
                      style={{
                        width: '280px',
                        height: '280px',
                        objectFit: 'cover',
                        border: '7px solid rgba(0,0,0,0.1)',
                      }}
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
    </>
  );
}

export function CodeOfConductPage() {
  const { html } = getRootMarkdown('codeOfConduct');
  return (
    <>
      <Seo title="Code of Conduct" path="/codeofconduct/" />
      <PageLayout>
        <Prose html={html} />
      </PageLayout>
    </>
  );
}

export function PrivacyPage() {
  const { html } = getRootMarkdown('privacy');
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy/" />
      <PageLayout>
        <Prose html={html} />
      </PageLayout>
    </>
  );
}

/** Ported from 404.html. */
export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404.html" />
      <PageLayout>
        <div className="container" id="error-page-container">
          <h1>404</h1>
          <p>
            <strong>Page not found :(</strong>
          </p>
          <p>The requested page could not be found.</p>
        </div>
      </PageLayout>
    </>
  );
}
