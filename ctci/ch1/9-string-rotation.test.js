import { examples, solutions } from "./9-string-rotation";

describe.each(examples)(
  "stringRotation(%p, %p) => %p",
  (string1, string2, expected) => {
    test.each(solutions)("solution %#", stringRotation =>
      expect(stringRotation(string1, string2)).toEqual(expected)
    );
  }
);
