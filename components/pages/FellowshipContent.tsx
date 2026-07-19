'use client';

import type { CSSProperties } from 'react';
import { fellowship } from '@/data/fellowship';
import { FELLOWSHIP_FORM_URL } from '@/lib/config';
import { inlineMarkdown } from '@/lib/inline-markdown';

const eyebrow: CSSProperties = {
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.35em',
  color: '#dc2626',
  fontFamily: "'Montserrat',sans-serif",
  fontWeight: 600,
};

const perks = [
  'DataCamp Premium subscription to take expert-led courses and earn certificates',
  'Opportunity to publish data visualizations and blog posts on Code for Nepal',
  'Industry & academia expert teaching assistants for support and community participation',
  'Involvement in Open Source Projects',
  'A digital certificate from Code for Nepal upon fellowship completion',
  'Lifetime membership in the Code for Nepal community',
];

const steps = [
  { n: '1', bg: '#111827', icon: 'fas fa-graduation-cap', title: 'DataCamp Courses', desc: "Learn data skills through DataCamp's expert-led online curriculum covering Python, SQL, data science, and more." },
  { n: '2', bg: '#dc2626', icon: 'fas fa-tasks', title: 'Assignment & Project', desc: 'Apply your skills to real-world data projects, contributing to open source civic technology for Nepal.' },
  { n: '3', bg: '#111827', icon: 'fas fa-certificate', title: 'Support & Certification', desc: 'Get mentored by experts, earn your DataCamp certificates, and receive a Code for Nepal fellowship certificate.' },
];

const requirements = [
  'Any Nepali interested in learning data skills — no prior experience needed',
  'Commitment to complete at least one DataCamp track or course',
  'Access to a computer and internet connection',
  'Willingness to participate in the Code for Nepal community',
];

const outcomes = [
  'Industry-recognized DataCamp certificates',
  'Real-world data project experience',
  'Expert mentorship and career guidance',
  'Lifetime Code for Nepal community membership',
];

const cohort = [
  { icon: 'fas fa-calendar-alt', label: 'Applications Open', value: 'June 1, 2026', divider: false },
  { icon: 'fas fa-sync-alt', label: 'Review Process', value: 'Rolling basis', divider: true },
  { icon: 'fas fa-users', label: 'Availability', value: 'Limited seats', divider: false },
];

const learningOutcomes = [
  { icon: 'fas fa-users', title: 'Community Learning', desc: 'Learn alongside hundreds of other Nepali data enthusiasts. Share knowledge, collaborate, and grow together.' },
  { icon: 'fas fa-chart-bar', title: 'Data Projects', desc: "Build a portfolio of real data projects that matter — from Nepal's census data to public health analytics." },
  { icon: 'fas fa-user-tie', title: 'Mentorship', desc: 'Connect with industry professionals and academics who provide guidance, feedback, and career advice.' },
  { icon: 'fas fa-certificate', title: 'Certifications', desc: 'Earn DataCamp certificates recognized by employers worldwide, plus a Code for Nepal fellowship certificate.' },
];

const faqs = [
  { q: 'Who is eligible to apply?', a: "Any Nepali is welcome to apply — whether you're a student, working professional, or someone looking to change careers. No prior data experience is required; we welcome complete beginners." },
  { q: 'Is the fellowship really free?', a: "Yes! The Data Fellowship is completely free, thanks to DataCamp Donates. Fellows receive full access to DataCamp's premium platform at no cost." },
  { q: 'How long is the fellowship?', a: 'The fellowship is self-paced. Fellows are expected to complete at least one DataCamp track within a few months. Most fellows complete the program within 3–6 months.' },
  { q: 'What data skills can I learn?', a: 'DataCamp offers courses across Python, R, SQL, data visualization, machine learning, AI, data engineering, and business analytics. You choose the track that best fits your goals.' },
  { q: 'Do I need to be in Nepal to participate?', a: "No! The fellowship is fully online and open to Nepalis worldwide — whether you're in Nepal or part of the diaspora abroad. All you need is internet access." },
];

const summaryStyle: CSSProperties = {
  padding: '1.25rem 1.5rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#111827',
  fontFamily: "'Montserrat',sans-serif",
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export function FellowshipContent() {
  return (
    <>
      {/* Hero Banner */}
      <section style={{ background: '#111827', padding: '5rem 0 4rem', margin: '-1px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ ...eyebrow, marginBottom: '1rem' }}>Applications Open</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: '1.25rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>
            {fellowship.about.title || 'Data Fellowship 2026'}
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.75, fontFamily: "'Droid Serif','Georgia',serif" }}>
            A free program supported by DataCamp Donates to help Nepalis build in-demand data skills, earn certificates, and join a growing community of civic technologists.
          </p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <img src="/assets/img/c4n_logo.png" alt="Code for Nepal" style={{ height: '2.5rem', filter: 'brightness(0) invert(1)', opacity: 0.9 }} onError={(e) => (e.currentTarget.style.display = 'none')} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}>+</span>
            <img src="/assets/img/datacamp.png" alt="DataCamp" style={{ height: '2.5rem' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <a
            href={FELLOWSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#dc2626', color: 'white', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#b91c1c')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#dc2626')}
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Program Overview */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div id="overviewGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>About the program</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '1.25rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Free data skills training for all Nepalis</h2>
              <div
                style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.8, fontFamily: "'Droid Serif','Georgia',serif" }}
                dangerouslySetInnerHTML={{ __html: `<p>${inlineMarkdown(fellowship.about.text)}</p>` }}
              />
              <div style={{ marginTop: '2rem' }}>
                <img src="/assets/img/data_fellowship_2026.jpg" alt="Data Fellowship 2026" style={{ width: '100%', borderRadius: '2px', display: 'block' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
            </div>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Program includes</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>What you get</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {perks.map((perk, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: i === perks.length - 1 ? 0 : '1rem', alignItems: 'flex-start' }}>
                    <i className="fas fa-check-circle" style={{ color: '#dc2626', fontSize: '1rem', marginTop: '0.15rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6, fontFamily: "'Droid Serif','Georgia',serif" }}>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.6rem' }}>The process</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>How It Works</h2>
          </div>
          <div id="stepsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: 'white', padding: '2.5rem 2rem', border: '1px solid #f3f4f6', textAlign: 'center' }}>
                <div style={{ width: '3rem', height: '3rem', background: s.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ color: 'white', fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>{s.n}</span>
                </div>
                <div style={{ width: '2.5rem', height: '2.5rem', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <i className={s.icon} style={{ color: '#dc2626' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Montserrat',sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.65, fontFamily: "'Droid Serif','Georgia',serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.6rem' }}>Requirements</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Who Can Apply</h2>
          </div>
          <div id="eligibilityGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: '#f9fafb', padding: '2.5rem', border: '1px solid #f3f4f6' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 1.5rem', fontFamily: "'Montserrat',sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <i className="fas fa-user-check" style={{ color: '#dc2626' }} /> Requirements
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {requirements.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: i === requirements.length - 1 ? 0 : '0.9rem', alignItems: 'flex-start', fontSize: '0.9rem', color: '#374151', fontFamily: "'Droid Serif','Georgia',serif", lineHeight: 1.6 }}>
                    <i className="fas fa-check" style={{ color: '#dc2626', marginTop: '0.2rem', flexShrink: 0 }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#111827', padding: '2.5rem', color: 'white' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', margin: '0 0 1.5rem', fontFamily: "'Montserrat',sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <i className="fas fa-star" style={{ color: '#dc2626' }} /> Outcomes
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {outcomes.map((o, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: i === outcomes.length - 1 ? 0 : '0.9rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontFamily: "'Droid Serif','Georgia',serif", lineHeight: 1.6 }}>
                    <i className="fas fa-arrow-right" style={{ color: '#dc2626', marginTop: '0.2rem', flexShrink: 0 }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort details */}
      <section style={{ padding: '4rem 0', background: '#f9fafb', borderTop: '1px solid #f3f4f6' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div id="cohortGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {cohort.map((c) => (
              <div key={c.label} style={{ padding: '2rem', ...(c.divider ? { borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb' } : {}) }}>
                <div style={{ width: '3rem', height: '3rem', background: '#fef2f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <i className={c.icon} style={{ color: '#dc2626' }} />
                </div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem', fontFamily: "'Montserrat',sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</h4>
                <p style={{ fontSize: '1rem', color: '#6b7280', fontFamily: "'Droid Serif','Georgia',serif" }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.6rem' }}>Why join</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Learning Outcomes</h2>
          </div>
          <div id="outcomesGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {learningOutcomes.map((o) => (
              <div key={o.title} style={{ padding: '2rem', border: '1px solid #f3f4f6', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={o.icon} style={{ color: '#dc2626', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', margin: '0 0 0.4rem', fontFamily: "'Montserrat',sans-serif" }}>{o.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, margin: 0, fontFamily: "'Droid Serif','Georgia',serif" }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.6rem' }}>Questions</p>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#111827', margin: 0, fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ background: 'white', border: '1px solid #f3f4f6' }}>
                <summary style={summaryStyle}>
                  {f.q} <i className="fas fa-chevron-down" style={{ color: '#dc2626', fontSize: '0.75rem', flexShrink: 0 }} />
                </summary>
                <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section style={{ padding: '5rem 0', background: '#dc2626' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', fontFamily: "'Montserrat',sans-serif", letterSpacing: '-0.02em' }}>Ready to apply?</h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: 1.7, fontFamily: "'Droid Serif','Georgia',serif" }}>
            Applications are reviewed on a rolling basis. Apply today to secure your spot in the next cohort.
          </p>
          <a
            href={FELLOWSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '1rem 3rem', background: 'white', color: '#dc2626', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', fontFamily: "'Montserrat',sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#f9fafb')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
          >
            Apply Now
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #overviewGrid, #eligibilityGrid, #stepsGrid, #outcomesGrid, #cohortGrid { grid-template-columns: 1fr !important; }
          #cohortGrid > div { border-left: none !important; border-right: none !important; border-bottom: 1px solid #e5e7eb; }
          #cohortGrid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </>
  );
}
