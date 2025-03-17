/*
30. Substring with Concatenation of All Words - Hard
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring = (s, words) => {
  let wordLength = words[0].length;
  let wordCount = new Map();
  let results = [];

  // Create a frequency map of the words
  for (let word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  // Use sliding windows starting from each character within the word length
  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let seen = new Map();
    let count = 0;

    while (right + wordLength <= s.length) {
      let word = s.substring(right, right + wordLength);
      right += wordLength;

      if (wordCount.has(word)) {
        seen.set(word, (seen.get(word) || 0) + 1);
        count++;

        // If word frequency exceeds the allowed count, adjust the window
        while (seen.get(word) > wordCount.get(word)) {
          let leftWord = s.substring(left, left + wordLength);
          seen.set(leftWord, seen.get(leftWord) - 1);
          count--;
          left += wordLength;
        }

        // If all words are matched, record the starting index
        if (count === words.length) {
          results.push(left);
        }
      } else {
        // Reset window if the word is not in the word count
        seen.clear();
        count = 0;
        left = right;
      }
    }
  }

  return results;
};
