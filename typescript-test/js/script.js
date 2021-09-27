"use strict";
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model,
            this.year = year;
    }
    return Car;
}());
var car01 = new Car('111', 1397);
console.log(car01.model);
