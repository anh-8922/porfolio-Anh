'use client';

import { useEffect, useRef, useState } from 'react';

// Opens any "View full page" screenshot button in a full-screen dialog. Esc or Close shuts it.
export default function ShotViewer() {
  const dialog = useRef(null);
  const [shot, setShot] = useState({ src: '', title: '', alt: '' });

  useEffect(() => {
    function onClick(e) {
      const button = e.target.closest('button.open[data-full]');
      if (!button) return;
      const img = button.closest('figure')?.querySelector('img');
      setShot({ src: button.dataset.full, title: button.dataset.title, alt: img?.alt ?? '' });
      dialog.current?.showModal();
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <dialog
      ref={dialog}
      className="viewer"
      aria-labelledby="viewer-title"
      onClick={(e) => { if (e.target === dialog.current) dialog.current.close(); }}
    >
      <div className="bar">
        <span id="viewer-title">{shot.title}</span>
        <button className="close" type="button" onClick={() => dialog.current?.close()}>Close</button>
      </div>
      {shot.src && <img src={shot.src} alt={shot.alt} />}
    </dialog>
  );
}
