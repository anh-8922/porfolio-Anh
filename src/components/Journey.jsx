// Building blocks for the /work page: STAR stories with screenshot galleries.
// "todo" notes from journey.json show in development (npm run dev), or in a build made with
// NEXT_PUBLIC_SHOW_TODOS=1 for review. They never show on the normal live site.

const SHOW_TODOS = process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_TODOS === '1';

function Todo({ children }) {
  if (!SHOW_TODOS || !children) return null;
  return <mark className="todo">{children}</mark>;
}

// A text field with an optional todo after it. Renders nothing if both are empty or hidden.
function Text({ field }) {
  if (!field) return null;
  if (!field.text && !(SHOW_TODOS && field.todo)) return null;
  return (
    <>
      {field.text}
      {field.text && field.todo && SHOW_TODOS ? ' ' : null}
      <Todo>{field.todo}</Todo>
    </>
  );
}

function Shot({ shot, height }) {
  return (
    <figure className={`shot${shot.wide ? ' wide' : ''}`}>
      <div className="view" style={height && !shot.wide ? { '--h': `${height}px` } : undefined}>
        <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
      </div>
      <figcaption>
        <strong>{shot.title}</strong>
        {shot.caption && <span>{shot.caption}</span>}
        <Todo>{shot.todo}</Todo>
        {shot.full && (
          <button className="open" type="button" data-full={shot.src} data-title={shot.full}>
            View full page
          </button>
        )}
      </figcaption>
    </figure>
  );
}

// Colour swatches, used when a design can't be shown as a screenshot.
function Palette({ colours, label = 'Colour scheme' }) {
  return (
    <div className="palette">
      <p className="compare-label">{label}</p>
      <ul>
        {colours.map((c) => (
          <li key={c.hex}>
            <span className="swatch" style={{ background: c.hex }} aria-hidden="true" />
            <strong>{c.name}</strong>
            <code>{c.hex}</code>
            <span>{c.use}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Gallery({ gallery }) {
  const cols = gallery.columns === 3 ? ' three' : gallery.columns === 2 ? ' two' : '';
  return (
    <>
      {gallery.label && <p className={`compare-label${gallery.after ? ' after' : ''}`}>{gallery.label}</p>}
      {gallery.note && <p className="gallery-note">{gallery.note}</p>}
      <div className={`shots${cols}`}>
        {gallery.shots.map((shot) => (
          <Shot key={shot.src} shot={shot} height={gallery.height} />
        ))}
      </div>
      {gallery.palette && <Palette colours={gallery.palette} label={gallery.paletteLabel} />}
    </>
  );
}

export function Story({ story, flush }) {
  const actions = story.action.filter((a) => a.text || (SHOW_TODOS && a.todo));
  return (
    <article className={`story${flush ? ' flush' : ''}`} aria-labelledby={`${story.id}-h`}>
      <h3 id={`${story.id}-h`}>{story.title}</h3>
      <ol className="star">
        <li><b>Situation</b><span><Text field={story.situation} /></span></li>
        <li><b>Task</b><span><Text field={story.task} /></span></li>
        <li>
          <b>Action</b>
          <span>
            <ul>
              {actions.map((a, i) => (
                <li key={i}><Text field={a} /></li>
              ))}
            </ul>
          </span>
        </li>
        <li><b>Result</b><span className="result"><Text field={story.result} /></span></li>
      </ol>
      {story.collections && (
        <div className="collections">
          <p className="compare-label">{story.collections.label}</p>
          <ul>
            {story.collections.items.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      )}
      {story.galleries?.map((g, i) => (
        <Gallery key={i} gallery={g} />
      ))}
    </article>
  );
}
