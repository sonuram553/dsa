import swap from "../../utils/swap.js";
import { leftChild, rightChild } from "../utils.js";

function heapifyRecursive(arr, i) {
  const size = arr.length;
  let left = leftChild(i);
  let right = rightChild(i);
  let largest = i;

  if (left < size && arr[left] > arr[i]) largest = left;
  if (right < size && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    swap(arr, largest, i);
    heapifyRecursive(arr, largest);
  }
}

export default heapifyRecursive;
