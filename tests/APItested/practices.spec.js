import { test, expect, request } from "@playwright/test"
import { Apiutiles } from "../../Utils/APItest/Apiutiles";
const loginpayload = { userEmail: "testraj1@gmail.com", userPassword: "Iamking@000" }
const orderPayload = {orders:[{country:"India",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]}
//javascript object is converted into json

let respone;
test.beforeAll("before all",async () => {
    const apiContext = await request.newContext();
    const Api = new Apiutiles(apiContext,loginpayload)
    //await expect(Api.loginResponse.ok()).toBeTruthy();
    respone = await Api.createorder(orderPayload);

});


test("validate the login with API", async ({ page }) => {
   
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, respone.token);

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const productName = 'Zara Coat 4';
    const products = await page.locator(".card-body")
    await page.waitForLoadState("networkidle");
    //await page.locator(".card-body b").waitFor({timeout:3000})
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (respone.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click()
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(respone.orderId.includes(orderIdDetails)).toBeTruthy();


})



 // await page.locator("input#userEmail").fill("anshika@gmail.com")
    // await page.locator("input#userPassword").fill("Iamking@000")
    // await page.locator("input[type='submit']").click()
    //console.log(token)