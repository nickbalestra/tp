import LinkedList from "../data-structures/linked-list";
import { solutions, examples } from "./1-remove-dups";

describe.each(examples)("removeDups", (data, expected) => {
  test.each(solutions)("solution %#", removeDups => {
    const list = new LinkedList(data);
    const deduped = removeDups(list).toArray();
    expect(deduped).toEqual(expected);
  });
});
