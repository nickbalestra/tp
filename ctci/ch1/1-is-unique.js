/* Is Unique
 * Implement and algorithm to determine if a string
 * has all unique characters.
 * What if you cannot use additional data structures?
 */

const examples = [
  ["a", true],
  ["aa", false],
  ["aA", true],
  ["1one", true],
  ["1one1", false],
  ["abcdefghi", true],
  ["abcdefghia", false]
];
const solutions = [isUnique, isUniqueInPlace];
export { solutions, examples };

/*
 * Time complexity O(n)
 * Space complecity O(n)
 */
function isUnique(string) {
  const uniqueChars = new Set([...string]); // O(n)
  return uniqueChars.size === string.length;
}

/* Solution without use of additional data structures
 *
 * Time complexity O(n^2)
 * Space complecity O(1)
 */
function isUniqueInPlace(string) {
  for (let i = 0; i < string.length - 1; i++) {
    const char = string[i];
    for (let ii = i + 1; ii < string.length; ii++) {
      if (string[ii] === char) {
        return false;
      }
    }
  }
  return true;
}
