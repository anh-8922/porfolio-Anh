'use client';

import { useEffect, useState } from 'react';
import { HOME_NAV } from '@/lib/nav';

// Left-hand rail on desktop, sticky top bar on small screens.
// Marks the link for the section currently in view. Pages can pass their own menu items.
// showBrand: the home page hides the name here because the hero already shows it.
// trail: shows the brand as the parent of the menu items ("Anh's work › …") in the small-screen bar.
export default function Rail({ name, github, linkedin, items = HOME_NAV, brandHref = '#top', showBrand = true, trail = false }) {
  // Nothing is marked until a listed section scrolls into view (the home page starts on #top).
  const [current, setCurrent] = useState(items[0]?.href === '#top' ? '#top' : null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    items.forEach(({ href }) => {
      if (!href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, [items]);

  const link = ({ href, label }) => (
    <li key={href}>
      <a href={href} aria-current={current === href ? 'true' : undefined}>{label}</a>
    </li>
  );

  return (
    <header className={`rail${trail ? ' trail' : ''}`}>
      {showBrand && <a className="brand" href={brandHref}>{name}</a>}
      {items.length > 0 && <nav className="nav" aria-label="Main">
        <ul>{items.map(link)}</ul>
      </nav>}
      <div className="rail-foot">
        <div className="social">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}
