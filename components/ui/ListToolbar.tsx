import type { ReactNode } from 'react';
import { ViewToggle, type ViewMode } from './ViewToggle';

/**
 * Shared toolbar for listing pages (Blog, Projects): page-specific controls on the
 * left, the table/cards toggle pinned to the right on every screen width, and a
 * result count underneath. Styles live in styles/head-global.css (.list-toolbar*).
 */
export function ListToolbar({
  children,
  view,
  onViewChange,
  summary,
}: {
  children?: ReactNode;
  view: ViewMode;
  onViewChange: (v: ViewMode) => void;
  summary: ReactNode;
}) {
  return (
    <div className="list-toolbar">
      <div className="list-toolbar-row">
        <div className="list-toolbar-controls">{children}</div>
        <ViewToggle value={view} onChange={onViewChange} />
      </div>
      <p className="list-toolbar-summary">{summary}</p>
    </div>
  );
}
