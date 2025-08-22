//login UI--> store the request in .json formate by using storage state
/* what is storage state?
it will store all content details of the application in DOM( like , cokkies, local storage ,session storage) 
*/

//test browser, cart- order, orderdetails, orderhistory
//directly inject the .json file into the browser


import {test, expect} from "@playwright/test"
let webContext;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input[id='userEmail']").fill("anshika@gmail.com")
    await page.locator("input[id='userPassword']").fill("Iamking@000")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'})
    webContext = await browser.newContext({storageState:'state.json'})


})

test("Client app login", async ()=>{

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")   
})