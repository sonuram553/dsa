// Returns true if the rightString is less than the leftString. 
// Thus, sort the array words in the ascending or dictionary order.

function compareStrings(leftStr, rightStr) {
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftStr.length && rightIndex < rightStr.length) {
    if (rightStr[rightIndex].charCodeAt(0) < leftStr[leftIndex].charCodeAt(0))
      return true;
    else if (
      rightStr[rightIndex].charCodeAt(0) > leftStr[leftIndex].charCodeAt(0)
    )
      return false;

    leftIndex++;
    rightIndex++;
  }

  // If some characters of leftString is left then it will come after rightString
  if (leftIndex < leftStr.length) return true;

  return false;
}

export default compareStrings;