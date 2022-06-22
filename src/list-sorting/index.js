function listSorting(needle, haystack) {
  if (!Array.isArray(haystack[0])){
    return haystack.lastIndexOf(needle);
  }

  for (let i = haystack.length - 1; i >= 0; i--){
    let j = haystack[i].lastIndexOf(needle);
    console.log(j)
    console.log(i)
    if (j !== -1){
      console.log(i)
      return [i, j]
    }
  }
  return -1
}

module.exports = listSorting;
