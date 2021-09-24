
function myBouncer(arr){

    for ( var i = 0; i < arr.length; i++ ){
        if (arr[i] ==null||arr[i] == false||arr[i] == ""||Number.isNaN(arr[i])||arr[i] == undefined||arr[i] == 0){
            arr.splice(i,1);
            i--;
        }
            
          
        
    }
    return arr;
}



console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, undefined, NaN, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBoucer;