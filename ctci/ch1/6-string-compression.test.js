import { examples, solutions } from "./6-string-compression";

describe.each(examples)("stringCompression(%p) => %p", (string, expected) => {
  test.each(solutions)("solution %#", stringCompression =>
    expect(stringCompression(string)).toBe(expected)
  );
});
