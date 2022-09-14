/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

 function binaryReversal(value) {

    let num = parseInt(value)
    let length = String(num).length
    let toBaseTwo = (number)=>{
        let bnary=''
        if(number===0)return number
        for(number;number>0;number=parseInt(number/2)){
            let curentRemender = number%2
            bnary+=curentRemender
        

        }
           
        if(bnary&bnary.length<8){
            console.log('less than')
            let formatBinary = []
            formatBinary = bnary.split('')
            for(let i=bnary.length; i<8;i++){     
            formatBinary.push('0')
            }
            let numberReversed  =  formatBinary.reverse().join('')
            return numberReversed
        }else{
            return bnary.split('').reverse().join('')
        }
        
        
    }

   let rev = (toBaseTwo(value).split('').reverse().join(''))
   console.log(rev)
   let realReverse = rev.split('').join('')
   let v = 0
   for (let i = 0; i <=String(realReverse).length; i++) {
    let element = String(realReverse).charAt(i-1)
    
    v+=element*Math.pow(2,realReverse.length-i)
  
    
    
   }
   return String(v)
}


module.exports = binaryReversal;