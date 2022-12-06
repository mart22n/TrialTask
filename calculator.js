class Calculator {
    static findFactorial(num) {
        if(num < 0)
            return num;
        if(num == 0 || num == 1)
            return 1;
        return num * this.findFactorial(num - 1);
    }

    static findFibSequence(start, len) {
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