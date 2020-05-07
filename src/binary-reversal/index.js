/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let binaryValue = parseInt(value).toString(2)

    const binaryArray = binaryValue.split('')
    let binaryLength = binaryArray.length
    if(binaryLength < 8 ){
        while(binaryLength < 8){
            binaryArray.unshift(0)
            binaryLength++
        }
    }

    if(binaryLength > 8 && binaryLength < 16){
        while(binaryLength < 16){
            binaryArray.unshift(0)
            binaryLength++
        }
    }

    if(binaryLength > 16 && binaryLength < 32){
        while(binaryLength < 32){
            binaryArray.unshift(0)
            binaryLength++
        }
    }
    if(binaryLength > 32 && binaryLength < 64){
        while(binaryLength < 16){
            binaryArray.unshift(0)
            binaryLength++
        }
    }
binaryArray.reverse()

const newString = binaryArray.join('')

const newValue = parseInt(newString, 2).toString()

return newValue

}

module.exports = binaryReversal;
