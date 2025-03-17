import { describe, test, expect } from "@jest/globals";
import { maximumAverageSubtree, TreeNode } from ".";

describe("Maximum average subtree should:", () => {
  test("return the right average of all subtrees", () => {
    const tree = new TreeNode(5, new TreeNode(6), new TreeNode(1));

    const maxAvg = maximumAverageSubtree(tree);

    expect(maxAvg).toBe(6.0);
  });

  test("return the right average of all subtrees when missing left", () => {
    const tree = new TreeNode(0, null, new TreeNode(1));

    const maxAvg = maximumAverageSubtree(tree);

    expect(maxAvg).toBe(1.0);
  });
});
