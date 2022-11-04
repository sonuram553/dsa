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
    // If the tree is empty
    if (!currentNode) currentNode = new Node(value);

    // Tree is not empty
    if (value > currentNode.value) {
      if (currentNode.right) this.insertRecursive(value, currentNode.right);
      else currentNode.right = new Node(value);
    } else {
      if (currentNode.left) this.insertRecursive(value, currentNode.left);
      else currentNode.left = new Node(value);
    }
  }
}

export default BST;
