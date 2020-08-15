/* function anagram(strLeft, strRight) {
  if (strLeft.length !== strRight.length) return false;

  let charMapLeft = {};
  let charMapRight = {};

  for (let char of strLeft) {
    charMapLeft[char] = ++charMapLeft[char] || 1;
  }

  for (let char of strRight) {
    charMapRight[char] = ++charMapRight[char] || 1;
  }

  for (let key in charMapLeft) {
    if (!charMapRight[key] || charMapLeft[key] !== charMapRight[key])
      return false;
  }

  return true;
} */

// Not using 3rd loop and second characterMap
function anagram(strLeft, strRight) {
  if (strLeft.length !== strRight.length) return false;

  let charMapLeft = {};

  for (let char of strLeft) {
    charMapLeft[char] = ++charMapLeft[char] || 1;
  }

  for (let char of strRight) {
    // can't find the character or its value is zero then it's not an anagram
    if (!charMapLeft[char]) return false;
    charMapLeft[char] -= 1;
  }

  return true;
}

console.log(anagram("", ""));
console.log(anagram("art", "tar"));
