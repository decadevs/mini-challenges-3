function listSorting(needle, haystack) {
  let haystackLength = haystack.length;

  for (let j = haystackLength - 1; j >= 0; j--) {
    let index = haystack[j];

    if (typeof index != "object") return haystack.lastIndexOf(needle);

    if (index.lastIndexOf(needle) > -1) return [j, index.lastIndexOf(needle)];
  }

  return -1;
}

module.exports = listSorting;
