import blog from '@/data/blog.json';

// Drafts show in development and review builds, and stay hidden on the live site.
export const SHOW_DRAFTS = process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_TODOS === '1';

// Newest first.
export function getPosts() {
  return blog.posts
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug) {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

// Rough reading time at 200 words a minute.
export function readingTime(post) {
  const text = post.body.map((b) => b.p || b.h2 || (b.ul || b.ol || []).join(' ') || '').join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export const blogIntro = blog.intro;
