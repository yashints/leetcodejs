/**
76. Minimum Window Substring - Hard
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  if (t.length > s.length) return "";

  const tCount = new Map();
  const windowCount = new Map();

  // Count frequencies of characters in t
  for (let char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  let have = 0;
  let need = tCount.size;
  let left = 0;
  let minLength = Infinity;
  let result = [-1, -1]; // Stores the indices of the smallest window

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);

    if (tCount.has(char) && windowCount.get(char) === tCount.get(char)) {
      have++;
    }

    // Try to shrink the window when all characters are matched
    while (have === need) {
      // Update the result if a smaller window is found
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = [left, right];
      }

      // Shrink the window from the left
      const leftChar = s[left];
      windowCount.set(leftChar, windowCount.get(leftChar) - 1);

      if (
        tCount.has(leftChar) &&
        windowCount.get(leftChar) < tCount.get(leftChar)
      ) {
        have--;
      }

      left++;
    }
  }

  const [start, end] = result;
  return minLength === Infinity ? "" : s.slice(start, end + 1);
};
