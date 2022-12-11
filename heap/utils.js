import swap from "../utils/swap.js";

function parent(i) {
  return Math.floor(i - 1 / 2);
}

function leftChild(i) {
  return 2 * i + 1;
}

function rightChild(i) {
  return 2 * i + 2;
}

function bubbleUp(arr, index, compare) {
  while (index !== 0 && compare(arr[index], arr[parent(index)])) {
    swap(arr, parent(index), index);
    index = parent(index);
  }
}

export { parent, leftChild, rightChild, bubbleUp };
