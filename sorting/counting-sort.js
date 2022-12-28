// Works for Whole numbers only
// Time Complexity O(n)
// Space Complexity O(n + k), k is the range of the data
function countingSort(nums) {
  const counter = [];
  const max = Math.max(...nums);

  for (let i = 0; i <= max; i++) counter.push(0);
  for (const num of nums) counter[num] += 1;

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];
  for (const num of nums) result[--counter[num - min]] = num;

  return result;
}

// Works for integers
// Time Complexity O(n)
// Space Complexity O(n)
export default function countingSort(nums) {
  const counter = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const num of nums) counter[num - min] += 1;

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];
  for (const num of nums) result[--counter[num - min]] = num;

  return result;
}
