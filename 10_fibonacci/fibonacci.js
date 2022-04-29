const fibonacci = function(num) {
    let fibArrray = [];
    let a = 1, b = 0, temp;
    let index = num;
    if(num < 0 )return "OOPS";
    while(num >=0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
        fibArrray.push(b);
    };
    return parseInt(fibArrray[index-1]);
};

// Do not edit below this line
module.exports = fibonacci;
