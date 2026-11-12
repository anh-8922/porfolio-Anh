import Rail from '@/components/Rail';
import ShotViewer from '@/components/ShotViewer';
import { Story } from '@/components/Journey';
import journey from '@/data/journey.json';
import work from '@/data/work.json';

export const metadata = {
  title: 'Selected work · Anh Chau',
  description:
    'Anh Chau, web developer: selected work at Learning on Screen, for freelance clients and at I Like Music, told as short case studies with screenshots.',
};

const NAV = [
  { href: '#top', label: 'Overview' },
  ...journey.chapters.map((c) => ({ href: `#${c.id}`, label: c.name })),
  { href: '#how', label: 'How I work' },
];

// Content lives in src/data/journey.json.
export default function WorkPage() {
  const { site } = work;
  const { intro, chapters, principles } = journey;

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail
          name={site.name}
          brandHref="/"
          items={NAV}
          backLink={{ href: '/', label: 'Back to home' }}
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
            <p className="note">{intro.note}</p>
          </section>

          {chapters.map((chapter, ci) => (
            <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
              <p className="eyebrow">Chapter {ci + 1}</p>
              <h2 id={`${chapter.id}-title`}>{chapter.name}</h2>
              <p className="meta">{chapter.role} · {chapter.dates}</p>
              {chapter.intro && (
                <div className="prose">
                  {chapter.intro.map((p) => <p key={p}>{p}</p>)}
                </div>
              )}
              {chapter.stories.map((story) => (
                <Story key={story.id} story={story} flush={!chapter.intro && chapter.stories.length === 1} />
              ))}
            </section>
          ))}

          <section id="how" aria-labelledby="how-h">
            <p className="eyebrow">Across all three</p>
            <h2 id="how-h">How I work</h2>
            <div className="principles">
              {principles.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · <a href="/">Back to home</a>
          </footer>
        </main>
      </div>
      <ShotViewer />
    </>
  );
}
