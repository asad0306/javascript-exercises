const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0 || typeof firstNum != 'number' || typeof lastNum != 'number') {
        return 'ERROR'
    } else if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            firstNum += i;
        }
        return firstNum -1;
    } else if (lastNum < firstNum) {
        for(let i = lastNum; i <= firstNum; i++) {
            lastNum += 1
        }
         return lastNum -1;
    }

};

// Do not edit below this line
module.exports = sumAll;
