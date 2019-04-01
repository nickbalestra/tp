import { solutions, examples } from "./2-check-permutation";

describe.each(examples)(
  "checkPermutation(%p, %p) => %p",
  (stringA, stringB, expected) => {
    test.each(solutions)("solution %#", checkPermutation =>
      expect(checkPermutation(stringA, stringB)).toBe(expected)
    );
  }
);
