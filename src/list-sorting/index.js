function listSorting(needle, haystack) {
    let index = -1;
    let row = 0;
    if(haystack[0] === undefined){
        return -1;
    }else{
        if(haystack[0].constructor === Array){
            for (let i = 0; i < haystack.length; i++) {
                for (let j = 0; j < haystack[i].length; j++) {
                    let lastIndex = haystack[i].lastIndexOf(needle);
                    if(lastIndex !== -1){
                        index = lastIndex
                        row = i;
                    }                   
                }  
            } 
            if(index < 0){
                return index;
            }else{
                return [row,index];
            }
        }else{
            index = haystack.lastIndexOf(needle);
            return index;
        }
    }

}

module.exports = listSorting;
