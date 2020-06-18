function listSorting(needle, haystack) {
    if (Array.isArray(haystack[0])) {
        let result = [];
        haystack.map((curresntValue) => {if (curresntValue.includes(needle)) {
            result.push(haystack.indexOf(curresntValue), curresntValue.lastIndexOf(needle));
          }});
                
        return result.length ? result.slice(result.length - 2) : -1;
      }
      return haystack.lastIndexOf(needle);
}

module.exports = listSorting;
