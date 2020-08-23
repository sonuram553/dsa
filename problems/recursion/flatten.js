function flatten(arr, index = 0) {
  if (index === arr.length) return [];

  if (!(arr[index] instanceof Array)) {
    return [arr[index], ...flatten(arr, index + 1)];
  }

  let newArr = flatten(arr[index]);

  return [...newArr, ...flatten(arr, index + 1)];
}

console.log(flatten([[1, 2], 3, [4, [5]]]));
