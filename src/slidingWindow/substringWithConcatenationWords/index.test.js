import { describe, test, expect } from "@jest/globals";
import { findSubstring } from ".";

describe("Find substring with concatenation should:", () => {
  test("Return the indexes when the concatenation exists", () => {
    let s = "barfoothefoobarman";
    const words = ["foo", "bar"];

    expect(findSubstring(s, words)).toEqual([0, 9]);
  });

  test("Return empty array when not found", () => {
    let s = "wordgoodgoodgoodbestword";
    const words = ["word", "good", "best", "word"];

    expect(findSubstring(s, words)).toEqual([]);
  });

  test("Return the indexes when the concatenation all seen", () => {
    let s = "barfoofoobarthefoobarman";
    const words = ["bar", "foo", "the"];

    expect(findSubstring(s, words)).toEqual([6, 9, 12]);
  });
});
