/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

// Function converts integer to binary
const toBinary = (num) => {
    let intValue = parseInt(num)
    if(intValue > 0){
        return intValue.toString(2)
    }
}

function binaryReversal(value) {
    let paddedArr = []
    let binaryValue = toBinary(value) // Convert value to binary

    paddedArr.push(binaryValue)

    binaryArray = paddedArr.join('').split('') // Convert to array

    for(let i = 0; i < binaryArray.length; i++){
        if(binaryArray.length < 8 || (binaryArray.length > 8 && binaryArray.length < 16)){
            binaryArray.unshift(0) // Pad with 0 to capture 8bits and 16bits (if more that 8bit)
        }
        else{ 
            reversedArr = binaryArray.reverse().join('')
            let result = parseInt(reversedArr, 2) // convert to decimal
            return `${result}` // Return result as string
        }
    }
    
    let reversedBinary = binaryArray.reverse().join('')

    let result = parseInt(reversedBinary, 2 )
    return `${result}` // Return result as string
    
}

module.exports = binaryReversal;
