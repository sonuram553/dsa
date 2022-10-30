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

  dequeue() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const priorNode = this.arr[0];
    this.arr[0] = this.arr.pop();

    this.heapifyIterative(0);
    return priorNode;
  }

  bubbleUp(i) {
    while (i !== 0 && this.arr[parent(i)].priority > this.arr[i].priority) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }

  heapifyIterative(i) {
    let largest = i;

    while (true) {
      const left = leftChild(i);
      const right = rightChild(i);

      if (left < this.size && this.arr[left] > this.arr[i]) largest = left;
      if (right < this.size && this.arr[right] > this.arr[largest])
        largest = right;

      if (largest === i) break;

      swap(this.arr, largest, i);
      i = largest;
    }
  }
}

export default PriorityQueue;
