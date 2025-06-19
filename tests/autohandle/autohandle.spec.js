const {test, expect} = require('@playwright/test')

test("verify the auto handling", async({page})=>{
    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("Mukesh Otwani", {delay:3000});

    await page.waitForSelector("li[role='presentation']");

    const elements = await page.$$("li[role='presentation']");

    for(let i =0; i<elements.length;i++){
        const text = await elements[i].textContent();

        if(text.includes('playwright'))
        {
            await elements[i].click();
            break;
        }
    }

})