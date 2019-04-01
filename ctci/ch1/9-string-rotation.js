/* String Rotation
 * Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings s1, and s2, write code to check if s2 is a rotation of s1 using
 * only one call to isSubstring.
 */

const examples = [["waterbottle", "erbottlewat", true]];
const solutions = [stringRotation];
export { examples, solutions };

/*
 * Time complexity O(n)
 * Space complecity O(n)
 */
function stringRotation(s1, s2) {
  const length = s1.length;
  if (s2.length !== length) return false;

  for (let i = 1; i < length; i++) {
    const leftPartialS1 = s1.substr(0, i);
    const rightPartialS2 = s2.substr(length - i, length);
    if (leftPartialS1 === rightPartialS2) {
      const leftPartialS2 = s2.substr(0, length - i);
      return isSubstring(s1, leftPartialS2);
    }
  }
  return false;
}

// Helpers
// Assumed helper function isSubstring()
// check if s2 is substring of s1
function isSubstring(s1, s2) {
  return Boolean(s1.match(s2));
}
