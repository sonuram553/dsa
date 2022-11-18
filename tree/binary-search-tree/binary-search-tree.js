import Queue from "../../queue/queue.js";
import Stack from "../../stack/stack.js";

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

  // Traversal - Recursive

  depthFirstPreOrder() {
    const result = [];

    function traverse(node) {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  depthFirstInOrder() {
    const result = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  depthFirstPostOrder() {
    const result = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);
    return result;
  }

  // Traversal - Iterative

  depthFirstPreOrderIterative() {
    const result = [];
    const stack = new Stack();

    this.root && stack.push(this.root);

    while (stack.size) {
      const node = stack.pop();

      result.push(node.value);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }

    return result;
  }

  depthFirstInOrderIterative() {
    const result = [];
    const stack = new Stack();
    let current = this.root;

    while (true) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else if (stack.size) {
        const node = stack.pop();
        result.push(node.value);
        current = node.right;
      } else break;
    }

    return result;
  }

  // https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/
  depthFirstPostOrderIterative(root = this.root) {
    const result = [];
    const stack = new Stack();

    while (true) {
      while (root) {
        root.right && stack.push(root.right);
        stack.push(root);
        root = root.left;
      }

      if (stack.size) {
        root = stack.pop();

        if (root.right && root.right === stack.peek()) {
          const node = stack.pop();
          stack.push(root);
          root = node;
        } else {
          result.push(root.val);
          root = null;
        }
      } else break;
    }

    return result;
  }
}

export default BST;
