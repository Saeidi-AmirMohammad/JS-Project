const notifier = require('node-notifier');
class Notifier {
    constructor(options){
        this.options = options;
    }
    apply (compiler){
        compiler.hooks.done.tap('notification' , (stats) => {
            let time = ((stats.endTime - stats.startTime) / 1000).toFixed(2)

            Notifier.
        })
    }
}