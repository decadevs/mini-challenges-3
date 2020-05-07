function listSorting(needle, haystack) {
    if (typeof haystack[0] != "object"){
        return haystack.lastIndexOf(needle)
    }

    let row = 0
    let column = 0
    let match = false

    haystack.forEach((element, index, array) => {
      if (element.includes(needle)) {
        row = index
        column = element.lastIndexOf(needle)
        match = true
      }
    })

    return !match ? -1 : [row, column]
}

module.exports = listSorting;
