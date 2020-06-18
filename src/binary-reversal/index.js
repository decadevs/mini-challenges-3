/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

	let newArr = [];
	let n = parseInt(value);
	let decimalNumber=0;
	let multipliers=[];

	while(n>0){
		newArr.push(n%2);
		n=Math.floor(n/2);
	}


	if(newArr.length<8){
		let b = 8-newArr.length;
		while(b>0){
			newArr.push(0);
			b--;
		}
	}

  x=newArr.length-1;
  while(x>=0){
  	multipliers.push(x);
  	x--;
  }

  for (let i = 0; i < newArr.length; i++) {
  	decimalNumber= decimalNumber + (newArr[i]*Math.pow(2,multipliers[i]));
  }

  return decimalNumber+"";
}

module.exports = binaryReversal;
