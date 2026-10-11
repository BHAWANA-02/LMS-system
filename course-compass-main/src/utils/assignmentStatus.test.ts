import { describe, expect, it } from "vitest";
import { getAssignmentStatus } from "./assignmentStatus";

describe("getAssignmentStatus", () => {
  const now = new Date("2026-10-11T12:00:00");

  it("returns Upcoming when the deadline is more than 3 days away", () => {
    expect(
      getAssignmentStatus("2026-10-20T12:00:00", now)
    ).toBe("Upcoming");
  });

  it("returns Due Soon when the deadline is within 3 days", () => {
    expect(
      getAssignmentStatus("2026-10-13T12:00:00", now)
    ).toBe("Due Soon");
  });

  it("returns Overdue when the deadline has passed", () => {
    expect(
      getAssignmentStatus("2026-10-10T12:00:00", now)
    ).toBe("Overdue");
  });

  it("returns Overdue when the deadline is exactly now", () => {
    expect(
      getAssignmentStatus(now, now)
    ).toBe("Overdue");
  });

  it("throws an error for an invalid deadline", () => {
    expect(() =>
      getAssignmentStatus("invalid-date", now)
    ).toThrow("Invalid assignment deadline");
  });
});