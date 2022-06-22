/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let input = parseInt(value, 10).toString(2);
  const inputLength = input.length;

  const byteLen = 8 - (inputLength % 8);
  const num = 0;
  inputLength % 8 !== 0
    ? (input = new Array(byteLen + 1).join(num) + input)
    : input;
  input = input.split("").reverse().join("");
  input = parseInt(input, 2).toString();
  return input;
}

module.exports = binaryReversal;
console.log(binaryReversal("213"));
