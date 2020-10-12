/* function fib(num) {
  if (num < 2) return 1;
  return fib(num - 1) + fib(num - 2);
} */

// With caching
const cache = { 0: 1, 1: 1 };
function fib(num) {
  if (cache[num]) return cache[num];

  const result = fib(num - 1) + fib(num - 2);
  cache[num] = result;

  return result;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(6));
