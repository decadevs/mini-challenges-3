function listSorting(needle, haystack) {
    //check if haystack is an array of arrays
    if(typeof(haystack[0])=="object"){
        let lastArray=-1;
        let lastIndex;
        for (let i=0; i<haystack.length; i++){

            if (haystack[i].includes(needle)){
                //keep making lastArray = index of haystack that includes needle until loop completes
                lastArray= i;
                //keep making lastIndex = index of needle in haystack of i until loop completes
                lastIndex= haystack[i].lastIndexOf(needle);
            }
        }
        //check is lastarray has not been modified in the if statement
        if(lastArray!= -1){
        return [lastArray, lastIndex]
        }
        else{
            return -1;
        }
    }
    //condition for typeof haystack[0] != array
    else{
        if(haystack.includes(needle)){
            return haystack.lastIndexOf(needle);
        }
        else{
            return -1;
        }

    }
    // 
}

module.exports = listSorting;

