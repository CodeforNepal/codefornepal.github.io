'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/components/layout/RevealProvider';

/**
 * The #homepageRemainingContent wrapper from _layouts/home.html — everything below
 * the hero starts hidden and is revealed once the hero's scroll trigger fires.
 */
export function HomeReveal({ children }: { children: ReactNode }) {
  const { isScrolled } = useReveal();
  return (
    <div
      id="homepageRemainingContent"
      style={{
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(30px)',
        transition:
          'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        pointerEvents: isScrolled ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}
