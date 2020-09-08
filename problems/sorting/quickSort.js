// Take starting element as pivot.

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex++;

      const temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }

  const temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;

  return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start > end) return;

  const pivotIndex = pivot(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
  return arr;
}

console.log(quickSort([2, 0, 100, -2, 2]));
