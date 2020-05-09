function listSorting(needle, haystack) {
	if (typeof(haystack[0]) !== "object") {
		return haystack.lastIndexOf(needle)
	} else {
		let outputArray = [];
		let column = -1;
		let row =  0;
		for (let i = 0; i <haystack.length; i++ ) {
			if (haystack[i].lastIndexOf(needle) > -1) {
				column = haystack[i].lastIndexOf(needle);
				row =i;
		} 
     	}
		if (column == -1) {
			return -1;
     	}
		outputArray .push(row);
		outputArray .push(column);
		return outputArray
     }
}

module.exports = listSorting;
