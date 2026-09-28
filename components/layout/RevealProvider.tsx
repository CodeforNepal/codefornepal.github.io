import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * Shared state for the home page's scroll-lock reveal animation.
 *
 * Replaces the original's global `body.is-loaded` / `body.is-scrolled` class
 * toggles (set from an inline script in sections/home/header.html) with React
 * state that the Hero, Nav, and home content wrapper consume.
 *
 * - isLoaded  : set ~100ms after the home mounts → staggers in the hero title/subtitle/indicator.
 * - isScrolled: set on the first scroll/swipe/key/click on the home hero → reveals the nav,
 *               the hero CTAs, and the below-the-fold content wrapper.
 *
 * On non-home pages the controller never runs, so these stay false and nothing consumes them
 * (Nav renders in its static, always-visible mode).
 */
interface RevealState {
  isLoaded: boolean;
  isScrolled: boolean;
  setLoaded: (v: boolean) => void;
  setScrolled: (v: boolean) => void;
}

const RevealContext = createContext<RevealState>({
  isLoaded: false,
  isScrolled: false,
  setLoaded: () => {},
  setScrolled: () => {},
});

export function RevealProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  return (
    <RevealContext.Provider value={{ isLoaded, isScrolled, setLoaded, setScrolled }}>
      {children}
    </RevealContext.Provider>
  );
}

export function useReveal(): RevealState {
  return useContext(RevealContext);
}
