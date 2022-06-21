function listSorting(needle, haystack) {

if (!Array.isArray(haystack[0])) {
  return haystack.lastIndexOf(needle);
}

for (let row = haystack.length - 1; row >= 0; row--) {
  let col = haystack[row].lastIndexOf(needle)
  if (col !== -1) {
    return [row, col]
  }
}

return -1
}



module.exports = listSorting;
