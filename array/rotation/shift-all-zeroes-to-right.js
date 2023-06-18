function shiftZeroes(nums) {
  let i = 0;
  let j = null;
  const n = nums.length;

  while (i < n) {
    if (nums[i] === 0) {
      if (j === null) j = i + 1;
      while (j < n && nums[j] === 0) {
        j++;
      }

      if (j === n) break;
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i++;
  }
}
