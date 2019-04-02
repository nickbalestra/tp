/* Remove Dups
 * Write code to remove duplicates from an unsorted linked list;
 * Follow up: How would you solve this problem if a temporary buffer is not allowed?
 */

const examples = [
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 4, 4], [3, 1, 4]],
  [[1, 2, 3], [1, 2, 3]],
  [[1, 2, 3, 3], [1, 2, 3]],
  [[1, 1, 1, 1, 1], [1]]
];
const solutions = [removeDups];
export { solutions, examples };

/*
 * Time complexity O()
 * Space complecity O()
 */
function removeDups(list) {
  const values = {};
  let node = list.head;
  while (node) {
    values[node.value] = values[node.value] ? (values[node.value] += 1) : 1;
    node = node.next;
  }

  node = list.head;
  let prev = null;
  while (node.next) {
    if (values[node.value] > 1) {
      if (node === list.head) {
        list.head = list.head.next;
      } else {
        prev.next = node.next || null;
      }
      values[node.value] -= 1;
    }
    prev = node;
    node = node.next;
  }
  return list;
}

/*
 * Follow up without a temporary buffer
 * Time complexity O()
 * Space complecity O()
 */
