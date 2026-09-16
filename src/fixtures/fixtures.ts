import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { InventoryPage } from '@pages/inventoryPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export const authTest = test.extend<MyFixtures>({
  page: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(page);
  },
});

export { expect } from '@playwright/test';