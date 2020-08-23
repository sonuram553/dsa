function reverseString(str, index = 0) {
  if (str.length === 1) return str;
  if (index === str.length) return "";

  return reverseString(str, index + 1) + str[index];
}

console.log(reverseString("pokl"));
