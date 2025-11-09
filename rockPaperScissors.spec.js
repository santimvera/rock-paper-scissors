const getComputerChoice = require('./rockPaperScissors')

describe('rockPaperScissors', () => {
    test('computer choices should return valid option', () => {
        const validChoices = ['rock', 'paper', 'scissors'];
        const result = getComputerChoice();
        expect(validChoices).toContain(result);
    });
});
