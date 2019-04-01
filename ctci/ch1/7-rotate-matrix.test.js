import { examples, solutions } from "./7-rotate-matrix";

describe.each(examples)("rotateMatrix(%p) => %p", (matrix, rotated) => {
  test.each(solutions)("solution %#", rotateMatrix =>
    expect(rotateMatrix(matrix)).toEqual(rotated)
  );
});
