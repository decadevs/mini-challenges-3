/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  //convert value to binary
  value = Number(value)
  value = value.toString(2)
  //convert value to string, store in an array
  let binary = String(value).split("");
  console.log(binary)
  //loop through array to check if it is 8 digits
  for (let i = 0; i < binary.length; i++){
    //if not, add Zeros before current number
    if (binary.length < 8){
      binary.unshift("0");
    }
  }
  //reverse digits in array
  binary.reverse();
  //convert arr to string
  binary = binary.join("")
  //convert binary to decimal
  let decimal = parseInt(binary, 2)
  return String(decimal);
}

module.exports = binaryReversal;
