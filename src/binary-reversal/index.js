/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
//function binaryReversal(value) {
    // valueToBinary = Number(value).toString(2);
    // paddedBinary = valueToBinary.length % 8 === 0 ? 0 : 8 - (valueToBinary.length % 8);
    // console.log(paddedBinary)
    // paddedReversedBinaryValue = [...Array(paddedBinary).fill(0),...valueToBinary].join('');
    // console.log(paddedReversedBinaryValue)
    // ReversedBinaryStr = paddedReversedBinaryValue.split('').reverse().join('');
    // console.log(ReversedBinaryStr)
    // reversedBinary2Decimal = parseInt(ReversedBinaryStr, 2);
    // return reversedBinary2Decimal;


//   function binaryReversal(value) {
//    let decimalToBinary = parseInt(value, 10).toString(2)
//    while(decimalToBinary.length < 8) {
//      decimalToBinary = "0" + decimalToBinary
//    }
//    let reversedString = decimalToBinary.split("").reverse().join("")
//    let binaryToDecimal = (parseInt(reversedString, 2)).toString()
//    return binaryToDecimal
//  }


 function binaryReversal(value) {
     let newVal = parseInt(value);
     let arrVal = newVal.toString(2).split("");
     //while the length of the arr / 8 is not equal to 0 keep adding 0 to the beginning of the arr to pad it to the nearest 8 bits
     while (arrVal.length % 8 !== 0) {
         arrVal.unshift(0)
     }
     arrVal.reverse();

     // create a new string to hold the new reversed string
     let newRevStr = arrVal.join("");
     
     //return the decimal form of the reversed str
     let decimalVal = parseInt(newRevStr, 2);
     console.log(decimalVal);

     return decimalVal.toString();

 }

module.exports = binaryReversal;
