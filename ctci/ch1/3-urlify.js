/* URLify
 * Write a method to replace all spaces in a string with `%20`.
 * You may assume that the string has sufficent space at the end to old the additional characters,
 * and that you are given the "true" length of the string. Can you perform this operation in place?
 */

const examples = [["Mr John Smith      ", 13, "Mr%20John%20Smith"]];
const solutions = [URLify];
export { examples, solutions };
/*
 * Time complexity O(n)
 * Space complecity O(n)
 */
function URLify(string, trueLength) {
  const stringArray = new Array(trueLength);
  for (let i = 0; i < trueLength; i++) {
    const char = string[i];

    if (char === " ") stringArray[i] = "%20";
    else stringArray[i] = char;
  }
  return stringArray.join("");
}
