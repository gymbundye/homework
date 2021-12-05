//palindrome checker//
//prompt for user input//
const prompt= require('prompt-sync')();
const input= prompt(' Give it to me!');
//variable declaration//
let isPalindrome = true;
//checks first letter against last letter in the string//
for (let i =1; i <=input.length; i++){
    if (input.charAt(i-1) !== input.charAt(input.length-i)){
        isPalindrome=false;
        console.log("Wrong!");
        break;
    }
}
if (isPalindrome === true){
    console.log("You got It!");
}

