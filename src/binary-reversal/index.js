/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    
    // let binaryToDecimal = (binaryStr)=>{
    //     let decimal = binaryStr.split("").reduce( (acc,cv, index,array)=>{ 
    //         let dec = cv*( 2**(array.length - index - 1) )
    //         acc += dec;
    //         return acc
    //     }, 0 );

    //     return decimal;
    // }//binaryToDecimal

    let decimalToBinary = (integerStr)=>{
        let number = Number(integerStr)
        let binaryStr = number.toString(2);

        return binaryStr;
    }

    //get binary version of value
    let binaryStr = decimalToBinary(value);
    //pad the binaryStr if the length of the binaryStr is less than eight
    binaryStr = (binaryStr.length < 8) ?  "0".repeat( 8 - binaryStr.length ) + binaryStr : binaryStr;
    
    //reverse binaryStr
    let reversedBinaryStr = binaryStr.split("").reverse().join("");
    //decimal version of reversedBinaryStr
    let decimal_for_reversedBinaryStr = parseInt(reversedBinaryStr, 2);
    
    return  `${decimal_for_reversedBinaryStr}`
}

module.exports = binaryReversal;
