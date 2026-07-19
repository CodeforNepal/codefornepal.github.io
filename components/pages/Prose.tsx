/** Centered prose column reproducing the #pagecontainer text treatment from _page.scss. */
export function Prose({ html }: { html: string }) {
  return (
    <div
      style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
