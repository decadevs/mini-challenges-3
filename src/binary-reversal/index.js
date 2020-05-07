/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let stringToNumber = parseInt(value);
  let decimalToBinary = stringToNumber.toString(2);

  if (decimalToBinary.length < 8) {
    let paddedBinary = "0000000" + stringToNumber.toString(2);
    let actualBinary = paddedBinary.substring(
      paddedBinary.length - 8,
      paddedBinary.length
    );

    let splitted = actualBinary.split("");
    let reversedSplittedString = splitted.reverse();
    let joinedReversedSplittedString = reversedSplittedString.join("");

    let binaryLength = joinedReversedSplittedString.length;
    var sum = 0;

    for (let i = 0, fac = 1; i < binaryLength; i++, fac *= 2)
      sum += fac * joinedReversedSplittedString[binaryLength - i - 1];

    return sum.toString();
  }

  let nonPaddedBinary = stringToNumber.toString(2);
  let newNonPaddedBinary = nonPaddedBinary.substring(
    nonPaddedBinary.length - 8,
    nonPaddedBinary.length
  );

  let splitted = newNonPaddedBinary.split("");
  let reversedSplittedString = splitted.reverse();
  let joinedReversedSplittedString = reversedSplittedString.join("");

  let binaryLength = joinedReversedSplittedString.length;
  var sum = 0;

  for (let i = 0, fac = 1; i < binaryLength; i++, fac *= 2)
    sum += fac * joinedReversedSplittedString[binaryLength - i - 1];

  return sum.toString();
}

module.exports = binaryReversal;
