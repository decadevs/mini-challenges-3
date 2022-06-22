/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */



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
