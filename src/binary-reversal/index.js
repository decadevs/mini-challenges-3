/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  const baseTwo = parseInt(value).toString(2); //Change to number and covert to base 2
  //Obtain the number of zero to make the digits multiple of 8
  const requiredLength = Math.ceil(baseTwo.length / 8);
  const noOfZeros = 8 * requiredLength - baseTwo.length;
  //Pad the base 2 string with the required zero(s)
  let paddedTwo = "0".repeat(noOfZeros) + baseTwo;
  //Reverse the digits of the string
  let reverseTwo = paddedTwo.split("").reverse().join("");
  let newValue = parseInt(reverseTwo, 2).toString(); //Convert it back to base 10 string
  return newValue;
}

module.exports = binaryReversal;
