/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  var x = 793;
  var y = x.toString(2);
  var yl = y.length;
  var mask = (Math.pow(2,yl)-1);
  var result = -x & mask
  document.write(result.toString(2)+"<br/>");
}

module.exports = binaryReversal;
