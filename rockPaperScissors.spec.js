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

test('play one round', () => {
    global.prompt = jest.fn(() => 'potato');
    const result = rockPaperScissors.getHumanChoice();
    expect(validChoices).not.toContain(result);
});

describe('playRound', () => {
    test('returns tie when both choices are the same', () => {
        expect(rockPaperScissors.playRound('rock', 'rock')).toBe("It's a tie!");
        expect(rockPaperScissors.playRound('paper', 'paper')).toBe("It's a tie!");
        expect(rockPaperScissors.playRound('scissors', 'scissors')).toBe("It's a tie!");
    });

    test('human wins with rock vs scissors', () => {
        expect(rockPaperScissors.playRound('rock', 'scissors')).toBe("You win! rock beats scissors.");
    });

    test('human wins with paper vs rock', () => {
        expect(rockPaperScissors.playRound('paper', 'rock')).toBe("You win! paper beats rock.");
    });

    test('human wins with scissors vs paper', () => {
        expect(rockPaperScissors.playRound('scissors', 'paper')).toBe("You win! scissors beats paper.");
    });

    test('computer wins with scissors vs paper', () => {
        expect(rockPaperScissors.playRound('paper', 'scissors')).toBe("You lose! scissors beats paper.");
    });

    test('computer wins with rock vs scissors', () => {
        expect(rockPaperScissors.playRound('scissors', 'rock')).toBe("You lose! rock beats scissors.");
    });

    test('computer wins with paper vs rock', () => {
        expect(rockPaperScissors.playRound('rock', 'paper')).toBe("You lose! paper beats rock.");
    });
});

