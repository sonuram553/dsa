/* Directions

Write function - sumZero which accepts a sorted array of integers. The function should
return an array of first two numbers whose sum is zero otherwise returns undefined.

 */

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] > -1) return;

    let sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];
    else if (sum > 0) end--;
    else start++;
  }
}

console.log(sumZero([]));
console.log(sumZero([-1]));
console.log(sumZero([0, 1, 3]));
console.log(sumZero([-1, 1, 2, 3]));
