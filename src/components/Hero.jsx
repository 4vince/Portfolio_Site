export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob" aria-hidden="true" />
      <div className="container">
        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          <span className="pill pill-green">Open to opportunities</span>
        </div>
        <h1 className="hero-title reveal" style={{ '--index': 0 }}>
          Building interfaces that feel <em>considered</em>.
        </h1>
        <p className="hero-sub reveal" style={{ '--index': 1 }}>
          I&rsquo;m Vincent Rafael Fajardo, a frontend developer and UI/UX designer based in Baguio City.
          I craft responsive, accessible web experiences — increasingly paired with AI-powered features —
         until complex ideas feel simple.
        </p>
        <div className="hero-actions reveal" style={{ '--index': 2 }}>
          <a href="#projects" className="btn btn-solid">
            View selected work
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <dl className="hero-meta reveal" style={{ '--index': 3 }}>
          <div>
            <dt>Currently</dt>
            <dd>CS Student, Saint Louis University</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Frontend &middot; UI/UX &middot; AI Interfaces</dd>
          </div>
          <div>
            <dt>Recognized by</dt>
            <dd>DICT Startup Challenge</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
