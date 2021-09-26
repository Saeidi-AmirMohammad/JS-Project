class Car {
   protected model : string
public year : number

    constructor(model : string , year : number){
        this.model = model,
        this.year = year

    }

    set setModel(theModel : string){
        this.model = theModel;
    }

    get getModel(){
        return this.model;
    }
}

let car01 = new Car('x5' , 2020)
car01.setModel = 'x4';
console.log(car01.getModel);
