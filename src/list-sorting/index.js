function listSorting(needle, haystack){
  let multiDimArrIndex = []
  //handles a single array
  if (!Array.isArray(haystack[0])){
    return haystack.lastIndexOf(needle)
  }
  //handles multi-dimensional array

  for (let row = haystack.length - 1; row >= 0; row--){
    let column = haystack[row].lastIndexOf(needle);
      if (column !== -1){
        multiDimArrIndex.push(row);
        multiDimArrIndex.push(column);
        return multiDimArrIndex;
      }
  }
  return -1;
}

module.exports = listSorting;
