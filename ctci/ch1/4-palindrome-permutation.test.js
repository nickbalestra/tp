import { examples, solutions } from "./4-palindrome-permutation";

describe.each(examples)(
  "palindromePermutation(%p) => %p",
  (string, expected) => {
    test.each(solutions)("solution %#", palindromePermutation =>
      expect(palindromePermutation(string)).toBe(expected)
    );
  }
);
