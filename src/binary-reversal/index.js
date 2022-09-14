/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    
    const numBer = parseInt(value)
    const biNary = numBer.toString(2)
    
    let paddedBin = biNary.padStart(8, 0).split("")
    let binJoined = paddedBin.reverse().join("")

    let result = 0
    for(let i = 0; i < binJoined.length; i++){
        result += binJoined[i] * Math.pow(2, binJoined.length - i -1)
    }

   return result.toString()

    
    
}

module.exports = binaryReversal;
