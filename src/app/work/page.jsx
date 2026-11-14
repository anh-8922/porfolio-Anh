import Rail from '@/components/Rail';
import ShotViewer from '@/components/ShotViewer';
import { Story } from '@/components/Journey';
import journey from '@/data/journey.json';
import work from '@/data/work.json';

export const metadata = {
  title: 'Selected work · Anh Chau',
  description:
    'Anh Chau, web developer: selected work at Learning on Screen, for Symba Marketing and at I Like Music, told as short case studies.',
};

// The menu lists only the work itself; the overview, lessons and usage notes are reached by scrolling.
const NAV = journey.chapters.map((c) => ({ href: `#${c.id}`, label: c.name }));

// Turns [label](url) in a paragraph from journey.json into a link.
function Linked({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <a key={i} className="inline-link" href={m[2]}>{m[1]}</a> : part;
  });
}

// Content lives in src/data/journey.json.
export default function WorkPage() {
  const { site } = work;
  const { intro, chapters, lessons, examples } = journey;

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail
          name="Anh's work"
          brandHref="#top"
          trail
          items={NAV}
          github={site.github}
          linkedin={site.linkedin}
        />

        <main id="content" className="journey">
          <section id="top" aria-labelledby="top-h">
            <p className="eyebrow">Selected work</p>
            <h1 id="top-h">{intro.title}</h1>
            <p className="lead">{intro.lead}</p>
            <ol className="chapters">
              {chapters.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    <strong>{c.name}</strong>
                    <span>{c.role} · {c.dates}</span>
                  </a>
                </li>
              ))}
            </ol>
            <p className="note">{intro.note} <a className="inline-link" href="#examples">How I show it</a></p>
          </section>

          {chapters.map((chapter, ci) => (
            <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
              <p className="eyebrow">Chapter {ci + 1}</p>
              <h2 id={`${chapter.id}-title`}>{chapter.name}</h2>
              <p className="meta">{chapter.role} · {chapter.dates}</p>
              {chapter.intro && (
                <div className="prose">
                  {chapter.intro.map((p) => <p key={p}><Linked text={p} /></p>)}
                </div>
              )}
              {chapter.stories.map((story) => (
                <Story key={story.id} story={story} flush={!chapter.intro && chapter.stories.length === 1} />
              ))}
            </section>
          ))}

          <section id="learned" aria-labelledby="learned-h">
            <p className="eyebrow">Looking back</p>
            <h2 id="learned-h">What I learned</h2>
            <div className="principles">
              {lessons.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="examples" aria-labelledby="examples-h">
            <p className="eyebrow">{examples.eyebrow}</p>
            <h2 id="examples-h">{examples.title}</h2>
            <div className="principles three">
              {examples.points.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <p className="lead examples-lead">{examples.lead}</p>
          </section>

          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · <a href="/">Back to home</a>
          </footer>
        </main>
      </div>
      <a className="home-float" href="/" aria-label="Back to the home page">
        <span aria-hidden="true">←</span> Home
      </a>
      <ShotViewer />
    </>
  );
}
