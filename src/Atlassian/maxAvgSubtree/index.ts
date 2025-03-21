/**
1120. Maximum Average Subtree - Medium
Given the root of a binary tree, find the maximum average value of any subtree of that tree.

(A subtree of a tree is any node of that tree plus all its descendants. The average value of a tree is the sum of its values, divided by the number of nodes.)

Example 1:

Input: [5,6,1]
Output: 6.00000
Explanation: 
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.

Example 2:
Input: root = [0,null,1]
Output: 1.00000
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    root: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = root;
    this.left = left;
    this.right = right;
  }
}

export const maximumAverageSubtree = (root: TreeNode | null): number => {
  let maximumAverage: number = 0.0;

  const dfs = (node: TreeNode | null): [number, number] => {
    if (node == null) {
      return [0, 0];
    }
    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);
    const currentSum = node.val + leftSum + rightSum;
    const currentCount = 1 + leftCount + rightCount;
    maximumAverage = Math.max(maximumAverage, currentSum / currentCount);

    return [currentSum, currentCount];
  };

  dfs(root);

  return maximumAverage;
};
