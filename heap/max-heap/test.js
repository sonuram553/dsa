import MaxHeap from "./max-heap.js";

const arr = [10, 20, 1, 30, 40];
const heap = new MaxHeap(arr);
console.log(heap);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
