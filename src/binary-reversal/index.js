/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
	function binaryReversal(value) {
	if (value ==="") {
		return "";
	} else if (value === undefined || typeof (value) != "string") {
		throw Error ("Please provide an input")
	}
		let binary = Number(value).toString(2).split("");
		let lengthOfBinary = binary.length;
		
		while (lengthOfBinary !== 8){
			binary.unshift("0");
			lengthOfBinary++;
		}
		binary.reverse();
		let power = 7;
		let outPut=0;
		for (let i = 0; i < binary.length; i++) {
			let c =Math.pow(2, power);
			let e = binary[i] *c;
			outPut += e;
			power--;
		}
		return outPut.toString();
	}
module.exports = binaryReversal;
