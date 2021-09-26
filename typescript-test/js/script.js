"use strict";
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model,
            this.year = year;
    }
    Object.defineProperty(Car.prototype, "setModel", {
        set: function (theModel) {
            this.model = theModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car01 = new Car('x5', 2020);
car01.setModel = 'x4';
console.log(car01.getModel);
