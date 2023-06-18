import { bubbleUp } from "../utils.js";
import heapifyIterative from "../heapify/iterative.js";

class MaxHeap {
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

  getMax() {
    return this.arr[0];
  }

  insert(key) {
    this.arr.push(key);
    bubbleUp(this.arr, this.arr.length - 1, compare);
  }

  extractMax() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const max = this.arr[0];
    this.arr[0] = this.arr.pop();

    heapifyIterative(this.arr, 0, compare);
    return max;
  }
}

function compare(child, parent) {
  return child > parent;
}

export default MaxHeap;
