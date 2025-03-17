/**
 1071. Greatest Common Divisor of Strings - Easy
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export const gcdOfStrings = (str1: string, str2: string): string => {
  // Check if the two strings are compatible for division
  if (str1 + str2 !== str2 + str1) {
    return ""; // No common divisor string
  }

  // Helper function to calculate the greatest common divisor (GCD)
  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  // Find the GCD of the lengths of the two strings
  const gcdLength = gcd(str1.length, str2.length);

  // Return the prefix of str1 up to the GCD length
  return str1.substring(0, gcdLength);
};
