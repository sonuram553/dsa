// Find minimum in the rotated sorted array

export default function findIndexOfMin(arr) {
  const n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const prev = (mid - 1 + n) % n;
    const next = (mid + 1) % n;

    if (arr[mid] > arr[next]) return next;
    if (arr[prev] > arr[mid]) return mid;

    if (arr[0] > arr[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return 0;
}
