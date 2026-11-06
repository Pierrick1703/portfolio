import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', getComputedStyle(root).getPropertyValue('--bg').trim());
  }, [theme]);

  const toggle = () => {
    const apply = () => flushSync(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')));
    // Transition fluide via la View Transitions API quand elle est disponible.
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return { theme, toggle };
}
