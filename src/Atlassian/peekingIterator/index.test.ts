import { describe, test, expect } from "@jest/globals";
import { PeekingIterator, ArrayIterator } from ".";

describe("Peek iterator should:", () => {
  test("initialise and perform the required operations", () => {
    const nums = new ArrayIterator([1, 2, 3]);
    const peekingIterator = new PeekingIterator(nums);
    expect(peekingIterator.next()).toBe(1); // return 1, the pointer moves to the next element [1,2,3].
    expect(peekingIterator.peek()).toBe(2); // return 2, the pointer does not move [1,2,3].
    expect(peekingIterator.hasNext()).toBe(true); // return True
    expect(peekingIterator.next()).toBe(2); // return 2, the pointer moves to the next element [1,2,3]
    expect(peekingIterator.next()).toBe(3); // return 3, the pointer moves to the next element [1,2,3]
    expect(peekingIterator.hasNext()).toBe(false); // return False
  });
});
