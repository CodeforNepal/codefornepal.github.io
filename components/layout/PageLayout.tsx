import type { ReactNode } from 'react';
import { Nav } from './Nav';

/**
 * Ported from _layouts/page.html (and the .container.blog wrapper of _layouts/blog.html).
 * Renders the fixed Nav, then wraps content in `.container#pagecontainer`. The base
 * _page.scss forces #pagecontainer to full width, so the inline-styled pages break out
 * as they do today. No page in the repo sets `background: grey`, so the bg-light toggle
 * from the original is intentionally omitted.
 */
export function PageLayout({
  children,
  blog = false,
}: {
  children: ReactNode;
  blog?: boolean;
}) {
  return (
    <>
      <Nav />
      <div className={blog ? 'container blog' : 'container'} id="pagecontainer">
        {children}
      </div>
    </>
  );
}
