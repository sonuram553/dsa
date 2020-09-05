// Optimized version of bubbleSort
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
}

/* function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
} */

console.log(bubbleSort([]));
console.log(bubbleSort([10]));
console.log(bubbleSort([1, 20, 3, 4]));
