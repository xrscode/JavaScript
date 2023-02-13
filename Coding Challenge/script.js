'use strict';

//User Input 

let userInput = 'cat';
userInput = userInput.toLowerCase();
console.log(`You have selected option; ${userInput}.`)
/*
if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
    console.log('Correct.');
} else {
    console.log('Incorrect.');
}
*/

const getUserChoice = (userInput) => {
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
        return userInput;
    }
    return 'You need to select rock, paper or scissors.';
};

let option = getUserChoice(userInput);
console.log(option);

let getComputerChoice = math.random() && math.floor(2);
console.log(getComputerChoice);
