import LinkedList from "../data-structures/linked-list";
import { solutions, examples } from "./2-return-kth-to-last";

describe.each(examples)("returnKthToLast", (data, kth, expected) => {
  test.each(solutions)("solution %#", returnKthToLast => {
    const list = new LinkedList(data);
    const result = returnKthToLast(list, kth);
    expect(result).toBe(expected);
  });
});
