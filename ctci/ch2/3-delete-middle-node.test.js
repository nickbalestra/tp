import LinkedList from "../data-structures/linked-list";
import { solutions, examples } from "./3-delete-middle-node";

describe.each(examples)("deleteMiddleNode", (data, node, expected) => {
  test.each(solutions)("solution %#", deleteMiddleNode => {
    const list = new LinkedList(data);
    const result = deleteMiddleNode(list, node);
    expect(result.toArray()).toEqual(expected);
  });
});
