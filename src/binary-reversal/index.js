/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  if (value < 0) {
    return 1;
  }
  let binary = value.toString(2);
  binary = binary.split("");
  
  if ((binary.length) % 8 !=0) 
  {
    var diff = binary.length % 8;
    for (let i = 0; i < 8 - diff; i++) {
      binary.unshift("0");
    }
  }
  binary = binary.reverse(); 
  binary = binary.join("");
  let decimal = parseInt(binary,2);
  decimal= decimal.toString();
    return decimal;

}
module.exports = binaryReversal;
