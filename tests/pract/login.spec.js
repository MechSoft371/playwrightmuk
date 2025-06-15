const { test, expect } = require("@playwright/test")


test("valid login", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByText(" Login ").first().click();

    const ttle = await page.title();
    await expect(page).toHaveTitle(ttle);
    await page.locator(".oxd-topbar").isVisible();
    await page.locator("span .oxd-userdropdown-tab").click();
    //await page.pp.click();//    await page.locator("div[class='oxd-topbar-header-userarea']").click();

    await page.getByText('logout').click();
})