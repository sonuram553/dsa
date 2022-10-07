// Rotate an array left by d elements using Juggling Algorithm
// Time Complexity O(N)

const gcd = require("../../utils/gcd");

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
