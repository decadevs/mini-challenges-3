/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  if (value < 0) {
    return 1;
  }
  let binary = parseInt(value).toString(2);
  binary = binary.split("");
  var diff = 8 - binary.length ;
  for (let i = 0; i < diff; i++) {
      binary.unshift("0");
  }
  binary = binary.reverse(); 
  binary = binary.join("");
  var decimal = parseInt(binary, 2);
  decimal = decimal.toString();
  return decimal;
}
module.exports = binaryReversal;

