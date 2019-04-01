/* One Away
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit(or zero edits) away.
 */

const examples = [
  ["pale", "pe", false],
  ["pale", "ple", true],
  ["ple", "pale", true],
  ["pales", "pale", true],
  ["pale", "bale", true],
  ["pale", "bake", false]
];
const solutions = [oneAway];
export { examples, solutions };

/*
 * Time complexity O(n)
 * Space complecity O(1)
 */
function oneAway(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  let editCount = 0;
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < s1.length || pointerB < s2.length) {
    if (s1[pointerA] !== s2[pointerB]) {
      if (editCount > 0) return false;

      if (s1.length > s2.length) pointerB--;
      if (s1.length < s2.length) pointerA--;

      editCount++;
    }
    pointerA++;
    pointerB++;
  }

  return true;
}
