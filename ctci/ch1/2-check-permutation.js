/* Check Permutation
 * Given two strings, write a method to decide if one
 * is a permutation of the other.
 */

const examples = [
  ["thisyear", "thisyear", true],
  ["thisyear", "fdfd", false],
  ["abc", "cba", true],
  ["abc", "abcc", false],
  ["abcdefg", "efcdgab", true]
];
const solutions = [checkPermutation];
export { examples, solutions };

/*
 * Time complexity O(n)
 * Space complecity O(n)
 */
function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const characters = {};
  for (let char of s1) {
    if (characters[char]) characters[char] += 1;
    else characters[char] = 1;
  }

  for (let char of s2) {
    if (!characters[char]) return false;
    else characters[char] -= 1;
  }
  return true;
}
