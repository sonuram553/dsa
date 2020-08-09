// Using RegExp
/* function charCounts(str) {
  const charsMap = {};

  for (let char of str) {
    const found = char.match(/([A-Z])|[a-z0-9]/);
    if (!found) continue;

    if (found[1]) {
      // Capital case character
      char = char.toLowerCase();
    }
    charsMap[char] = ++charsMap[char] || 1;
  }

  return charsMap;
} */

// Using ASCII values
function charCounts(str) {
  const charsMap = {};

  for (let char of str) {
    if (!isAlphaNumeric(char)) continue;

    char = char.toLowerCase();
    charsMap[char] = ++charsMap[char] || 1;
  }

  return charsMap;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  if (
    (code > 64 && code < 91) ||
    (code > 96 && code < 123) ||
    (code > 47 && code < 58)
  )
    return true;

  return false;
}

console.log(charCounts("He h; 89!"));
