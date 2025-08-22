/*
in some application there will e multiple key value pairs that store the information about the application.
in various locations like local sotrage. and session storage
for these secanrios we login once and store all content in storage state method which is provided by 
playwright

while creating the instance we say open an instance with json file, so that instance contains all info like 
login details.


*/
import {test,expect} from "@playwright/test"

let webContext
test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("input#userEmail").fill("testraj1@gmail.com")
    await page.locator("input#userPassword").fill("Iamking@000")
    await page.locator("input[type='submit']").click()
    await page.waitForLoadState('networkidle')
    await context.storageState({path: 'state.json'})

    webContext = await browser.newContext({storageState:'state.json'})
})

test("place an order", async ()=>{

    const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client")
    await page.waitForLoadState('networkidle')
    //const title = await page.title()
    await expect(page).toHaveTitle("Let's Shop")
    const iteams = await page.locator("div.card-body b")
    const len = await iteams.count();

    //console.log(iteams)
    for(let i = 0; i < len; i++){
        const iteamName = await iteams.nth(i).textContent();
        console.log(iteamName)
    }
})