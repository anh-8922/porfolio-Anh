'use client';

import { useEffect, useState } from 'react';

const NAV = [
  { href: '#top', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#training', label: 'Training' },
  { href: '#contact', label: 'Contact' },
];

// Left-hand rail on desktop, sticky top bar on small screens.
// Marks the link for the section currently in view.
export default function Rail({ name, github, linkedin }) {
  const [current, setCurrent] = useState('#top');

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
    NAV.forEach(({ href }) => {
      const target = document.querySelector(href);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="rail">
      <a className="brand" href="#top">{name}</a>
      <nav className="nav" aria-label="Main">
        <ul>
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <a href={href} aria-current={current === href ? 'true' : undefined}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="social">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}
