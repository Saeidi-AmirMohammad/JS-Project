function sum(x : number , y : number) : number{
    return x + y;
}

let sum2 = function(x : number , y : number) : number{
    return x + y;
}

let sum3 = (x : number , y : number) : number => x + y
console.log(sum (3 , 7))

let sum4 : (x : number , y : number) => number
sum4 = function(x : number , y : number){
return x + y
}
