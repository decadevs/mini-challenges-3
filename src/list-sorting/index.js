// module.exports = listSorting;

function listSorting(needle, haystack) {
  let needleIndex = -1;
  haystack.forEach((row, rowIndex) => {
    if (typeof row === "object") {
      row.forEach((column, columnIndex) => {
        if (column === needle) {
          needleIndex = [rowIndex, columnIndex];
        }
      });
    } else {
      if (row === needle) {
        needleIndex = rowIndex;
      }
    }
  });
  return needleIndex;
}
module.exports = listSorting;
