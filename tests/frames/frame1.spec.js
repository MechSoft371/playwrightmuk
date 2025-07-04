const {test, expect} = require("@playwright/test")

test("handling frames", async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const fi = await page.frameLocator("packageListFrame");
    const listofelement = fi.getByAltText("[title='Packages'] li")

    for(let i =0; i<listofelement;i++){

        

    }
})