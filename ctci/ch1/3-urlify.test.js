import { examples, solutions } from "./3-urlify";

describe.each(examples)(
  "URLify(%p, %p) => %p",
  (string, trueLength, expected) => {
    test.each(solutions)("solution %#", URLify =>
      expect(URLify(string, trueLength)).toBe(expected)
    );
  }
);
