/*
Given an array of positive integers nums and a positive integer target, return the minimal length of 
a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = (target, nums) => {
  let minLength = Infinity; // Initialize minimum length to infinity
  let left = 0; // Left pointer for the sliding window
  let currentSum = 0; // Current sum of the window

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]; // Add the current element to the window

    // Shrink the window as much as possible while the sum is >= target
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1); // Update min length
      currentSum -= nums[left]; // Remove the leftmost element
      left++; // Move the left pointer forward
    }
  }

  // If no valid subarray is found, return 0; otherwise, return the minimum length
  return minLength === Infinity ? 0 : minLength;
};
