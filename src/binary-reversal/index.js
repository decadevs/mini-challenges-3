/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let myBinary = parseInt(value, 10).toString(2);
  const binaryLenght = myBinary.length
  if( binaryLenght < 8) {
    let noOfZero = 8 - binaryLenght;
    for (let i = 0; i < noOfZero; i++){
      myBinary = "0" + myBinary
    }
  }
  let reversedBinary = myBinary.split("").reverse().join("")
  let finalResult = (parseInt(reversedBinary, 2)).toString()
  return finalResult
}

module.exports = binaryReversal;
