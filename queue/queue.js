class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  head = null;
  tail = null;
  _size = 0;

  size() {
    return this._size;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this._size;
  }

  delete() {
    if (!this.head) return;

    const node = this.head;

    if (this._size === 1) this.tail = null;
    this.head = node.next;

    this._size--;
  }
}

export default Queue;
