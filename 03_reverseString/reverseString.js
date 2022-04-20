const reverseString = function(str) {
    /*
    let stringArray = str.split('');
    let reverseStr = stringArray.reverse();
    let newStr = reverseStr.join('');
    return newStr;
    */

    let newString = (str.split('')).reverse();
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
