function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) if (s[start++] !== s[end--]) return false;

  return true;
}

export default isPalindrome;
