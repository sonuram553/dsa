/* Direction

Write a function - countUniqueValues which accepts a sorted array of integers. The function
should return no. of unique values in the array.

 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) count++;
  }

  return count;
}

console.log(countUniqueValues([]));
console.log(countUniqueValues([0,1,1,2]));
console.log(countUniqueValues([1,1,2,2,3,3,3,4,4,5,5,6]));