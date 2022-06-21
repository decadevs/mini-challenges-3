function listSorting(needle, haystack) {
  if (!Array.isArray(haystack[0])) {
    return haystack.lastIndexOf(needle)
  }

  for (let a = haystack.length - 1; a >= 0; a--) {
    let b = haystack[a].lastIndexOf(needle)
    if (b !== -1) {
      return [a, b]
    }
  }

  return -1
}

module.exports = listSorting;
