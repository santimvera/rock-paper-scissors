// @ts-check
import { test, expect } from '@playwright/test';

const homePagePath = 'file:///home/santimvera/Desktop/The%20Odin%20Project/rock-paper-scissors/rockPaperScissors.html';

test('should load Rock Paper Scissors page', async ({ page }) => {
  await page.goto(homePagePath);
  await expect(page).toHaveTitle(/rockPaperScissors/);
});

test('UI should match the baseline screenshot', async ({ page }) => {
  await page.goto(homePagePath);
  expect(await page.screenshot()).toMatchSnapshot('rockPaperScissors-baseline.png');
});

test('User clicks rock and wins against computer scissors', async ({ page }) => {
  await page.goto(homePagePath);
  await page.evaluate(() => {
    window.getComputerChoice = () => 'scissors';
  });
  await page.click('#rock');
  expect(await page.screenshot()).toMatchSnapshot('rockPaperScissors-rockWin.png');
});