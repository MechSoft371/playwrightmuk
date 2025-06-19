const {test,expect} =require('@playwright/test')

test("iframes", async({page})=>
{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const iframe = await page.frameLocator("//frame[@name='packageListFrame']");

    await iframe.locator("//a[text()='java.applet']").first().click();

    await page.pause();
})