import { parent } from "../utils.js";
import swap from "../../utils/swap.js";
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
    this.bubbleUp(this.arr.length - 1);
  }

  bubbleUp(i) {
    while (i !== 0 && compare(this.arr[i], this.arr[parent(i)])) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
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

function compare(left, right) {
  return left > right;
}

export default MaxHeap;
