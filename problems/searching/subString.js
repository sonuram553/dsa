function subString(long, short) {
  if (short.length > long.length) return null;

  for (let i = 0; i <= long.length - short.length; i++) {
    if (short[0] !== long[i]) continue;

    let isSub = true;
    for (let j = 1; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        isSub = false;
        break;
      }
    }

    if (isSub) return true;
  }

  return false;
}

console.log(subString("abc hello world", "hel"));
