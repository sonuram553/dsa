const Pi = [0];

function kmpTable(pat) {
  let i = 0;
  let j = 1;

  while (j < pat.length) {
    if (pat[i] === pat[j]) {
      Pi[j++] = Pi[i++] + 1;
    } else if (i === 0) Pi[j++] = 0;
    else i = Pi[i - 1];
  }
}

function kmpSearch(text, pat) {
  let textLength = text.length;
  let patLength = pat.length;

  if (patLength > textLength) return null;

  kmpTable(pat);

  let i = 0;
  let j = 0;
  let matches = [];

  while (i < textLength) {
    if (j < patLength && text[i] === pat[j]) {
      if (j === patLength - 1) matches.push(i - j);
      i++;
      j++;
    } else if (j === 0) i++;
    else j = Pi[j - 1];
  }

  return matches;
}

//console.log(kmpSearch("AABAACAADAABAABA", "AABA"));
console.log(kmpSearch("AAAAABAAABA", "AAAA"));
console.log(Pi);
