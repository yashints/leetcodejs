import { describe, expect, test } from "@jest/globals";
import { lengthOfLIS } from ".";

describe("Longest increasing seq should:", () => {
  test("Return the longest sequence", () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];
    const longest = lengthOfLIS(nums);
    expect(longest).toBe(4);
  });

  test("Return the longest sequence when there are zeros", () => {
    const nums = [0, 1, 0, 3, 2, 3];
    const longest = lengthOfLIS(nums);
    expect(longest).toBe(4);
  });
});
