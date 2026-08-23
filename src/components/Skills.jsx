const groups = [
  {
    title: 'Design & Front-End',
    badge: ['#e1f3fe', '#1f6c9f'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h6.5A2.5 2.5 0 0 0 21 9.5C21 5.9 16.9 3 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" />
        <circle cx="12" cy="7.5" r="1.2" fill="currentColor" />
      </svg>
    ),
    tags: ['HTML / CSS / JS', 'Next.js', 'Web UI Design', 'Mobile UI Design', 'Figma Prototyping', 'Responsive Design', 'Accessibility'],
    pill: 'pill-blue',
  },
  {
    title: 'AI & Full-Stack',
    badge: ['#edf3ec', '#346538'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Git', 'Docker', 'LangGraph', 'Ollama'],
    pill: 'pill-green',
  },
  {
    title: 'Marketing',
    badge: ['#fbf3db', '#956400'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11v3l12 4V6L3 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M15 8.5c2 .3 3.5 1.7 3.5 3.5s-1.5 3.2-3.5 3.5M6 13v5.5a1.5 1.5 0 0 0 3 0V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tags: ['Social Media Strategy', 'Content Analytics', 'Brand Visual Design', 'Growth Marketing'],
    pill: 'pill-yellow',
  },
  {
    title: 'Leadership & Craft',
    badge: ['#fdebec', '#9f2f2d'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 20c.6-3.3 2.9-5 5.5-5s4.9 1.7 5.5 5M16 4.5c1.7.6 3 2 3.5 3.8M18.5 12.5c1.4-.2 2.6-1 3.5-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Public Speaking & Pitching', 'Technical Writing', 'Cross-functional Leadership'],
    pill: 'pill-red',
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">04 — Capabilities</p>
          <h2 className="section-title">A frontend core, a full-stack reach.</h2>
          <p className="section-lede">
            Design sensibility on the surface, engineering discipline underneath — plus the marketing and
            communication skills to make work land.
          </p>
        </div>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <article key={g.title} className="skill-card reveal" style={{ '--index': i % 2 }}>
              <div className="skill-head">
                <span className="icon-badge" style={{ background: g.badge[0], color: g.badge[1] }}>{g.icon}</span>
                <h3 className="skill-title">{g.title}</h3>
              </div>
              <div className="skill-tags">
                {g.tags.map(t => (
                  <span key={t} className={`pill ${g.pill}`}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
