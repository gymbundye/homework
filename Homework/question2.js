//how many letters, numbers and characters are in a string//
//prompt for user//
let prompt = require('prompt-sync')()
let = input=(prompt('String me!'))
//variables for letters number and characters//

let capitalLetter= 0;
let lowerLetter=0;
let number=0;
let characters=0;
//finding input length//

for (let i=0; i < input.length; i++){
    if(input[i] >= "A"&& input[i] <= "Z")
    capitalLetter++;

   else if(input[i] >="a" && input[i] <="z"){
    lowerLetter++;    
    }
    else if(input[i] >= "0" && [i] <="9"){
        number++
    }
    else{
        characters++
    }
    //displays//
}console.log(`We have ${capitalLetter} Capital Letters, ${lowerLetter} lowercase letter, ${number} numbers and ${characters} characters! `)










    