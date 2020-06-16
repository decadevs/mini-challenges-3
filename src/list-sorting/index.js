const listSorting = (needle, haystack) => {

  if (typeof haystack[0] == 'number') {
    for (let i = haystack.length - 1; i >= 0; i--) {
      if (haystack[i] === needle) {
        return i
      };
    };
  };

  for (let i = haystack.length - 1; i >= 0; i--) {
    for (let j = haystack[i].length - 1; j >= 0; j--) {
      if (haystack[i][j] === needle) {
        return [i, j]
      };
    };
  };
  return -1
};


module.exports = listSorting;
