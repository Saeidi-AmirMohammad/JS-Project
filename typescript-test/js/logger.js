var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.success = function (message) {
        console.log(message);
    };
    return Logger;
}());
export default new Logger();
