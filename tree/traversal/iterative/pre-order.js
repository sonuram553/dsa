import Stack from "../../../stack/stack.js";

function preOrder(root, callback) {
  const stack = new Stack();

  root && stack.push(root);

  while (stack.size) {
    const node = stack.pop();

    callback(node);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
}

export default preOrder;
