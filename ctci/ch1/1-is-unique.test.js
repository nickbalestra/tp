import { solutions, examples } from "./1-is-unique";

describe.each(examples)("isUnique(%p) => %p", (string, expected) => {
  test.each(solutions)("solution %#", isUnique => {
    expect(isUnique(string)).toBe(expected);
  });
});
