/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  let myNum = parseInt(value)
  let bits = '00000000'
  let myAns = 0
  let myBin = ''
  while(myNum > 0){
    myBin = (myNum % 2) + myBin
    myNum = Math.floor(myNum / 2)
  }
 if (myBin.length !== 8) {
   bits = bits.slice(myBin.length)
   bits += myBin
 }else {
   bits = myBin
 }
  bits = bits.split('').reverse()
  let index = bits.length - 1
bits.forEach(element => {
  console.log(element)
  myAns += parseInt(element) * Math.pow(2, index)
  index -= 1
});
return myAns.toString()
}
console.log(binaryReversal('121'))

module.exports = binaryReversal;
