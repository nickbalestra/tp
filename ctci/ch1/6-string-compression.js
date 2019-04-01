/* String Compression
 * Implement a method to perform a basic string compression using the counts of repeated characters.
 * For example, the  string aabcccccaaa would become a2b1c5a3.
 * If the "compressed" string would not become smaller then the original string, your method
 * should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a-z).
 */

const examples = [["aabcccccaaa", "a2b1c5a3"], ["aa", "aa"], ["aaa", "a3"]];
const solutions = [stringCompression];
export { examples, solutions };

/*
 * Time complexity O(n)
 * Space complecity O(n)
 */
function stringCompression(string) {
  let compressed = "";
  let pointer = 1;
  let prevChar = string[0];
  let charCount = 1;
  while (pointer <= string.length) {
    if (string[pointer] === prevChar) charCount++;
    else {
      compressed += prevChar + charCount;
      prevChar = string[pointer];
      charCount = 1;
    }
    if (compressed.length >= string.length) return string;
    pointer++;
  }
  return compressed;
}
