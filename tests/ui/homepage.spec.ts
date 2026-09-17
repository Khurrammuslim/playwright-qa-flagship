import { test, expect } from '@fixtures/fixtures';

test('login with valid credentials using fixture @smoke', async ({ loginPage, page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory.html/);
});