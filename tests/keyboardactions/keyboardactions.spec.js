const {test,expect} = require("@playwright/test")

test("Keyboard action", async({page})=>{

    await page.goto("https://www.google.com/");

    await page.locator("textarea[title='Search']").focus();
    await page.keyboard.type("prudhvi raj")

    await page.keyboard.press('ArrowLeft');
    await page.keyboard.down("Shift")

    for(let i =0 ; i<'raj'.length-1;i++){
        await page.keyboard.press("ArrowLeft", {delay:2000})
    }

    await page.keyboard.up("Shift");
    await page.keyboard.press("Enter");

    const content = await page.content();
    expect(content.includes("prudhvi")).toBe(true);
})