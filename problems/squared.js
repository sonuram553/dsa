/* 
Directions
Write a function - squared, that takes two arrays as argument. The function should return
true if every value in the array has its corresponding value squared in second array. 
The frequency of values must be same.

Examples
squared([1, 2, 3], [1, 9, 4])   return true
squared([1, 2, 3], [1, 9])      return false
squared([1, 2, 1], [1, 4, 4])   return false
*/



// Complexity O(n^2)
/* function squared(leftArr, rightArr) {
  if (leftArr.length !== rightArr.length) return false;

  for (let leftArrItem of leftArr) {
    const index = rightArr.indexOf(leftArrItem ** 2);
    if (index === -1) return false;

    rightArr.splice(index, 1);
  }

  return true;
} */


// Complexity O(n)
function squared(leftArr, rightArr) {
  if (leftArr.length !== rightArr.length) return false;

  const leftArrItemsMap = {};
  const rightArrItemsMap = {};

  for (let item of leftArr) {
    leftArrItemsMap[item] = ++leftArrItemsMap[item] || 1;
  }

  for (let item of rightArr) {
    rightArrItemsMap[item] = ++rightArrItemsMap[item] || 1;
  }

  for (let key in leftArrItemsMap) {
    if (
      !rightArrItemsMap[key ** 2] ||
      leftArrItemsMap[key] !== rightArrItemsMap[key ** 2]
    )
      return false;
  }

  return true;
}

console.log(squared([1, 2, 1, 2], [1, 4, 1, 4]));
console.log(squared([3, 1, 3], [1, 9, 0]));
