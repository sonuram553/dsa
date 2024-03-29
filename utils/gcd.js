function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

export default gcd;