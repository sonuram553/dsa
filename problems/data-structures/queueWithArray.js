class Queue {
  constructor() {
    this.items = [];
  }

  add(val) {
    return this.items.push(val);
  }

  remove() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

queue.add("First");
queue.add("Second");
queue.add("Third");

console.log(queue);
