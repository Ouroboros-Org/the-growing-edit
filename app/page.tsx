'use client';

import {
  useEffect,
  useState,
  type CSSProperties,
  type PointerEvent,
} from 'react';

const tones = ['pearl', 'blush', 'dew'] as const;
const headline = ['Coming', 'Soon'];

export default function Home() {
  const [toneIndex, setToneIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) return;

    const interval = window.setInterval(() => {
      setToneIndex((current) => (current + 1) % tones.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const driftX = (x - 0.5) * 22;
    const driftY = (y - 0.5) * 14;

    event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y * 100}%`);
    event.currentTarget.style.setProperty('--drift-x', `${driftX}px`);
    event.currentTarget.style.setProperty('--drift-y', `${driftY}px`);
    event.currentTarget.style.setProperty('--drift-x-reverse', `${driftX * -0.72}px`);
    event.currentTarget.style.setProperty('--drift-y-reverse', `${driftY * -0.6}px`);
    event.currentTarget.style.setProperty('--veil-tilt', `${(x - 0.5) * 2.2}deg`);
  };

  return (
    <main
      className="site-shell"
      data-tone={tones[toneIndex]}
      onPointerMove={handlePointerMove}
    >
      <div className="atmosphere" aria-hidden="true">
        <span className="mist mist-warm" />
        <span className="mist mist-cool" />
        <span className="mist mist-tone" />
        <span className="soft-light soft-light-one" />
        <span className="soft-light soft-light-two" />
        <span className="pointer-light" />
        <span className="milk-veil" />
        <span className="fine-grain" />
      </div>

      <a className="wordmark" href="/" aria-label="The Growing Edit, home">
        The Growing Edit
      </a>

      <div className="corner-mark corner-mark-right" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="hero-heading" aria-label="Coming soon">
          {headline.map((word, wordIndex) => (
            <span
              key={word}
              className={`headline-line headline-line-${wordIndex + 1}`}
              aria-hidden="true"
            >
              <span className="headline-ghost" data-word={word} />
              <span className="headline-word">
                {[...word].map((letter, letterIndex) => (
                  <span
                    key={`${letter}-${letterIndex}`}
                    className="headline-letter"
                    style={
                      {
                        '--letter-index': letterIndex,
                        '--letter-total': word.length,
                      } as CSSProperties
                    }
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </h1>

        <div className="refraction-band" aria-hidden="true">
          <span />
        </div>

        <span className="rare-accent rare-accent-pink" aria-hidden="true" />
        <span className="rare-accent rare-accent-green" aria-hidden="true" />
      </section>

      <footer className="site-footer">
        <p className="copyright">2026 The Growing Edit</p>
        <div className="ambient-indicator" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
      </footer>
    </main>
  );
}
