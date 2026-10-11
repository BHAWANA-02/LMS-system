export type AssignmentStatus = "Upcoming" | "Due Soon" | "Overdue";

const DUE_SOON_THRESHOLD_MS = 3 * 24 * 60 * 60 * 1000;

export function getAssignmentStatus(
  deadline: string | Date,
  now: Date = new Date()
): AssignmentStatus {
  const deadlineTime = new Date(deadline).getTime();

  if (Number.isNaN(deadlineTime)) {
    throw new Error("Invalid assignment deadline");
  }

  const remainingTime = deadlineTime - now.getTime();

  if (remainingTime <= 0) {
    return "Overdue";
  }

  if (remainingTime <= DUE_SOON_THRESHOLD_MS) {
    return "Due Soon";
  }

  return "Upcoming";
}