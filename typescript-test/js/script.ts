class Car {
   readonly model : string  
   public year : number

    constructor(model : string , year : number){
        this.model = model,
        this.year = year

    }

}

let car01 = new Car ('111' , 1397)
console.log(car01.model);
