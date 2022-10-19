import swap from "../utils/swap";

function findPivot(arr, start, end, compareFn) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (compareFn(arr[i], arr[start])) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, start, end, compareFn) {
  if (start > end) return;

  const pivot = findPivot(arr, start, end, compareFn);
  quickSort(arr, start, pivot - 1, compareFn);
  quickSort(arr, pivot + 1, end, compareFn);
}
