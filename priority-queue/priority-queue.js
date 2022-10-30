class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  arr = [];

  get size() {
    return this.arr.length;
  }

  peek() {
    return this.arr[0];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.arr.push(node);
    this.bubbleUpI(this.arr.length - 1);
  }

  bubbleUp(i) {
    while (i !== 0 && this.arr[parent(i)].priority > this.arr[i].priority) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }
}

export default PriorityQueue;
