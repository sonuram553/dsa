class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) return null;

      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return node;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return node;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return null;

    let current = this.root;

    while (current) {
      if (val === current.val) {
        return true;
      }

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  BFS() {
    if (!this.root) return null;

    const queue = [this.root];
    const visited = [];

    while (queue.length) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      visited.push(current.val);
    }

    return visited;
  }

  dfsPreOrder(node = this.root) {
    if (!node) return [];

    let visited = [
      node.val,
      ...this.dfsPreOrder(node.left),
      ...this.dfsPreOrder(node.right),
    ];

    return visited;
  }

  // Alternate solution
  /* dfsPreOrder(node = this.root) {
    if (!node) return null;

    console.log(node.val);
    this.dfsPreOrder(node.left);
    this.dfsPreOrder(node.right);
  } */
}

const bst = new BST();

bst.add(10);
bst.add(15);
bst.add(5);
bst.add(1);
bst.add(7);
bst.add(12);
bst.add(20);

console.log(bst.dfsPreOrder());
