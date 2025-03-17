/**
366. Find Leaves of Binary Tree - Medium
Given the root of a binary tree, collect a tree's nodes as if you were doing this:

Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.
 

Example 1:
Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]
Explanation:
[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.

Example 2:
Input: root = [1]
Output: [[1]]
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const findLeaves = (root: TreeNode | null): number[][] => {
  const ans: number[][] = [];
  const dfs = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }
    const l = dfs(root.left);
    const r = dfs(root.right);
    const h = Math.max(l, r);
    if (ans.length === h) {
      ans.push([]);
    }
    ans[h].push(root.val);
    return h + 1;
  };
  dfs(root);
  return ans;
};
