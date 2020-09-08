/*

Number  6534
Places  3210

*/

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}

function getNumOfDigits(num) {
  if (num === 0) return 1;

  num = Math.abs(num);
  let count = 0;

  while (num) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

function mostDigits(arr) {
  let max = 0;

  for (let item of arr) {
    let count = getNumOfDigits(item);
    if (count > max) max = count;
  }

  return max;
}

function radixSort(arr) {
  for (let place = 0; place < mostDigits(arr); place++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], place);
      let bucket = buckets[digit] || [];
      bucket.push(arr[i]);
      buckets[digit] = bucket;
    }

    arr = [].concat(...buckets);
    // Alternate to above line
    /* let i = 0;
    let j = 0;
    while (i < arr.length) {
      while (buckets[j] && buckets[j].length) {
        arr[i++] = buckets[j].shift();
      }
      j++;
    } */
  }

  return arr;
}

console.log(radixSort([32, 17, 1, 0]));
