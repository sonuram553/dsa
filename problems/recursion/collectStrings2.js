function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "string") result.push(value);
    else if (typeof value === "object" && !Array.isArray(value))
      result = [...result, ...collectStrings(value)];
  }

  return result;
}

console.log(collectStrings({ a: "sonu", b: 2, c: "ram" }));
console.log(collectStrings({ a: { a: "sonu" }, b: "ram" }));
