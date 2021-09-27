class Car {
   protected static model : string  
   public year : number

    constructor(model : string , year : number){
        Car.model = model,
        this.year = year

    }

    static getModel(){
        return Car.model;
    }
}

console.log(Car.getModel());
