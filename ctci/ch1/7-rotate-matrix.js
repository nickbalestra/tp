/* Rotate Matrix
 * Given an image represented by an NxN matrix,
 * where each pixel in the imagge is 4 bytes, write a method
 * to rotate the image by 90 degrees. Can you do this in place?
 */

const examples = [
  [
    [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"]
    ],
    [
      ["m", "i", "e", "a"],
      ["n", "j", "f", "b"],
      ["o", "k", "g", "c"],
      ["p", "l", "h", "d"]
    ]
  ]
];
const solutions = [rotateMatrix];
export { examples, solutions };

/*
 * Time complexity O(n)
 * Space complecity O(1)
 */
function rotateMatrix(matrix) {
  return flipHorizontal(transposeMatrix(matrix));
}

// Helpers
// Swap two element of any given matrix, in-place.
function swapInPlace(matrix, a, b) {
  const temp = matrix[a[0]][a[1]];
  matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
  matrix[b[0]][b[1]] = temp;
  return matrix;
}
// Transpose matrix on its major diagonal, in-place.
function transposeMatrix(matrix) {
  const n = matrix.length;
  for (let col = 1; col < n; col++) {
    for (let row = 0; row < col; row++) {
      swapInPlace(matrix, [col, row], [row, col]);
    }
  }
  return matrix;
}
// Flip matrix on its y axis, in-place.
function flipHorizontal(matrix) {
  const n = matrix.length;
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < Math.floor(n / 2); row++) {
      swapInPlace(matrix, [col, row], [col, n - row - 1]);
    }
  }
  return matrix;
}
