/*
300. Longest Increasing Subsequence - Medium
Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
export const lengthOfLIS = (nums) => {
  const n = nums.length;
  const f = new Array(n).fill(1);
  for (let i = nums.length - 1; i >= 0; --i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] < nums[j]) {
        f[i] = Math.max(f[i], f[j] + 1);
      }
    }
  }
  return Math.max(...f);
};
