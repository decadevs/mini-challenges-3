/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let number = Number(value);
  let binaryNumber = number.toString(2);

  while (binaryNumber.length !== 8) {
    let zero = '0'
    binaryNumber = zero + binaryNumber;
  }
  let reversed = binaryNumber.split("").reverse().join("");
  let outcome = Number(parseInt(reversed, 2));
  return String(outcome);
}
console.log(binaryReversal('52'));
module.exports = binaryReversal;
