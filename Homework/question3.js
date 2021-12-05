//how many of the same words found in a sentence//
//prompt for users//
let prompt = require('prompt-sync')();
let input= (prompt('Sentence Please!').split(' '));
//shoots out the sentence//
console.log(input);
//asks for the word they want//
let magicWord= prompt('Whats the magic word?');

//finds the word count//
let counter=0;
for (let index=0; index<input.length; index++)
// changes all to lowercase to check for Capitalized word//
{ if (magicWord.toLowerCase() == input[index].toLowerCase()){
    counter++

console.log();}
console.log(`You have ${counter} magic words!`);
}

