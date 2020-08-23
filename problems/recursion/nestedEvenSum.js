/* Direction

Write a function - nestedEvenSum which accepts an object. The function should return
the sum of all even values. Note the input object can have nested objects.

*/

function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    const value = obj[key];
    if (value instanceof Object) sum += nestedEvenSum(value);

    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}

console.log(nestedEvenSum({ a: 2 }));
console.log(nestedEvenSum({ a: 1 }));
console.log(nestedEvenSum({ a: 2, b: { b: 2 }, c: 2 }));
