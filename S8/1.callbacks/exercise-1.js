const numbersList = [];

function sum(a,b){
return a+ b
}

function substract(a,b){
return a-b
}

function father(a,b,callback){
let resultado =callback(a,b)
numbersList.push(resultado)
}
father(5,5,sum)
 father(14,88, sum)
father(7,4,substract)
console.log(numbersList);