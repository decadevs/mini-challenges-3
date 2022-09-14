const { testResultsProcessor } = require("../../jest.config");

function listSorting(needle, haystack) {



    
    let column;
    let row;
    if(typeof(haystack[0]) !== "object"){
        const inDex = haystack.lastIndexOf(needle)
        return inDex
    }
    
    else{
        for(let i = 0; i < haystack.length; i++){
            
            if(haystack[i].includes(needle)){
                column = haystack[i].lastIndexOf(needle)
                row = i
            }
        }
        return column >= 0? [row, column] : -1
        }



    }
    

console.log(listSorting(200, [
    [100, 200, 300],
    [300, 200, 100],
    [300, 100, 200],
    [200, 100, 300],
    [100, 200, 300],
  ]));


module.exports = listSorting;
