function capitalizeWords(arr, index = 0) {
  if (arr.length === 0) return null;
  if (index === arr.length - 1) return [arr[index].toUpperCase()];

  return [arr[index].toUpperCase(), ...capitalizeWords(arr, index + 1)];
}

console.log(capitalizeWords([]));
console.log(capitalizeWords(['']));
console.log(capitalizeWords(["hello", "world"]));
