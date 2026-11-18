import { Seo } from '@/components/layout/Seo';
import { PageLayout } from '@/components/layout/PageLayout';
import { LegalContent } from '@/components/pages/LegalContent';
import { AboutContent } from '@/components/pages/AboutContent';
import { FellowshipContent } from '@/components/pages/FellowshipContent';
import { HackathonContent } from '@/components/pages/HackathonContent';
import { JoinUsContent } from '@/components/pages/JoinUsContent';
import { ProjectsContent } from '@/components/pages/ProjectsContent';
import { ContributeContent } from '@/components/pages/ContributeContent';
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

export function ContributePage() {
  return (
    <>
      <Seo
        title="Write a Blog or Dataviz"
        description="How to write a blog post or create a data visualization and submit it to Code for Nepal."
        path="/contribute/"
      />
      <PageLayout>
        <ContributeContent />
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
 * now split into the operational team and the advisory group.
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

            {team.groups.map((group) => (
              <div key={group.id} style={{ marginBottom: '3rem' }}>
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                  <h3 className="text-uppercase" style={{ fontWeight: 700 }}>{group.title}</h3>
                  <p className="text-muted">{group.text}</p>
                </div>
                <div className="teamPageGrid">
                  {group.people.map((person) => (
                    <div key={person.name} style={{ width: '100%', maxWidth: '340px' }}>
                      <div className="team-member">
                        <img
                          className="mx-auto rounded-circle"
                          src={person.image || '/assets/img/team/placeholder.png'}
                          alt={person.name}
                          style={{
                            width: '280px',
                            maxWidth: '100%',
                            aspectRatio: '1 / 1',
                            height: 'auto',
                            objectFit: 'cover',
                            border: '7px solid rgba(0,0,0,0.1)',
                          }}
                        />
                        <a
                          href={person.linkedinUrl}
                          className="text-decoration-none"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h4>{person.name}</h4>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="large text-muted" />
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .teamPageGrid { display: flex; flex-wrap: wrap; justify-content: center; gap: 3rem 1.5rem; }
          .teamPageGrid > div { flex: 0 1 calc((100% - 3rem) / 3); }
          @media (max-width: 768px) {
            .teamPageGrid { gap: 2rem 1.5rem; }
            .teamPageGrid > div { flex-basis: 100%; }
          }
        `}</style>
      </PageLayout>
    </>
  );
}

export function CodeOfConductPage() {
  const { title, html } = getRootMarkdown('codeOfConduct');
  return (
    <>
      <Seo
        title="Code of Conduct"
        description="The Code for Nepal community code of conduct, adapted from the Contributor Covenant."
        path="/codeofconduct/"
      />
      <PageLayout>
        <LegalContent
          eyebrow="Community Standards"
          title={title || 'Code of Conduct'}
          intro="How we expect members, contributors, and leaders to treat one another in every Code for Nepal space, online and offline."
          html={html}
        />
      </PageLayout>
    </>
  );
}

export function PrivacyPage() {
  const { title, html } = getRootMarkdown('privacy');
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Code for Nepal collects and uses information on codefornepal.org."
        path="/privacy/"
      />
      <PageLayout>
        <LegalContent
          eyebrow="Legal"
          title={title || 'Privacy Policy'}
          intro="What information is collected when you visit codefornepal.org, how it is used, and the choices you have."
          html={html}
        />
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
