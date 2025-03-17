import { describe, expect, test } from "@jest/globals";
import { gcdOfStrings } from ".";

describe("Greatest common divisor should:", () => {
  test("return the second string if it is a divisor", () => {
    let str1 = "ABCABC",
      str2 = "ABC";
    expect(gcdOfStrings(str1, str2)).toBe(str2);
  });

  test("return the max divisor if it is repeated", () => {
    let str1 = "ABABAB",
      str2 = "ABAB";
    expect(gcdOfStrings(str1, str2)).toBe("AB");
  });

  test("return empty string if not a divisor", () => {
    let str1 = "LEET",
      str2 = "CODE";
    expect(gcdOfStrings(str1, str2)).toBe("");
  });

  test("return empty string if half divisor", () => {
    let str1 = "ABCDEF",
      str2 = "ABC";
    expect(gcdOfStrings(str1, str2)).toBe("");
  });
});
