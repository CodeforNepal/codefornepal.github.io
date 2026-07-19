/**
 * Minimal synchronous inline-markdown renderer for the short data strings ported
 * from the _data/*.yml files (contact intro, timeline events, fellowship blurb).
 * These mix Markdown links / **bold** with occasional literal HTML (<br>, <strong>),
 * exactly like Jekyll's `| markdownify` output. Literal HTML passes through untouched.
 *
 * Not for blog post bodies — those go through the full remark/rehype pipeline in lib/markdown.ts.
 */
export function inlineMarkdown(src: string): string {
  if (!src) return '';
  return (
    src
      // [text](url) -> <a href="url">text</a>
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      // **bold** -> <strong>bold</strong>
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  );
}
