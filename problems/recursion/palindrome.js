function palindrome(str, index = 0) {
  if (str.length < 2) return true;

  const mid = Math.floor((str.length - 1) / 2);
  if (index > mid) return true;

  if (str[index] === str[str.length - index - 1])
    return palindrome(str, index + 1);
  return false;
}

console.log(palindrome("lkkkl"));
