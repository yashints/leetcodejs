/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = (digits: string): string[] => {
    if (!digits) return [];

    // Mapping of digits to corresponding letters
    const digitToLetters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const results: string[] = [];

    function backtrack(index, current) {
        // Base case: If the current combination length matches the input length, add it to results
        if (index === digits.length) {
            results.push(current);
            return;
        }

        // Get the letters for the current digit
        const letters = digitToLetters[digits[index]];
        for (let letter of letters) {
            // Append the letter and move to the next digit
            backtrack(index + 1, current + letter);
        }
    }

    // Start the backtracking process
    backtrack(0, "");
    return results;
};
