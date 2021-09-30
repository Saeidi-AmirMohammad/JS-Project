"use strict";
var myArry = /** @class */ (function () {
    function myArry(data, data2) {
        this.data = data;
        this.data2 = data2;
    }
    myArry.prototype.addItem = function (item) {
        this.data.push(item);
    };
    myArry.prototype.getItem = function (index) {
        return this.data[index];
    };
    return myArry;
}());
var list = new myArry(['item1', 'item2'], [true, false]);
list.addItem('4');
console.log(list.getItem(0));
