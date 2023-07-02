// KMP Algorithm for Pattern Searching
// https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/

export function isSubstring(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = computeLPSArray(pattern);

  let i = 0;
  let j = 0;
  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) return true;

    if (i < n && text[i] !== pattern[j]) {
      if (j === 0) i++;
      else j = lps[j - 1];
    }
  }

  return false;
}

function computeLPSArray(pattern) {
  let i = 1;
  let len = 0;
  const n = pattern.length;
  const lps = new Array(n).fill(0);

  while (i < n) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len === 0) i++;
      else len = lps[len - 1];
    }
  }

  return lps;
}
