/* Delete Middle Node
 * Implement an algorythm to delete a node in the middle of a singly linked list.
 */

const examples = [
  [["a"], "a", []],
  [["a", "b"], "a", ["b"]],
  [["a", "b", "c", "d"], "c", ["a", "b", "d"]]
];
const solutions = [deleteMiddleNode];
export { solutions, examples };

/*
 * Time complexity O(n)
 * Space complecity O(1)
 */
function deleteMiddleNode(list, node) {
  if (list.head.value === node) {
    if (list.size === 1) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return list;
  }

  let current = list.head.next;
  let prev = list.head;
  while (current) {
    if (current.value === node) {
      prev.next = current.next;
    }
    current = current.next;
    prev = prev.next;
  }
  return list;
}
