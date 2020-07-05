function listSorting(needle, haystack) {
  let store = [];
  for (let row = 0; row < haystack.length; row++) {
    //         if haystack is a one-dimensional array
    if (typeof haystack[row] === "number") {
      return haystack.lastIndexOf(needle);
    } else {
      //     if haystack is multi-dimensional
      for (let row = 0; row < haystack.length; row++) {
        for (let column = 0; column < haystack[row].length; column++) {
          if (haystack[row][column] === needle) {
            if (row > 0) {
              store.length = 0;
              store.push(row);
              store.push(column);
            } else {
              store.push(column);
            }
          }
        }
      }
    }
  }
  if (store.length == 0) {
    return -1;
  }
  return store;
}
module.exports = listSorting;
