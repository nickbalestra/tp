import { examples, solutions } from "./8-zero-matrix";

describe.each(examples)("zeroMatrix(%p) => %p", (matrix, expected) => {
  test.each(solutions)("solution %#", zeroMatrix =>
    expect(zeroMatrix(matrix)).toEqual(expected)
  );
});
