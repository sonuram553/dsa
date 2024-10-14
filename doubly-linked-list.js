class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  // Append a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // Prepend a new node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // Remove a node from the head of the list
  removeHead() {
    if (!this.head) return null; // The list is empty

    const removedData = this.head.data;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.length--;
    return removedData;
  }

  // Remove a node from the tail of the list
  removeTail() {
    if (!this.tail) return null; // The list is empty

    const removedData = this.tail.data;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.length--;
    return removedData;
  }

  moveNodeToHead(node) {
    if (node === this.head) return;

    node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev; // Node is the last node update tail pointer

    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    this.head = node;
  }
}
