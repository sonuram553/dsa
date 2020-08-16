/* function fib(num) {
  if (num === 0 || num === 1) return 1;

  return fib(num - 1) + fib(num - 2);
} */

// With caching
const cache = {};
function fib(num) {
  if (num === 0 || num === 1) return 1;
  if (cache[num]) return cache[num];

  const result = fib(num - 1) + fib(num - 2);
  cache[num] = result;
  return result;
}

console.log(fib(5));
