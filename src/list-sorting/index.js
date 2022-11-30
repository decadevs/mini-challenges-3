function listSorting(needle, haystack) {

    if (haystack.length == 0) return -1;
    let arr = [];

    if (typeof haystack[0] == "object") {
      for (let i = 0; i < haystack.length; i++) {
        if (haystack[i].length != 0 && haystack[i].lastIndexOf(needle) != -1) {
          arr.push(haystack[i].lastIndexOf(needle));
        } else {
          arr.push(null);
        }
      }
      if (arr.every((el) => el == null)) return -1;
      

      let arr2 = [];

      for (let i = 0; i < arr.length; i++) {
        let arr1 = [];
        if (typeof arr[i] == "number") {
          arr1.push(arr.lastIndexOf(arr[i]), arr[i]);
        } else continue;
        arr2.push(arr1);
      }
      if (arr2.length == 0) return -1;
      return arr2[arr2.length - 1];
    } else if (typeof haystack[0] == "number") {
      return haystack.lastIndexOf(needle);
    }
}

module.exports = listSorting;
