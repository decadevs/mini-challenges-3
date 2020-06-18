function listSorting(needle, haystack) {
  if(!haystack.length){
    return -1
  }
  let row;
  let col;
  let ans = []
  if(Array.isArray(haystack[0])){
    if(!haystack[0].length){
      return -1
    }
    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < haystack[i].length; j++){
        if(haystack[i].lastIndexOf(needle) > -1){
          row = i;
          col = haystack[row].lastIndexOf(needle)
        }
      }
    }if(row === undefined){
      return -1
    } 
    ans.push(row, col)
  } else {
      ans = haystack.lastIndexOf(needle)
    }
  return ans
}

module.exports = listSorting;
