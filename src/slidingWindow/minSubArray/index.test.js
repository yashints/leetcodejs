import { describe, test, expect } from "@jest/globals";
import { minSubArrayLen } from ".";

describe("Min sub array len should:", () => {
  test("Return the min len given nums and target", () => {
    const nums = [2, 3, 1, 2, 4, 3];
    const target = 7;

    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  test("Return 1 given array containing target", () => {
    const nums = [1, 4, 4];
    const target = 4;

    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  test("Return 0 when there is no solution", () => {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    const target = 11;

    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  test("Return 8 given nums [12,28,83,4,25,26,25,2,25,25,25,12] and target 213", () => {
    const nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
    const target = 213;

    expect(minSubArrayLen(target, nums)).toBe(8);
  });
});
