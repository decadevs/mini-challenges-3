/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let decToBinary = num => {
        let binary = '', quotient = num
        while(quotient > 1){
            binary += quotient % 2
            quotient = Math.floor(quotient/2)
        }
        binary += 1
        return binary
    }
    
    let reversedBin = decToBinary(value)
    count = 8-decToBinary(value).length
    let i = 0
    while(i < count){
        reversedBin += 0
        i += 1
    }
    let binaryToDec = string => {
        let dec = 0, pow = string.length - 1
        for(item of string){
            dec += (item * (2**pow))
            pow -= 1
        }
        return `${dec}`
    }

    return binaryToDec(reversedBin)
}

module.exports = binaryReversal;
