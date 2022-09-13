function listSorting(needle, haystack) {
    // if haystack is not a single array, return last index of haystack(needle).
        if(!Array.isArray(haystack[0])){
          return haystack.lastIndexOf(needle)
      }
      // loop through the haystack row using for loop in descending order
      // loop through the haystack column to identify the last index(needle)
      // if the last index of the colum exists, return row, column, else return -1.
          for (let row = haystack.length-1; row >= 0; row--){
              let col = haystack[row].lastIndexOf(needle)
                  if (col !==-1){
                      return [row, col]
                  }
          }
          return -1
      }
      
    module.exports = listSorting;
    
