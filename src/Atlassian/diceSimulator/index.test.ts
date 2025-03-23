import { describe, test, expect } from "@jest/globals";
import { dieSimulator } from ".";

describe("Dice similator should:", () => {
  test("Return the correct number of possible combinations", () => {
    const n = 2,
      rollMax = [1, 1, 2, 2, 2, 3];
    expect(dieSimulator(n, rollMax)).toBe(34);
  });

  test("Return the correct number of possible combinations with different inputs", () => {
    const n = 2,
      rollMax = [1, 1, 1, 1, 1, 1];
    expect(dieSimulator(n, rollMax)).toBe(30);
  });
});
