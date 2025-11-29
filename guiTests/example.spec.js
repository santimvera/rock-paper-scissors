// @ts-check
import { test, expect } from '@playwright/test';

test('should load Rock Paper Scissors page', async ({ page }) => {
  await page.goto('file:///home/santimvera/Desktop/The%20Odin%20Project/rock-paper-scissors/rockPaperScissors.html');
  await expect(page).toHaveTitle(/RockPaperScissors/);
});

test('UI should match the baseline screenshot', async ({ page }) => {
  await page.goto('file:///home/santimvera/Desktop/The%20Odin%20Project/rock-paper-scissors/rockPaperScissors.html');
  expect(await page.screenshot()).toMatchSnapshot('rockPaperScissors-baseline.png');
});
