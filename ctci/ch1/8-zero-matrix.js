/* Zero Matrix
 * Write an algorithm such that if an alement in an MxN matric is 0,
 * its entire row and column are set to 0.
 */

const examples = [
  [
    [[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]],
    [[1, 0, 0, 1], [0, 0, 0, 0], [1, 0, 0, 1], [0, 0, 0, 0], [1, 0, 0, 1]]
  ]
];
const solutions = [zeroMatrix];
export { examples, solutions };

/*
 * Time complexity O(n*M*N) => O(n^2)
 * Space complecity O(n)
 */
function zeroMatrix(matrix) {
  const zeros = new Set();

  matrix.forEach((row, rowIndex) =>
    row.forEach((el, colIndex) => {
      if (!el) {
        // Space optimization: mark 0 in place
        // Time optimizations: recursive marker to stop if already marked
        zeros.add([rowIndex, colIndex]);
      }
    })
  );

  zeros.forEach(([rowIndex, colIndex]) => {
    zeroRow(matrix, rowIndex);
    zeroCol(matrix, colIndex);
  });

  return matrix;
}

// Helpers
function zeroRow(matrix, rowIndex) {
  const row = matrix[rowIndex];
  row.forEach((_el, i) => {
    row[i] = 0;
  });
  return matrix;
}
function zeroCol(matrix, colIndex) {
  matrix.forEach(row => {
    row[colIndex] = 0;
  });
  return matrix;
}
