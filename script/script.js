'use strict'

const arr = [1, 2, 3, -1, -2, -3];

const getPositivNumber = (arrPositive) => {
    
    if(!Array.isArray(arrPositive)) return [];
    if(!arrPositive.length) return [] ;
    
    const result = [];
    
    for (let i = 0; i < arrPositive.length; i += 1) {
        if (arrPositive[i] > 0 ) 
        result.push(arrPositive[i])
    }

    return result.length > 0 ? result : [] 
}

const result = getPositivNumber(arr);
console.log(result)