import { test, expect } from '@fixtures/fixtures';

test('login with valid credentials using fixture', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});