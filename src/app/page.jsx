import Rail from '@/components/Rail';
import { HOME_NAV } from '@/lib/nav';
import { getPosts } from '@/lib/blog';
import Hero from '@/components/Hero';
import timeline from '@/data/timeline.json';
import work from '@/data/work.json';
import journey from '@/data/journey.json';
import { formatRange } from '@/lib/format';

// Content lives in src/data/work.json (about, tools, contact), src/data/blog.json (posts), src/data/journey.json
// (the work stories, shown in full on /work) and src/data/timeline.json (experience and qualifications).
export default function Home() {
  const { site, about } = work;
  // The Blog link only appears once at least one post is published.
  const nav = getPosts().length > 0 ? HOME_NAV : HOME_NAV.filter((i) => i.href !== '/blog');
  const { experience, learning } = timeline;

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail name={site.name} showBrand={false} items={nav} github={site.github} linkedin={site.linkedin} />

        <main id="content">
          <Hero
            heroName={site.heroName}
            role={site.role}
            tagline={site.tagline}
          />

          <section className="intro" aria-labelledby="about-h">
            <p className="label" id="about-h">About</p>
            <p>{about.lead}</p>
            <p className="sub">{about.body}</p>
            {about.tools && <p className="tools"><span>Tools I work with</span> {about.tools}</p>}
          </section>

          <section id="work" aria-labelledby="work-h">
            <h2 id="work-h">Work</h2>
            <ul className="work-cards">
              {journey.chapters.map((c) => (
                <li key={c.id}>
                  <a className="work-card" href={`/work#${c.id}`}>
                    <div className="cover">
                      <img src={c.cover} alt="" loading="lazy" decoding="async" />
                    </div>
                    <div className="card-body">
                      <p className="eyebrow">{c.name}</p>
                      <h3>{c.headline}</h3>
                      <p>{c.teaser}</p>
                      <ul className="tags" aria-label="Key skills">
                        {c.highlight.split(', ').slice(0, 4).map((t) => <li key={t}>{t}</li>)}
                      </ul>
                      <span className="more">Read the full story <span aria-hidden="true">→</span></span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="experience" aria-labelledby="exp-h">
            <h2 id="exp-h">Experience</h2>
            <ul className="rows">
              {experience.map((job) => (
                <li key={`${job.company}-${job.start}`}>
                  <span className="when">{formatRange(job.start, job.end)}</span>
                  <span className="what">
                    <strong>{job.role}</strong>, {job.company}
                    {job.summary && <span>{job.summary}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="qualifications" aria-labelledby="qualifications-h">
            <h2 id="qualifications-h">Qualifications</h2>
            <ul className="rows">
              {learning.map((course) => (
                <li key={course.name}>
                  <span className="when">{formatRange(course.start, course.end)}</span>
                  <span className="what">
                    {/* Add a "link" in timeline.json to make the name link to the certificate. */}
                    <strong>{course.link ? <a className="inline-link" href={course.link}>{course.name}</a> : course.name}</strong>, {course.provider}
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
            © {new Date().getFullYear()} {site.name} · Built with Next.js, semantic HTML and CSS.
          </footer>
        </main>
      </div>
    </>
  );
}
