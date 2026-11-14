// Hero: name and tagline on a navy panel with thin peach line artwork, plus two clear calls to action.
// The artwork is drawn in SVG; its colours come from the --art-* tokens in globals.css.
function HeroLines() {
  return (
    <svg className="hero-lines" viewBox="0 0 1200 900" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">
      <defs>
        <linearGradient id="hero-art-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--art-bg-1)' }} />
          <stop offset="1" style={{ stopColor: 'var(--art-bg-2)' }} />
        </linearGradient>
        <radialGradient id="hero-art-glow" cx="1200" cy="0" r="620" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: 'var(--art-glow)', stopOpacity: 'var(--art-glow-strength)' }} />
          <stop offset="0.45" style={{ stopColor: 'var(--art-glow)', stopOpacity: 'var(--art-glow-mid)' }} />
          <stop offset="1" style={{ stopColor: 'var(--art-glow)', stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id="hero-art-ray" gradientUnits="userSpaceOnUse" x1="1200" y1="0" x2="500" y2="900">
          <stop offset="0" style={{ stopColor: 'var(--art-line)', stopOpacity: 0.9 }} />
          <stop offset="1" style={{ stopColor: 'var(--art-line)', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#hero-art-bg)" />
      <rect width="1200" height="900" fill="url(#hero-art-glow)" />
      <g fill="none" strokeWidth="1.2">
        <circle cx="930" cy="560" r="300" style={{ stroke: 'var(--art-line)', strokeOpacity: 'var(--art-line-strength)' }} />
        <line x1="0" y1="640" x2="1200" y2="640" style={{ stroke: 'var(--art-horizon)', strokeOpacity: 'var(--art-horizon-strength)' }} />
        <path d="M1200 0 L560 900 M1200 0 L820 900 M1200 0 L1060 900" stroke="url(#hero-art-ray)" />
      </g>
    </svg>
  );
}

// heroName sets the big name: either { single } for one line at one size,
// or { top, bottom } for a smaller top line over a large bottom line.
export default function Hero({ heroName, role, tagline, workHref = '/work', contactHref = '#contact' }) {
  return (
    <div className="hero" id="top">
      <HeroLines />
      <h1>
        {heroName.single ? (
          <span className="single">{heroName.single}</span>
        ) : (
          <>
            <span className="first">{heroName.top}</span>
            <span className="last">{heroName.bottom}</span>
          </>
        )}
      </h1>
      <p>
        <strong>{role}.</strong> {tagline}
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href={workHref}>
          See my work <span aria-hidden="true">→</span>
        </a>
        <a className="btn btn-ghost" href={contactHref}>Get in touch</a>
      </div>
    </div>
  );
}
