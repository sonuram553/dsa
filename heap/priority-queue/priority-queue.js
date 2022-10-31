import heapifyIterative from "../heapify/iterative";

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
    this.bubbleUp(this.arr.length - 1);
  }

  dequeue() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const priorNode = this.arr[0];
    this.arr[0] = this.arr.pop();

    heapifyIterative(this.arr, 0, compare);
    return priorNode;
  }

  bubbleUp(i) {
    while (i !== 0 && this.arr[parent(i)].priority > this.arr[i].priority) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }
}

function compare(left, right) {
  return left.priority < right.priority;
}

export default PriorityQueue;
