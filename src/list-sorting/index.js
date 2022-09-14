// function listSorting(needle, haystack) {}
function listSorting(needle, haystack) {
    let rowIndex = haystack.length - 1;
    let colIndex = -1;
  
    for (let i = haystack.length - 1; i >= 0; i--) {
      if (Array.isArray(haystack[i])) {
        rowIndex = i;
        colIndex = haystack[i].lastIndexOf(needle);
        if (colIndex != -1) {
          return [rowIndex, colIndex];
        }
      } else {
        if (haystack[i] == needle) return i;
      }
    }
    return -1;
  }
module.exports = listSorting;
