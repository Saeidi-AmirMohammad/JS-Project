"use strict";
function sum(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
var sum3 = function (x, y) { return x + y; };
console.log(sum(3, 7));
var sum4;
sum4 = function (x, y) {
    return x + y;
};
