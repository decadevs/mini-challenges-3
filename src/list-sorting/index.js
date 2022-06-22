function listSorting(needle, haystack) {
  if(!Array.isArray(haystack[0])){
    return haystack.lastIndexOf(needle)
  }
  for(let r = haystack.length - 1; r >= 0; r--){
    let l = haystack[r].lastIndexOf(needle)
    if(l !== -1) {
    return [r,l]
    }
  }
  return -1
}

module.exports = listSorting;
