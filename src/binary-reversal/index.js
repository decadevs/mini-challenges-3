/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

/**Stepts to binary reversal
 * convert the string value into binary using toString method
 * pad the conversion to 8 bits
 * reverse the 8-bit conversion using while loop
 * use regex to match one or more of the binary group of 01k
 * use parseInt to convert the reverse bits to Integer base 10
 */
function binaryReversal(value) {
    let valueNum=Number(value)
    let binaryValue=valueNum.toString(2)
    let paddedBinaryValue=binaryValue.padStart(8,0)
    
    let i=paddedBinaryValue.length
    let reversedBinaryValue=""
    while(i>=0){
        reversedBinaryValue+=paddedBinaryValue[i]
        i-=1
    }

    let reverseBinaryOnlyZeroOne=reversedBinaryValue.match(/[01]+/)[0]
    
    let integerOfReversedBinaryZeroOne=parseInt(reverseBinaryOnlyZeroOne,2)

    return String(integerOfReversedBinaryZeroOne)
    
}


module.exports = binaryReversal;
