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
    this.arr.push(key);
    this.bubbleUp(this.arr.length - 1);
  }

  bubbleUp(i) {
    while (i !== 0 && this.arr[parent(i)] < this.arr[i]) {
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

function heapifyIterative(arr, parentIndex, compareFn) {
  const size = arr.length;
  let prior = parentIndex;

  while (true) {
    const leftIndex = leftChild(parentIndex);
    const rightIndex = rightChild(parentIndex);

    if (leftIndex < size && compareFn(arr[leftIndex], arr[parentIndex]))
      prior = leftIndex;

    if (rightIndex < size && compareFn(arr[rightIndex], arr[prior]))
      prior = rightIndex;

    if (prior === parentIndex) break;

    swap(arr, prior, parentIndex);
    parentIndex = prior;
  }
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function compare(left, right) {
  return left > right;
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

