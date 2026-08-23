const projects = [
  {
    kind: 'Production Web Application',
    url: 'storefront/admin/seo',
    name: 'AI-Powered E-Commerce Platform',
    desc: 'A production storefront and administration panel where AI handles the heavy lifting behind a clean, human interface.',
    points: [
      'Built responsive, production-grade UI components for the Next.js storefront and its /admin/seo panel, translating backend agent outputs into user-facing interfaces.',
      'Integrated StorefrontChatAgent and AdminChatAgent on a shared ChatAgent base class, bringing conversational AI to both customers and staff.',
      'Surfaced automated E-E-A-T content scoring through the admin dashboard for editorial quality control.',
    ],
    tags: [
      ['pill-blue', 'Next.js'],
      ['pill-green', 'AI Agents'],
      ['pill-yellow', 'Admin Dashboard'],
    ],
  },
  {
    kind: 'AI Health Platform',
    url: 'oasis.screening/vision',
    name: 'OASIS — AI Glaucoma Screening',
    desc: 'The frontend face of a Siamese Neural Network that screens for glaucoma — clinical power, patient-simple UX.',
    points: [
      'Developed the web interface for an AI-powered glaucoma screening platform powered by a Siamese Neural Network.',
      'Designed responsive retinal image upload workflows with usability and accessibility as first-class constraints.',
      'Collaborated on integrating AI inference into a modern web application end-to-end.',
    ],
    tags: [
      ['pill-blue', 'Frontend'],
      ['pill-green', 'AI / ML'],
      ['pill-yellow', 'Accessibility'],
    ],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">03 — Selected Projects</p>
          <h2 className="section-title">Work that made it past the prototype stage.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={p.name} className="project-card reveal" style={{ '--index': i }}>
              <div className="window-bar" aria-hidden="true">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-url">{p.url}</span>
                <span className="window-space" />
              </div>
              <div className="project-body">
                <p className="project-kind">{p.kind}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-list">
                  {p.points.map(pt => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="project-foot">
                  {p.tags.map(([color, label]) => (
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
