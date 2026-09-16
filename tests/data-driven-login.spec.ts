import { test, expect } from '@fixtures/fixtures';
import users from '@data/users.json';

for (const user of users) {
  test(`login test: ${user.username} / ${user.password}`, async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(user.username, user.password);

    if (user.shouldPass) {
      await expect(page).toHaveURL(/inventory.html/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}