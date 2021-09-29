class Car {
private static instance : Car

    private constructor() {}

    static getInstance() : Car{
        if(! Car.instance)
        Car.instance = new Car()

        return Car.instance;
    }

}

let car01 = Car.getInstance();
let car02 = Car.getInstance();

console.log(car01 === car02)

