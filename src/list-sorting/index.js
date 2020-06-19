function listSorting(needle, haystack) {
  let result

  let spreadArray = [].concat(...haystack)
  if(spreadArray.indexOf(needle) === -1){
    result = -1
  }
  else if(haystack[0].constructor !== Array) {
    result = haystack.lastIndexOf(needle)
    // return result
  }
  else{
    for(let i = 0; i < haystack.length; i++) {
      for(let j = 0; j < haystack[i].length; j++) {
        if(haystack[i][j] === needle) {
          result = [i, j]
          // return result
        }
      }
    }
  }
  return result
}

module.exports = listSorting;
