function listSorting(needle, haystack) {
  const notFound = -1;
  const found = [];
  let column = 0;
  let row = 0;
  let index;
  let check = false;

  if (haystack.length === 0) {
    return notFound;
  }

  if (Array.isArray(haystack[0])) {
    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < haystack[i].length; j++) {
        if (haystack[i][j] === needle) {
          check = true;
          column = j;
          row = i;
        }
      }
    }

    if (!check) {
      return notFound;
    } else {
      found.push(row, column);
      return found;
    }
  } else {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        index = i;
      }
    }

    if (index === undefined) {
      return notFound;
    } else {
      return index;
    }
  }
}

module.exports = listSorting;
