// Rotate an array left by d elements
// Use Leetcode for Testing

const gcd = require("../../utils/gcd");
const reverseArray = require("../../utils/reverse-array");

// Time Complexity: O(N*d)
// Space Complexity: O(1)
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

// Juggling Algorithm
// Time Complexity O(N)
// Space Complexity O(1)
function rotate(arr, d, n) {
  d = d % n;

  for (let i = 0; i < gcd(n, d); i++) {
    const first = arr[i]; // First element from the set
    let j = i;

    while (true) {
      let k = j + d;

      if (k >= n) k -= n;
      if (k === i) break;

      arr[j] = arr[k];
      j = k;
    }

    arr[j] = first;
  }

  return arr;
}

// Reversal Algorithm
// Time Complexity O(n)
// Space Complexity O(1)
function rotate(arr, d, n) {
  d = d % n;
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, n - 1);
  reverseArray(arr, 0, n - 1);
}
