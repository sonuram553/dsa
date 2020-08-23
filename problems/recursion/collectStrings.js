function collectStrings(obj) {
  let result = [];

  function findStrings(obj) {
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === "string") result.push(value);
      else if (typeof value === "object" && !Array.isArray(value))
        findStrings(value);
    }
  }

  findStrings(obj);
  return result;
}

console.log(collectStrings({ a: "sonu", b: 2, c: "ram" }));
console.log(collectStrings({ a: { a: "sonu" }, b: "ram" }));
