/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

 function binaryReversal(value) {
  //Initialise the variable res to store the result as empty string
  let res = "";

  //Convert value to string and binary representation
  let valueInBinary = (value >>> 0).toString(2);

  //Pad the binary string
  let valueInBinaryPad = "00000000".substring(valueInBinary.length) + valueInBinary;

  //Use split() to convert the string to array so you can reverse
  let valueInBinarySplit = valueInBinaryPad.split('');

  //Reverse the resultant array
  let valueInBinaryRev = valueInBinarySplit.reverse();

  //Join back to get back string from the array
  let valueInBinaryJoin = valueInBinaryRev.join('')

  //Convert the string to interger with base 10 from base 2
  let valueDecimal = parseInt(valueInBinaryJoin, 2)

  //Add the decimal to the res and return res
  res += valueDecimal;


  return res;
}
console.log(binaryReversal(47))


module.exports = binaryReversal;

