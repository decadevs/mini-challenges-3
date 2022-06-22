/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

  let toBinary = Number(value).toString(2)
  let eightDigits = `0000000${toBinary}`.slice(-8)
  let toReversed ="";
  for(let i = eightDigits.length-1;i>=0;i--){
     toReversed +=eightDigits[i];
  }
 let toDecimal = parseInt(toReversed,2);

 return String(toDecimal);

}

module.exports = binaryReversal;
