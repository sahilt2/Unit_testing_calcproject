'use strict';

function sum(a,b){
    if(arguments.length<2){
        throw new Error('Parameter missing')
    }
    // if(a==undefined || b==undefined){
    //     throw new Error('Parameter missing');
        
    // }

    // it tries to convert a and b to number
    // if(Number.isNaN(Number(a)) || Number.isNaN(Number(b))){
    //     throw new Error('only numbers allowed')
    // }
    if(typeof a !== 'number' || typeof b !=='number'){
        throw new Error('only numbers allowed')
    }
    return a+b;

}
function substract(a,b){
    if(arguments.length<2){
        throw new Error('Parameter missing')
    }
    if(typeof a !=='number' || typeof b !=='number'){
        throw new Error('only numbers allowed')
    }
    return a-b;

}
module.exports={sum,substract}