/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let stringToNum = parseInt(value);
  let numToBinary = Array.from(stringToNum.toString(2));
  let numToBinaryCopy = [...numToBinary];
  let numOfLoop = 8 - numToBinary.length;

  for (let i = 0; i < numOfLoop; i++) {
    numToBinaryCopy.unshift(0);
  }

  let reversedBinaryString = numToBinaryCopy.reverse().join("");

  let binaryToNum = parseInt(reversedBinaryString, 2);

  return binaryToNum.toString();
}

module.exports = binaryReversal;
