function myMutation (arr) {
    
    var foundings = [];
    for(var i = 0; i<arr[1].length; i++){
        var currentLetter = arr[1][i];
        var foundLetter = "";
        for(var j = 0; j<arr[0].length; j++) {
            if(currentLetter.toLowerCase() == arr[0][j].toLowerCase()){
                foundLetter = true
            }
        }
        if(foundLetter.length == 0){
            foundLetter = false
        }
        foundings.push(foundLetter)
    }
    for(var i = 0; i<foundings.length; i++){
        if(foundings[i] == false)
        {
            return false
        }
    }
    return true

}

console.log(myMutation([
    "hello", "hey"
]));

console.log(myMutation([
    "hello", "Hello"
]))

console.log(myMutation([
    "zyxwvutsrqponmlkjihgfedcba", "qrstu"
]))

console.log(myMutation([
    "Mary", "Army"
]))

console.log(myMutation([
    "Mary", "Aarmy"
]))

console.log(myMutation([
    "Alien", "line"
]))

console.log(myMutation([
    "floor", "for"
]))

console.log(myMutation([
    "hello", "neo"
]))

console.log(myMutation([
    "voodoo", "no"
]))

console.log(myMutation([
    "ate", "date"
]))


console.log(myMutation([
    "Tiger", "Zebra"
]))

console.log(myMutation([
    "Noel", "Ole"
])) 

module.exports = myMutation;