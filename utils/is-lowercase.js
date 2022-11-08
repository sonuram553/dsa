function isLowercase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 97 && code <= 122;
}

export default isLowercase;
