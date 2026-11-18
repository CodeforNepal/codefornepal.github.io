import { useState } from 'react';

/**
 * Post card thumbnail. Falls back to a placeholder when the post has no image or the
 * (often external, years-old) image URL fails to load.
 */
export function PostThumb({ src, alt, height = 180 }: { src?: string; alt: string; height?: number }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div style={{ height, flexShrink: 0, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fas fa-newspaper" style={{ fontSize: '2rem', color: '#d1d5db' }} aria-hidden />
      </div>
    );
  }
  return (
    <div style={{ height, flexShrink: 0, overflow: 'hidden', background: '#f3f4f6' }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}
