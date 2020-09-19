class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    return this.items.push(val);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push('hello')
stack.push('there')
stack.push('sonu')

console.log(stack.size());
console.log(stack.pop());
console.log(stack.items);