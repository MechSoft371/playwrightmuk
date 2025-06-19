const { test, expect } = require('@playwright/test')


test("tabs", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage] = await Promise.all([
        context.waitForEvent("page"),        
        await page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click()

    ])

    await newpage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com", {delay:3000})

    await newpage.close();

    await page.locator("#email1").fill("admin@gmail.com",{delay:3000})


})