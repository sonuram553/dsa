class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    this.size++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    this.tail.next = node;
    this.tail = node;
    return node;
  }

  pop() {
    if (!this.head) return;

    this.size--;

    // If linked list has only one element.
    if (!this.size) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      return node;
    }

    // If linked list has more than one element.
    let prev = this.head;
    let current = this.head.next;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    return current;
  }

  shift() {
    if (!this.head) return;

    const node = this.head;
    this.head = this.head.next;
    this.size--;

    // If size of linked list is zero now.
    if (!this.head) this.tail = null;
    return node;
  }

  unshift(val) {
    const node = new Node(val);

    this.size++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    node.next = this.head;
    this.head = node;
    return node;
  }

  get(at) {
    if (at >= this.size || at < 0 || !this.head) return;

    let index = 0;
    let current = this.head;

    while (index < at) {
      current = current.next;
      index++;
    }

    return current;
  }

  set(at, val) {
    const node = this.get(at);

    if (!node) return;

    node.val = val;
    return node;
  }

  insert(at, val) {
    if (at < 0 || at > this.size) return;

    if (at === 0) return this.unshift(val);
    if (at === this.size) return this.push(val);

    const prev = this.get(at - 1);
    const node = new Node(val);
    node.next = prev.next;
    prev.next = node;
    this.size++;
    return node;
  }

  remove(at) {
    if (at < 0 || at >= this.size) return;

    if (at === 0) return this.shift();
    if (at === this.size - 1) return this.pop();

    const node = this.get(at - 1);
    const removed = node.next;
    node.next = removed.next;
    this.size--;
    return removed;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
    return this;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.push("hello");
list.push("there");
list.push("sonu");

console.log(list.reverse());
//console.log(list);
