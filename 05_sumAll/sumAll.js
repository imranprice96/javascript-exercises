const sumAll = function(num1, num2) {
    if(num1<0 || num2<0){return 'ERROR'}; //Check if negative
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){return 'ERROR'}; // check if number

    let sum=0;
    let max = Math.max(num1,num2);
    console.log(max);
    let min = Math.min(num1,num2);
    for(i=min; i<max+1; i++){
        sum+=i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
