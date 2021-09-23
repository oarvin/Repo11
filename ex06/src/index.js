function multuplyArrayFunction(myArray){
    var product = 1;
    var sum = 0;
    
    for ( var i = 0; i < myArray.length; i++){
        for (var j = 0; j <myArray[i].length; j++){
            sum += myArray[i][j];
            product *= myArray[i][j];
        }
        
    }
    return [product, sum];
    

}

console.log(multuplyArrayFunction([
    [2],
    [5,6,7],
    [8,9]
]));

console.log(multuplyArrayFunction([
    
    [2.5, 2],
    [0.5, 0.2],
    [8]
    
]));

console.log(multuplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9]
]));


module.exports = multuplyArrayFunction;