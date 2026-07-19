import type { ReactNode } from 'react';
import { hackathon } from '@/data/hackathon';
import { HACKATHON_APPLY_URL } from '@/lib/config';
import { inlineMarkdown } from '@/lib/inline-markdown';

/**
 * Ported from data_crunch_hackathon_2024/index.html + _includes/sections/hackathon/*.
 * Bootstrap-grid legacy design (brand blue #00ADEF). No interactivity → server component.
 * External images keep their original hotlinked URLs (self-hosting is a follow-up).
 */

const faqs: { q: string; a: ReactNode }[] = [
  { q: 'Q: What is the focus of the hackathon, and in which domains can teams work?', a: 'A: The hackathon encourages teams to explore diverse domains such as environment, healthcare, transportation, and more. Participants are challenged to craft open-sourced and well-documented projects using non-proprietary data, with an emphasis on creating Minimum Viable Products (MVPs).' },
  { q: 'Q: How should teams be composed for the hackathon?', a: "A: Teams should consist of 3-6 members. If you don't have a team, you can apply individually, and Code For Nepal will assign a team to you." },
  { q: 'Q: What are the eligibility criteria for projects? Can previously developed projects be submitted?', a: 'A: Projects should be innovative and fresh. Previously developed projects are not permitted. The project can take various forms, including dashboards, reports, Machine Learning models, statistical models, data catalogs, or anything else preapproved by the Code For Nepal team.' },
  { q: 'Q: What are the expectations for project outputs?', a: 'A: Teams are expected to present semi-complete data-driven projects with significant impact on the Nepal data ecosystem. Creativity and innovation in project proposals are key, and teams will be judged based on their ability to effectively communicate their ideas.' },
  { q: 'Q: What is the timeline for Data Crunch 2024, and when can teams apply?', a: 'A: The application period is open from January 12, 2024, to February 5th, 2024. The timeline includes team and project finalization on February 10th, asynchronous/synchronous work from February 10th to March 15th, and the hackathon presentation on March 15th, 2024.' },
  { q: 'Q: Are there specific criteria for applicants, and do team members need to be physically present?', a: 'A: Applicants must meet specific criteria, including having at least 50% of team members in Kathmandu for the presentation on March 15th, 2024. Additionally, at least one team member should possess the technical expertise required to deliver the project.' },
  {
    q: 'Q: Where do I ask additional questions regarding the hackathon, application process, expectations, etc.?',
    a: (
      <>
        A: Use Code For Nepal Slack, and find the channel{' '}
        <a href="https://codefornepal.slack.com/archives/C06DD16JYBG">#data-crunch-hackathon-2024</a>
      </>
    ),
  },
  { q: 'Q: Do I need to be a previous or current Code For Nepal Fellow to participate?', a: 'A: No, the hackathon is open to everyone.' },
  { q: 'Q: Will you help us find data for the hackathon?', a: 'A: No' },
  { q: 'Q: How will we be judged?', a: 'A: On presentation and documentation (20%), impact (20%), work completed (40%), and confidence in you being able to complete the work post hackathon (20%)' },
];

export function HackathonContent() {
  return (
    <>
      {/* About the program, part 1 */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="hackathon-heading text-uppercase" style={{ color: '#00ADEF', marginBottom: '40px' }}>
              {hackathon.about.title}
            </h2>
            <div
              className="hackathon-section"
              style={{ marginBottom: '20px' }}
              dangerouslySetInnerHTML={{ __html: `<p>${inlineMarkdown(hackathon.about.text)}</p>` }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Wikimedia_Hackathon_2013%2C_Amsterdam_-_Flickr_-_Sebastiaan_ter_Burg_%2828%29.jpg"
            style={{ width: '800px' }}
            alt=""
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '140px' }}>
          <img src="/assets/img/c4n_logo.png" style={{ height: '4rem', marginRight: '1%' }} alt="" />
        </div>

        <div className="row">
          <div className="col-md-6 d-flex">
            <div style={{ padding: '8%' }}>
              <img src="/assets/img/data.svg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
            <div className="align-self-center">
              <h2 className="hackathon-heading">About the hackathon</h2>
              <div className="hackathon-section" dangerouslySetInnerHTML={{ __html: hackathon.about.aboutProgram }} />
            </div>
          </div>
        </div>
      </div>

      {/* Modality, part 2 */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
            <div className="align-self-center">
              <h2 className="hackathon-heading">Modality</h2>
              <div className="hackathon-section">
                <h3 className="hackathon-heading">Team Composition</h3>
                <p className="section-text">Gather your brainiest innovators; teams should comprise 3-6 members. If you do not have a team, you can apply individually, and a team will be assigned to you.</p>
                <h3 className="hackathon-heading">Data Usage</h3>
                <p className="section-text">Dive into the vast ocean of non-proprietary data to fuel your creations. The data that you use should be accessible to anyone else who wants to replicate your project. You can scrape data, but make sure the source you scrape from allows it. Finally, the data should be relevant with Nepal. </p>
                <h3 className="hackathon-heading">Eligibility of Projects</h3>
                <p className="section-text">We&apos;re looking for fresh ideas, or twist in previous ideas! Previously developed projects are not permitted. The project can be a dashboard, a report, a Machine Learning model, a simple statistical model with huge impact, data catalog, data portal, or anything else preapproved from Code For Nepal team.</p>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div style={{ padding: '8%' }}>
              <img src="/assets/img/approach.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Prizes, part 3 */}
      <div className="container hackathon-section">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div style={{ padding: '10%' }}>
              <img
                src="https://img.freepik.com/premium-vector/1st-2nd-3rd-places-gold-silver-bronze-medal-first-second-third-place-award-winner-trophy-with-red-ribbon-golden-badge-achievement-vector-flat-design-isolated-white-background_153097-392.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
            <div className="align-self-center">
              <h2 className="hackathon-heading">Prizes:</h2>
              <div>
                <ol>
                  <li className="custom_li"><strong>First Place:</strong> NRs. 50,000</li>
                  <li className="custom_li"><strong>Second Place:</strong> NRs. 30,000</li>
                  <li className="custom_li"><strong>Third Place:</strong> NRs. 20,000</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline + Partners + FAQ + Apply, part 4 */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
            <div className="align-self-center">
              <h2 className="hackathon-heading">Timeline Details</h2>
              <div className="hackathon-section">
                <p className="section-text">
                  Application Open: <strong> January 12, 2024 </strong>
                  <br />
                  Deadline to Apply: <strong> February 5th, 2024</strong>
                  <br />
                  Finalization of Team and Project: <strong> February 10th, 2024</strong>
                  <br />
                  Teams working async/sync (up to you): <strong> February 10th - Mar 15th, 2024</strong>
                  <br />
                  Hackathon presentation date: <strong>Mar 15th, 2024</strong>
                </p>
                Applicants must meet the following criteria to apply:
                <p className="section-text" />
                <ol>
                  <li className="custom_li">At least 50% of your team members should be in Kathmandu for the presentation (Mar 15th, 2024).</li>
                  <li className="custom_li">At least one of the team members should have the technical know how to deliver the project.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div style={{ padding: '20%' }}>
              <img src="/assets/img/application.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div style={{ backgroundColor: '#FCFBFB', width: '100%' }}>
        <div className="hackathon-section">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="hackathon-heading" style={{ paddingTop: '40px' }}>Partners</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://codefornepal.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <img src="https://codefornepal.org/assets/img/c4n_logo.png" alt="Code For Nepal Logo" style={{ width: '150px', height: 'auto' }} />
            </a>
            <a href="https://www.cloudfactory.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <img src="https://mms.businesswire.com/media/20230118005069/en/1554618/22/cf-logo-blue-2022.jpg" alt="Cloudfactory Logo" style={{ width: '150px', height: 'auto' }} />
            </a>
            <a href="https://luminr.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <img src="/assets/img/luminr.png" alt="Luminr logo" style={{ width: '150px', height: 'auto' }} />
            </a>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div style={{ backgroundColor: '#FCFBFB', width: '100%' }}>
        <div className="hackathon-section">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="hackathon-heading" style={{ paddingTop: '40px' }}>FAQs</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '70%' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: '#333', fontSize: '1.2em' }}>{f.q}</h3>
                  <p style={{ color: '#555' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Apply CTA */}
      <div style={{ backgroundColor: '#FCFBFB', width: '100%' }}>
        <div className="hackathon-section">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="hackathon-heading" style={{ paddingTop: '40px' }}>APPLICATION OPEN</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={HACKATHON_APPLY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#54bfff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Apply via Devfolio
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        div.hackathon-section { font-size: 16px; font-weight: 400; margin-top: 0; margin-bottom: 140px; text-transform: none; line-height: 1.7; }
        p.section-text { font-size: 16px; margin-top: 0; margin-bottom: 20px; line-height: 1.7; }
        h2.hackathon-heading { font-size: 40px; margin-top: 0; margin-bottom: 20px; }
        h3.hackathon-heading { font-size: 24px; margin-top: 0; margin-bottom: 20px; }
        .custom_li { margin-top: 4%; }
      `}</style>
    </>
  );
}
