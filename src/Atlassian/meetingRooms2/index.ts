/*
253. Meeting Rooms II 🔒 - Medium
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
*/

export const minMeetingRooms = (meetings: number[][]): number => {
  if (meetings.length === 0) return 0;

  // Separate start and end times
  const startTimes = meetings.map((m) => m[0]).sort((a, b) => a - b);
  const endTimes = meetings.map((m) => m[1]).sort((a, b) => a - b);

  let rooms = 0,
    endPointer = 0;

  // Iterate through start times
  for (let start of startTimes) {
    if (start < endTimes[endPointer]) {
      // A new room is needed
      rooms++;
    } else {
      // One meeting ended, free up a room
      endPointer++;
    }
  }

  return rooms;
};
