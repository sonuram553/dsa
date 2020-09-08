function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(leftArr, rightArr) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr.push(leftArr[i]);
      i++;
    } else {
      arr.push(rightArr[j]);
      j++;
    }
  }

  arr = [...arr, ...leftArr.slice(i), ...rightArr.slice(j)];
  return arr;
}

console.log(mergeSort([0, 2, 3, 90, 1, 1]));
