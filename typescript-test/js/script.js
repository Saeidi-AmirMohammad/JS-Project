"use strict";
var Car = /** @class */ (function () {
    function Car(model, year) {
        Car.model = model,
            this.year = year;
    }
    Car.getModel = function () {
        return Car.model;
    };
    return Car;
}());
console.log(Car.getModel());
