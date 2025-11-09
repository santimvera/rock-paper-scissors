function getComputerChoice() {
    let result;
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    result = choices[randomIndex];
    return result;
}


module.exports = getComputerChoice;