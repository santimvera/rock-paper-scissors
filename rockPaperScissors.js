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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}
function playGame() {
    humanScore = 0;
    computerScore = 0;

    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === 3) {
        return "The human won the game";
    } else {
        return "The computer won the game";
    }
}

module.exports = {
    getComputerChoice,
    getHumanChoice,
    playRound,
    playGame
};