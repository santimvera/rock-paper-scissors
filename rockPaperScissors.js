const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let result;
    const randomIndex = Math.floor(Math.random() * choices.length);
    result = choices[randomIndex];
    return result;
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
}


module.exports = {
    getComputerChoice,
    getHumanChoice
};