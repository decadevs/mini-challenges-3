/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let convertedDecimal
  let reversedBin
  let binaryVal = parseInt(value).toString(2); 

  while(binaryVal.length<8) {
    binaryVal = "0" + binaryVal
  }
  
  reversedBin = binaryVal.split('').reverse().join(''); 
  
  convertedDecimal = parseInt(reversedBin,2).toString(); 
  
  return convertedDecimal;
}

module.exports = binaryReversal;
