import LinkedList from "./linked-list";

test("Returns an array containing all of the elements in this LinkedList in the correct order", () => {
  const list = new LinkedList();

  list.addAll([1, 2, 3]);
  expect(list.toArray()).toEqual([1, 2, 3]);
});

test("Appends the given element to the end of this List", () => {
  const list = new LinkedList();

  list.addLast(10);
  list.addLast(5);
  expect(list.toArray()).toEqual([10, 5]);
});

test("Inserts the given element at the beginning of this List", () => {
  const list = new LinkedList();

  list.addFirst(10);
  list.addFirst(5);
  expect(list.toArray()).toEqual([5, 10]);
});

test("Inserts element in LinkedList at the specified position.", () => {
  const list = new LinkedList();

  list.add(10);
  list.add(5);
  list.add(7, 1);
  list.add(9, 1);
  expect(list.toArray()).toEqual([10, 5, 9, 7]);
});

test("Inserts all of the elements in the specified Collection into this LinkedList, starting at the specified position.", () => {
  const list = new LinkedList();

  list.addAll([1, 2, 3, 4, 5]);
  expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
  list.addAll(["a", "b", "c"], 2);
  expect(list.toArray()).toEqual([1, 2, 3, "a", "b", "c", 4, 5]);
});
