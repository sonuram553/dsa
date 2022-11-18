import Stack from "../stack/stack.js";

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

function preOrderRecursive(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    result.push(node.val);
    for (const child of node.children) traverse(child);
  }

  traverse(root);
  return result;
}

function preOrderIterative(root) {
  if (!root) return [];

  const result = [];
  const stack = new Stack();
  stack.push(root);

  while (stack.size) {
    const { val, children } = stack.pop();
    result.push(val);

    for (let i = children.length - 1; i >= 0; i--) stack.push(children[i]);
  }

  return result;
}

function postOrderRecursive(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    for (const child of node.children) traverse(child);
    result.push(node.val);
  }

  traverse(root);
  return result;
}
