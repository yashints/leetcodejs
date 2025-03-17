import { describe, test, expect } from "@jest/globals";
import { findLeaves, TreeNode } from ".";

describe("Find leave should:", () => {
  test("Return the leaves in each tree", () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );
    const result = findLeaves(tree);

    expect(result).toEqual([[4, 5, 3], [2], [1]]);
  });
});
