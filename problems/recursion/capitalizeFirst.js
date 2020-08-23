function capitalizeFirst(arr, index = 0) {
  if (arr[index] === "") return [""];

  let capitalizedWord = arr[index][0].toUpperCase() + arr[index].slice(1);

  if (index === arr.length - 1) return [capitalizedWord];

  return [capitalizedWord, ...capitalizeFirst(arr, index + 1)];
}

console.log(capitalizeFirst([""]));
console.log(capitalizeFirst(["hello", "world"]));
