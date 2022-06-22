/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binary = parseInt(value).toString(2);  //Converts value to binary
  let pad = ''

  if (binary.length < 8) {
    pad = binary.padStart(8, "0");  //Pads it with zeros
  }
  //Splits the  value into an array reverses it converts it to a string
  let reverse = (pad || binary).split('').reverse().join("");
  return parseInt(reverse, 2).toString(); //Converts the number to a decimal
}

module.exports = binaryReversal;
