"use strict";
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.getInstance = function () {
        if (!Car.instance)
            Car.instance = new Car();
        return Car.instance;
    };
    return Car;
}());
var car01 = Car.getInstance();
var car02 = Car.getInstance();
console.log(car01 === car02);
