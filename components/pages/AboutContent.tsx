'use client';

import Link from 'next/link';
import { team } from '@/data/team';
import { Timeline } from '@/components/home/Timeline';

const eyebrow = (color: string): React.CSSProperties => ({
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.35em',
  color,
  fontFamily: "'Montserrat',sans-serif",
  fontWeight: 600,
});

const values = [
  { title: 'Open & Transparent', desc: 'Our code, data, and processes are open by default. We believe in public accountability.' },
  { title: 'Community First', desc: 'Every decision we make centers on the needs of the communities we serve.' },
  { title: 'Inclusive & Equitable', desc: 'We actively work to remove barriers to digital access, especially for women and underserved communities.' },
  { title: 'Impact-Driven', desc: 'We measure success by real outcomes: skills learned, projects delivered, communities empowered.' },
];

const focusAreas = [
  { icon: 'fas fa-laptop-code', title: 'Digital Literacy', desc: 'Expanding digital skills through structured workshops and online programs, reaching learners from all backgrounds across Nepal.' },
  { icon: 'fas fa-database', title: 'Open Data', desc: "Making Nepal's civic and government data accessible and understandable — building tools like NepalMap to help citizens engage with public information." },
  { icon: 'fas fa-graduation-cap', title: 'Fellowships & Training', desc: 'Running the Data Fellowship program to train the next generation of Nepali data scientists and civic technologists through free, expert-led education.' },
  { icon: 'fas fa-users', title: 'Community', desc: 'Connecting 500+ volunteers across Nepal and the diaspora to collaborate, create impact, and advocate for a more digital, data-informed Nepal.' },
];

const operate = [
  { icon: 'fas fa-hand-holding-heart', bg: '#111827', title: 'Volunteers Power Us', desc: 'Code for Nepal runs entirely on volunteer effort. Our global community of developers, designers, and data scientists give their time to create public goods.' },
  { icon: 'fas fa-code-branch', bg: '#dc2626', title: 'We Build in the Open', desc: 'All our projects are open-source. Anyone can contribute, fork, and build on our work. Transparency is core to everything we create.' },
  { icon: 'fas fa-chart-line', bg: '#111827', title: 'Impact Drives Direction', desc: 'We prioritize projects and programs where we can demonstrate measurable real-world impact — skills trained, data made accessible, communities engaged.' },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111827', padding: '5rem 0 4rem', margin: '-1px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ ...eyebrow('#dc2626'), marginBottom: '1rem' }}>Since 2014</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: '1.25rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>
            About Code for Nepal
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8, fontFamily: "'Droid Serif','Georgia',serif" }}>
            A community of volunteers using civic technology to increase digital literacy and harness the power of open data to build a more transparent, equitable Nepal.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div id="missionGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ ...eyebrow('#dc2626'), marginBottom: '0.75rem' }}>Who we are</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#111827', marginBottom: '1.25rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Our Mission</h2>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.8, marginBottom: '1rem', fontFamily: "'Droid Serif','Georgia',serif" }}>
                Code for Nepal is a registered 501(c)(3) nonprofit working to increase digital literacy and use of open data across Nepal. We believe technology is a tool for equity — and that Nepalis everywhere should have access to the digital skills and resources to shape their own futures.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.8, fontFamily: "'Droid Serif','Georgia',serif" }}>
                Founded in 2014, we have grown from a small volunteer group to a community of 500+ members across Nepal and the Nepali diaspora. We build open-source tools, run training fellowships, and advocate for data-driven public services.
              </p>
            </div>
            <div>
              <p style={{ ...eyebrow('#dc2626'), marginBottom: '0.75rem' }}>Our values</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>What We Stand For</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {values.map((v) => (
                  <li key={v.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <i className="fas fa-circle" style={{ color: '#dc2626', fontSize: '0.35rem', marginTop: '0.6rem', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.9rem', color: '#111827' }}>{v.title}</strong>
                      <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#6b7280', fontFamily: "'Droid Serif','Georgia',serif", lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do: 4 focus areas */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow('#dc2626'), marginBottom: '0.6rem' }}>Focus areas</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>What We Do</h2>
          </div>
          <div id="pillarsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {focusAreas.map((p) => (
              <div key={p.title} style={{ background: 'white', padding: '2rem', border: '1px solid #f3f4f6', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '2.75rem', height: '2.75rem', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={p.icon} style={{ color: '#dc2626', fontSize: '1.1rem' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 0.5rem', fontFamily: "'Montserrat',sans-serif" }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.65, margin: 0, fontFamily: "'Droid Serif','Georgia',serif" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow('#dc2626'), marginBottom: '0.6rem' }}>How it works</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>How We Operate</h2>
          </div>
          <div id="operateGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {operate.map((o) => (
              <div key={o.title} style={{ padding: '2rem' }}>
                <div style={{ width: '4rem', height: '4rem', background: o.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <i className={o.icon} style={{ color: 'white', fontSize: '1.25rem' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif" }}>{o.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.65, fontFamily: "'Droid Serif','Georgia',serif" }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow('#dc2626'), marginBottom: '0.6rem' }}>The people</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Our Team</h2>
            <p style={{ fontSize: '0.95rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto', fontFamily: "'Droid Serif','Georgia',serif", lineHeight: 1.7 }}>{team.text}</p>
          </div>
          <div id="teamGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2rem' }}>
            {team.people.map((person) => (
              <div key={person.name} style={{ textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1rem', border: '3px solid #fee2e2', boxShadow: '0 0 0 4px #fff, 0 0 0 5px #f3f4f6' }}>
                  {person.image ? (
                    <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fas fa-user" style={{ color: '#dc2626', fontSize: '2rem' }} />
                    </div>
                  )}
                </div>
                {person.linkedinUrl ? (
                  <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <h3
                      style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontFamily: "'Montserrat',sans-serif" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#dc2626')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#111827')}
                    >
                      {person.name}
                    </h3>
                  </a>
                ) : (
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', margin: '0 0 0.25rem', fontFamily: "'Montserrat',sans-serif" }}>{person.name}</h3>
                )}
                {person.linkedinUrl && (
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '0.5rem', color: '#9ca3af', fontSize: '0.85rem' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#dc2626')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Join CTA */}
      <section style={{ padding: '5rem 0', background: '#111827' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Join our community</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif" }}>
            Whether you&apos;re a developer, designer, data scientist, writer, or just passionate about Nepal — there&apos;s a place for you here.
          </p>
          <Link
            href="/joinus/"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#dc2626', color: 'white', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#b91c1c')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#dc2626')}
          >
            Get Involved
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #missionGrid, #pillarsGrid, #operateGrid { grid-template-columns: 1fr !important; }
          #teamGrid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
