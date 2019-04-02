/* Return Kth to Last
 * Implement an algorythm to find the kth to last element of a singly linked list.
 */

const examples = [
  [["a", "b", "c", "d"], 2, "b"],
  [["a", "b", "c", "d", "e", "f"], 3, "c"],
  [["a", "b", "c", "d", "e", "f"], 0, "f"],
  [["a", "b", "c"], 3, undefined]
];
const solutions = [returnKthToLast];
export { solutions, examples };

/*
 * Time complexity O(n)
 * Space complecity O(1)
 */
function returnKthToLast(list, kth) {
  if (kth + 1 === list.size) {
    return list.head.value;
  }
  if (kth === 0) {
    return list.tail.value;
  }
  if (kth >= list.size) {
    return undefined;
  }

  let runner = list.head;
  while (kth >= 0) {
    runner = runner.next;
    kth--;
  }

  let kthNode = list.head;
  while (runner) {
    kthNode = kthNode.next;
    runner = runner.next;
  }

  return kthNode.value;
}
