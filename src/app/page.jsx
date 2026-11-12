import Rail from '@/components/Rail';
import Hero from '@/components/Hero';
import timeline from '@/data/timeline.json';
import work from '@/data/work.json';
import journey from '@/data/journey.json';
import { formatRange } from '@/lib/format';

// Content lives in src/data/work.json (about, skills, contact), src/data/journey.json
// (the work stories, shown in full on /work) and src/data/timeline.json (experience and training).
export default function Home() {
  const { site, about, skills } = work;
  const { experience, learning } = timeline;

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail name={site.name} github={site.github} linkedin={site.linkedin} />

        <main id="content">
          <Hero
            heroName={site.heroName}
            role={site.role}
            tagline={site.tagline}
            featured="Collections · Learning on Screen"
            cardHref="/work"
          />

          <section className="intro" aria-labelledby="about-h">
            <p className="label" id="about-h">About</p>
            <p>{about.lead}</p>
            <p className="sub">{about.body}</p>
          </section>

          <section id="work" aria-labelledby="work-h">
            <h2 id="work-h">Work</h2>
            {journey.chapters.map((c) => (
              <article className="work" key={c.id}>
                <p className="meta">
                  <strong>{c.name}</strong>
                  {c.dates}
                </p>
                <div className="body">
                  <h3>{c.headline}</h3>
                  <p>{c.teaser}</p>
                  <dl className="facts">
                    <div><dt>Role</dt><dd>{c.role}</dd></div>
                    <div><dt>Highlight</dt><dd>{c.highlight}</dd></div>
                  </dl>
                  <a className="more" href={`/work#${c.id}`}>Read the full story</a>
                </div>
              </article>
            ))}
          </section>

          <section id="experience" aria-labelledby="exp-h">
            <h2 id="exp-h">Experience</h2>
            <ul className="rows">
              {experience.map((job) => (
                <li key={`${job.company}-${job.start}`}>
                  <span className="when">{formatRange(job.start, job.end)}</span>
                  <span className="what">
                    <strong>{job.role}</strong>, {job.company.split(' t/a ').pop()}
                    {job.summary && <span>{job.summary}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="skills" aria-labelledby="skills-h">
            <h2 id="skills-h">Skills</h2>
            <div className="skills">
              {skills.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="training" aria-labelledby="training-h">
            <h2 id="training-h">Training</h2>
            <ul className="rows">
              {learning.map((course) => (
                <li key={course.name}>
                  <span className="when">{formatRange(course.start, course.end)}</span>
                  <span className="what">
                    <strong>{course.name}</strong>, {course.provider}
                    {course.status === 'in progress' && <span>In progress</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" className="contact" aria-labelledby="contact-h">
            <h2 id="contact-h">Get in touch</h2>
            <p className="mail">{site.email}</p>
            <div className="links">
              <a className="more" href={`mailto:${site.email}`}>Email me</a>
              <a className="more" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="more" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </section>

          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · {site.location} · Built with Next.js, semantic HTML and CSS.
          </footer>
        </main>
      </div>
    </>
  );
}
