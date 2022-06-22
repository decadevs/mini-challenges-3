function listSorting(needle, haystack) {
    if (!Array.isArray(haystack[0])) {
        return haystack.lastIndexOf(needle)
      }
      for (let row = haystack.length - 1; row >= 0; row--) {
          let col = haystack[row].lastIndexOf(needle)
          if (col !== -1) {
            return [row, col]
          }
        }
        return -1;
}
console.log( listSorting(2, [1,3,4,5,2,3,4,5,6,2]))
module.exports = listSorting;
