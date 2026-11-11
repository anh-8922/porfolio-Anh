// One case study: who it was for, what I did, the result, and a link.
export default function CaseStudy({ study }) {
  return (
    <article className="work">
      <p className="meta">
        <strong>{study.org}</strong>
        {study.years}
      </p>
      <div className="body">
        <h3>{study.title}</h3>
        <p>{study.summary}</p>
        {study.facts?.length > 0 && (
          <dl className="facts">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul>
          {study.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {study.link && (
          <a className="more" href={study.link.href} target="_blank" rel="noopener noreferrer">
            {study.link.label}
          </a>
        )}
      </div>
    </article>
  );
}
