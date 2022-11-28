function listSorting(needle, haystack) {
  if (haystack.length === 0) {
    return -1
  }

  let event = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      event++;
    }
  }

  if (event === 0) {
    return -1;
  } else if (event === 1) {
    return haystack.indexOf(needle)
  } else {
    return haystack.lastIndexOf(needle)
  }

  if (typeof (haystack[0]) === "object") {
    let column
    let row

    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < haystack[i].length; j++) {
        if (haystack[i][j] === needle) {
          column = haystack[i].lastIndexOf(needle)
          row = i
        }
      }
    }

    if (row == undefined) return -1;
    return [row, column]
  } else {
    return haystack.lastIndexOf(needle)

  }
}

module.exports = listSorting;

