import { describe, test, expect } from "@jest/globals";
import { lengthOfLongestSubstring } from ".";

describe("Longest sub str witout repeating should:", () => {
  test("return 3 when given abcabcbb.", () => {
    let s = "abcabcbb";
    expect(lengthOfLongestSubstring(s)).toBe(3);
  });

  test("return 1 when given bbbbb.", () => {
    let s = "bbbbb";
    expect(lengthOfLongestSubstring(s)).toBe(1);
  });

  test("return 3 when given pwwkew.", () => {
    let s = "pwwkew";
    expect(lengthOfLongestSubstring(s)).toBe(3);
  });
});
