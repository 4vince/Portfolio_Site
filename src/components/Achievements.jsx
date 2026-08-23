const stats = [
  {
    span: 'span-7',
    pill: ['pill-green', 'Award'],
    figure: '50+',
    name: 'DICT Startup Challenge — Regional Finalist',
    desc: 'CareCrate, a medication management system for dementia patients and the elderly, outplaced a field of 50+ student-led startups and was pitched before government officials and industry experts.',
    badge: ['#edf3ec', '#346538'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 21h8m-4-4v4m-6-17h12v4a6 6 0 0 1-12 0V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6h2.5a.5.5 0 0 1 .5.5c0 2.2-1.7 4-3.9 4.3M6 6H3.5a.5.5 0 0 0-.5.5C3 8.7 4.7 10.5 6.9 10.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    span: 'span-5',
    pill: ['pill-blue', 'Hackathon'],
    figure: null,
    name: 'AMD Developer Hackathon — Act II',
    desc: 'Selected to build AI applications using local LLM tooling with Ollama and multi-agent workflows orchestrated through LangGraph.',
    badge: ['#e1f3fe', '#1f6c9f'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    span: 'span-5',
    pill: ['pill-yellow', 'Accessibility'],
    figure: '90%',
    name: 'Accessibility rating on CareCrate',
    desc: 'Designed the companion app around elderly users with cognitive impairments, streamlining alerts into a 3-click notification-to-action flow that reduced potential medication errors.',
    badge: ['#fbf3db', '#956400'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 9.5c2.4.8 4.9 1.2 7.5 1.2s5.1-.4 7.5-1.2M12 10.7V15l-3 6m3-6 3 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    span: 'span-7',
    pill: ['pill-blue', 'Academic'],
    figure: null,
    name: 'Consistent Dean\u2019s Lister',
    desc: 'Bachelor of Science in Computer Science at Saint Louis University, Baguio City — recognized on the Dean\u2019s List every semester since August 2023.',
    badge: ['#fdebec', '#9f2f2d'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 4 10 5-10 5L2 9l10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Achievements() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">01 — Achievements</p>
          <h2 className="section-title">Recognition earned by shipping real things.</h2>
          <p className="section-lede">
            Competitions, hackathons, and academic honors — each one backed by working software and measurable outcomes.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <article key={s.name} className={`stat-card reveal ${s.span}`} style={{ '--index': i % 2 }}>
              <div className="stat-top">
                <span className="icon-badge" style={{ background: s.badge[0], color: s.badge[1] }}>{s.icon}</span>
                <span className={`pill ${s.pill[0]}`}>{s.pill[1]}</span>
              </div>
              {s.figure && <p className="stat-figure">{s.figure}</p>}
              <div>
                <h3 className="stat-name">{s.name}</h3>
                <p className="stat-desc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
