/* Direction

Write a function - stringifyNumbers which accepts an object. The function should return a 
new object with all the number values converted to string. Note the input object have 
nested objects.

 */

function stringifyNumbers(obj) {
  let result = {};

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "number") result[key] = value.toString();
    else if (typeof value === "object" && !Array.isArray(value))
      result[key] = stringifyNumbers(value);
    else result[key] = value;
  }

  return result;
}

console.log(stringifyNumbers({ a: "1", b: { a: 1, b: 1 } }));
console.log(stringifyNumbers());
