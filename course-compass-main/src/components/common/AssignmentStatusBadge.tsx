import { getAssignmentStatus } from "@/utils/assignmentStatus";

interface AssignmentStatusBadgeProps {
  deadline: string | Date;
  now?: Date;
}

const statusStyles = {
  Upcoming:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Due Soon":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Overdue:
    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export function AssignmentStatusBadge({
  deadline,
  now,
}: AssignmentStatusBadgeProps) {
  const status = getAssignmentStatus(deadline, now);

  return (
    <span
      role="status"
      aria-label={`Assignment status: ${status}`}
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}