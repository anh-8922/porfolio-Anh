import { notFound } from 'next/navigation';
import Rail from '@/components/Rail';
import Linked from '@/components/Linked';
import work from '@/data/work.json';
import { getPosts, getPost, formatDate, readingTime, SHOW_DRAFTS } from '@/lib/blog';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return post ? { title: `${post.title} · Anh Chau`, description: post.summary } : {};
}

function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.p) return <p><Linked text={block.p} /></p>;
  if (block.ul) return <ul>{block.ul.map((t) => <li key={t}><Linked text={t} /></li>)}</ul>;
  if (block.ol) return <ol>{block.ol.map((t) => <li key={t}><Linked text={t} /></li>)}</ol>;
  if (block.todo && SHOW_DRAFTS) return <p><mark className="todo">To do: {block.todo}</mark></p>;
  return null;
}

// A single post. Content lives in src/data/blog.json.
export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const { site } = work;

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail name="Anh's blog" brandHref="/blog" items={[]} github={site.github} linkedin={site.linkedin} />

        <main id="content" className="journey blog">
          <article className="post" aria-labelledby="post-h">
            <a className="back-link" href="/blog"><span aria-hidden="true">←</span> All posts</a>
            <p className="post-meta">
              {formatDate(post.date)} · {readingTime(post)} min read
              {post.draft && <span className="draft-badge">Draft</span>}
            </p>
            <h1 id="post-h">{post.title}</h1>
            <p className="lead">{post.summary}</p>

            {post.source && (
              <p className="source">
                <span>Source</span>
                {post.source.href ? <a className="inline-link" href={post.source.href}>{post.source.title}</a> : <strong>{post.source.title}</strong>}
                {' '}by {post.source.by} ({post.source.detail})
              </p>
            )}

            <div className="post-body">
              {post.body.map((block, i) => <Block key={i} block={block} />)}
            </div>

            {post.related?.length > 0 && (
              <aside className="related" aria-label="Related">
                <p className="compare-label">Related</p>
                <ul>
                  {post.related.map((r) => (
                    <li key={r.href}><a className="inline-link" href={r.href}>{r.label}</a></li>
                  ))}
                </ul>
              </aside>
            )}
          </article>

          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · <a href="/blog">All posts</a> · <a href="/">Home</a>
          </footer>
        </main>
      </div>
      <a className="home-float" href="/" aria-label="Back to the home page">
        <span aria-hidden="true">←</span> Home
      </a>
    </>
  );
}
