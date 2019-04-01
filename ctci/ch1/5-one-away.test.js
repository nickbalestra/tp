import { examples, solutions } from "./5-one-away";

describe.each(examples)(
  "oneAway(%p, %p) => %p",
  (stringA, stringB, expected) => {
    test.each(solutions)("solution %#", oneAway =>
      expect(oneAway(stringA, stringB)).toBe(expected)
    );
  }
);
