function isSubstringAPrefix(str, substr) {
  if (substr.length > str.length) return false;

  for (let i = 0; i < substr.length; i++)
    if (substr[i] !== str[i]) return false;

  return true;
}

export default isSubstringAPrefix;
