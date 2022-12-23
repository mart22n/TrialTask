const factArgsAndResultsQueue = [];
const fibArgsAndResultsQueue = [];

class Calculator {

    static calcFactorial(num) {
        if(num < 0)
            return num;
        if(num == 0 || num == 1)
            return 1;
        return num * this.calcFactorial(num - 1);
    }

    static findFactorial(arg) {
        let retObj = {data: 0, cached: false};
        let argAsString = '' + arg;
        let cachedVal = factArgsAndResultsQueue.find(e => e.argAsString == argAsString);
        if(cachedVal !== undefined){
            retObj.data = cachedVal.result;
            retObj.cached = true;
            return retObj;
        } 

        let result = Calculator.calcFactorial(arg);

        let keyValuePair = { argAsString, result };
        factArgsAndResultsQueue.push(keyValuePair);
        if(factArgsAndResultsQueue.length > 3) {
            factArgsAndResultsQueue.shift();
        }

        retObj.data = factArgsAndResultsQueue.slice(-1)[0].result;
        return retObj;
    }

    static findFibSequence(start, len) {
        let retObj = {data: [], cached: false};
        let startAndLenAsString = '' + start + ',' + len;
        let cachedVal = fibArgsAndResultsQueue.find(e => e.startAndLenAsString === startAndLenAsString);
        if(cachedVal !== undefined){
            retObj.data = cachedVal.result;
            retObj.cached = true;
            return retObj;
        } 

        let result = Calculator.calcFibSequence(start, len);
        let keyValuePair = { startAndLenAsString, result };
        fibArgsAndResultsQueue.push(keyValuePair);
        if( fibArgsAndResultsQueue.length > 3) {
            fibArgsAndResultsQueue.shift();
        }
        retObj.data = fibArgsAndResultsQueue.slice(-1)[0].result
        return retObj;
    }

    static calcFibSequence(start, len) {
        let arr = [];
        if(len >= 2) {
            if(start == 0)
                arr = [0, 1];
            else if(start > 0)
                arr = [start, start];
            for(let i = 2; i < len; ++i) {
                arr[i] = arr[i - 2] + arr[i - 1];
            }
        }
        else if(len == 1)
            arr = [start];
        return arr;
    }
}

module.exports = Calculator;