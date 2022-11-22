import Stack from "../../../stack/stack.js";

// https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/
function postOrder(root, callback) {
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
        callback(root);
        root = null;
      }
    } else break;
  }
}

export default postOrder;
