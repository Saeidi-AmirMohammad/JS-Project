"use strict";
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model,
            this.year = year;
    }
    return Car;
}());
var car01 = new Car('x5', 2020);
console.log(car01);
