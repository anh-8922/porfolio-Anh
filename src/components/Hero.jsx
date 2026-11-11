// Full-height colour panel: name, tagline and a card linking to selected work.
export default function Hero({ name, tagline, featured }) {
  const [first, ...rest] = name.split(' ');

  return (
    <div className="hero" id="top">
      <div className="plane sand" aria-hidden="true" />
      <div className="plane peach" aria-hidden="true" />
      <div className="plane deep" aria-hidden="true" />
      <svg className="lines" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="3">
          <path d="M260 0 L80 800" />
          <path d="M300 464 L1000 464" />
          <path d="M760 0 L1000 300" />
        </g>
      </svg>

      <div className="hero-text">
        <h1>
          <span className="first">{first}</span>
          <span className="last">{rest.join(' ')}</span>
        </h1>
        <p>{tagline}</p>
      </div>

      <a className="card" href="#work" aria-label="See selected work">
        <div className="shot" aria-hidden="true">
          <div className="bar"><i /><i /><i /><span>{featured}</span></div>
          <div className="mock">
            <div><div className="h" /><div className="t" /><div className="t" /><div className="t s" /></div>
            <div className="tiles"><b /><b /><b /><b /></div>
          </div>
        </div>
        <div className="tab"><span>Selected work</span></div>
      </a>
      <span className="work-word" aria-hidden="true">Work</span>
    </div>
  );
}
