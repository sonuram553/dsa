// Naive Approach
// Time Complexity: O(N*d)

function rotate(arr, d, n) {
  // In case the rotating factor is greater than n
  d = d % n;

  for (let i = 0; i < d; i++) {
    const first = arr[0];
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = first;
  }

  return arr;
}