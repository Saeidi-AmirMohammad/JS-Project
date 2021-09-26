class Car {
    model : string
    year : number

    constructor(model : string , year : number){
        this.model = model,
        this.year = year

    }
}

let car01 = new Car('x5' , 2020)
console.log(car01)
