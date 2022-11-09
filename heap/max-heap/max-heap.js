import { parent } from "../utils.js";
import swap from "../../utils/swap.js";
import heapifyIterative from "../heapify/iterative.js";

class MaxHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  initialize(arr) {
    for (const num of arr) this.insert(num);
  }

  get size() {
    return this.arr.length;
  }

  getMax() {
    return this.arr[0];
  }

  insert(key) {
    this.arr.push(key);
    this.bubbleUp(this.arr.length - 1);
  }

  // In order to delete a key
  // at a given index i.
  deleteKey(i) {
    // It increases the value of the key
    // to MAX Value and then removes
    // the maximum value.
    increaseKey(i, Number.MAX_VALUE);
    removeMax();
  }

  // Increases value of key at
  // index 'i' to newValue.
  increaseKey(i, newKey) {
    if (newKey < this.arr[i])
      throw Error("New key is not greater than the old one!");

    this.arr[i] = newKey;
    this.bubbleUp(i);
  }

  bubbleUp(i) {
    while (i !== 0 && compare(this.arr[i], this.arr[parent(i)])) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }

  decreaseKey(i, newKey) {
    if (newKey > this.arr[i])
      throw Error("New key is not smaller than the old one!");

    this.arr[i] = newKey;
    heapifyIterative(this.arr, i, compare);
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
