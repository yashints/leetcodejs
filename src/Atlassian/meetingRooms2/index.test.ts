import { describe, test, expect } from "@jest/globals";
import { minMeetingRooms } from ".";

describe("Minimum meeting room should:", () => {
  test("Return the minimum meeting rooms", () => {
    const meetings = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    const minRoom = minMeetingRooms(meetings);
    expect(minRoom).toBe(2);
  });

  test("Return the 1 when no overlap", () => {
    const meetings = [
      [7, 10],
      [2, 4],
    ];
    const minRoom = minMeetingRooms(meetings);
    expect(minRoom).toBe(1);
  });
});
