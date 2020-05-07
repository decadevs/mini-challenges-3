function listSorting(needle, haystack) {
	if (Array.isArray(haystack[0])) {
		for (let i = haystack.length-1; i >= 0; i--) {
			let column = listSorting(needle, haystack[i])
			if (column !== -1) {
				return ([i,column])
			}
		}
		return -1
	}
	return haystack.lastIndexOf(needle)
}

module.exports = listSorting;
