import type { Plugin } from 'vite';
// @ts-ignore - plain .mjs Node module, no type declarations
import { loadContent } from './content.mjs';

const META_ID = 'virtual:content';
const BODIES_ID = 'virtual:post-bodies';
const resolved = (id: string) => '\0' + id;

interface RawPost {
  url: string;
  html: string;
  [k: string]: unknown;
}

/**
 * Splits Markdown-derived content into two virtual modules:
 *
 *  - `virtual:content`     — post metadata (no bodies) + the two root pages.
 *                            Imported eagerly by lib/posts.ts.
 *  - `virtual:post-bodies` — a `{ [url]: html }` map of rendered post bodies.
 *                            Imported dynamically, only by the post route, so the
 *                            ~1 MB corpus stays out of the initial bundle.
 *
 * The Markdown is read from disk and rendered to HTML in Node — once at dev-server
 * startup and once per build — so the browser never touches `fs` / `gray-matter`.
 */
export function contentPlugin(): Plugin {
  let cache: { meta: string; bodies: string } | null = null;

  async function build() {
    if (cache) return cache;
    const content = await loadContent();
    const bodies: Record<string, string> = {};
    const posts = (content.posts as RawPost[]).map(({ html, ...meta }) => {
      bodies[meta.url as string] = html;
      return meta;
    });
    cache = {
      meta: `export default ${JSON.stringify({ posts, rootMarkdown: content.rootMarkdown })};`,
      bodies: `export default ${JSON.stringify(bodies)};`,
    };
    return cache;
  }

  return {
    name: 'c4n:content',
    resolveId(id) {
      if (id === META_ID) return resolved(META_ID);
      if (id === BODIES_ID) return resolved(BODIES_ID);
    },
    async load(id) {
      if (id === resolved(META_ID)) return (await build()).meta;
      if (id === resolved(BODIES_ID)) return (await build()).bodies;
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('/content/posts/') || /\/(CODE_OF_CONDUCT|PRIVACY_POLICY)\.md$/.test(file)) {
        cache = null;
        const mods = [resolved(META_ID), resolved(BODIES_ID)]
          .map((id) => server.moduleGraph.getModuleById(id))
          .filter(Boolean);
        return mods as never[];
      }
    },
  };
}
