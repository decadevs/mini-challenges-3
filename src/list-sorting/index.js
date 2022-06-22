function listSorting(needle, haystack) {
  if (!Array.isArray(haystack[0])) {
    return haystack.lastIndexOf(needle)
  }
  for (let i = haystack.length - 1; i >= 0; i--){
    let j = haystack[i].lastIndexOf(needle)
    if(j != -1) {
      return [i, j]
    }

  }
  return -1
}

module.exports = listSorting;
