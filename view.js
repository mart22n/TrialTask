const HttpMethod = require('./constants').HttpMethod;

/*
    simple class to show the usage of view in MVC
*/
class View {
    formatResult(arg, argIsObjectArray) {
        if(argIsObjectArray) {
            return JSON.stringify(arg);
        }
        return arg.toString();
    }
}

module.exports = View;
