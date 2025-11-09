const rockPaperScissors = require('./rockPaperScissors')
const validChoices = ['rock', 'paper', 'scissors'];

describe('rockPaperScissors', () => {
    test('computer choices should return valid option', () => {
        const result = rockPaperScissors.getComputerChoice();
        expect(validChoices).toContain(result);
    });
});

describe('rockPaperScissors', () => {
    test.skip('human choices should return valid option', () => {
        const result = rockPaperScissors.getHumanChoice("paper");
        expect(validChoices).toContain(result);
    });
});