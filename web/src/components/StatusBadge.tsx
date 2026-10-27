import type { ProjectStatus } from "@/types/content";

const styles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  "In Progress": "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Prototype: "bg-violet/15 text-violet",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
