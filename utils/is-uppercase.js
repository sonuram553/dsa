function isUppercase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90;
}

export default isUppercase;
