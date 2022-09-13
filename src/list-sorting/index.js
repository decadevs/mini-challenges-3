function listSorting(needle, haystack) {
    let row = null;
    let column = null;
    let result = null;
    if (Array.isArray(haystack[0])) {
      for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < haystack[i].length; j++) {
          if (haystack[i][j] === needle) {
            row = i;
            column = j;
          }
        }
      }
      
    } else if (!Array.isArray(haystack[0])) {
      column = haystack.lastIndexOf(needle);
    }
    if (row || row === 0) {
      result = [row, column];
    } else result = column;
    // return result === null ? -1:result
    if(result === null){
      return -1;
    }
    return result;
  }
  module.exports = listSorting;
