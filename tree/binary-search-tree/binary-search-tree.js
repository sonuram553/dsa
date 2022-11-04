class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root = null;

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      // Tree is empty
      this.root = newNode;
      return;
    }

    // The tree is not empty
    let current = this.root;
    while (true) {
      if (value > current.value) {
        // Value is greater than the current nodes value

        if (current.right) current = current.right;
        else {
          current.right = newNode;
          break;
        }
      } else {
        // Value is less than or equal to the current nodes value

        if (current.left) current = current.left;
        else {
          current.left = newNode;
          break;
        }
      }
    }
  }
}

export default BST;
