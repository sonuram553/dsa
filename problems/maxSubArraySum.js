/* Direction

Write a function - maxSubArraySum which accepts an array of integers and a number n.
The function should return the max sum of n consecutive elements from the array.

*/

function maxSubArraySum(arr, n) {
  if (arr.length < n) return null;

  let sum = 0;
  let max = 0;
  let i = 0;

  for (; i < n; i++) {
    sum += arr[i];
  }

  max = sum;

  for (; i < arr.length; i++) {
    sum += -arr[i - n] + arr[i];
    if (sum > max) max = sum;
  }

  return max;
}

console.log(maxSubArraySum([], 1)); //null
console.log(maxSubArraySum([1, 2], 3)); //null
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10