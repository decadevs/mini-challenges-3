/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binary = parseInt(value).toString(2);
  let pad = ''

  if (binary.length < 8) {
    pad = binary.padStart(8, "0");
  }
  let reverse = (pad || binary).split('').reverse().join("");
  return parseInt(reverse, 2).toString();
}

module.exports = binaryReversal;
