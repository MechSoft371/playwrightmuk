const { test, expect } = require("@playwright/test");
const { beforeEach } = require("node:test");

// beforeEach("Launach the browser", async ({page})=>{
    
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// })


test("valid login", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator(".username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByText(" Login ").first().click();

    const ttle = await page.title();
    await expect(page).toHaveTitle(ttle);
    await page.locator(".oxd-topbar").isVisible();
    await page.locator("span .oxd-userdropdown-tab").click();
    //await page.pp.click();//    await page.locator("div[class='oxd-topbar-header-userarea']").click();

    await page.getByText('logout').click();
})

test("valid login with dashboard", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

    const ttle = await page.title();
    await expect(page).toHaveTitle(ttle);
    await page.locator(".oxd-topbar").isVisible();
    await page.waitForTimeout(2000);
    await page.locator("'p.oxd-userdropdown-name img[class='oxd-userdropdown-img']'").click();
    //await page.pp.click();//    await page.locator("div[class='oxd-topbar-header-userarea']").click();

    await page.getByText('logout').click();
})

test("dropwdown",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.locator("#dropdown-class-example").selectOption({value:"option2"});
    expect(page.locator("[name='dropdown-class-example']")).toContainText("Option2");
    await page.waitForTimeout(4000);
    await page.locator("#dropdown-class-example").selectOption({label: "Option1"});
    expect(page.locator("[name='dropdown-class-example']")).toContainText("Option1");
     await page.waitForTimeout(4000);
    await page.locator("#dropdown-class-example").selectOption({index:3});
    expect(page.locator("[name='dropdown-class-example']")).toContainText("Option3");
     await page.waitForTimeout(4000);
})


test("various dropdown", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    let state = await page.$("#state")
    let allElements = await page.locator("option");

    page.waitForTimeout(5000);
    console.log("All values in dropdown: ",allElements.length)
    let ddstatus = false;

    for(let i =0; i<allElements.length-1;i++){
        let value = allElements[i].textContent()
        if(value.includes("Rajasthan")){
            ddstatus = true;
            break;

        }

    }

})


test("get by the role", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter email").type("admin@email.com")
    await page.getByPlaceholder("Enter password").type("admin@123")

    await page.getByRole("button",{name:"Sign in"}).click();
})


test("file uploaded", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./upload/2.png");
    await page.locator("#file-submit").click()
    expect(page).toHaveText("FileUploaded")
})
