import { useLang } from '../i18n';
import type { ProjectStatus } from '../types';

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { ui } = useLang();
  return <span className={`status status--${status}`}>{ui.status[status]}</span>;
}
