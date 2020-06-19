/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    // get the number value of the value in the funtion
    let numVal = parseInt(value);
    // change the number value to binary form
    let binVal = numVal.toString(2);
    // then change it to an array to loop
    let binArr = binVal.split("");
    // console.log(binArr);

    //while the length of the arr / 8 is not equal to 0 keep adding 0 to the beginning of the arr to pad it to the nearest 8 bits
    while (binArr.length % 8 !== 0) {
        binArr.unshift(0)
    }
    // console.log(binArr);
    binArr.reverse();

    // create a new string to hold the new reversed string
    let newRevStr = binArr.join("");
    // console.log(newRevStr);

    //return the decimal form of the reversed str
    let decimalVal = parseInt(newRevStr, 2);
    console.log(decimalVal);

    return decimalVal.toString();

}
console.log(binaryReversal("10")); //128

module.exports = binaryReversal;