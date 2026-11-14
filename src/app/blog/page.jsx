import Rail from '@/components/Rail';
import work from '@/data/work.json';
import { getPosts, formatDate, readingTime, blogIntro } from '@/lib/blog';

export const metadata = {
  title: 'Blog · Anh Chau',
  description: 'Anh Chau, web developer: notes on books, courses and projects about building usable, accessible websites.',
};

// Posts live in src/data/blog.json.
export default function BlogIndex() {
  const { site } = work;
  const posts = getPosts();

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="frame">
        <Rail name="Anh's blog" brandHref="#top" items={[]} github={site.github} linkedin={site.linkedin} />

        <main id="content" className="journey blog">
          <section id="top" aria-labelledby="blog-h">
            <p className="eyebrow">Blog</p>
            <h1 id="blog-h">{blogIntro.title}</h1>
            <p className="lead">{blogIntro.lead}</p>

            <ul className="post-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a className="post-card" href={`/blog/${post.slug}`}>
                    <p className="post-meta">
                      {formatDate(post.date)} · {readingTime(post)} min read
                      {post.draft && <span className="draft-badge">Draft</span>}
                    </p>
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                    <ul className="tags" aria-label="Topics">
                      {post.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <span className="more">Read the post <span aria-hidden="true">→</span></span>
                  </a>
                </li>
              ))}
            </ul>
            {posts.length === 0 && <p className="note">The first posts are on their way.</p>}
          </section>

          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · <a href="/">Back to home</a>
          </footer>
        </main>
      </div>
      <a className="home-float" href="/" aria-label="Back to the home page">
        <span aria-hidden="true">←</span> Home
      </a>
    </>
  );
}
