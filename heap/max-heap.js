import swap from "../utils/swap.js";

class MaxHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  initialize(arr) {
    for (const num of arr) this.insertKey(num);
  }

  get size() {
    return this.arr.length;
  }

  getMax() {
    return this.arr[0];
  }

  insertKey(key) {
    let i = this.arr.length;
    this.arr.push(key);

    while (i !== 0 && this.arr[parent(i)] < this.arr[i]) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
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

    while (i !== 0 && this.arr[parent(i)] < this.arr[i]) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }

  decreaseKey(i, newKey) {
    if (newKey > this.arr[i])
      throw Error("New key is not smaller than the old one!");

    this.arr[i] = newKey;
    this.heapify(i);
  }

  removeMax() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const max = this.arr[0];
    this.arr[0] = this.arr.pop();

    this.heapify(0);
    return max;
  }

  heapify(i) {
    let left = leftChild(i);
    let right = rightChild(i);
    let largest = i;

    if (left < this.size && this.arr[left] > this.arr[i]) largest = left;
    if (right < this.size && this.arr[right] > this.arr[largest])
      largest = right;

    if (largest !== i) {
      swap(this.arr, largest, i);
      this.heapify(largest);
    }
  }
}

function parent(i) {
  return Math.floor(i - 1 / 2);
}

function leftChild(i) {
  return 2 * i + 1;
}

function rightChild(i) {
  return 2 * i + 2;
}

// Tester
(function () {
  const arr = [10, 20, 1, 30, 40];
  const heap = new MaxHeap(arr);
  console.log(heap);
})();
