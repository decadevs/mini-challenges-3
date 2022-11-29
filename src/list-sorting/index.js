function listSorting(needle, haystack) {
    var arr = haystack;
    var index = 0;
    var answer = [];//level, indexOf
    var holder = '';

    if (typeof(arr[0]) === 'number') {
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == needle) {
                index = i;
            }
            
        }
    }else if(typeof(arr[0]) === "object"){
        
        for (let k = 0; k < arr.length; k++) {
            if (arr[k].indexOf(needle) == -1) {
                
                continue;
            }else{
                if (typeof(arr[k][0] == 'number')) {
                    
                    for (let x = 0; x < arr[k].length; x++) {
                        if (arr[k][x] == needle) {
                            index = k;
                            holder = x;
                        }
                        
                    }
                }
            }
            
        }
    }
    answer.unshift(index);
    if (holder !== '') {
        answer.push(holder);
    }
    if (answer == '') {
        return -1;
    }else{
        if (answer.length == 1) {
            return Number(answer.join(''));
        }else{
            return answer;
        }
    }
}

module.exports = listSorting;
