import Stack from "../../../stack/stack.js";

function inOrder(root, callback) {
  let current = root;
  const stack = new Stack();

  while (true) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (stack.size) {
      const node = stack.pop();
      callback(node);
      current = node.right;
    } else break;
  }
}

export default inOrder;
