export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="eyebrow reveal">05 — Contact</p>
        <h2 className="contact-title reveal" style={{ '--index': 1, marginTop: '20px' }}>
          Let&rsquo;s build something <em>considered</em> together.
        </h2>
        <p className="contact-sub reveal" style={{ '--index': 2 }}>
          I&rsquo;m open to internships, freelance frontend and UI/UX work, and collaborations where
          thoughtful design meets real engineering. My inbox is the fastest way in.
        </p>
        <div className="contact-actions reveal" style={{ '--index': 3 }}>
          <a href="mailto:vincentrafael2020@gmail.com" className="btn btn-solid">
            Email me
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="/resume.pdf" className="btn btn-ghost" target="_blank" rel="noopener">View r&eacute;sum&eacute;</a>
        </div>
        <div className="contact-meta reveal" style={{ '--index': 4 }}>
          <a href="mailto:rafaelvincent2004@gmail.com">rafaelvincent2004@gmail.com</a>
          <a href="tel:+639951848148">+63 995 184 8148</a>
          <a href="https://www.linkedin.com/in/vincent-rafael-934019347" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/4vince" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>Baguio City, Philippines</span>
        </div>
      </div>
    </section>
  )
}
