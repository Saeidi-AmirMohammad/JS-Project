"use strict";
var LogError;
(function (LogError) {
    function log(message) {
        console.log("%c " + message, 'color : red');
    }
})(LogError || (LogError = {}));
