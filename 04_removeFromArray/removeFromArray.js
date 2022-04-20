const removeFromArray = function(arr) {
    let newArray = arr;
        
    if(arguments.length <= 1){return newArray};
    for(i=1; i<arguments.length; i++){
        let myIndex = newArray.indexOf(arguments[i])
        if(myIndex !== -1){
            newArray.splice(myIndex, 1);
        };

    }; 
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
