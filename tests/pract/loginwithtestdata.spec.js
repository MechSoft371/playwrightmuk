const {test,expect} = require("@playwright/test")
import testdata from "../../testdata.json"


test.describe("check the various data driven test", () =>{

testdata.forEach(data =>{
    test(`login with test data ${data.testwithdata}`, async ({ page }) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("#email1").fill(data.username, { delay: 2000 })
    await page.locator("#password1").fill(data.password, { delay: 2000 })
    await page.locator("[type='submit']").click()
})
})
})