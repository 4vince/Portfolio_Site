const entries = [
  {
    when: 'Jun — Jul 2026',
    role: 'Full-Stack Development & UI Intern',
    org: 'MakerSpace InnovHub OPC',
    points: [
      'Developed responsive interfaces and interactive pages for a production Next.js e-commerce platform and its internal administration dashboard.',
      'Integrated AI-powered chat and content generation features, translating AI outputs into intuitive, user-friendly interface components.',
      'Contributed to backend workflows with Python, FastAPI, PostgreSQL, Docker, and Git across the full development lifecycle.',
      'Worked closely with designers and developers to deliver scalable, accessible, maintainable web solutions.',
    ],
    tags: [
      ['pill-blue', 'Next.js'],
      ['pill-blue', 'AI Integration'],
      ['pill-blue', 'FastAPI'],
      ['pill-green', 'PostgreSQL'],
      ['pill-yellow', 'Docker'],
    ],
  },
  {
    when: 'Aug 2025 — Present',
    role: 'Marketing Director',
    org: 'SICAP · Society of Integrated Commercians for Academic Progress',
    points: [
      'Spearheaded digital marketing strategies that grew social media engagement on Facebook and Instagram within one academic semester.',
      'Led a creative team promoting departmental events, driving consistent year-over-year gains in student attendance.',
      'Designed high-fidelity digital assets and posters that standardized the organization\u2019s visual identity.',
    ],
    tags: [
      ['pill-yellow', 'Social Strategy'],
      ['pill-yellow', 'Brand Design'],
      ['pill-red', 'Creative Direction'],
    ],
  },
  {
    when: 'Nov 2024',
    role: 'Lead Developer & UI/UX Designer',
    org: 'CareCrate · DICT Startup Challenge Finalist',
    points: [
      'Recognized as a Regional Finalist in the DICT Startup Challenge against 50+ student-led tech startups.',
      'Pitched to government officials and industry experts, demonstrating hardware-software integration and market viability.',
      'Engineered the companion mobile app for a physical medicine box using UI/UX best practices for elderly users with cognitive impairments.',
    ],
    tags: [
      ['pill-green', 'DICT Finalist'],
      ['pill-blue', 'UI/UX'],
      ['pill-yellow', 'Accessibility'],
    ],
  },
  {
    when: 'Aug 2024 — Present',
    role: 'Staff Writer',
    org: 'SCHEMA SLU · Official Publication of SAMCIS',
    points: [
      'Authored articles on technology trends and campus life for SAMCIS students.',
      'Partnered with the design team to keep written content and visual layouts synchronized for maximum reader engagement.',
    ],
    tags: [
      ['pill-red', 'Technical Writing'],
      ['pill-red', 'Editorial'],
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">02 — Experience</p>
          <h2 className="section-title">Where I&rsquo;ve shipped, led, and learned.</h2>
        </div>
        <div className="timeline">
          {entries.map((e, i) => (
            <article key={e.role} className="entry reveal" style={{ '--index': i % 3 }}>
              <p className="entry-when">{e.when}</p>
              <div>
                <h3 className="entry-role">{e.role}</h3>
                <p className="entry-org">
                  <span>{e.org.split(' · ')[0]}</span> · {e.org.split(' · ').slice(1).join(' · ')}
                </p>
                <ul className="entry-points">
                  {e.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="entry-tags">
                  {e.tags.map(([color, label]) => (
                    <span key={label} className={`pill ${color}`}>{label}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
