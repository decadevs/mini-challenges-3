/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
	let paddedbinary = parseInt(value).toString(2).padStart(8,0)
	let reversedBinary = paddedbinary.split('').reverse().join('')
	let decimal = parseInt(reversedBinary,2)
	return decimal.toString()
}

module.exports = binaryReversal;
