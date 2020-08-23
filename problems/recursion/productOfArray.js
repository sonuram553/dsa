function productOfArray(arr, index = 0) {
  if (arr.length === 0) return null;
  if (index === arr.length) return 1;
  return arr[index] * productOfArray(arr, index + 1);
}

console.log(productOfArray([10]));
