/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let binary = parseInt(value).toString(2);
  let binaryString = binary.toString();
  let binaryArray = binaryString.split('');
  
  let remainder = binary.length % 8;
  let zerosToBeAdded
  if (remainder !== 0) {
    zerosToBeAdded = 8 - remainder;
  }
  else {
    zerosToBeAdded = 0;
  }

  let zeroArray = [];
  for (let i = 0; i < zerosToBeAdded; i++) {
    zeroArray.push('0');
  }

  binaryPadding = [...zeroArray,...binaryArray];
  let reversePadding = binaryPadding.reverse();

  let reverseBinary = '';
  for (let j = 0; j < reversePadding.length; j++) {
    reverseBinary += reversePadding[j];
  }

  let  decBinDec = parseInt(reverseBinary,2);
  let ans = decBinDec.toString();
  return ans;
}

module.exports = binaryReversal;
