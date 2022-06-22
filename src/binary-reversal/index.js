/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let num = parseInt(value);
  let binary = num.toString(2);
  let numPadded = binary.padStart(8, 0);
  let reversal = numPadded.split("").reverse().join("");
  let answer = parseInt(reversal, 2);

  return `${answer}`;
}

module.exports = binaryReversal;
