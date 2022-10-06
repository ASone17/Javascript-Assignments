let array=[2,5,34,57,8,9,12,3,45,78];
let displayOddNumbers=array.filter(n=>n%2!==0)
console.log(displayOddNumbers)

let displayEvenNumbers=array.filter(n=>n%2==0)
console.log(displayEvenNumbers)

function filterFunction(array,func){
    resultArray=[];
    for(let i=0;i<array.length;i++){
        if(func(array[i])){
            resultArray.push(array[i]);
        }
    }
console.log(resultArray)
}

console.log('Prime Numbers are:');
filterFunction(array,x=>{
    if(x<=1){
        return false
    }
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false
        }
    }
    return true
})