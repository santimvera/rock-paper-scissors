const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let result;
    const randomIndex = Math.floor(Math.random() * choices.length);
    result = choices[randomIndex];
    return result;
}

function getHumanChoice() {
    let result;
    result = "rock";
    return result;
}


module.exports = {
    getComputerChoice,
    getHumanChoice
};