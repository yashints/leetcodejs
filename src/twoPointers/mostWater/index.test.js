import { describe, expect, test } from "@jest/globals";
import { maxArea } from "./index";

describe("maxArea should", () => {
  test("return 49 given heights [1,8,6,2,5,4,8,3,7]", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 49;

    expect(maxArea(height)).toBe(expected);
  });

  test("return 1 given heights [1,1]", () => {
    const height = [1, 1];
    const expected = 1;

    expect(maxArea(height)).toBe(expected);
  });
});
