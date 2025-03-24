import { describe, test, expect } from "@jest/globals";
import { IListNode, ListNode, mergeKLists } from ".";

describe("Merge k sorted list should:", () => {
  test("Return empty node given an empty node", () => {
    const lists = [];
    const result = mergeKLists(lists);
    expect(result).toBe(null);
  });

  test("Return sorted list given multiple lists", () => {
    const lists: IListNode[] = [];
    lists.push(new ListNode(1, new ListNode(4, new ListNode(5, null))));
    lists.push(new ListNode(1, new ListNode(3, new ListNode(4, null))));
    lists.push(new ListNode(2, new ListNode(6, null)));
    let sorted: IListNode | null = mergeKLists(lists);
    const expected = [1, 1, 2, 3, 4, 4, 5, 6];
    const result: number[] = [];
    while (sorted !== null) {
      result.push(sorted.val);
      sorted = sorted.next;
    }
    expect(result).toEqual(expected);
  });
});
