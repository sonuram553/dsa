// Array must be sorted

function removeDuplicateInPlace(arr) {
  let i = 1;
  const n = arr.length;

  while (i < n && arr[i] !== arr[i - 1]) i++;

  i--;

  for (let j = i + 1; j < n; j++) {
    if (arr[i] !== arr[j]) arr[++i] = arr[j];
  }

  return i;
}

export default removeDuplicateInPlace;
