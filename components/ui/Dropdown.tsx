import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
  /** Optional muted count shown on the right (e.g. number of posts). */
  count?: number;
}

interface Props {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  /** Accessible name, e.g. "Filter by year". */
  label: string;
  /** Show a filter box at the top of the menu (useful for long lists). */
  searchable?: boolean;
  className?: string;
}

/**
 * Site-styled replacement for a native <select> (which renders with OS chrome).
 * Square, hairline-bordered trigger matching the search input and filter buttons;
 * the menu follows the same palette with a red accent for the selected option.
 * Keyboard: Enter/Space/ArrowDown opens; arrows move; Enter selects; Escape closes.
 * Styles live in styles/head-global.css (.dd-*).
 */
export function Dropdown({ options, value, onChange, label, searchable = false, className }: Props) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [active, setActive] = useState(0);
  const [alignRight, setAlignRight] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const listId = `${id}-list`;

  const selected = options.find((o) => o.value === value) ?? options[0];

  const shown = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;
  }, [filter, options]);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // Before paint: open toward the left when a full-width menu (max 320px) would
  // overflow the viewport, so the menu never jumps after appearing.
  useLayoutEffect(() => {
    if (!open) return;
    const rect = rootRef.current?.getBoundingClientRect();
    setAlignRight(!!rect && rect.left + 320 > window.innerWidth - 16);
  }, [open]);

  // On open: reset the filter, highlight the current value, focus the menu.
  useEffect(() => {
    if (!open) return;
    setFilter('');
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    (searchable ? searchRef.current : listRef.current)?.focus();
  }, [open]);

  // Keep the highlighted option scrolled into view.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  };

  const choose = (opt: DropdownOption | undefined) => {
    if (!opt) return;
    onChange(opt.value);
    close();
  };

  const onTriggerKey = (e: KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKey = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActive((i) => Math.min(shown.length - 1, i + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
        break;
      case 'Home':
        e.preventDefault();
        setActive(0);
        break;
      case 'End':
        e.preventDefault();
        setActive(shown.length - 1);
        break;
      case 'Enter':
        e.preventDefault();
        choose(shown[active]);
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tab':
        close(false);
        break;
    }
  };

  const activeId = shown[active] ? `${id}-opt-${active}` : undefined;

  return (
    <div ref={rootRef} className={`dd${open ? ' is-open' : ''}${alignRight ? ' align-right' : ''}${className ? ` ${className}` : ''}`}>
      <button
        ref={triggerRef}
        type="button"
        className="dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${label}: ${selected?.label ?? ''}`}
        onClick={() => (open ? close(false) : setOpen(true))}
        onKeyDown={onTriggerKey}
      >
        <span className="dd-value">{selected?.label}</span>
        <i className="fas fa-chevron-down dd-chevron" aria-hidden />
      </button>

      {open && (
        <div className="dd-menu">
          {searchable && (
            <div className="dd-search">
              <i className="fas fa-search" aria-hidden />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search..."
                aria-label={`Search ${label.toLowerCase()}`}
                aria-controls={listId}
                aria-activedescendant={activeId}
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onMenuKey}
              />
            </div>
          )}
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label={label}
            tabIndex={searchable ? -1 : 0}
            aria-activedescendant={searchable ? undefined : activeId}
            className="dd-list"
            onKeyDown={searchable ? undefined : onMenuKey}
          >
            {shown.map((o, i) => (
              <li
                key={o.value}
                id={`${id}-opt-${i}`}
                data-index={i}
                role="option"
                aria-selected={o.value === value}
                className={`dd-option${i === active ? ' is-active' : ''}${o.value === value ? ' is-selected' : ''}`}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(o)}
              >
                <span className="dd-option-label">{o.label}</span>
                {o.count !== undefined && <span className="dd-option-count">{o.count}</span>}
                {o.value === value && <i className="fas fa-check dd-check" aria-hidden />}
              </li>
            ))}
            {shown.length === 0 && <li className="dd-empty">No matches</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
