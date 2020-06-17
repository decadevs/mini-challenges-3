function listSorting(needle, haystack) {
  let result = haystack.lastIndexOf(needle)
  return result
}

console.log(listSorting(4, [1,1,2,2,3,3,4,5,6,4,2,3,4,3]))

module.exports = listSorting;
