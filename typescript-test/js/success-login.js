"use strict";
var LogSuccess;
(function (LogSuccess) {
    function log(message) {
        console.log("%c " + message, 'color : green');
    }
})(LogSuccess || (LogSuccess = {}));
