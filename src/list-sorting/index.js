
function listSorting(needle, haystack) {
    for(let i = haystack.length - 1; i >= 0; i--){

        if(typeof haystack[i] === 'number'){
            return haystack.lastIndexOf(needle)
        }
        
        if(haystack[i].lastIndexOf(needle) > -1 ){
            return [i , haystack[i].lastIndexOf(needle)]
        }

    }
    return -1 
}

module.exports = listSorting;
