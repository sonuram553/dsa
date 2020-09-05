function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentVal = arr[i + 1];

    let j = i;
    for (; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 3, 4, 2]));
console.log(insertionSort([5, 90, 10, 2]));
