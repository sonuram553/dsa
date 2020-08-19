function collectOdds(arr) {
  const result = [];

  function isOdd(index) {
    if (index === arr.length) return;

    if (arr[index] % 2 !== 0) result.push(arr[index]);
    isOdd(index + 1);
  }

  isOdd(0);
  return result;
}

console.log(collectOdds([1, 2, 3, 8]));
