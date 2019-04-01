/* Palindrome Permutation
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited
 * to just dictionary words.
 */

const examples = [
  ["Tact Coa", true], // permutations: "taco cat", "atco cta", ...
  ["otto", true],
  ["abc fcba", true],
  ["abc bb", false]
];
const solutions = [palindromePermutation];
export { examples, solutions };

/*
 * questions/assumptions from reading the prompt:
 * - case: insensitive
 * - whitespace: doesn't count
 * - permutation is the rearrangement of letters, therefore same characters/length.
 *
 * Time complexity O(n)
 * Space complecity O(1)
 */
function palindromePermutation(string) {
  const oddChars = new Set();
  for (let char of string) {
    char = char.toLowerCase();
    if (oddChars.has(char)) oddChars.delete(char);
    else if (char !== " ") oddChars.add(char);
  }
  return oddChars.size <= 1;
}
