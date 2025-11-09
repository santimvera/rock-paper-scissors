const rockPaperScissors = require('./rockPaperScissors')
const validChoices = ['rock', 'paper', 'scissors'];

describe('rockPaperScissors', () => {
    test('computer choices should return valid option', () => {
        const result = rockPaperScissors.getComputerChoice();
        expect(validChoices).toContain(result);
    });
});

describe('rockPaperScissors', () => {
    test('human choices should return valid option', () => {
        global.prompt = jest.fn(() => 'Paper');
        const result = rockPaperScissors.getHumanChoice();
        expect(validChoices).toContain(result);
    });
});

describe('rockPaperScissors', () => {
    test('potato is not a valid option', () => {
        global.prompt = jest.fn(() => 'potato');
        const result = rockPaperScissors.getHumanChoice();
        expect(validChoices).not.toContain(result);
    });


});