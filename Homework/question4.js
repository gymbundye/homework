//making a calculator with switch//
let prompt= require('prompt-sync')();
//info for user to know how calculator works//
console.log("Use 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division and 5 to Exit")

let input= prompt("Enter 1-5:  ");

//variables for the numbers//
let num1= prompt( "Enter Number 1:  ");
let num2= prompt( "Enter Number 2:  ");

//variables for the operators, using Urnary method for the addition//
let addition=(+num1 + +num2);
let subtraction=(num1-num2);
let multiplication=(num1*num2);
let division=(num1 / num2);
let Exit=(" I dont like those numbers, see ya!")

//switch cases//
switch(input){
    case "1":{
        console.log(addition)
        break;
    }
    case "2":{
        console.log(subtraction)
        break;
    }
    case "3":{
        console.log(multiplication)
        break;
    }
    case "4":{
        console.log(division)
        break;
    }
    case "5":{
        console.log(Exit)
    }
}