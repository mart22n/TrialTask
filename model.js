const http = require('http');
const url = require('url');
const port = require('./constants').port;
const hostName = require('./constants').hostName;

const HttpMethod = require('./constants').HttpMethod;
const Calculator = require('./calculator');

class Model {
    constructor() {
        // store the current 'this' as in callbacks it might not be available
        global.self = this;
        self.receivedData = [];
        self.httpRes = {};
        self.calculator = new Calculator();
        self.startServer();
    }

    static findFactorialArg(url) {
        return parseInt(Model.getParameterByName('fact', url));
    }

    static getParameterByName(name, url) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    static findFibStartNum(receivedData) {
        let jsonData = JSON.parse(receivedData);
        return jsonData.start;
    }

    static findFibLen(receivedData) {
        let jsonData = JSON.parse(receivedData);
        return jsonData.length;
    }

    httpRequestHandlers = {
        get: function(request, receivedData) {
            let result = Calculator.findFactorial(Model.findFactorialArg(request.url));
            self.onFactorialFound(result);
        },

        post: function(request, receivedData) {
            let fibStartNum = Model.findFibStartNum(receivedData);
            let fibLength = Model.findFibLen(receivedData);
            let result = Calculator.findFibSequence(fibStartNum, fibLength);
            self.onFibSequenceFound(result);
        },

        options: function(request, receivedData) {
            let optionsArray = [];
            let factPathObj = {'factorialPath' : 'fact'};
            optionsArray.push(factPathObj)
            self.onOptionsArrayFilled(optionsArray);
        }
    }

    bindHttpRequestEnd(callback) {
        self.onHttpRequestEnd = callback;
    }

    reqDataReceived(chunk) {
        self.receivedData += chunk;
    }

    onHttpReq(request, response) {
        self.receivedData = [];
        self.httpRes = response;
        self.httpMethod = request.method;
        request.on("data", (chunk) =>{
            self.receivedData += chunk;
        });
        request.on("end", () => {self.onHttpRequestEnd(request, self.receivedData)});
    }

    sendHttpRes(response) {
        self.httpRes.setHeader("Content-type", "text/plain");
        if(response.cached == true) {
            self.httpRes.setHeader("cache-control", "public");
        }
        self.httpRes.writeHead(200);
        if (typeof response === 'string' || response instanceof String) {
            self.httpRes.write(response);
        }
        else {
            self.httpRes.write(response.data);
        }
        self.httpRes.end("\n");
    }

    startServer() {
        const server = http.createServer((request, response) => 
        {this.onHttpReq(request, response)});
        server.listen(port, hostName, () => {
            console.log(`Server running at http://${hostName}:${port}/`);
           });
    }
}

module.exports = Model;
