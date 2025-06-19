const {test,expect} = require("@playwright/test")
import testdata from "../../testdata.json"

test("login with test data",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("#email1").fill(testdata.username,{delay:2000})
    await page.locator("#password1").fill(testdata.password,{delay:2000})
    await page.locator("[type='submit']").click()
})