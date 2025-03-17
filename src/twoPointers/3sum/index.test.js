import { describe, test, expect } from "@jest/globals";
import { threeSum } from ".";

describe("Three sum should", () => {
  test("Return the triplets given nums", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expected);
  });

  test("Return emty array when no solution", () => {
    const nums = [0, 1, 1];
    const expected = [];
    expect(threeSum(nums)).toEqual(expected);
  });

  test("Return itself when only one solution", () => {
    const nums = [0, 0, 0];
    const expected = [[0, 0, 0]];
    expect(threeSum(nums)).toEqual(expected);
  });
});
