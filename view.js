const HttpMethod = require('./constants').HttpMethod;

/*
    simple class to show the usage of view in MVC
*/
class View {
    formatResult(res) {
        return res.toString();
    }
}

module.exports = View;
