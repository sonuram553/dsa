class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);

    this.values.push(node);

    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];
      let current = this.values[currentIndex];

      if (parentIndex < 0 || current.priority >= parent.priority) break;

      this.values[parentIndex] = current;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }

    return node;
  }

  dequeue() {
    const size = this.values.length;

    if (!size) return null;
    if (size < 3) return this.values.shift();

    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let parentIndex = 0;

    while (true) {
      let parent = this.values[parentIndex];
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let swapIndex = null;

      let leftChild =
        leftChildIndex < size ? this.values[leftChildIndex] : null;
      let rightChild =
        rightChildIndex < size ? this.values[rightChildIndex] : null;

      if (leftChild && leftChild.priority < parent.priority) {
        swapIndex = leftChildIndex;
      }

      if (rightChild && rightChild.priority < parent.priority) {
        if (!swapIndex || rightChild.priority < leftChild.priority)
          swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.values[parentIndex] = this.values[swapIndex];
      this.values[swapIndex] = parent;
      parentIndex = swapIndex;
    }

    return min;
  }
}

module.exports = PriorityQueue;

/* const queue = new PriorityQueue();

queue.enqueue("", 10);
queue.enqueue("", 5);
queue.enqueue("", 100);
queue.enqueue("", 1);

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.values); */
