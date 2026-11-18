import { useCallback, useState } from 'react';

export type ViewMode = 'table' | 'cards';

/**
 * Table/card view preference, defaulting to the table. Remembered per listing in
 * localStorage as a convenience; storage failures (private mode etc.) are ignored.
 */
export function useViewMode(storageKey: string): [ViewMode, (v: ViewMode) => void] {
  const [mode, setMode] = useState<ViewMode>(() => {
    try {
      return window.localStorage.getItem(storageKey) === 'cards' ? 'cards' : 'table';
    } catch {
      return 'table';
    }
  });

  const update = useCallback(
    (v: ViewMode) => {
      setMode(v);
      try {
        window.localStorage.setItem(storageKey, v);
      } catch {
        /* ignore */
      }
    },
    [storageKey],
  );

  return [mode, update];
}

const options: { value: ViewMode; label: string; icon: string }[] = [
  { value: 'table', label: 'Table', icon: 'fas fa-list' },
  { value: 'cards', label: 'Cards', icon: 'fas fa-th-large' },
];

/** Segmented control for switching between table and card views. */
export function ViewToggle({ value, onChange }: { value: ViewMode; onChange: (v: ViewMode) => void }) {
  return (
    <div className="view-toggle" role="group" aria-label="Choose view">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          title={`${o.label} view`}
          className={value === o.value ? 'is-active' : undefined}
          onClick={() => onChange(o.value)}
        >
          <i className={o.icon} aria-hidden /> <span className="view-toggle-label">{o.label}</span>
        </button>
      ))}
      <style>{`
        .view-toggle { display: inline-flex; border: 1px solid #e5e7eb; background: white; flex-shrink: 0; }
        .view-toggle button { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0 0.9rem; height: 38px; border: 0; background: transparent; color: #6b7280; font-family: 'Montserrat',sans-serif; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: background 0.2s, color 0.2s; }
        .view-toggle button + button { border-left: 1px solid #e5e7eb; }
        .view-toggle button:hover { color: #111827; }
        .view-toggle button.is-active { background: #111827; color: white; }
        .view-toggle i { font-size: 0.7rem; }
        /* Icon-only on small phones so the toggle never crowds the controls beside it. */
        @media (max-width: 480px) {
          .view-toggle button { padding: 0 0.75rem; }
          .view-toggle .view-toggle-label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
        }
      `}</style>
    </div>
  );
}
