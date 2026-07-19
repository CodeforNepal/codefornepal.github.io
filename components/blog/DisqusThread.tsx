'use client';

import { useEffect, useRef } from 'react';
import { DISQUS_SHORTNAME, site } from '@/lib/config';

/**
 * Ported from the Disqus embed in _layouts/post.html. Lazy-loads the embed when the
 * thread scrolls near the viewport (protects Core Web Vitals). Pins page.identifier to
 * the post URL so existing comment threads stay attached.
 */
export function DisqusThread({ path, identifier }: { path: string; identifier: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const load = () => {
      if (loaded.current) return;
      loaded.current = true;
      (window as unknown as { disqus_config?: unknown }).disqus_config = function (
        this: { page: { url: string; identifier: string } },
      ) {
        this.page.url = site.url + path;
        this.page.identifier = identifier;
      };
      const d = document;
      const s = d.createElement('script');
      s.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
      s.setAttribute('data-timestamp', String(+new Date()));
      (d.head || d.body).appendChild(s);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            load();
            obs.disconnect();
          }
        });
      },
      { rootMargin: '200px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [path, identifier]);

  return (
    <>
      <div id="disqus_thread" ref={ref} />
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </>
  );
}
