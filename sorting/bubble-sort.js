import swap from "../utils/swap.js";

function bubbleSort(arr) {
  let swapped;
  let indexOfLastUnsortedItem = arr.length - 1;

  do {
    swapped = false;

    for (let i = 0; i < indexOfLastUnsortedItem; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    indexOfLastUnsortedItem--;
  } while (swapped);

  return arr;
}

export default bubbleSort;
