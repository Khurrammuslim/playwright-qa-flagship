import { test as setup } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // login ke baad confirm karo sahi page pe pahunche
  await page.waitForURL(/inventory.html/);

  // session state (cookies, localStorage) save karo
  await page.context().storageState({ path: authFile });
});