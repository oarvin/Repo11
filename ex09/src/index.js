
function myBoucer(arr){

    for ( var i = 0; i < arr.length; i++ ){
        if (arr[i] ==null||arr[i] == false||arr[i] == ""||Number.isNaN(arr[i])||arr[i] == undefined||arr[i] == 0){
            arr.splice(i,1);
            i--;
        }
            
          
        
    }
    return arr;
}



console.log(myBoucer([7, "ate", "", false, 9]));
console.log(myBoucer(["a", "b", "c"]));
console.log(myBoucer([false, null, 0, undefined, NaN, ""]));
console.log(myBoucer([null, NaN, 1, 2, undefined]));
module.exports = myBoucer;