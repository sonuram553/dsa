import { bubbleUp } from "../utils.js";
import heapifyIterative from "../heapify/iterative.js";

class MinHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  get size() {
    return this.arr.length;
  }

  initialize(arr) {
    for (const item of arr) this.insert(item);
  }

  getMin() {
    return this.arr[0];
  }

  insert(item) {
    this.arr.push(item);
    bubbleUp(this.arr, this.size - 1, compare);
  }

  extractMin() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const min = this.arr[0];
    this.arr[0] = this.arr.pop();

    heapifyIterative(this.arr, 0, compare);
    return min;
  }
}

function compare(child, parent) {
  return child < parent;
}

export default MinHeap;
