interface Mylabel {
    size : number
    label : string
}

function printLabel(labelObj : Mylabel){
    console.log(labelObj.label)
}

function labelX(labelObj : Mylabel){
    console.log(labelObj.size)
}

let myObj = {size : 10 , label : 'Size 7' , number : 123}
let myObj2 = {size : 15 , label : 'Size 10'}

