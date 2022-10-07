// Using Linear Search
// Time Complexity: O(N)

function countRotation(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) return i + 1;
  }

  return 0;
}
