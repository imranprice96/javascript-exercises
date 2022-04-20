const repeatString = function(words, repeats) {
    if(repeats <0){ return 'ERROR'}
    let result = '';
    for(i=0; i<repeats; i++){
        result += words;
    };
    return result;
};

// Do not edit below this line
module.exports = repeatString;
