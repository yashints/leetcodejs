import { describe, expect, test } from "@jest/globals";
import { lemonadeChange } from ".";

describe("Lemonade change should:", () => {
  test("return true if everyone can get lemonade", () => {
    const bills: number[] = [5, 5, 5, 10, 20];
    expect(lemonadeChange(bills)).toBe(true);
  });

  test("return false if not possible", () => {
    const bills: number[] = [5, 5, 10, 10, 20];
    expect(lemonadeChange(bills)).toBe(false);
  });
});
