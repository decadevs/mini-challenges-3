function listSorting(needle, haystack){
  //handles a single array
  if (!typeof haystack[0] == "object"){
      return haystack.lastIndexOf(needle)
  }
  //handles multi-dimensional array

  for (let row = haystack.length - 1; row >= 0; row--){
    let column = haystack[row].lastIndexOf(needle);
    //check if number exists
      if (column !== -1){
        return [row, column];
      }
  }
  //if number does not exist
  return -1;
}

//Error - haystack[row].lastIndexOf is not a function
// haystack[row] is an array, tried it and it worked but it's throwing an error here. 

module.exports = listSorting;
