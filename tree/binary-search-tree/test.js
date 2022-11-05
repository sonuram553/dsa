import BST from "./binary-search-tree.js";

const bst = new BST();
bst.insertIterative(10);
bst.insertIterative(6);
bst.insertIterative(15);
bst.insertIterative(3);
bst.insertIterative(8);
bst.insertIterative(13);
bst.insertIterative(20);

let values = bst.breadthFirstTraversal();
console.log(values);

values = bst.depthFirstPreOrder();
console.log(values);
