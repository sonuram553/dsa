// Rotate an array left by d elements using Reversal Algorithm
// Time Complexity O(n)

const reverseArray = require("../../utils/reverse-array");

function rotate(arr, d, n) {
  d = d % n;
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, n - 1);
  reverseArray(arr, 0, n - 1);
}
