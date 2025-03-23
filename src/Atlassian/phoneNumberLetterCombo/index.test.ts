import { describe, test, expect } from "@jest/globals";
import { letterCombinations } from ".";

describe('Phone number letter combo should', () => {
  test('return the correct combo when passed a series of digits', () => {
    const digits = "23";
    const result = letterCombinations(digits);

    expect(result).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });

  test('return empty array when passed no digits', () => {
    const digits = "";
    const result = letterCombinations(digits);

    expect(result).toEqual([]);
  });
});