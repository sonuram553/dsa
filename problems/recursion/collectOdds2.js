// With pure recursion
function collectOdds(arr, index = 0) {
  let result = [];

  if (index === arr.length) return result;
  if (arr[index] % 2 !== 0) result.push(arr[index]);
  result = [...result, ...collectOdds(arr, index + 1)];

  return result;
}

console.log(collectOdds([1, 2, 4, 3]));
