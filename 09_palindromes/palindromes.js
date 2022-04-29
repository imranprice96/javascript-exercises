const palindromes = function (str) {
    // lowercase, remove punctuation and spaces, split
    let arr = str.toString().replace(/[^A-Za-z0-9_]/g, "").toLowerCase().split('');
    let joined = arr.join('');
    let reverseJoined = arr.reverse().join('');
    return joined == reverseJoined;

};

// Do not edit below this line
module.exports = palindromes;
