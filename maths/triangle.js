function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export { isTriangle, areaOfTriangle };
