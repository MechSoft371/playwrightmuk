const {test,expect} = require('@playwright/test')


test("verify the alert popup",async({page})=>
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //page.on act as a listener 
    page.on("dialog",async(d)=>
    {
        //when alert come it store dialog into d variable
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        d.accept();
    })

    await page.locator("//button[text()='Click for JS Alert']").click();

})

test("verify the confirm popup",async({page})=>
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //page.on act as a listener 
    page.on("dialog",async(c)=>
    {
        //when alert come it store dialog into d variable
        expect(c.type()).toContain("confirm")
        expect(c.message()).toContain("I am a JS Confirm")
        await c.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click();

})