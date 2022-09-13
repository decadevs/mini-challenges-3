function listSorting(needle, haystack) {
    if (needle.includes(haystack) === true) {
        return needle.indexOf(haystack)
    } else {
        return -1
    }
    }
// const arr = [[0], [1]];

// function listSorting(needle, haystack) {
//     if (!Array.isArray(haystack[0])) {
//       return haystack.lastIndexOf(needle);
//     }

//     for (let r = haystack.length - 1; r >= 0; r--) {
//       let c = haystack[r].lastIndexOf(needle)
//       if (c !== -1) {
//         return [r, c]
//       }
//     }
//     return -1;
//   }

module.exports = listSorting;
