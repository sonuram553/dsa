function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (value === arr[mid]) return value;
    else if (value > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return null;
}

// With Recursion
/* function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  if (value === arr[mid]) return value;
  else if (value > arr[mid]) return binarySearch(arr, value, mid + 1, end);
  else return binarySearch(arr, value, start, mid - 1);
} */

console.log(binarySearch([1], 53));
console.log(binarySearch([1], 1));
console.log(binarySearch([1, 3, 4, 8, 5], 3));
