import Queue from "../../queue/queue.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root = null;

  insertIterative(value) {
    const newNode = new Node(value);

    if (!this.root) {
      // Tree is empty
      this.root = newNode;
      return;
    }

    // The tree is not empty
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        // Value is greater than the current nodes value

        if (currentNode.right) currentNode = currentNode.right;
        else {
          currentNode.right = newNode;
          break;
        }
      } else {
        // Value is less than or equal to the current nodes value

        if (currentNode.left) currentNode = currentNode.left;
        else {
          currentNode.left = newNode;
          break;
        }
      }
    }
  }

  insertRecursive(value, currentNode = this.root) {
    if (!this.root) {
      // The tree is empty
      this.root = new Node(value);
      return;
    }

    // Tree is not empty
    if (value > currentNode.value) {
      if (currentNode.right) this.insertRecursive(value, currentNode.right);
      else currentNode.right = new Node(value);
    } else {
      if (currentNode.left) this.insertRecursive(value, currentNode.left);
      else currentNode.left = new Node(value);
    }
  }

  findIterative(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) return true;
      if (value > currentNode.value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    return false;
  }

  findRecursive(value, currentNode = this.root) {
    if (!currentNode) return false;

    if (currentNode.value === value) return true;

    if (value > currentNode.value)
      return this.findRecursive(value, currentNode.right);

    return this.findRecursive(value, currentNode.left);
  }

  breadthFirstTraversal() {
    if (!this.root) return [];

    const result = [];
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size) {
      const node = queue.dequeue();
      result.push(node.value);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return result;
  }
}

export default BST;
