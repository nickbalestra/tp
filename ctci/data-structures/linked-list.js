class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(items) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    items && this.addAll(items);
  }

  // Inserts the specified element at the specified position in this List.
  // If no position is specified, appends the element to the end of this List.
  // O(n)
  add(item, position) {
    if (position === undefined || position === this.size - 1) {
      this.addLast(item);
    } else if (position > this.size) {
      return undefined;
    } else {
      let currentNode = this.head;
      while (position) {
        currentNode = currentNode.next;
        position--;
      }
      const nodeToAdd = new Node(item);
      nodeToAdd.next = currentNode.next;
      currentNode.next = nodeToAdd;
      this.size++;
    }
  }

  // Appends the given element to the end of this List
  // O(n)
  addLast(item) {
    const nodeToAdd = new Node(item);
    if (!this.tail) {
      this.tail = nodeToAdd;
      this.head = nodeToAdd;
    } else {
      this.tail.next = nodeToAdd;
      this.tail = nodeToAdd;
    }
    this.size++;
  }

  // Inserts the given element at the beginning of this List
  // O(1)
  addFirst(item) {
    const nodeToAdd = new Node(item);
    if (!this.head) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
    }
    this.size++;
  }

  // Inserts all of the elements in the specified Collection into this LinkedList, starting at the specified position.
  // If no position is specified, appends all of the elements to the end of this this LinkedList
  // O(nm)
  addAll(items, position) {
    if (position === undefined) {
      items.forEach(item => this.addLast(item));
    } else {
      items.forEach((item, i) => this.add(item, position + i));
    }
  }

  // Returns an array containing all of the elements in this LinkedList in the correct order.
  // O(n)
  toArray() {
    let node = this.head;
    const array = [];
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}
