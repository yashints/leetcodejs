import { describe, expect, test } from "@jest/globals";
import { minWindow } from ".";

describe("Min window substring should:", () => {
  test('Return "BANC" given s = "ADOBECODEBANC", t = "ABC"', () => {
    let s = "ADOBECODEBANC",
      t = "ABC";
    expect(minWindow(s, t)).toBe("BANC");
  });

  test('Return "" when imposible', () => {
    let s = "a",
      t = "aa";
    expect(minWindow(s, t)).toBe("");
  });

  test("Return the same when only one char", () => {
    let s = "a",
      t = "a";
    expect(minWindow(s, t)).toBe("a");
  });
});
