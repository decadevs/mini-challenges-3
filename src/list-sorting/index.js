




function listSorting(needle, haystack) {
let row;
let col;

if(typeof(haystack[0]) === 'object'){

    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i].includes(needle)) {

            row = i
            col = haystack[i].lastIndexOf(needle)

        }
        
    }
    
    return row !== undefined? [row, col] : -1

}else


    return haystack.lastIndexOf(needle)

}








module.exports = listSorting;
